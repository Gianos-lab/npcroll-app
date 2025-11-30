export function SiteFooter() {
  const links = [
    { href: "/feedback", label: "Feedback" },
    { href: "/roadmap", label: "Roadmap" },
    { href: "/legal", label: "Legal" },
  ];

  return (
    <footer className="mt-4 py-2.5 text-center font-serif text-[0.9rem] text-[#DEF2F1] opacity-90">
      <span>
        {links.map((link, index) => (
          <span key={link.href}>
            {index > 0 && " · "}
            <a
              href={link.href}
              className="text-[#3AAFA9] no-underline font-semibold transition-colors duration-200 hover:text-[#66D3CC]"
            >
              {link.label}
            </a>
          </span>
        ))}
      </span>
    </footer>
  );
}
