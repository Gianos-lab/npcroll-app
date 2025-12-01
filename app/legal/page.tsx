import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LegalPage() {
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
      <main className="flex-1 py-10 px-4 sm:py-12">
        <div className="max-w-3xl mx-auto">
          {/* Dark Glass Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-8 sm:px-8 sm:py-10">
            
            {/* Page Title */}
            <div className="text-center mb-10">
              <h1 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3">
                Legal & Privacy
              </h1>
              <p className="text-white/50 text-sm">
                The boring but important details.
              </p>
            </div>

            {/* Quick Navigation */}
            <nav className="flex flex-wrap justify-center gap-3 mb-10">
              <a href="#terms" className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 text-sm transition-all">
                Terms of Use
              </a>
              <a href="#privacy" className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 text-sm transition-all">
                Privacy
              </a>
              <a href="#licenses" className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 text-sm transition-all">
                Licenses
              </a>
            </nav>

            {/* Content Sections */}
            <div className="space-y-10">
              
              {/* Terms of Use */}
              <section id="terms">
                <h2 className="text-xl font-bold text-white mb-4">Terms of Use</h2>
                <div className="space-y-3 text-white/70 text-sm leading-relaxed">
                  <p>
                    NPCRoll is a free tool for generating tabletop RPG characters. By using NPCRoll, you agree to these simple terms:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong className="text-white/90">Personal & Commercial Use:</strong> You may use generated NPCs in your personal games, streams, published adventures, or commercial products without attribution (though we appreciate it!).
                    </li>
                    <li>
                      <strong className="text-white/90">No Reselling Raw Data:</strong> You may not resell or redistribute the NPCRoll database or raw JSON files as a standalone product.
                    </li>
                    <li>
                      <strong className="text-white/90">No Warranty:</strong> NPCRoll is provided "as is" without warranty of any kind. We do our best to keep things running smoothly, but we can&apos;t guarantee uptime or availability.
                    </li>
                    <li>
                      <strong className="text-white/90">Changes:</strong> We may update these terms occasionally. Continued use of NPCRoll means you accept any changes.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Privacy */}
              <section id="privacy">
                <h2 className="text-xl font-bold text-white mb-4">Privacy & Data</h2>
                <div className="space-y-3 text-white/70 text-sm leading-relaxed">
                  <p>
                    We believe in keeping things simple and respecting your privacy:
                  </p>
                  
                  <h3 className="text-white/90 font-semibold mt-4">What we collect</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong className="text-white/90">Feedback form:</strong> If you submit feedback, we receive your message and optionally your email (only if you provide it).
                    </li>
                    <li>
                      <strong className="text-white/90">Analytics:</strong> We use privacy-friendly analytics to understand general usage patterns (page views, button clicks). No personal data is tracked.
                    </li>
                    <li>
                      <strong className="text-white/90">Error tracking:</strong> We use Sentry to catch and fix bugs. Error reports may include technical information but no personal data.
                    </li>
                  </ul>

                  <h3 className="text-white/90 font-semibold mt-4">What we don&apos;t do</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>We don&apos;t sell your data to anyone.</li>
                    <li>We don&apos;t use tracking cookies for advertising.</li>
                    <li>We don&apos;t require accounts or logins.</li>
                  </ul>

                  <h3 className="text-white/90 font-semibold mt-4">Your rights</h3>
                  <p>
                    If you&apos;ve submitted feedback and want it deleted, just reach out and we&apos;ll remove it.
                  </p>
                </div>
              </section>

              {/* Licenses */}
              <section id="licenses">
                <h2 className="text-xl font-bold text-white mb-4">Licenses & Attribution</h2>
                <div className="space-y-3 text-white/70 text-sm leading-relaxed">
                  <p>
                    NPCRoll is built with love and open-source tools:
                  </p>
                  
                  <h3 className="text-white/90 font-semibold mt-4">Code & Framework</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-white/90">Next.js 16</strong> — MIT License</li>
                    <li><strong className="text-white/90">React 19</strong> — MIT License</li>
                    <li><strong className="text-white/90">Tailwind CSS 4</strong> — MIT License</li>
                    <li><strong className="text-white/90">Framer Motion</strong> — MIT License</li>
                    <li><strong className="text-white/90">Radix UI</strong> — MIT License</li>
                    <li><strong className="text-white/90">Headless UI</strong> — MIT License</li>
                    <li><strong className="text-white/90">TanStack React Query</strong> — MIT License</li>
                    <li><strong className="text-white/90">Sentry</strong> — MIT License (error tracking)</li>
                  </ul>

                  <h3 className="text-white/90 font-semibold mt-4">Icons</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-white/90">Lucide React</strong> — ISC License</li>
                    <li><strong className="text-white/90">Heroicons</strong> — MIT License</li>
                    <li><strong className="text-white/90">Radix Icons</strong> — MIT License</li>
                  </ul>

                  <h3 className="text-white/90 font-semibold mt-4">Fonts</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-white/90">Germania One</strong> — Open Font License (OFL)</li>
                    <li><strong className="text-white/90">Lora</strong> — Open Font License (OFL)</li>
                  </ul>

                  <h3 className="text-white/90 font-semibold mt-4">NPC Content</h3>
                  <p>
                    All NPC names, descriptions, and traits are original content created for NPCRoll. 
                    They are not derived from any copyrighted game system.
                  </p>

                  <h3 className="text-white/90 font-semibold mt-4">Source Code</h3>
                  <p>
                    The NPCRoll frontend and the Starting Village pack are publicly available on{' '}
                    <a 
                      href="https://github.com/Gianos-lab/npcroll-app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-teal-400 hover:text-teal-300 transition-colors"
                    >
                      GitHub
                    </a>. 
                    The NPC generation factory and additional content packs are kept private.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section id="contact" className="pt-6 border-t border-white/10">
                <h2 className="text-xl font-bold text-white mb-4">Questions?</h2>
                <div className="text-white/70 text-sm leading-relaxed">
                  <p>
                    If you have any questions about these policies, feel free to reach out via the{' '}
                    <Link href="/feedback" className="text-teal-400 hover:text-teal-300 transition-colors">
                      feedback form
                    </Link>.
                  </p>
                </div>
              </section>

            </div>

            {/* Last Updated */}
            <p className="text-white/30 text-xs text-center mt-10">
              Last updated: December 2025
            </p>

          </div>

          {/* Back Link */}
          <div className="text-center mt-8">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-white/50 hover:text-teal-400 text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to NPCRoll
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
