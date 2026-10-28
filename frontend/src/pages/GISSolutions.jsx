import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GISDashboardMockup from "@/components/GISDashboardMockup";
import CapabilityTicker from "@/components/CapabilityTicker";
import { GIS_CAPABILITIES } from "@/lib/data";

const TECH_STACK = [
  { name: "ESRI ArcGIS", note: "Enterprise GIS platform" },
  { name: "Bentley OpenCities", note: "3D urban modelling" },
  { name: "QGIS", note: "Open-source analytics" },
  { name: "Pix4D", note: "Drone photogrammetry" },
  { name: "AutoCAD Civil 3D", note: "Engineering & corridors" },
  { name: "Leica DGPS", note: "Sub-cm field accuracy" },
  { name: "PostGIS", note: "Spatial database" },
  { name: "Mapbox / Leaflet", note: "Web GIS delivery" },
];

const CASE_STUDIES = [
  {
    title: "Smart City Parcel Digitisation",
    metric: "1.1M parcels",
    before: "Fragmented paper records across 14 city departments.",
    after: "Single Web GIS with mutation overlay & APIs to citizen portals.",
    image:
      "https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Expressway Corridor Mapping",
    metric: "1,200+ km",
    before: "No spatial reference for proposed alignment.",
    after: "Drone orthomosaic + DGPS-verified corridor with encroachment flags.",
    image:
      "https://images.unsplash.com/photo-1517424619662-7901844bbf37?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function GISSolutions() {
  return (
    <div data-testid="gis-page" className="bg-[#F8FAFC]">
      {/* DARK HERO */}
      <section className="relative bg-[#0A1B30] text-white noise-overlay overflow-hidden">
        <div className="absolute inset-0 -z-0 gis-grid-bg opacity-70" />
        <div className="drift-topo opacity-30" />
        <div className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 z-10">
          <div className="vertical-text text-white/35">RMC · GEOSPATIAL · EST. 1995</div>
        </div>
        <div className="container-rmc relative z-10 pt-28 lg:pt-36 pb-20">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 fade-up">
              <div className="chapter-mark">CH 04 · GEOSPATIAL</div>
              <h1 className="font-heading text-white mt-6 leading-[0.98] tracking-tight" style={{ fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)", fontWeight: 600 }}>
                <span className="block">A land intelligence stack</span>
                <span className="block italic font-normal text-white/85">engineered for India's</span>
                <span className="block text-[#C8A44D] underline-gold">most demanding mandates.</span>
              </h1>
              <p className="mt-7 text-[#CBD5E1] text-lg max-w-2xl leading-relaxed">
                Parcel mapping. Spatial analytics. Web GIS. Drone integration. Land Information
                Systems. Delivered with the discipline of survey-grade field work.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link to="/contact" data-testid="gis-hero-cta-primary" className="btn-secondary btn-magnetic">
                  Talk to GIS Team <ArrowRight size={18} />
                </Link>
                <Link to="/projects" data-testid="gis-hero-cta-secondary" className="btn-outline-light btn-magnetic">
                  View GIS Projects
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4 fade-up fade-up-delay-2 hidden lg:block">
              <div className="border border-white/10 bg-[#0F2744]/55 backdrop-blur-md p-6">
                <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-[#C8A44D]">
                  <span className="live-dot" /> System Status
                </div>
                <div className="mt-5 space-y-3 text-xs">
                  {[
                    ["ENGINE", "ArcGIS Enterprise"],
                    ["DGPS", "Leica · 0.8cm"],
                    ["DRONE", "DGCA Certified"],
                    ["DATABASE", "PostGIS"],
                    ["DELIVERY", "Web GIS · APIs"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-center justify-between border-b border-white/10 pb-2">
                      <span className="font-mono text-[#0E8B8B] uppercase tracking-[0.18em]">{k}</span>
                      <span className="text-white font-heading font-semibold">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capability ticker */}
      <CapabilityTicker />

      {/* CAPABILITIES */}
      <section className="section-padding bg-white">
        <div className="container-rmc">
          <SectionHeading overline="Capabilities" title="What our GIS practice delivers." />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GIS_CAPABILITIES.map((c) => {
              const I = c.icon;
              return (
                <div
                  key={c.title}
                  data-testid={`gis-cap-${c.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="bg-[#F8FAFC] border border-[#E2E8F0] p-7 hover-lift"
                  style={{ borderLeft: "3px solid #0E8B8B" }}
                >
                  <I size={26} strokeWidth={1.5} className="text-[#0E8B8B]" />
                  <h3 className="font-heading font-semibold text-lg text-[#0F2744] mt-4">{c.title}</h3>
                  <p className="mt-3 text-sm text-[#4A5568] leading-relaxed">{c.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DASHBOARD MOCKUP */}
      <section className="section-padding bg-[#0A1B30] text-white">
        <div className="container-rmc">
          <SectionHeading
            overline="Land Intelligence Dashboard"
            title="An interface our analysts and your stakeholders share daily."
            dark
          />
          <div className="mt-12 reveal">
            <GISDashboardMockup />
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section-padding bg-white">
        <div className="container-rmc">
          <SectionHeading overline="Case Studies" title="Before / After." />
          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            {CASE_STUDIES.map((c) => (
              <div key={c.title} data-testid={`case-${c.title.toLowerCase().split(" ").join("-")}`} className="bg-[#F8FAFC] border border-[#E2E8F0] overflow-hidden hover-lift">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading font-semibold text-xl text-[#0F2744]">{c.title}</h3>
                    <span className="font-mono text-sm text-[#C8A44D]">{c.metric}</span>
                  </div>
                  <div className="mt-5 grid sm:grid-cols-2 gap-5">
                    <div>
                      <div className="overline">Before</div>
                      <p className="mt-2 text-sm text-[#4A5568] leading-relaxed">{c.before}</p>
                    </div>
                    <div>
                      <div className="overline !text-[#0E8B8B]">After</div>
                      <p className="mt-2 text-sm text-[#1A202C] leading-relaxed">{c.after}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="section-padding bg-[#F8FAFC] topo-bg">
        <div className="container-rmc">
          <SectionHeading overline="Technology Stack" title="Enterprise-grade tools, in our daily workflow." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TECH_STACK.map((t) => (
              <div
                key={t.name}
                data-testid={`tech-${t.name.toLowerCase().split(" ")[0]}`}
                className="bg-white border border-[#E2E8F0] p-6"
              >
                <div className="font-heading font-semibold text-[#0F2744]">{t.name}</div>
                <div className="text-xs font-mono text-[#4A5568] uppercase tracking-wider mt-1">
                  {t.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
