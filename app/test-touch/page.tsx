"use client";

import { useState, useRef, useEffect } from "react";
import { TouchButton } from "@/components/ui/touch-button";

export default function TestTouchPage() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const nativeRef = useRef<HTMLButtonElement>(null);

  // Native event listener approach
  useEffect(() => {
    const btn = nativeRef.current;
    if (!btn) return;
    
    const handler = () => setCount2(c => c + 1);
    btn.addEventListener('click', handler);
    btn.addEventListener('touchend', handler);
    
    return () => {
      btn.removeEventListener('click', handler);
      btn.removeEventListener('touchend', handler);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <h1 className="text-2xl text-white mb-8">Touch Test Page</h1>
      
      <div className="space-y-4">
        {/* TouchButton component */}
        <TouchButton
          onPress={() => setCount(c => c + 1)}
          className="block w-full p-4 bg-teal-500 text-white rounded-lg text-lg"
        >
          TouchButton: {count}
        </TouchButton>

        {/* Native ref button */}
        <button
          ref={nativeRef}
          className="block w-full p-4 bg-blue-500 text-white rounded-lg text-lg"
        >
          Native Ref: {count2}
        </button>

        {/* Regular React onClick */}
        <button
          onClick={() => setCount(c => c + 1)}
          className="block w-full p-4 bg-purple-500 text-white rounded-lg text-lg"
        >
          React onClick: {count}
        </button>

        <p className="text-white/60 mt-4">
          If TouchButton or Native Ref work but React onClick doesn't,
          we have a React event delegation issue.
        </p>
      </div>
    </div>
  );
}
