export default function Timeline({ items }) {
  return (
    <ol data-testid="timeline" className="relative border-l border-[#DDE3EB] pl-9 space-y-11 reveal reveal-stagger timeline-reveal">
      {items.map((it, i) => (
        <li key={it.year} className="relative" style={{ transitionDelay: `${i * 80}ms` }}>
          <span
            className="absolute -left-[41px] top-1 w-3 h-3 bg-[#E07000] ring-4 ring-white"
            data-testid={`timeline-node-${it.year}`}
          />
          <div className="overline">{it.year}</div>
          <h3 className="font-heading font-semibold text-xl text-[#243D71] mt-2">{it.title}</h3>
          <p className="text-[#637083] mt-2 leading-relaxed max-w-xl">{it.text}</p>
        </li>
      ))}
    </ol>
  );
}
