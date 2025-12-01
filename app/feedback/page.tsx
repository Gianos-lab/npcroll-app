"use client";

import { useState } from "react";
import { ArrowLeft, Send, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function FeedbackPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      await fetch("https://formsubmit.co/ajax/gianosdm@gmail.com", {
        method: "POST",
        body: formData,
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to submit feedback:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{ 
        backgroundImage: 'url(/texture.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundAttachment: 'fixed' 
      }}
    >
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between" style={{ minHeight: '56px' }}>
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo_nav.svg" alt="NPCRoll Logo" className="w-16 h-16" />
          </Link>
          <nav className="flex items-center gap-6">
            <Link 
              href="/"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Roll
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-[600px]">
          {/* Dark Glass Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white font-display mb-3">
                Speak, Adventurer!
              </h1>
              <p className="text-white/60 text-sm leading-relaxed">
                &ldquo;The bard is listening — and he&apos;s already tuning his lute.&rdquo;
              </p>
            </div>

            {isSubmitted ? (
              /* Success State */
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-teal-400 mx-auto mb-4" />
                <h2 className="text-xl font-bold text-white mb-2">Thank you!</h2>
                <p className="text-white/60 text-sm mb-6">
                  Your feedback has been sent. We appreciate your time!
                </p>
                <Link 
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to NPCRoll
                </Link>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="[NPCRoll] New feedback received" />

                {/* What's on your mind */}
                <div>
                  <label 
                    htmlFor="mind" 
                    className="block text-[11px] font-semibold tracking-[0.1em] text-white/70 uppercase mb-2"
                  >
                    What&apos;s on your mind? <span className="text-teal-400">*</span>
                  </label>
                  <textarea
                    id="mind"
                    name="whats_on_your_mind"
                    required
                    rows={4}
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-teal-400/50 focus:ring-1 focus:ring-teal-400/30 transition-all duration-200 resize-y"
                    placeholder="Tell us about your experience, ideas, or anything that comes to mind..."
                  />
                </div>

                {/* Feature Request */}
                <div>
                  <label 
                    htmlFor="feature" 
                    className="block text-[11px] font-semibold tracking-[0.1em] text-white/70 uppercase mb-2"
                  >
                    What features would you love to see next?
                  </label>
                  <textarea
                    id="feature"
                    name="feature_request"
                    rows={3}
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-teal-400/50 focus:ring-1 focus:ring-teal-400/30 transition-all duration-200 resize-y"
                    placeholder="Unleash your creativity!..."
                  />
                </div>

                {/* Email */}
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-[11px] font-semibold tracking-[0.1em] text-white/70 uppercase mb-2"
                  >
                    Your email <span className="text-white/40">(optional)</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-teal-400/50 focus:ring-1 focus:ring-teal-400/30 transition-all duration-200"
                    placeholder="Only if you want us to reach out for beta testing..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full overflow-hidden rounded-lg bg-[#D4AF6A] px-6 py-4 transition-all duration-300 shadow-lg shadow-[#D4AF6A]/30 hover:shadow-[#D4AF6A]/50 hover:shadow-xl hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <span className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="absolute bottom-0 left-0 h-48 w-full origin-bottom translate-y-full transform overflow-hidden rounded-lg bg-white/20 transition-all duration-300 ease-out group-hover:translate-y-14"></span>
                    <div className="relative flex items-center justify-center gap-3">
                      <Send className={`w-5 h-5 text-slate-900 transition-transform duration-300 ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-0.5'}`} />
                      <span className="font-display font-bold text-lg text-slate-900">
                        {isSubmitting ? 'SENDING...' : 'SEND FEEDBACK'}
                      </span>
                    </div>
                  </button>
                </div>

                {/* Privacy Note */}
                <p className="text-white/40 text-xs text-center pt-2">
                  We only use this information to improve NPCRoll. No newsletters, no spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/10 backdrop-blur-md border-t border-white/20 mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-3 text-white/80 text-sm">
            <div className="md:flex-1 md:text-left text-center">
              NPCRoll is a curated library of NPCs with unique personality, voice and motivations. Ready to use at your table.
            </div>

            <div className="flex items-center gap-4 mt-2 md:mt-0">
              <Link href="/" className="text-teal-300 hover:text-teal-200 transition-colors">Roll</Link>
              <span className="text-white/40 hidden md:inline">|</span>
              <Link href="/feedback" className="text-teal-300 hover:text-teal-200 transition-colors">Feedback</Link>
            </div>

            <div className="md:text-right text-center text-white/70 mt-2 md:mt-0">
              © 2025 NPCRoll. <Link href="/legal" className="text-teal-300 hover:text-teal-200 transition-colors">Licence & Privacy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
