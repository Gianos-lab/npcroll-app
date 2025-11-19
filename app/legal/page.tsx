"use client";

export default function LegalPage() {
    const cardStyle = {
        width: "100%",
        maxWidth: "1120px",
        margin: "8px auto 32px",
        padding: "32px 24px 40px",
        borderRadius: "18px",
        border: "1px solid var(--border)",
        background: "#e3f3f2",
        boxShadow: "0 12px 30px rgba(15, 31, 34, 0.55)",
    } as const;

    const titleStyle = {
        fontFamily: "'Germania One', serif",
        fontSize: "2.4rem",
        marginBottom: "0.4rem",
        color: "#13292A",
        textAlign: "center" as const,
        letterSpacing: "0.06em",
        textTransform: "uppercase" as const,
    };

    const subtitleStyle = {
        fontFamily: "'Lora', serif",
        fontSize: "0.98rem",
        lineHeight: 1.7,
        marginBottom: "1.6rem",
        color: "#0b1517",
        textAlign: "center" as const,
    };

    const sectionTitleStyle = {
        fontFamily: "'Germania One', serif",
        fontSize: "1.35rem",
        marginTop: "2rem",
        marginBottom: "0.5rem",
        color: "#13292A",
        letterSpacing: "0.08em",
        textTransform: "uppercase" as const,
    };

    const h3Style = {
        fontFamily: "'Lora', serif",
        fontSize: "1rem",
        marginTop: "0.9rem",
        marginBottom: "0.25rem",
        fontWeight: 600,
        color: "#13292A",
    };

    const pStyle = {
        fontFamily: "'Lora', serif",
        fontSize: "0.95rem",
        lineHeight: 1.7,
        marginBottom: "0.6rem",
        color: "#132026",
    };

    const listStyle = {
        paddingLeft: "1.1rem",
        marginBottom: "0.6rem",
        fontFamily: "'Lora', serif",
        fontSize: "0.95rem",
        lineHeight: 1.7,
        color: "#132026",
    } as const;

    const smallMuted = {
        fontSize: "0.8rem",
        color: "var(--text-muted)",
        marginTop: "1.4rem",
        lineHeight: 1.5,
        fontFamily: "'Lora', serif",
    } as const;

    const navStyle = {
        display: "flex",
        flexWrap: "wrap" as const,
        justifyContent: "center",
        gap: "0.75rem",
        marginBottom: "1.8rem",
        fontFamily: "'Lora', serif",
        fontSize: "0.9rem",
    };

    const navLinkStyle = {
        padding: "0.35rem 0.8rem",
        borderRadius: "999px",
        border: "1px solid rgba(19, 41, 42, 0.28)",
        background: "#f5fbfb",
        textDecoration: "none",
        color: "#132026",
    };

    return (
        <div className="page-root">
        <main
            style={{
                minHeight: "100vh",
                padding: "24px 12px 32px",
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "center",
            }}
        >

            <div className="fade-in-card" style={cardStyle}>
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

                    <h1 style={titleStyle}>Legal &amp; Policies</h1>
                    <p style={subtitleStyle}>
                        This page briefly explains how NPCRoll works from a legal, privacy, and
                        licensing standpoint.
                    </p>

                    <nav
                        style={{
                            textAlign: "center",
                            marginTop: "14px",
                            marginBottom: "28px",   // spazio extra come richiesto
                            fontFamily: "'Lora', serif",
                            fontSize: "1rem",
                            color: "#2B7A78",
                        }}
                    >
                        <a
                            href="#terms"
                            style={{
                                color: "#2B7A78",
                                textDecoration: "none",
                                margin: "0 10px",
                                transition: "opacity 0.2s",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
                            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                        >
                            Terms of Service
                        </a>

                        <span style={{ color: "rgba(0,0,0,0.35)" }}>·</span>

                        <a
                            href="#privacy"
                            style={{
                                color: "#2B7A78",
                                textDecoration: "none",
                                margin: "0 10px",
                                transition: "opacity 0.2s",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
                            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                        >
                            Privacy Policy
                        </a>

                        <span style={{ color: "rgba(0,0,0,0.35)" }}>·</span>

                        <a
                            href="#srd"
                            style={{
                                color: "#2B7A78",
                                textDecoration: "none",
                                margin: "0 10px",
                                transition: "opacity 0.2s",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
                            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                        >
                            SRD Legal & Credits
                        </a>

                        <span style={{ color: "rgba(0,0,0,0.35)" }}>·</span>

                        <a
                            href="#cookies"
                            style={{
                                color: "#2B7A78",
                                textDecoration: "none",
                                margin: "0 10px",
                                transition: "opacity 0.2s",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
                            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                        >
                            Cookies
                        </a>
                    </nav>


                </header>

                {/* TERMS OF SERVICE */}
                <section id="terms">
                    <h2 style={sectionTitleStyle}>1. Terms of Service</h2>

                    <h3 style={h3Style}>1.1. Purpose of the Service</h3>
                    <p style={pStyle}>
                        NPCRoll is a tool for generating non-player characters (&quot;NPCs&quot;)
                        for tabletop roleplaying games compatible with 5e rules. The
                        Service provides names, descriptions, hooks, and other narrative
                        details to help game masters run their campaigns or players be inspired
                        for their next character backstory.
                    </p>

                    <h3 style={h3Style}>1.2. Use of Generated Content</h3>
                    <p style={pStyle}>
                        You may use, copy, adapt, and modify the NPCs generated by NPCRoll
                        for personal or commercial tabletop use, including paid games,
                        livestreaming, actual plays, and published adventures. No
                        attribution is required, but it&apos;s always appreciated.
                    </p>

                    <h3 style={h3Style}>1.3. Acceptable Use</h3>
                    <p style={pStyle}>
                        By using NPCRoll, you agree not to:
                    </p>
                    <ul style={listStyle}>
                        <li>
                            use the Service for unlawful purposes or to violate applicable
                            laws;
                        </li>
                        <li>
                            attempt to disrupt, damage, or gain unauthorized access to the
                            Service or its infrastructure;
                        </li>
                        <li>
                            perform automated scraping or send excessive automated requests
                            that may degrade performance for other users.
                        </li>
                    </ul>

                    <h3 style={h3Style}>1.4. &quot;As-Is&quot; Disclaimer</h3>
                    <p style={pStyle}>
                        NPCRoll is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We do
                        not guarantee that the Service will be uninterrupted, error-free,
                        or free from security vulnerabilities. Generated content may contain
                        mistakes, inconsistencies, or overlaps with existing fictional
                        works purely by coincidence.
                    </p>

                    <h3 style={h3Style}>1.5. Limitation of Liability</h3>
                    <p style={pStyle}>
                        To the fullest extent permitted by law, NPCRoll shall not be liable
                        for any indirect, incidental, special, consequential, or punitive
                        damages, or for any loss of profits or data, arising out of or in
                        connection with your use of the Service.
                    </p>

                    <h3 style={h3Style}>1.6. Changes to These Terms</h3>
                    <p style={pStyle}>
                        We may update these Terms from time to time. Any changes will be
                        posted on this page, and continued use of the Service after those
                        changes become effective constitutes acceptance of the updated
                        Terms.
                    </p>
                </section>

                {/* PRIVACY POLICY */}
                <section id="privacy">
                    <h2 style={sectionTitleStyle}>2. Privacy Policy</h2>

                    <h3 style={h3Style}>2.1. Data We Collect</h3>
                    <p style={pStyle}>
                        NPCRoll does not automatically collect personally identifiable
                        information about you. We do not require an account or login, and we
                        do not use advertising or tracking cookies at this time.
                    </p>
                    <p style={pStyle}>
                        The only personal data we may receive is the information you
                        voluntarily submit through our feedback form, such as your message
                        and your email address (if you choose to provide it).
                    </p>

                    <h3 style={h3Style}>2.2. How We Use Your Data</h3>
                    <p style={pStyle}>
                        Information submitted through the feedback form is used solely to:
                    </p>
                    <ul style={listStyle}>
                        <li>read and evaluate your feedback;</li>
                        <li>
                            optionally contact you if you requested a reply or expressed
                            interest in future updates or testing.
                        </li>
                    </ul>
                    <p style={pStyle}>
                        We do not sell, rent, or share this data with third parties for
                        marketing purposes.
                    </p>

                    <h3 style={h3Style}>2.3. Third-Party Services</h3>
                    <p style={pStyle}>
                        Our feedback form is handled by{" "}
                        <a href="https://formsubmit.co" target="_blank" rel="noreferrer">
                            FormSubmit
                        </a>
                        , which forwards your message to our email inbox. FormSubmit acts as
                        a data processor on our behalf. Their own privacy practices are
                        described in their documentation.
                    </p>

                    <h3 style={h3Style}>2.4. Data Retention</h3>
                    <p style={pStyle}>
                        Feedback messages and any associated email addresses are kept only
                        for as long as reasonably necessary to review your message and, if
                        applicable, respond to you. We may periodically clean or delete old
                        feedback entries.
                    </p>

                    <h3 style={h3Style}>2.5. Your Rights (GDPR)</h3>
                    <p style={pStyle}>
                        If you are located in the European Economic Area or another region
                        with similar data protection laws, you may have the right to:
                    </p>
                    <ul style={listStyle}>
                        <li>request access to the personal data you submitted;</li>
                        <li>ask for correction or deletion of that data;</li>
                        <li>withdraw your consent to our processing of that data;</li>
                        <li>
                            lodge a complaint with a supervisory authority if you believe your
                            rights have been violated.
                        </li>
                    </ul>
                    <p style={pStyle}>
                        To exercise these rights, you can contact us at{" "}
                        <a href="mailto:gianosdm@gmail.com">gianosdm@gmail.com</a>.
                    </p>

                    <h3 style={h3Style}>2.6. Children&apos;s Privacy</h3>
                    <p style={pStyle}>
                        NPCRoll is not directed at children under the age of 13, and we do
                        not knowingly collect personal data from children. If you believe we
                        have inadvertently received such data, please contact us and we will
                        delete it.
                    </p>

                    <h3 style={h3Style}>2.7. Changes to This Policy</h3>
                    <p style={pStyle}>
                        We may update this Privacy Policy from time to time. Any changes
                        will be posted on this page with an updated &quot;Last updated&quot; date.
                    </p>
                </section>

                {/* SRD / LEGAL CREDITS */}
                <section id="srd">
                    <h2 style={sectionTitleStyle}>3. SRD Legal &amp; Credits</h2>

                    <p style={pStyle}>
                        This work includes material taken from the System Reference Document
                        5.1 and 5.2 (&quot;SRD 5.x&quot;) by Wizards of the Coast LLC, available at {" "}
                        <a
                            href="https://dnd.wizards.com/resources/systems-reference-document"
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: "#2B7A78", textDecoration: "underline" }}
                        >
                            System Reference Document (SRD)
                        </a>
                        . The SRD is licensed under{" "}
                        <a
                            href="https://creativecommons.org/licenses/by/4.0/legalcode"
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: "#2B7A78", textDecoration: "underline" }}
                        >
                            Creative Commons Attribution 4.0 International (CC BY 4.0)
                        </a>
                    </p>

            

                    <p style={pStyle}>
                        NPCRoll uses only content released within the SRD and original text
                        created specifically for this tool. The NPC descriptions, hooks,
                        backstories, motivations, and other narrative elements are original
                        content and are not copied from Wizards of the Coast publications.
                    </p>

                    <p style={pStyle}>
                        NPCRoll is compatible with 5th edition fantasy tabletop roleplaying
                        games. This work is not affiliated with, endorsed, sponsored, or
                        specifically approved by Wizards of the Coast LLC.
                    </p>

                    <p style={pStyle}>
                        Dungeons &amp; Dragons is a trademark of Wizards of the Coast LLC.
                    </p>
                </section>

                {/* COOKIES */}
                <section id="cookies">
                    <h2 style={sectionTitleStyle}>4. Cookies</h2>

                    <h3 style={h3Style}>4.1. Current Use</h3>
                    <p style={pStyle}>
                        At this time, NPCRoll does not use advertising, analytics, or
                        tracking cookies. The site may rely on strictly necessary cookies
                        provided by the hosting platform or browser to deliver basic
                        functionality.
                    </p>

                    <h3 style={h3Style}>4.2. Future Changes</h3>
                    <p style={pStyle}>
                        If we introduce analytics, advertising, or other non-essential
                        cookies in the future, we will update this section and, where
                        required by law, display a cookie banner or consent manager so you
                        can control your preferences.
                    </p>
                </section>

                <p style={smallMuted}>
                    Last updated: November 2025. If you have any questions about these policies,
                    you can reach us at{" "}
                    <a href="mailto:gianosdm@gmail.com">gianosdm@gmail.com</a>.
                </p>

                <div
                    style={{
                        textAlign: "left",
                        marginBottom: "1px",    // SPAZIO EXTRA
                        marginTop: "36px",        // un leggero distacco dal top della card
                    }}
                >
                    <a
                        href="/"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            color: "#2B7A78",           // palette teal
                            textDecoration: "none",
                            fontFamily: "'Lora', serif",
                            fontSize: "1rem",
                            transition: "opacity 0.2s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                        <span style={{ fontSize: "1.25rem" }}>←</span>
                        Back to NPCRoll
                    </a>
                </div>

            </div>



        </main>
        </div>
    );
}
