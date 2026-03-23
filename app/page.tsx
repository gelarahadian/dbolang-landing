"use client";

import { useState, useEffect } from "react";
import { Playfair_Display, DM_Sans } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dmsans",
});

// ─── Design tokens ──────────────────────────────────────────────────
const GOLD = "#c48e32";
const GOLD_BORDER = "rgba(196,142,50,0.2)";
const GOLD_DIM = "rgba(196,142,50,0.12)";
const BG = "#0f0d0a";
const BG_CARD = "#1a1510";
const TEXT = "#f0e8d5";
const TEXT_MUTED = "#8a7d6a";
const TEXT_DIM = "#5a4e3e";

// ─── Data ────────────────────────────────────────────────────────────
const menuItems = [
  {
    name: "Bebek Goreng Sambal",
    category: "Makanan Paket",
    price: "Rp 45.000",
    emoji: "🦆",
    tag: "Best Seller",
  },
  {
    name: "Kwetiau Seafood",
    category: "Makanan",
    price: "Rp 38.000",
    emoji: "🍜",
    tag: "Favorit",
  },
  {
    name: "Sop Iga Sapi",
    category: "Makanan",
    price: "Rp 55.000",
    emoji: "🍖",
    tag: "Rekomendasi",
  },
  {
    name: "Nasi Goreng Seafood",
    category: "Makanan",
    price: "Rp 40.000",
    emoji: "🍳",
    tag: null,
  },
  {
    name: "Caramel Macchiato",
    category: "Minuman",
    price: "Rp 28.000",
    emoji: "☕",
    tag: null,
  },
  {
    name: "Wedang Uwuh",
    category: "Minuman",
    price: "Rp 18.000",
    emoji: "🌿",
    tag: "Tradisional",
  },
  {
    name: "Americano Coffee",
    category: "Minuman",
    price: "Rp 22.000",
    emoji: "☕",
    tag: null,
  },
  {
    name: "Wafel Coklat Keju",
    category: "Dessert",
    price: "Rp 25.000",
    emoji: "🧇",
    tag: null,
  },
];

const reviews = [
  {
    name: "Adie MS",
    sub: "Local Guide · 2 bulan lalu",
    stars: 5,
    text: "Awalan ragu mampir, pas liat menu banyak bangets variannya! Onion ring keren bangets, tepung crunches dan gurih.",
    avatar: "AM",
  },
  {
    name: "Ade Rokhmah",
    sub: "Local Guide · 3 bulan lalu",
    stars: 5,
    text: "Tempat nyaman. Makan di lantai atas pemandangannya luas. Makanannya enak, mushala dan kamar mandi bersih 👍",
    avatar: "AR",
  },
  {
    name: "Zhalza Putri",
    sub: "6 bulan lalu",
    stars: 5,
    text: "Suasana nyaman bgt! Kwetiau seafood best bgt, rasa gapernah berubah. Pelayanan ramah murah senyum semua ❤️",
    avatar: "ZP",
  },
];

const features = [
  {
    icon: "🗻",
    title: "View Gunung Salak",
    desc: "Pemandangan terbaik dari lantai 2",
  },
  {
    icon: "🎨",
    title: "Interior Seni",
    desc: "Penuh karya seni lokal yang unik",
  },
  { icon: "🕌", title: "Mushala Bersih", desc: "Fasilitas ibadah tersedia" },
  { icon: "📍", title: "Lokasi Strategis", desc: "Mudah dijangkau di Cicurug" },
];

