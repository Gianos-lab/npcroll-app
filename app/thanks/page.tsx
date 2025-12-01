import Link from "next/link";
import { CheckCircle, ArrowLeft } from "lucide-react";

export default function ThanksPage() {
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
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          {/* Dark Glass Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 text-center">
            {/* Success Icon */}
            <div className="mb-6">
              <CheckCircle className="w-16 h-16 text-teal-400 mx-auto" />
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-white font-display mb-4">
              Thank you, Adventurer!
            </h1>

            {/* Body Text */}
            <p className="text-white/70 text-sm leading-relaxed mb-2">
              Your feedback has been sent to the NPCRoll tavern log.
            </p>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              We&apos;ll use it to shape new packs, features, and NPCs.
            </p>

            {/* Back Button */}
            <Link
              href="/"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-lg bg-[#D4AF6A] px-8 py-4 transition-all duration-300 shadow-lg shadow-[#D4AF6A]/30 hover:shadow-[#D4AF6A]/50 hover:shadow-xl hover:scale-[1.02]"
            >
              <span className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute bottom-0 left-0 h-48 w-full origin-bottom translate-y-full transform overflow-hidden rounded-lg bg-white/20 transition-all duration-300 ease-out group-hover:translate-y-14"></span>
              <div className="relative flex items-center gap-2">
                <ArrowLeft className="w-5 h-5 text-slate-900 transition-transform duration-300 group-hover:-translate-x-0.5" />
                <span className="font-display font-bold text-lg text-slate-900">
                  BACK TO NPCROLL
                </span>
              </div>
            </Link>
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
