export default function SectionHeading({ overline, title, subtitle, dark = false, align = "left", className = "" }) {
  const textColor = dark ? "text-white" : "text-[#243D71]";
  const subColor = dark ? "text-white/70" : "text-[#637083]";
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignCls} ${className}`}>
      {overline && <span className="eyebrow" data-testid="section-overline">{overline}</span>}
      <h2
        className={`font-heading font-semibold leading-[1.12] ${textColor} mt-5`}
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        data-testid="section-title"
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base lg:text-lg leading-relaxed ${subColor}`} data-testid="section-subtitle">
          {subtitle}
        </p>
      )}
    </div>
  );
}
