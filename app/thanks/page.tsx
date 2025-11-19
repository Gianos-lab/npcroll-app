export default function FeedbackThanksPage() {
  const cardStyle = {
    width: "600px",
    maxWidth: "100%",
    margin: "0 auto",
    padding: "28px 32px 32px",
    borderRadius: "18px",
    border: "1px solid var(--border)",
    background: "#e3f3f2",
    boxShadow: "0 12px 30px rgba(15, 31, 34, 0.75)",
    textAlign: "center" as const,
    opacity: 0,
    transform: "translateY(14px) scale(0.98)",
    animation: "shell-in 600ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards",
  } as const;

  const titleStyle = {
    fontFamily: "'Germania One', serif",
    fontSize: "2rem",
    margin: "0 0 0.6rem",
    color: "#13292A",
  } as const;

  const textStyle = {
    fontFamily: "'Lora', serif",
    fontSize: "0.98rem",
    lineHeight: 1.7,
    margin: "0 0 1.4rem",
    color: "#0b1517",
  } as const;

  const buttonStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.55rem 1.4rem",
    borderRadius: "12px",
    border: "none",
    background: "#17252A",
    color: "#F2FFFD",
    fontFamily: "'Germania One', serif",
    fontWeight: 600,
    fontSize: "0.95rem",
    cursor: "pointer",
    textDecoration: "none",
    letterSpacing: "0.06em",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.4)",
  } as const;

  return (
    <div className="page-root">
    <main
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 16px",
      }}
    >

        <div className="fade-in-flat" style={cardStyle}>
        <img
          src="/logo.svg"
          alt="NPCRoll Logo"
          style={{
            width: "64px",
            height: "auto",
            margin: "0 auto 12px",
            display: "block",
            opacity: 0.95,
          }}
        />

        <h1 style={titleStyle}>Cheers, traveler!</h1>
        <p style={textStyle}>
          Your feedback is now pinned to the tavern wall, and will be used to enchant future updates of NPCRoll.
        </p>

        <a href="/" style={buttonStyle} className="feedback-button">
          BACK TO NPCROLL
        </a>
      </div>

    </main>
    </div>
  );
}
