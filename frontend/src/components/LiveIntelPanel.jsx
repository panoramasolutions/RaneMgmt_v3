import { useEffect, useState } from "react";
import { Activity } from "lucide-react";

const COORDS = [
  { lat: "19.0760°N", lng: "72.8777°E", place: "Mumbai · MH" },
  { lat: "21.1458°N", lng: "79.0882°E", place: "Nagpur Corridor" },
  { lat: "18.5204°N", lng: "73.8567°E", place: "Pune Smart City" },
  { lat: "26.9124°N", lng: "75.7873°E", place: "Solar Park · RJ" },
  { lat: "18.9388°N", lng: "72.8354°E", place: "JNPT Cluster" },
];

export default function LiveIntelPanel() {
  const [idx, setIdx] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const a = setInterval(() => setIdx((i) => (i + 1) % COORDS.length), 3200);
    const b = setInterval(() => setTick((t) => t + 1), 1100);
    return () => { clearInterval(a); clearInterval(b); };
  }, []);

  const c = COORDS[idx];
  const sigVal = (4000 + Math.sin(tick * 1.3) * 320).toFixed(0);

  return (
    <div
      data-testid="live-intel"
      className="relative border border-white/10 bg-[#0B1F33]/55 backdrop-blur-md p-6 lg:p-7"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 22px), calc(100% - 22px) 100%, 0 100%)",
      }}
    >
      {/* Header strip */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-[#B8974B]">
          <span className="live-dot" />
          Live Intelligence
        </div>
        <div className="font-mono text-[10px] text-[#94A3B8]">RMC·LIS v3.2</div>
      </div>

      {/* Rotating coordinates */}
      <div className="mt-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#147D83]">
          Active Mandate
        </div>
        <div className="font-heading text-xl text-white mt-2 transition-opacity duration-500" key={idx}>
          {c.place}
        </div>
        <div className="font-mono text-[11px] text-[#CBD5E1] mt-1">
          {c.lat} · {c.lng}
        </div>
      </div>

      {/* Mini parcel viz */}
      <div className="mt-6 relative h-28 overflow-hidden border border-white/10 bg-black/30">
        <svg viewBox="0 0 320 120" className="w-full h-full">
          <defs>
            <pattern id="livedot" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="0.7" cy="0.7" r="0.7" fill="#147D83" opacity="0.45" />
            </pattern>
          </defs>
          <rect width="320" height="120" fill="url(#livedot)" />
          <g fill="#147D83" fillOpacity="0.18" stroke="#147D83" strokeWidth="0.8">
            <polygon points="20,20 110,18 116,60 26,64" />
            <polygon points="116,18 220,22 230,68 116,60" />
            <polygon points="230,22 304,28 296,72 230,68" />
            <polygon points="26,64 116,60 124,104 36,108" />
            <polygon points="116,60 230,68 240,108 124,104" />
          </g>
          <polygon
            points="116,60 230,68 240,108 124,104"
            fill="#B8974B"
            fillOpacity="0.28"
            stroke="#B8974B"
            strokeWidth="1.2"
          />
          <circle cx="170" cy="85" r="3" fill="#FFFFFF" className="data-point" />
          <circle cx="60" cy="45" r="2.5" fill="#B8974B" className="data-point" style={{ animationDelay: "0.6s" }} />
          <circle cx="270" cy="50" r="2.5" fill="#B8974B" className="data-point" style={{ animationDelay: "1.2s" }} />
        </svg>
      </div>

      {/* Metrics */}
      <div className="mt-6 grid grid-cols-3 gap-3">
        <Metric label="DGPS" value="0.8 cm" />
        <Metric label="Parcels" value="38,420" />
        <Metric label="Signal" value={sigVal} mono />
      </div>

      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
        <div className="font-mono text-[9px] tracking-[0.22em] uppercase text-[#94A3B8]">
          UTM 43Q · WGS-84
        </div>
        <div className="font-mono text-[9px] text-[#147D83] inline-flex items-center gap-1.5">
          <Activity size={10} /> SYNCED
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value, mono }) {
  return (
    <div className="border border-white/10 px-3 py-2.5 bg-black/20">
      <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#147D83]">{label}</div>
      <div className={`mt-1 text-white text-sm ${mono ? "font-mono tabular-nums" : "font-heading font-semibold"}`}>
        {value}
      </div>
    </div>
  );
}
