import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ service, to, index = 0 }) {
  const Icon = service.icon;
  const accentColor =
    service.accent === "gold" ? "#C8A44D" : service.accent === "teal" ? "#0E8B8B" : "#0F2744";
  return (
    <Link
      to={to || "/services"}
      data-testid={`service-card-${service.slug}`}
      className="group relative block bg-white border border-[#E2E8F0] p-8 lg:p-10 hover-lift overflow-hidden"
    >
      {/* corner accent stripe */}
      <span
        className="absolute top-0 left-0 h-[3px] w-16 transition-all duration-500 group-hover:w-full"
        style={{ background: accentColor }}
      />
      {/* faded big number watermark */}
      <span
        className="absolute -bottom-6 -right-3 font-heading font-bold text-[7rem] leading-none opacity-[0.05] select-none"
        style={{ color: accentColor }}
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="flex items-start justify-between relative">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 flex items-center justify-center transition-colors"
            style={{ background: `${accentColor}14`, color: accentColor }}
          >
            <Icon size={22} strokeWidth={1.6} />
          </div>
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#4A5568]">
            S/{String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <ArrowUpRight
          size={22}
          className="text-[#4A5568] group-hover:text-[#C8A44D] group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
        />
      </div>

      <h3 className="font-heading font-semibold text-2xl text-[#0F2744] mt-8 leading-tight relative">
        {service.title}
      </h3>
      <p className="mt-3 text-sm text-[#4A5568] leading-relaxed relative">{service.summary}</p>

      <ul className="mt-6 space-y-2 relative">
        {service.points.map((p) => (
          <li
            key={p}
            className="text-xs font-mono uppercase tracking-wider text-[#1A202C] flex items-center gap-2"
          >
            <span className="w-2 h-px" style={{ background: accentColor }} />
            {p}
          </li>
        ))}
      </ul>

      <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex items-center justify-between relative">
        <span className="text-xs font-heading font-semibold uppercase tracking-wider text-[#0F2744] group-hover:text-[#C8A44D] transition-colors">
          Explore Capability
        </span>
        <span
          className="font-mono text-[10px] tracking-[0.2em] text-[#4A5568]"
        >
          {service.slug.toUpperCase().slice(0, 6)}
        </span>
      </div>
    </Link>
  );
}
