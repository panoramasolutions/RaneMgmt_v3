const ITEMS = [
  "● DGPS · SUB-CENTIMETRE ACCURACY",
  "★ ESTABLISHED 1995",
  "● ESRI / BENTLEY / QGIS CERTIFIED",
  "★ 100+ GOVERNMENT MANDATES",
  "● DGCA-LICENSED DRONE PILOTS",
  "★ 1M+ ACRES SURVEYED",
  "● ISO 9001:2015",
  "★ WEB GIS · LIS · SPATIAL ANALYTICS",
  "● 14 STATES · 200+ DISTRICTS",
  "★ 7/12 · MUTATION · TITLE EXPERTS",
];

export default function CapabilityTicker({ tone = "dark" }) {
  const bg = tone === "dark" ? "bg-[#060F1B]" : "bg-[#0B1F33]";
  return (
    <div
      data-testid="capability-ticker"
      className={`${bg} text-white border-y border-white/10 overflow-hidden`}
    >
      <div className="flex marquee-track-slow whitespace-nowrap py-4">
        {[...ITEMS, ...ITEMS].map((t, i) => (
          <span
            key={i}
            className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#CBD5E1] mx-8 inline-flex items-center gap-3"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
