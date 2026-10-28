import { useEffect, useRef, useState } from "react";

// Animates the numeric portion of a value like "1,000 KM", "800 KM", "360+", "250 Acres".
// Non-numeric prefix / suffix is preserved as-is.
export default function StatCounter({ valueText, value, suffix = "", duration = 1800 }) {
  const raw = valueText ?? (value != null ? `${value}${suffix}` : "0");

  // Extract first numeric run (integer, may contain commas). Handles "1,000 KM", "30+", "75 Sq. KM".
  const match = String(raw).match(/([\d,]+)/);
  const numeric = match ? parseInt(match[1].replace(/,/g, ""), 10) : 0;
  const before = match ? raw.slice(0, match.index) : "";
  const after = match ? raw.slice(match.index + match[0].length) : raw;

  const [n, setN] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (t) => {
              const p = Math.min((t - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(Math.round(numeric * eased));
              if (p < 1) requestAnimationFrame(tick);
              else setN(numeric);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [numeric, duration]);

  const display = n.toLocaleString();

  return (
    <span ref={ref} className="tabular-nums">
      {before}
      {display}
      {after}
    </span>
  );
}
