"use client";

import React from "react";

export default function RoadmapPage() {
    const pageCard: React.CSSProperties = {
        width: "100%",
        maxWidth: "1200px",
        margin: "16px auto 40px",
        padding: "32px 24px 40px",
        borderRadius: "28px",
        border: "1px solid rgba(19, 41, 42, 0.10)",
        background: "#e8f6f4",
        boxShadow: "0 18px 40px rgba(10, 28, 31, 0.35)",
        backdropFilter: "blur(10px)",
    };

    const titleStyle: React.CSSProperties = {
        fontFamily: "'Germania One', serif",
        fontSize: "2.4rem",
        marginBottom: "0.4rem",
        color: "#13292A",
        textAlign: "center",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
    };

    const subtitleStyle: React.CSSProperties = {
        fontFamily: "'Lora', serif",
        fontSize: "0.98rem",
        lineHeight: 1.7,
        marginBottom: "1.4rem",
        color: "#0b1517",
        textAlign: "center",
    };

    const boardWrapper: React.CSSProperties = {
        display: "flex",
        flexWrap: "wrap",
        gap: "1.5rem",
        marginTop: "1.2rem",
    };

    const columnOuter: React.CSSProperties = {
        flex: "1 1 260px",
        minWidth: 0,
    };

    // colonne “glass”
    const columnShell: React.CSSProperties = {
        borderRadius: "22px",
        border: "1px solid rgba(19, 41, 42, 0.12)",
        background:
            "linear-gradient(145deg, rgba(255,255,255,0.82), rgba(227,244,243,0.9))",
        padding: "14px 14px 20px",
        boxShadow: "0 16px 32px rgba(13, 40, 43, 0.25)",
        backdropFilter: "blur(12px)",
    };

    const columnHeader: React.CSSProperties = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "8px",
    };

    const columnTitle: React.CSSProperties = {
        fontFamily: "'Germania One', serif",
        fontSize: "1.05rem",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "#13292A",
    };

    const columnHint: React.CSSProperties = {
        fontFamily: "'Lora', serif",
        fontSize: "0.8rem",
        color: "rgba(19, 41, 42, 0.75)",
        marginTop: "2px",
    };

    const columnBadge: React.CSSProperties = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "28px",
        height: "26px",
        borderRadius: "999px",
        padding: "0 10px",
        fontFamily: "'Lora', serif",
        fontSize: "0.74rem",
        background:
            "linear-gradient(135deg, #FFFFFF 0%, #E5F3F3 60%, #D1ECE9 100%)",
        color: "#13292A",
        border: "1px solid rgba(19, 41, 42, 0.18)",
        boxShadow: "0 4px 10px rgba(16, 37, 39, 0.20)",
    };

    const stripBase: React.CSSProperties = {
        height: "3px",
        borderRadius: "999px",
        marginBottom: "12px",
    };

    const stripReleased: React.CSSProperties = {
        ...stripBase,
        background:
            "linear-gradient(90deg, #6FC69A 0%, #B4F0C6 45%, rgba(222,242,241,1) 100%)",
    };

    const stripNext: React.CSSProperties = {
        ...stripBase,
        background:
            "linear-gradient(90deg, #F6CA63 0%, #FFE6A6 45%, rgba(222,242,241,1) 100%)",
    };

    const stripPlanned: React.CSSProperties = {
        ...stripBase,
        background:
            "linear-gradient(90deg, #7FB3E8 0%, #BED8FB 45%, rgba(222,242,241,1) 100%)",
    };

    // card “glass” – bordi un po’ più visibili + più spazio tra le card
    const card: React.CSSProperties = {
        borderRadius: "18px",
        background:
            "radial-gradient(circle at 0 0, rgba(255,255,255,0.97), rgba(236,248,247,0.97))",
        border: "1px solid rgba(12, 35, 38, 0.22)",
        padding: "12px 13px 14px",
        boxShadow: "0 12px 26px rgba(12, 35, 38, 0.26)",
    };

    const cardWithTopMargin: React.CSSProperties = {
        ...card,
        marginTop: "16px", // più spazio tra una release e l’altra nella stessa colonna
    };

    const cardTitle: React.CSSProperties = {
        fontFamily: "'Lora', serif",
        fontSize: "1rem",
        fontWeight: 600,
        marginBottom: "4px",
        color: "#132026",
    };

    const pillRow: React.CSSProperties = {
        display: "flex",
        flexWrap: "wrap",
        gap: "0.45rem",
        marginBottom: "0.45rem",
    };

    const pillBase: React.CSSProperties = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "999px",
        fontFamily: "'Lora', serif",
        fontSize: "0.78rem",
        padding: "0.1rem 0.7rem",
        border: "1px solid rgba(19, 41, 42, 0.14)",
        background: "rgba(245, 251, 251, 0.98)",
        color: "#132026",
        whiteSpace: "nowrap",
        backdropFilter: "blur(4px)",
    };

    const pillType: React.CSSProperties = {
        ...pillBase,
    };

    const pBody: React.CSSProperties = {
        fontFamily: "'Lora', serif",
        fontSize: "0.9rem",
        lineHeight: 1.7,
        marginBottom: "0.6rem",
        color: "#132026",
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
        fontSize: "0.9rem",
        cursor: "pointer",
        fontFamily: "'Germania One', serif",
        letterSpacing: "0.05em",
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.35)",
    } as const;


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
                <div style={pageCard} className="fade-in-card">

                    {/* HEADER */}
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

                        <h1 style={titleStyle}>Roadmap &amp; Updates</h1>

                    </header>

                    <div
                        style={{
                            width: "100%",
                            height: "2px",
                            background: "rgba(0, 0, 0, 0.06)",
                            margin: "50px 0 35px 0",
                        }}
                    ></div>

                    {/* INTRO PARAGRAPH */}
                    <p
                        style={{
                            fontFamily: "'Lora', serif",
                            fontSize: "0.98rem",
                            lineHeight: 1.7,
                            margin: "8px 0 22px 0",   // solo margine verticale
                            color: "#132026",
                            textAlign: "left",        // allineato a sinistra
                        }}
                    >
                        NPCRoll is an ongoing effort to make 5e campaigns easier, richer, and funnier to play.
                        This page outlines what’s released, what’s currently in development, and what’s planned
                        for upcoming updates.
                    </p>

                    {/* BOARD */}
                    <section aria-label="Roadmap board" style={boardWrapper}>

                        {/* RELEASED */}
                        <div style={columnOuter}>
                            <div style={columnShell}>
                                <div style={columnHeader}>
                                    <div>
                                        <h2 style={columnTitle}>Released</h2>
                                        <div style={columnHint}>Already at the tavern table</div>
                                    </div>
                                </div>

                                <div style={stripReleased} />

                                <article style={card}>
                                    <h3 style={cardTitle}>Starting Village Pack</h3>
                                    <div style={pillRow}>
                                        <span style={pillType}>New races</span>
                                        <span style={pillType}>New professions</span>
                                    </div>
                                    <p style={pBody}>
                                        This pack brings to life the friendly, nosy, and
                                        occasionally chaotic folks who greet adventurers
                                        at the very start of their journey: busy market stalls,
                                        quiet chapels, and inns where gossip counts as a local
                                        sport. Whether your story begins with a small village
                                        mystery or a dragon interrupting a crossroads fair,
                                        these NPCs deliver warmth, trouble, and the inevitable:
                                        “I swear something’s hiding in the cellar!”
                                    </p>
                                    <p
                                        style={{
                                            ...pBody,
                                            marginBottom: 0,
                                            fontWeight: 600,
                                            fontSize: "0.88rem",
                                        }}
                                    >
                                        Additions:
                                    </p>
                                    <ul
                                        style={{
                                            paddingLeft: "1.1rem",
                                            marginBottom: "0.2rem",
                                            fontFamily: "'Lora', serif",
                                            fontSize: "0.86rem",
                                            lineHeight: 1.6,
                                            color: "#132026",
                                        }}
                                    >
                                        <li>
                                            <strong>Races:</strong> Human, Halfling
                                        </li>
                                        <li>
                                            <strong>Professions:</strong> Innkeeper, Merchant, Priest
                                        </li>
                                    </ul>
                                </article>
                            </div>
                        </div>

                        {/* NEXT UP */}
                        <div style={columnOuter}>
                            <div style={columnShell}>
                                <div style={columnHeader}>
                                    <div>
                                        <h2 style={columnTitle}>Brewing</h2>
                                        <div style={columnHint}>Simmering in the kitchen cauldron</div>
                                    </div>
                                </div>

                                <div style={stripNext} />

                                <article style={card}>
                                    <h3 style={cardTitle}>v1.1 — Goblinoid Clans Pack</h3>
                                    <div style={pillRow}>
                                        <span style={pillType}>New races</span>
                                    </div>
                                    <p style={pBody}>
                                        This pack brings in the most hated low-level troublemakers
                                        in any 5e campaign: goblins, hobgoblins, and bugbears. From
                                        “totally trustworthy” goblin merchants to hobgoblin
                                        officers who run tighter schedules than most kingdoms, this
                                        pack covers the full range of goblinoid nonsense.
                                    </p>
                                    <p
                                        style={{
                                            ...pBody,
                                            marginBottom: 0,
                                            fontWeight: 600,
                                            fontSize: "0.88rem",
                                        }}
                                    >
                                        Additions:
                                    </p>
                                    <ul
                                        style={{
                                            paddingLeft: "1.1rem",
                                            marginBottom: "0.2rem",
                                            fontFamily: "'Lora', serif",
                                            fontSize: "0.86rem",
                                            lineHeight: 1.6,
                                            color: "#132026",
                                        }}
                                    >
                                        <li>
                                            <strong>Races:</strong> Goblin, Hobgoblin, Bugbear
                                        </li>
                                    </ul>
                                </article>
                            </div>
                        </div>

                        {/* PLANNED */}
                        <div style={columnOuter}>
                            <div style={columnShell}>
                                <div style={columnHeader}>
                                    <div>
                                        <h2 style={columnTitle}>Planned</h2>
                                        <div style={columnHint}>Waiting in the cellar barrels</div>
                                    </div>
                                </div>

                                <div style={stripPlanned} />

                                {/* v1.2 Wilderness */}
                                <article style={card}>
                                    <h3 style={cardTitle}>v1.2 — Wilderness Professions Pack </h3>
                                    <div style={pillRow}>
                                        <span style={pillType}>New professions</span>
                                    </div>
                                    <p style={pBody}>
                                        From seasoned trail experts to silent scouts and recluses
                                        who prefer trees to people, this pack brings the NPCs that
                                        make wilderness exploration feel alive. Sometimes they are
                                        helpful, sometimes hostile, and occasionally wise.
                                    </p>
                                    <p
                                        style={{
                                            ...pBody,
                                            marginBottom: 0,
                                            fontWeight: 600,
                                            fontSize: "0.88rem",
                                        }}
                                    >
                                        Additions:
                                    </p>
                                    <ul
                                        style={{
                                            paddingLeft: "1.1rem",
                                            marginBottom: "0.2rem",
                                            fontFamily: "'Lora', serif",
                                            fontSize: "0.86rem",
                                            lineHeight: 1.6,
                                            color: "#132026",
                                        }}
                                    >
                                        <li>
                                            <strong>New professions:</strong> Hunter, Guide, Scout,
                                            Bandit, Hermit
                                        </li>
                                    </ul>
                                </article>

                                {/* v1.3 Draconic Bloodlines */}
                                <article style={cardWithTopMargin}>
                                    <h3 style={cardTitle}>v1.3 — Draconic Bloodlines Pack </h3>
                                    <div style={pillRow}>
                                        <span style={pillType}>New races</span>
                                    </div>
                                    <p style={pBody}>
                                        This pack brings in the draconic side of the family:
                                        proud dragonborn and kobolds who are absolutely convinced
                                        they belong in the same category. From thunder-voiced
                                        diplomats to jittery trap-makers with dangerous levels of
                                        optimism, this pack delivers the full spectrum of draconid
                                        energy: proud, chaotic, and at times combustible.
                                    </p>
                                    <p
                                        style={{
                                            ...pBody,
                                            marginBottom: 0,
                                            fontWeight: 600,
                                            fontSize: "0.88rem",
                                        }}
                                    >
                                        Additions:
                                    </p>
                                    <ul
                                        style={{
                                            paddingLeft: "1.1rem",
                                            marginBottom: "0.2rem",
                                            fontFamily: "'Lora', serif",
                                            fontSize: "0.86rem",
                                            lineHeight: 1.6,
                                            color: "#132026",
                                        }}
                                    >
                                        <li>
                                            <strong>Races:</strong> Dragonborn, Kobold
                                        </li>
                                    </ul>
                                </article>

                                {/* v1.4 Small & Mighty */}
                                <article style={cardWithTopMargin}>
                                    <h3 style={cardTitle}>v1.4 — The Small & Mighty Pack </h3>
                                    <div style={pillRow}>
                                        <span style={pillType}>New races</span>
                                    </div>
                                    <p style={pBody}>
                                        This pack explores the most unbalanced duo imaginable:
                                        tiny gnomes and towering goliaths. Whether you need
                                        excitable inventors, gentle mountain giants,
                                        overconfident tinkerers, or goliaths who believe
                                        “subtlety” is a kind of stew, this pack covers the
                                        full range of oddball encounters.
                                    </p>
                                    <p
                                        style={{
                                            ...pBody,
                                            marginBottom: 0,
                                            fontWeight: 600,
                                            fontSize: "0.88rem",
                                        }}
                                    >
                                        Additions:
                                    </p>
                                    <ul
                                        style={{
                                            paddingLeft: "1.1rem",
                                            marginBottom: "0.2rem",
                                            fontFamily: "'Lora', serif",
                                            fontSize: "0.86rem",
                                            lineHeight: 1.6,
                                            color: "#132026",
                                        }}
                                    >
                                        <li>
                                            <strong>Races:</strong> Gnome, Goliath
                                        </li>
                                    </ul>
                                </article>
                            </div>
                        </div>
                    </section>

                    {/* SEPARATORE DAL BOARD */}
                    <div
                        style={{
                            width: "100%",
                            height: "2px",
                            background: "rgba(0, 0, 0, 0.03)",
                            margin: "60px 0 32px 0",
                        }}
                    />

                    {/* HELP SHAPE THE ROADMAP - BANNER SAND */}
                    <section
                        aria-label="Help shape the roadmap"
                        style={{
                            padding: "18px 22px",
                            borderRadius: "16px",
                            background: "#CA9C6F", // ← qui metti il tuo vero sand
                            boxShadow: "0 12px 30px rgba(0, 0, 0, 0.18)",
                            display: "flex",
                            flexWrap: "wrap",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "16px",
                        }}
                    >
                        <div
                            style={{
                                flex: "1 1 260px",
                                minWidth: 0,
                            }}
                        >
                            <h3
                                style={{
                                    fontFamily: "'Germania One', 'Cormorant Garamond', serif",
                                    letterSpacing: "0.06em",
                                    textTransform: "uppercase",
                                    fontSize: "1.6rem",
                                    margin: "0 0 4px 0",
                                    color: "#13292A",
                                }}
                            >
                                Where shall we set forth?
                            </h3>
                            <p
                                style={{
                                    fontFamily: "'Lora', serif",
                                    fontSize: "0.9rem",
                                    lineHeight: 1.7,
                                    margin: 0,
                                    color: "#17252A",
                                }}
                            >
                                NPCRoll is meant to grow into whatever the community needs it to become.
                                Beyond new NPCs and content packs, the project can evolve in new directions
                                to make your next adventures funnier and easier: tools, features, and ideas
                                shaped by the people who use it. Your feedback directly influences what
                                gets built next.
                            </p>
                        </div>

                        <div
                            style={{
                                flex: "0 0 auto",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                            }}
                        >

                            <a href="/feedback" style={{ textDecoration: "none" }}>
                                <button type="submit" style={buttonStyle} className="feedback-button">
                                    TO FEEDBACK FORM
                                </button>
                            </a>

                        </div>
                    </section>

                    <a
                        href="/"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            color: "#2B7A78",
                            textDecoration: "none",
                            fontFamily: "'Lora', serif",
                            fontSize: "1rem",
                            transition: "opacity 0.2s",
                            marginTop: "35px",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                        <span style={{ fontSize: "1.25rem" }}>←</span>
                        Back to NPCRoll
                    </a>

                </div>
            </main>
        </div>
    );
}
