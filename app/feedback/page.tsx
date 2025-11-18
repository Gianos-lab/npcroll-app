"use client";

export default function FeedbackPage() {
  const cardStyle = {
    width: "100%",
    maxWidth: "1120px",
    margin: "8px auto 32px",
    padding: "32px 24px 36px",
    borderRadius: "18px",
    border: "1px solid var(--border)",
    background: "#e3f3f2",
    boxShadow: "0 12px 30px rgba(15, 31, 34, 0.55)",
  } as const;

  const titleStyle = {
    fontFamily: "'Germania One', serif",
    fontSize: "2.6rem",
    marginBottom: "0.6rem",
    color: "#13292A",
    textAlign: "center" as const,
  };

  const subtitleStyle = {
    fontFamily: "'Lora', serif",
    fontSize: "1.05rem",
    lineHeight: 1.7,
    marginBottom: "1.8rem",
    color: "#0b1517",
    textAlign: "center" as const,
  };

  const labelStyle = {
    display: "block",
    fontSize: "0.95rem",
    letterSpacing: "0.14em",
    textTransform: "uppercase" as const,
    fontWeight: 700,
    marginBottom: "0.35rem",
    color: "#13292A",
    fontFamily: "'Germania One', serif",
  };

  const inputBase = {
    width: "100%",
    borderRadius: "10px",
    border: "1px solid rgba(35, 60, 70, 0.35)",
    padding: "0.6rem 0.8rem",
    fontSize: "0.95rem",
    fontFamily: "'Lora', serif",
    outline: "none",
    backgroundColor: "#ffffff",
    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.06)",
    color: "#0b1517",
  } as const;

  const textareaStyle = {
    ...inputBase,
    resize: "vertical" as const,
    minHeight: "90px",
  };

  const buttonStyle = {
    marginTop: "0.6rem",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.7rem 1.6rem",
    borderRadius: "12px",
    border: "none",
    background: "#17252A",
    color: "#F2FFFD",
    fontWeight: 600,
    fontSize: "0.95rem",
    cursor: "pointer",
    fontFamily: "'Lora', serif",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.35)",
  } as const;

  const smallTextStyle = {
    fontSize: "0.8rem",
    color: "var(--text-muted)",
    marginTop: "0.7rem",
    lineHeight: 1.4,
    fontFamily: "'Lora', serif",
  } as const;

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "24px 12px 32px",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={cardStyle}>
        <header style={{ textAlign: "center" }}>
          <a
            href="/"
            style={{
              display: "block",
              width: "fit-content",
              margin: "0 auto 14px",
            }}
          >
            <img
              src="/logo.svg"
              alt="NPCRoll Logo"
              style={{
                width: "72px",
                height: "auto",
                display: "block",
                opacity: 0.95,
              }}
            />
          </a>

          <h1 style={titleStyle}>Speak, Adventurer!</h1>
          <p style={subtitleStyle}>
            “The bard is listening — and he’s already tuning his lute.”
          </p>
        </header>

        <form
          action="https://formsubmit.co/gianosdm@gmail.com"
          method="POST"
          style={{ fontFamily: "'Lora', serif" }}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://npcroll.com/thanks"
          />
          <input
            type="hidden"
            name="_subject"
            value="[NPCRoll] New feedback received"
          />

          <div style={{ marginBottom: "1.3rem" }}>
            <label htmlFor="mind" style={labelStyle}>
              What&apos;s on your mind?
            </label>
            <textarea
              id="mind"
              name="whats_on_your_mind"
              required
              style={textareaStyle}
              placeholder="Tell us about your experience, ideas, or anything that comes to mind..."
            />
          </div>

          <div style={{ marginBottom: "1.3rem" }}>
            <label htmlFor="feature" style={labelStyle}>
              What features would you love to see next?
            </label>
            <textarea
              id="feature"
              name="feature_request"
              style={textareaStyle}
              placeholder="Unleash your creativity!..."
            />
          </div>

          <div style={{ marginBottom: "1.3rem" }}>
            <label htmlFor="email" style={labelStyle}>
              Your email (optional)
            </label>
            <input
              id="email"
              name="email"
              type="text"
              inputMode="email"
              style={inputBase}
              placeholder="Only if you want us to reach out for beta testing..."
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              title="Please enter a valid email (e.g. name@example.com)"
            />
          </div>

          <button type="submit" style={buttonStyle} className="feedback-button">
            Send Feedback
          </button>

          <p style={smallTextStyle}>
            We only use this information to improve NPCRoll. No newsletters, no
            spam.
          </p>
        </form>
      </div>
    </main>
  );
}