// ─── Component ───────────────────────────────────────────────────────
export default function DbolangLanding() {
  const [activeMenu, setActiveMenu] = useState("Semua");
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const categories = [
    "Semua",
    "Makanan",
    "Makanan Paket",
    "Minuman",
    "Dessert",
  ];
  const filtered =
    activeMenu === "Semua"
      ? menuItems
      : menuItems.filter((m) => m.category === activeMenu);

  const fd = `var(--font-playfair), serif`;
  const dm = `var(--font-dmsans), sans-serif`;

  return (
    <div
      className={`${playfair.variable} ${dmSans.variable}`}
      style={{
        minHeight: "100vh",
        backgroundColor: BG,
        color: TEXT,
        fontFamily: dm,
        overflowX: "hidden",
      }}
    >
      {/* Global keyframes */}
      <style>{`
        @keyframes shimmer {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .dbl-shimmer {
          background: linear-gradient(90deg, #c48e32 0%, #f0d58c 40%, #c48e32 70%, #8b6420 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .dbl-nav a:hover { color: #c48e32 !important; }
        .dbl-btn-primary:hover { background: #d4a040 !important; }
        .dbl-btn-secondary:hover { background: rgba(196,142,50,0.08) !important; }
        .dbl-card:hover { transform: translateY(-6px); box-shadow: 0 20px 48px rgba(0,0,0,0.35), 0 0 28px rgba(196,142,50,0.1); }
        .dbl-filter.active { background: #c48e32 !important; color: #0f0d0a !important; font-weight: 600 !important; }
        .dbl-filter:hover { color: #c48e32 !important; }
        @media (max-width: 768px) {
          .dbl-two-col { grid-template-columns: 1fr !important; }
          .dbl-nav-links { display: none !important; }
          .dbl-hero-h1 { font-size: 52px !important; }
          .dbl-map-card { aspect-ratio: auto !important; min-height: 280px; }
        }
      `}</style>

      {/* ── NAVBAR ─────────────────────────────────────── */}
      <nav
        className="dbl-nav"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: scrolled ? "rgba(15,13,10,0.93)" : "transparent",
          borderBottom: `1px solid ${scrolled ? GOLD_BORDER : "transparent"}`,
          backdropFilter: "blur(16px)",
          transition: "background 0.4s, border-color 0.4s",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "14px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontFamily: fd, fontSize: 22, fontWeight: 700 }}>
            D&apos;<span style={{ color: GOLD }}>Bolang</span>
          </span>
          <div className="dbl-nav-links" style={{ display: "flex", gap: 28 }}>
            {["Menu", "Ulasan", "Lokasi"].map((n) => (
              <a
                key={n}
                href={`#${n.toLowerCase()}`}
                style={{
                  color: TEXT_MUTED,
                  textDecoration: "none",
                  fontSize: 13,
                  transition: "color 0.2s",
                }}
              >
                {n}
              </a>
            ))}
          </div>
          <a
            href="tel:0816999730"
            className="dbl-btn-secondary"
            style={{
              padding: "8px 20px",
              borderRadius: 999,
              border: `1px solid ${GOLD_BORDER}`,
              color: GOLD,
              fontSize: 13,
              textDecoration: "none",
              transition: "all 0.2s",
            }}
          >
            Pesan Sekarang
          </a>
        </div>
      </nav>

      {/* ── HERO ───────────────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 24px 80px",
          position: "relative",
          overflow: "hidden",
          background: `
            radial-gradient(ellipse 80% 60% at 50% 100%, rgba(139,90,43,0.18) 0%, transparent 70%),
            radial-gradient(ellipse 60% 40% at 80% 20%, rgba(90,120,80,0.1) 0%, transparent 60%),
            linear-gradient(180deg, #0f0d0a 0%, #1a1208 50%, #0f0d0a 100%)
          `,
        }}
      >
        <svg
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            opacity: 0.06,
            pointerEvents: "none",
          }}
          viewBox="0 0 1440 260"
          preserveAspectRatio="none"
        >
          <path
            d="M0,260 L0,160 L240,60 L440,140 L640,30 L860,120 L1060,50 L1280,110 L1440,70 L1440,260 Z"
            fill={GOLD}
          />
        </svg>

        <div
          style={{
            textAlign: "center",
            maxWidth: 720,
            position: "relative",
            zIndex: 1,
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          <span
            style={{
              display: "block",
              fontSize: 11,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: GOLD,
              marginBottom: 20,
            }}
          >
            Resto &amp; Coffee Shop — Cicurug, Sukabumi
          </span>

          <h1
            className="dbl-hero-h1"
            style={{
              fontFamily: fd,
              fontSize: 88,
              lineHeight: 0.95,
              fontWeight: 700,
              marginBottom: 24,
            }}
          >
            <span
              style={{
                display: "block",
                fontStyle: "italic",
                fontWeight: 400,
                color: TEXT,
              }}
            >
              Rasa yang
            </span>
            <span className="dbl-shimmer" style={{ display: "block" }}>
              Tak Terlupa
            </span>
          </h1>

          <p
            style={{
              color: TEXT_MUTED,
              fontSize: 17,
              lineHeight: 1.7,
              maxWidth: 440,
              margin: "0 auto 36px",
            }}
          >
            Nikmati sajian autentik dengan pemandangan Gunung Salak yang
            memukau. Dari bebek goreng hingga kopi hangat — semua ada di sini.
          </p>

          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#menu"
              className="dbl-btn-primary"
              style={{
                padding: "14px 32px",
                borderRadius: 999,
                background: GOLD,
                color: BG,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.25s",
              }}
            >
              Lihat Menu →
            </a>
            <a
              href="#ulasan"
              className="dbl-btn-secondary"
              style={{
                padding: "14px 32px",
                borderRadius: 999,
                background: "transparent",
                color: GOLD,
                fontSize: 14,
                border: `1px solid ${GOLD_BORDER}`,
                textDecoration: "none",
                transition: "all 0.25s",
              }}
            >
              Baca Ulasan
            </a>
          </div>

          <div
            style={{
              display: "flex",
              gap: 48,
              justifyContent: "center",
              marginTop: 56,
              paddingTop: 36,
              borderTop: `1px solid ${GOLD_BORDER}`,
            }}
          >
            {[
              ["4.7 ★", "Rating Google"],
              ["227+", "Ulasan"],
              ["2 Lantai", "Area Makan"],
            ].map(([v, l]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: fd,
                    fontSize: 24,
                    fontWeight: 700,
                    color: GOLD,
                  }}
                >
                  {v}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: TEXT_DIM,
                    marginTop: 4,
                    letterSpacing: "0.04em",
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────────────── */}
      <section style={{ padding: "80px 24px" }}>
        <div
          className="dbl-two-col"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                width: 48,
                height: 2,
                background: `linear-gradient(90deg, ${GOLD}, transparent)`,
                marginBottom: 24,
              }}
            />
            <h2
              style={{
                fontFamily: fd,
                fontSize: 48,
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: 20,
              }}
            >
              Lebih dari Sekadar
              <br />
              <em style={{ color: GOLD }}>Tempat Makan</em>
            </h2>
            <p
              style={{
                color: TEXT_MUTED,
                lineHeight: 1.8,
                fontSize: 15,
                marginBottom: 16,
              }}
            >
              D&apos;Bolang hadir sebagai destinasi kuliner dengan interior
              penuh karya seni dan pemandangan alam menakjubkan. Duduk di lantai
              atas sore hari, view Gunung Salak menjadi teman makan terbaik
              Anda.
            </p>
            <p
              style={{
                color: TEXT_MUTED,
                lineHeight: 1.8,
                fontSize: 15,
                marginBottom: 32,
              }}
            >
              Dari masakan nusantara hingga kreasi modern, setiap hidangan
              diracik dengan bahan pilihan dan penuh cinta untuk Anda.
            </p>
            <div style={{ display: "flex", gap: 32 }}>
              {[
                ["🍽️", "Dine In"],
                ["📦", "Bawa Pulang"],
                ["🛵", "Pesan Antar"],
              ].map(([icon, label]) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 26, marginBottom: 6 }}>{icon}</div>
                  <div
                    style={{
                      fontSize: 11,
                      color: TEXT_DIM,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: BG_CARD,
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: 20,
              padding: 28,
              boxShadow: "0 0 60px rgba(196,142,50,0.1)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              {features.map((f) => (
                <div
                  key={f.title}
                  style={{
                    background: "rgba(196,142,50,0.04)",
                    border: `1px solid ${GOLD_BORDER}`,
                    borderRadius: 12,
                    padding: 18,
                  }}
                >
                  <div style={{ fontSize: 26, marginBottom: 10 }}>{f.icon}</div>
                  <div
                    style={{
                      fontFamily: fd,
                      fontSize: 13,
                      fontWeight: 700,
                      color: GOLD,
                      marginBottom: 6,
                    }}
                  >
                    {f.title}
                  </div>
                  <div
                    style={{ fontSize: 12, color: TEXT_DIM, lineHeight: 1.5 }}
                  >
                    {f.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div
        style={{
          height: 1,
          background: `linear-gradient(90deg, transparent, ${GOLD_BORDER}, transparent)`,
          margin: "0 24px",
        }}
      />

      {/* ── MENU ───────────────────────────────────────── */}
      <section id="menu" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span
              style={{
                display: "block",
                fontSize: 10,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: GOLD,
                marginBottom: 10,
              }}
            >
              Pilihan Terbaik Kami
            </span>
            <h2
              style={{
                fontFamily: fd,
                fontSize: 48,
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: 10,
              }}
            >
              Menu <em style={{ color: GOLD }}>Unggulan</em>
            </h2>
            <p style={{ color: TEXT_MUTED, fontSize: 14 }}>
              Mulai Rp 50.000 – 75.000 per orang
            </p>
          </div>

          {/* Filter tabs */}
          <div
            style={{
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: 32,
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveMenu(cat)}
                className={`dbl-filter${activeMenu === cat ? " active" : ""}`}
                style={{
                  padding: "8px 20px",
                  borderRadius: 999,
                  border: `1px solid rgba(196,142,50,0.3)`,
                  background: "transparent",
                  color: TEXT_MUTED,
                  fontSize: 13,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  fontFamily: dm,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: 16,
            }}
          >
            {filtered.map((item) => (
              <div
                key={item.name}
                className="dbl-card"
                style={{
                  background: BG_CARD,
                  border: `1px solid ${GOLD_BORDER}`,
                  borderRadius: 16,
                  padding: 24,
                  transition: "transform 0.35s ease, box-shadow 0.35s ease",
                }}
              >
                <span
                  style={{ fontSize: 36, marginBottom: 12, display: "block" }}
                >
                  {item.emoji}
                </span>
                {item.tag && (
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: 9,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      padding: "3px 8px",
                      borderRadius: 999,
                      background: GOLD_DIM,
                      border: `1px solid rgba(196,142,50,0.35)`,
                      color: GOLD,
                      marginBottom: 8,
                    }}
                  >
                    {item.tag}
                  </span>
                )}
                <div
                  style={{
                    fontFamily: fd,
                    fontSize: 16,
                    fontWeight: 700,
                    color: TEXT,
                    marginBottom: 4,
                    lineHeight: 1.3,
                  }}
                >
                  {item.name}
                </div>
                <div
                  style={{ fontSize: 11, color: TEXT_DIM, marginBottom: 10 }}
                >
                  {item.category}
                </div>
                <div style={{ fontSize: 14, color: GOLD, fontWeight: 500 }}>
                  {item.price}
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              textAlign: "center",
              color: TEXT_DIM,
              fontSize: 13,
              marginTop: 24,
            }}
          >
            Dan masih banyak lagi... Kunjungi kami untuk menu lengkap 🍽️
          </p>
        </div>
      </section>

      <div
        style={{
          height: 1,
          background: `linear-gradient(90deg, transparent, ${GOLD_BORDER}, transparent)`,
          margin: "0 24px",
        }}
      />

      {/* ── REVIEWS ────────────────────────────────────── */}
      <section id="ulasan" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <span
              style={{
                display: "block",
                fontSize: 10,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: GOLD,
                marginBottom: 10,
              }}
            >
              Kata Mereka
            </span>
            <h2
              style={{
                fontFamily: fd,
                fontSize: 48,
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: 12,
              }}
            >
              Ulasan <em style={{ color: GOLD }}>Pelanggan</em>
            </h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              }}
            >
              <span
                style={{
                  fontFamily: fd,
                  fontSize: 28,
                  fontWeight: 700,
                  color: GOLD,
                }}
              >
                4.7
              </span>
              <span style={{ color: GOLD, fontSize: 15, letterSpacing: 3 }}>
                ★★★★★
              </span>
              <span style={{ fontSize: 13, color: TEXT_DIM }}>
                227 ulasan Google
              </span>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {reviews.map((r) => (
              <div
                key={r.name}
                className="dbl-card"
                style={{
                  background: BG_CARD,
                  border: `1px solid ${GOLD_BORDER}`,
                  borderRadius: 16,
                  padding: 24,
                  transition: "transform 0.35s ease, box-shadow 0.35s ease",
                }}
              >
                <div
                  style={{
                    color: GOLD,
                    fontSize: 14,
                    letterSpacing: 3,
                    marginBottom: 14,
                  }}
                >
                  {"★".repeat(r.stars)}
                </div>
                <p
                  style={{
                    color: TEXT_MUTED,
                    fontSize: 14,
                    lineHeight: 1.7,
                    fontStyle: "italic",
                    marginBottom: 20,
                  }}
                >
                  &ldquo;{r.text}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      background: GOLD_DIM,
                      border: `1px solid rgba(196,142,50,0.3)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: fd,
                      fontSize: 12,
                      fontWeight: 700,
                      color: GOLD,
                      flexShrink: 0,
                    }}
                  >
                    {r.avatar}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 500,
                        color: "#d0c0a0",
                      }}
                    >
                      {r.name}
                    </div>
                    <div style={{ fontSize: 11, color: TEXT_DIM }}>{r.sub}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div
        style={{
          height: 1,
          background: `linear-gradient(90deg, transparent, ${GOLD_BORDER}, transparent)`,
          margin: "0 24px",
        }}
      />

      {/* ── LOCATION ───────────────────────────────────── */}
      <section id="lokasi" style={{ padding: "80px 24px" }}>
        <div
          className="dbl-two-col"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "start",
          }}
        >
          <div>
            <div
              style={{
                width: 48,
                height: 2,
                background: `linear-gradient(90deg, ${GOLD}, transparent)`,
                marginBottom: 24,
              }}
            />
            <h2
              style={{
                fontFamily: fd,
                fontSize: 48,
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: 36,
              }}
            >
              Temukan
              <br />
              <em style={{ color: GOLD }}>Kami</em>
            </h2>
            {[
              {
                icon: "📍",
                label: "Alamat",
                val: "Jl. Manggis, Tenjoayu, Kec. Cicurug,\nKabupaten Sukabumi, Jawa Barat 43359",
              },
              {
                icon: "🕙",
                label: "Jam Operasional",
                val: "Selasa – Minggu: 10.00 – 22.00\nSenin: Tutup",
              },
              { icon: "📞", label: "Telepon", val: "0816-999-730" },
              {
                icon: "💰",
                label: "Kisaran Harga",
                val: "Rp 50.000 – 75.000 per orang",
              },
            ].map((info) => (
              <div
                key={info.label}
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  marginBottom: 24,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: GOLD_DIM,
                    border: `1px solid ${GOLD_BORDER}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    flexShrink: 0,
                  }}
                >
                  {info.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 10,
                      color: GOLD,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: 4,
                    }}
                  >
                    {info.label}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      color: TEXT_MUTED,
                      lineHeight: 1.6,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {info.val}
                  </div>
                </div>
              </div>
            ))}
            <div
              style={{
                display: "flex",
                gap: 12,
                marginTop: 12,
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://maps.google.com/?q=D'Bolang+Cicurug+Sukabumi"
                target="_blank"
                rel="noopener noreferrer"
                className="dbl-btn-primary"
                style={{
                  padding: "12px 24px",
                  borderRadius: 999,
                  background: GOLD,
                  color: BG,
                  fontSize: 13,
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
              >
                Buka Google Maps →
              </a>
              <a
                href="tel:0816999730"
                className="dbl-btn-secondary"
                style={{
                  padding: "12px 24px",
                  borderRadius: 999,
                  background: "transparent",
                  color: GOLD,
                  fontSize: 13,
                  border: `1px solid ${GOLD_BORDER}`,
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
              >
                Hubungi Kami
              </a>
            </div>
          </div>

          {/* Map placeholder */}
          <div
            className="dbl-map-card"
            style={{
              background: BG_CARD,
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: 20,
              aspectRatio: "1/1",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <svg
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                opacity: 0.05,
              }}
              viewBox="0 0 400 400"
            >
              {Array.from({ length: 9 }).map((_, i) => (
                <g key={i}>
                  <line
                    x1={i * 50}
                    y1="0"
                    x2={i * 50}
                    y2="400"
                    stroke={GOLD}
                    strokeWidth="1"
                  />
                  <line
                    x1="0"
                    y1={i * 50}
                    x2="400"
                    y2={i * 50}
                    stroke={GOLD}
                    strokeWidth="1"
                  />
                </g>
              ))}
            </svg>
            <div
              style={{ fontSize: 52, marginBottom: 16, position: "relative" }}
            >
              🗺️
            </div>
            <div
              style={{
                fontFamily: fd,
                fontSize: 20,
                color: GOLD,
                marginBottom: 8,
                position: "relative",
              }}
            >
              Cicurug, Sukabumi
            </div>
            <p
              style={{
                fontSize: 13,
                color: TEXT_DIM,
                maxWidth: 240,
                lineHeight: 1.6,
                position: "relative",
              }}
            >
              Terletak strategis di Jl. Manggis, Tenjoayu. Mudah diakses dan
              parkir luas.
            </p>
            <div
              style={{
                marginTop: 20,
                padding: "8px 16px",
                borderRadius: 999,
                background: GOLD_DIM,
                border: `1px solid rgba(196,142,50,0.3)`,
                position: "relative",
              }}
            >
              <span style={{ fontSize: 12, color: GOLD }}>
                6RH8+CQ Tenjoayu
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section style={{ padding: "20px 24px 80px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div
            style={{
              background: BG_CARD,
              border: `1px solid rgba(196,142,50,0.25)`,
              borderRadius: 24,
              padding: "64px 32px",
              textAlign: "center",
              boxShadow: "0 0 80px rgba(196,142,50,0.07)",
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 16 }}>🍽️</div>
            <h2
              style={{
                fontFamily: fd,
                fontSize: 40,
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: 12,
              }}
            >
              Siap untuk Makan
              <br />
              <em style={{ color: GOLD }}>Enak Hari Ini?</em>
            </h2>
            <p
              style={{
                color: TEXT_MUTED,
                fontSize: 15,
                marginBottom: 28,
                lineHeight: 1.7,
              }}
            >
              Kunjungi kami atau pesan langsung sekarang.
              <br />
              Kami tunggu Anda di Cicurug!
            </p>
            <div
              style={{
                display: "flex",
                gap: 12,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="tel:0816999730"
                className="dbl-btn-primary"
                style={{
                  padding: "14px 32px",
                  borderRadius: 999,
                  background: GOLD,
                  color: BG,
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
              >
                📞 0816-999-730
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="dbl-btn-secondary"
                style={{
                  padding: "14px 32px",
                  borderRadius: 999,
                  background: "transparent",
                  color: GOLD,
                  fontSize: 14,
                  border: `1px solid ${GOLD_BORDER}`,
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
              >
                📸 Instagram Kami
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────── */}
      <footer
        style={{ borderTop: `1px solid ${GOLD_BORDER}`, padding: "24px" }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div>
            <span style={{ fontFamily: fd, fontSize: 18, fontWeight: 700 }}>
              D&apos;<span style={{ color: GOLD }}>Bolang</span>
            </span>
            <span style={{ fontSize: 12, color: TEXT_DIM, marginLeft: 8 }}>
              Resto &amp; Coffee Shop
            </span>
          </div>
          <p style={{ fontSize: 12, color: TEXT_DIM }}>
            © 2025 D&apos;Bolang · Jl. Manggis, Cicurug, Sukabumi, Jawa Barat
          </p>
        </div>
      </footer>
    </div>
  );
}
