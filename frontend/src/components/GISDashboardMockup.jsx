import { Activity, Layers, MapPin, Satellite, Plane, Database } from "lucide-react";

// Static styled mockup — no real map. Pure design.
export default function GISDashboardMockup() {
  return (
    <div
      data-testid="gis-dashboard-mockup"
      className="relative w-full overflow-hidden border border-[#39558A] noise-overlay"
      style={{ background: "#17294F" }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#39558A] bg-[#243D71]">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E07000]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#168094]" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
          </div>
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#CBD5E1]">
            rmc.land-intel · parcel-explorer
          </div>
        </div>
        <div className="font-mono text-[10px] text-[#71C0CB]">● LIVE · DGPS 0.8cm</div>
      </div>

      <div className="grid grid-cols-12 min-h-[460px]">
        {/* Left rail */}
        <div className="col-span-3 border-r border-[#39558A] p-4 space-y-4 hidden md:block">
          <div>
            <div className="overline !text-[#F2A14A] !text-[9px]">Layers</div>
            <ul className="mt-3 space-y-2 text-xs text-[#CBD5E1] font-medium">
              {[
                { label: "Cadastral Parcels", c: "#E07000" },
                { label: "Mutation Overlay", c: "#168094" },
                { label: "Drone Orthomosaic", c: "#FFFFFF" },
                { label: "Right-of-Way", c: "#E07000" },
                { label: "Encroachment Flags", c: "#EF4444" },
              ].map((l) => (
                <li key={l.label} className="flex items-center gap-2">
                  <span className="w-2 h-2" style={{ background: l.c }} />
                  {l.label}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="overline !text-[#F2A14A] !text-[9px]">Tools</div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-[10px] font-mono text-[#CBD5E1]">
              {["MEASURE", "BUFFER", "EXPORT", "SPLIT", "MERGE", "OWNER"].map((t) => (
                <div
                  key={t}
                  className="border border-[#39558A] px-2 py-1.5 text-center hover:border-[#F2A14A] hover:text-[#F2A14A] cursor-default transition-colors"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center "map" */}
        <div className="col-span-12 md:col-span-6 relative gis-grid-bg overflow-hidden">
          {/* SVG land parcels */}
          <svg viewBox="0 0 600 460" className="absolute inset-0 w-full h-full">
            <defs>
              <pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.7" fill="#168094" opacity="0.35" />
              </pattern>
            </defs>
            <rect width="600" height="460" fill="url(#dots)" />
            {/* Parcels */}
            <g fill="#168094" fillOpacity="0.12" stroke="#168094" strokeWidth="1">
              <polygon points="60,80 220,60 240,180 80,200" />
              <polygon points="240,60 380,70 400,200 240,180" />
              <polygon points="380,70 540,90 520,220 400,200" />
              <polygon points="80,200 240,180 260,330 100,340" />
              <polygon points="240,180 400,200 420,330 260,330" />
              <polygon points="400,200 520,220 510,340 420,330" />
            </g>
            {/* Highlighted parcel */}
            <polygon
              points="240,180 400,200 420,330 260,330"
              fill="#E07000"
              fillOpacity="0.22"
              stroke="#E07000"
              strokeWidth="2"
            />
            {/* Corridor */}
            <path
              d="M40 420 Q 200 380 320 410 T 580 360"
              fill="none"
              stroke="#E07000"
              strokeWidth="2.5"
              strokeDasharray="6 4"
            />
            {/* Survey pins */}
            {[
              [120, 130], [310, 110], [470, 140], [200, 270], [330, 260], [470, 280],
            ].map(([x, y], i) => (
              <g key={i} className="data-point" style={{ transformOrigin: `${x}px ${y}px`, animationDelay: `${i * 0.35}s` }}>
                <circle cx={x} cy={y} r="4" fill="#FFFFFF" />
                <circle cx={x} cy={y} r="10" fill="none" stroke="#FFFFFF" strokeOpacity="0.35" />
              </g>
            ))}
          </svg>

          {/* scanning line */}
          <div className="scan-line" />

          {/* Floating coordinate chip */}
          <div className="absolute top-4 left-4 bg-black/40 backdrop-blur border border-[#39558A] px-3 py-2 font-mono text-[10px] text-[#CBD5E1]">
            <div>19.0760° N · 72.8777° E</div>
            <div className="text-[#71C0CB]">UTM 43Q · WGS-84</div>
          </div>

          <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur border border-[#39558A] px-3 py-2 font-mono text-[10px] text-[#F2A14A]">
            PARCEL #482 · 2.34 HA · STATUS: VERIFIED
          </div>
        </div>

        {/* Right panel */}
        <div className="col-span-12 md:col-span-3 border-l border-[#39558A] p-4 space-y-4">
          <div>
            <div className="overline !text-[#F2A14A] !text-[9px]">Selected Parcel</div>
            <div className="mt-3 text-xs text-white font-heading font-semibold">Survey No. 482/A</div>
            <div className="mt-1 text-[10px] text-[#CBD5E1] font-mono">7/12 · MUTATION · CHAIN</div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-[10px] text-[#CBD5E1]">
              <div><div className="text-[#71C0CB]">AREA</div><div className="font-mono text-white">2.34 ha</div></div>
              <div><div className="text-[#71C0CB]">TENURE</div><div className="font-mono text-white">FREEHOLD</div></div>
              <div><div className="text-[#71C0CB]">CLASS</div><div className="font-mono text-white">AGRI · NA</div></div>
              <div><div className="text-[#71C0CB]">FLAGS</div><div className="font-mono text-[#F2A14A]">2</div></div>
            </div>
          </div>

          <div>
            <div className="overline !text-[#F2A14A] !text-[9px]">Project KPIs</div>
            <ul className="mt-3 space-y-2 text-[11px] text-[#CBD5E1]">
              {[
                { l: "Parcels mapped", v: "38,420", c: Database },
                { l: "Sites surveyed", v: "184", c: MapPin },
                { l: "Drone missions", v: "62", c: Plane },
                { l: "Layers active", v: "11", c: Layers },
                { l: "Imagery dates", v: "8", c: Satellite },
                { l: "Anomalies", v: "12", c: Activity },
              ].map((k) => {
                const I = k.c;
                return (
                  <li key={k.l} className="flex items-center justify-between border-b border-[#39558A]/60 pb-1.5">
                    <span className="inline-flex items-center gap-2"><I size={12} className="text-[#71C0CB]" />{k.l}</span>
                    <span className="font-mono text-white">{k.v}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-[#39558A] grid grid-cols-2 md:grid-cols-4">
        {[
          { l: "Coverage", v: "12 Districts" },
          { l: "Accuracy", v: "Sub-cm DGPS" },
          { l: "Datasets", v: "23 layers" },
          { l: "Updated", v: "Today · 09:42" },
        ].map((m) => (
          <div key={m.l} className="px-5 py-4 border-r border-[#39558A] last:border-r-0">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#71C0CB]">{m.l}</div>
            <div className="font-heading text-white text-sm mt-1">{m.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
