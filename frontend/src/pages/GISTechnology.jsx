import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Layers, Plane, ScanLine, Satellite, Route, Database } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import GISDashboardMockup from "@/components/GISDashboardMockup";
import { TECH_LAYERS, TECH_STACK } from "@/lib/data";

const CASE_STUDIES = [
  { title: "Mobile LiDAR · Central Railway", metric: "800 KM", before: "Fragmented gradient records across an 800 km corridor.", after: "Complete 3D point cloud, gradient verification and railway asset inventory delivered to Central Railway.", image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1400&auto=format&fit=crop" },
  { title: "City Survey · Thane Municipal", metric: "75 SQ. KM", before: "Paper-based cadastre spread across 14 municipal departments.", after: "Single unified GIS database with satellite imagery, parcel boundaries and property records.", image: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=1400&auto=format&fit=crop" },
  { title: "Drone Survey · Uttan", metric: "250 ACRES", before: "Only satellite imagery available for a 250-acre municipal site.", after: "Drone orthomosaic → DEM/DTM → contour → engineering drawings ready for design.", image: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1400" },
];

const CAPABILITIES = [
  { title: "GIS Database Development", icon: Database, text: "Enterprise-grade PostGIS and ArcGIS databases with revenue overlays." },
  { title: "Parcel Mapping", icon: Layers, text: "Cadastral-grade parcel digitisation with mutation history." },
  { title: "DGPS · Total Station", icon: Satellite, text: "Sub-centimetre survey geometry as the foundation." },
  { title: "Drone Photogrammetry", icon: Plane, text: "Orthomosaics, DEM/DTM, contours and 3D terrain." },
  { title: "Mobile LiDAR", icon: ScanLine, text: "Rail-mounted 3D scanning for corridor-scale surveys." },
  { title: "Web GIS Dashboards", icon: Route, text: "Stakeholder dashboards with role-based access and APIs." },
];

export default function GISTechnology() {
  return (
    <div data-testid="gis-page" className="bg-white">
      <PageHero
        chapter="GIS & Technology"
        title="Turning physical land into digital intelligence."
        subtitle="GIS, DGPS, Total Station, Drone, Mobile LiDAR, Photogrammetry, CAD, DTM, spatial databases and interactive Web GIS—the RMCPL geospatial stack."
        image="https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeading overline="The layer stack" title="From satellite imagery to decision-ready intelligence." subtitle="Six data layers unified into an authoritative Land Information System." />
          <ol className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 border-t border-[#DDE3EB]">
            {TECH_LAYERS.map((layer, index) => <li key={layer.title} data-testid={`layer-${index}`} className="py-8 md:px-7 md:odd:pl-0 lg:odd:pl-7 lg:[&:nth-child(3n+1)]:pl-0 border-b md:even:border-l lg:[&:nth-child(odd)]:border-l-0 lg:[&:not(:nth-child(3n+1))]:border-l border-[#DDE3EB]"><div className="font-mono text-[10px] text-[#E07000]">L/{String(index + 1).padStart(2, "0")}</div><h3 className="font-heading font-semibold text-xl text-[#243D71] mt-4">{layer.title}</h3><p className="mt-3 text-sm text-[#637083] leading-relaxed">{layer.text}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="section-padding bg-[#F7F8FA]">
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4"><SectionHeading overline="Capabilities" title="What our geospatial practice delivers." /><div className="mt-8 flex gap-3"><Link to="/contact" data-testid="gis-hero-cta-primary" className="btn-primary">Talk to GIS team <ArrowUpRight size={16} /></Link></div></div>
          <div className="lg:col-span-7 lg:col-start-6 border-t border-[#DDE3EB]">
            {CAPABILITIES.map((capability) => { const Icon = capability.icon; return <div key={capability.title} data-testid={`gis-cap-${capability.title.toLowerCase().replace(/\s+/g, "-")}`} className="grid sm:grid-cols-[44px_1fr_1.2fr] gap-4 py-6 border-b border-[#DDE3EB] items-start"><Icon size={22} className="text-[#034EA1]" /><h3 className="font-heading font-semibold text-[#243D71]">{capability.title}</h3><p className="text-sm text-[#637083] leading-relaxed">{capability.text}</p></div>; })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-12"><div className="lg:col-span-7"><SectionHeading overline="Land intelligence dashboard" title="One operational view, shared daily." /></div><p className="lg:col-span-4 lg:col-start-9 text-[#637083]">A representative interface for parcel, survey and project data used by analysts and stakeholders.</p></div>
          <GISDashboardMockup />
        </div>
      </section>

      <section className="section-padding bg-white border-t border-[#DDE3EB]">
        <div className="container-wide">
          <SectionHeading overline="Case studies" title="Before. After. Decision-ready." />
          <div className="mt-16 space-y-20 lg:space-y-28">
            {CASE_STUDIES.map((item, index) => (
              <article key={item.title} data-testid={`case-${item.title.toLowerCase().split(" ")[0]}`} className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                <div className={`lg:col-span-6 image-frame aspect-[16/10] ${index % 2 ? "lg:order-2" : ""}`}><img src={item.image} alt={`${item.title} project`} loading="lazy" /></div>
                <div className={`lg:col-span-5 ${index % 2 ? "lg:order-1 lg:col-start-2" : "lg:col-start-8"}`}><div className="eyebrow">{item.metric}</div><h3 className="font-heading text-2xl lg:text-3xl text-[#243D71] mt-6">{item.title}</h3><div className="mt-8 py-5 border-y border-[#DDE3EB]"><div className="text-xs uppercase tracking-[0.14em] text-[#637083]">Before</div><p className="mt-2 text-sm text-[#637083]">{item.before}</p></div><div className="py-5 border-b border-[#DDE3EB]"><div className="text-xs uppercase tracking-[0.14em] text-[#034EA1]">After</div><p className="mt-2 text-sm text-[#1D2938]">{item.after}</p></div></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F7F8FA]">
        <div className="container-wide grid lg:grid-cols-12 gap-12"><div className="lg:col-span-4"><SectionHeading overline="Technology stack" title="Enterprise-grade tools in daily workflow." /><Link to="/projects" data-testid="gis-hero-cta-secondary" className="editorial-link mt-7">View GIS projects <ArrowRight size={16} /></Link></div><div className="lg:col-span-7 lg:col-start-6 grid sm:grid-cols-2 border-t border-[#DDE3EB]">{TECH_STACK.map((tool) => <div key={tool.name} data-testid={`tech-${tool.name.toLowerCase().split(" ")[0]}`} className="py-5 border-b border-[#DDE3EB] sm:even:border-l sm:even:pl-6"><div className="font-heading font-semibold text-[#243D71]">{tool.name}</div><div className="text-xs text-[#637083] mt-1">{tool.note}</div></div>)}</div></div>
      </section>
    </div>
  );
}
