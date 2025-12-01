"use server";

import { headers } from "next/headers";
import { getRandomNpc, type NpcFilters } from "@/lib/npcRepository";

// Simple in-memory rate limiter
// In production with multiple instances, use Redis or similar
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT = {
  maxRequests: 30,      // Max requests per window
  windowMs: 60 * 1000,  // 1 minute window
};

function getRateLimitKey(ip: string): string {
  return `ratelimit:${ip}`;
}

function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetIn: number } {
  const now = Date.now();
  const key = getRateLimitKey(ip);
  const record = rateLimitMap.get(key);

  // Clean up expired entries periodically
  if (rateLimitMap.size > 10000) {
    for (const [k, v] of rateLimitMap.entries()) {
      if (now > v.resetTime) {
        rateLimitMap.delete(k);
      }
    }
  }

  if (!record || now > record.resetTime) {
    // First request or window expired - reset
    rateLimitMap.set(key, {
      count: 1,
      resetTime: now + RATE_LIMIT.windowMs,
    });
    return { allowed: true, remaining: RATE_LIMIT.maxRequests - 1, resetIn: RATE_LIMIT.windowMs };
  }

  if (record.count >= RATE_LIMIT.maxRequests) {
    // Rate limit exceeded
    return { allowed: false, remaining: 0, resetIn: record.resetTime - now };
  }

  // Increment counter
  record.count++;
  return { allowed: true, remaining: RATE_LIMIT.maxRequests - record.count, resetIn: record.resetTime - now };
}

export async function fetchRandomNpc(filters: NpcFilters) {
  // Get client IP from headers
  const headersList = await headers();
  const forwardedFor = headersList.get("x-forwarded-for");
  const realIp = headersList.get("x-real-ip");
  const ip = forwardedFor?.split(",")[0]?.trim() || realIp || "unknown";

  // Check rate limit
  const { allowed, remaining, resetIn } = checkRateLimit(ip);
  
  if (!allowed) {
    // Return null with a message - frontend can handle this gracefully
    console.warn(`Rate limit exceeded for IP: ${ip}. Reset in ${Math.ceil(resetIn / 1000)}s`);
    return null;
  }

  const npc = await getRandomNpc(filters);
  return npc;
}
