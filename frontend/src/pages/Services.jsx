import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check, HelpCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { SERVICE_CATALOG, SERVICE_GROUPS } from "@/lib/serviceCatalog";

const TOTAL_SUBSERVICES = SERVICE_CATALOG.reduce(
  (total, service) => total + service.subservices.length,
  0
);

const NEED_PATHS = [
  {
    number: "01",
    need: "Survey or map a site",
    guidance: "Boundaries, levels, routes, drone surveys and GIS data.",
    service: "Engineering Survey",
    to: "/services/engineering-survey",
  },
  {
    number: "02",
    need: "Verify or acquire land",
    guidance: "Ownership records, government surveys, acquisition and mutation.",
    service: "Land Acquisition Consultancy",
    to: "/services/land-acquisition-consultancy",
  },
  {
    number: "03",
    need: "Prepare plans or approvals",
    guidance: "Master plans, land-use studies, spatial databases and planning support.",
    service: "Master Planning",
    to: "/services/master-planning",
  },
  {
    number: "04",
    need: "Plan and manage delivery",
    guidance: "Feasibility studies, DPRs, environmental and statutory clearances.",
    service: "Feasibility Studies & DPR",
    to: "/services/feasibility-dpr",
  },
];

const GROUP_COPY = {
  Expertise: {
    index: "A",
    title: "Technical & land expertise",
    description:
      "Services that establish reliable site, ownership, planning and geospatial information before major project decisions are made.",
  },
  Capabilities: {
    index: "B",
    title: "Assessment & clearance capabilities",
    description:
      "Specialist studies and regulatory support for feasibility, environmental, forest, wildlife, social-impact and aviation-height requirements.",
  },
};

export default function Services() {
  return (
    <div data-testid="services-page" className="bg-white">
      <PageHero
        chapter="Services · Official Directory"
        title="Integrated services for land and infrastructure."
        subtitle="A structured directory of Rane Management Consultant's expertise and project-delivery capabilities."
        image="https://ranemanagementconsultant.com/uploads/Main-img/SRA.webp"
      />

      <section data-testid="directory-summary" className="bg-[#F7F8FA] border-b border-[#DDE3EB]">
        <div className="container-wide py-10 lg:py-12 grid sm:grid-cols-3 border-x border-[#DDE3EB] reveal reveal-stagger">
          <SummaryMetric value={String(SERVICE_CATALOG.length).padStart(2, "0")} label="Service areas" />
          <SummaryMetric value={String(TOTAL_SUBSERVICES).padStart(2, "0")} label="Specialist services" />
          <SummaryMetric value="02" label="Service groups" />
        </div>
      </section>

      <section data-testid="service-finder" className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end reveal">
            <div className="lg:col-span-6">
              <SectionHeading
                overline="Find a service"
                title="Start with your project requirement."
                subtitle="Use this guide when you know the outcome you need but not the formal service name."
              />
            </div>
            <div className="lg:col-span-4 lg:col-start-9 lg:text-right">
              <Link to="/contact" className="editorial-link">Ask the Rane team <HelpCircle size={16} /></Link>
            </div>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 border-t-2 border-[#243D71] reveal reveal-stagger">
            {NEED_PATHS.map((item) => (
              <Link key={item.number} to={item.to} className="group motion-card relative py-8 lg:px-6 border-b border-[#DDE3EB] lg:[&:not(:first-child)]:border-l bg-white">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs text-[#E07000]">{item.number}</span>
                  <ArrowUpRight size={17} className="text-[#034EA1] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                <h3 className="mt-6 font-heading font-semibold text-xl text-[#243D71] group-hover:text-[#034EA1] transition-colors">{item.need}</h3>
                <p className="mt-3 text-sm text-[#637083] leading-relaxed">{item.guidance}</p>
                <div className="mt-6 pt-4 border-t border-[#DDE3EB] text-[10px] font-heading font-bold uppercase tracking-[0.12em] text-[#034EA1]">Start with {item.service}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="service-register" className="section-padding bg-[#F7F8FA] border-y border-[#DDE3EB]">
        <div className="container-wide space-y-24 lg:space-y-32">
          {SERVICE_GROUPS.map((group) => {
            const groupCopy = GROUP_COPY[group.name];
            return (
              <section key={group.name} aria-labelledby={`services-${group.name.toLowerCase()}`}>
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 pb-8 border-b-2 border-[#243D71] items-end reveal">
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-4">
                      <span className="h-11 w-11 inline-flex items-center justify-center bg-[#243D71] text-white font-mono text-sm">{groupCopy.index}</span>
                      <div><div className="text-[10px] font-heading font-bold uppercase tracking-[0.17em] text-[#034EA1]">Service group</div><div className="mt-1 font-heading font-semibold text-[#243D71]">{group.name}</div></div>
                    </div>
                    <h2 id={`services-${group.name.toLowerCase()}`} className="font-heading text-[#243D71] mt-7 leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 650 }}>{groupCopy.title}</h2>
                  </div>
                  <div className="lg:col-span-5 lg:col-start-8">
                    <p className="text-[#637083] leading-relaxed">{groupCopy.description}</p>
                    <div className="mt-5 font-mono text-xs text-[#E07000]">{String(group.services.length).padStart(2, "0")} service areas</div>
                  </div>
                </div>

                <div className="mt-10 grid md:grid-cols-2 gap-7 reveal reveal-stagger">
                  {group.services.map((service, index) => {
                    const Icon = service.icon;
                    const preview = service.subservices.slice(0, 3);
                    const remaining = service.subservices.length - preview.length;
                    return (
                      <article key={service.slug} data-testid={`service-card-${service.slug}`} className="group bg-white border border-[#DDE3EB] motion-card overflow-hidden">
                        <Link to={`/services/${service.slug}`} className="grid sm:grid-cols-[180px_1fr] h-full">
                          <div className="image-frame aspect-[16/10] sm:aspect-auto sm:min-h-[280px]">
                            <img src={service.image} alt="" loading="lazy" />
                          </div>
                          <div className="p-6 md:p-7 flex flex-col">
                            <div className="flex items-center justify-between gap-4">
                              <span className="font-mono text-[10px] text-[#E07000]">{groupCopy.index}.{String(index + 1).padStart(2, "0")}</span>
                              <Icon size={20} strokeWidth={1.6} className="text-[#034EA1]" aria-hidden="true" />
                            </div>
                            <h3 className="mt-5 font-heading text-xl text-[#243D71] group-hover:text-[#034EA1] transition-colors">{service.title}</h3>
                            <p className="mt-3 text-sm text-[#637083] leading-relaxed">{service.summary}</p>
                            <div className="mt-6 pt-5 border-t border-[#DDE3EB]">
                              <div className="text-[10px] font-heading font-bold uppercase tracking-[0.14em] text-[#637083]">Includes</div>
                              <ul className="mt-3 space-y-2">
                                {preview.map((item) => <li key={item.title} className="flex gap-2 text-xs text-[#243D71]"><Check size={13} className="mt-0.5 shrink-0 text-[#E07000]" />{item.title}</li>)}
                              </ul>
                              {remaining > 0 && <div className="mt-3 text-xs font-semibold text-[#034EA1]">+ {remaining} more</div>}
                            </div>
                            <span className="editorial-link mt-auto pt-7">Open service record <ArrowRight size={15} /></span>
                          </div>
                        </Link>
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section data-testid="services-help" className="section-padding bg-white">
        <div className="container-wide">
          <div className="bg-[#243D71] px-7 py-12 md:px-12 lg:px-16 lg:py-16 grid lg:grid-cols-12 gap-10 items-center border-l-4 border-[#E07000] reveal">
            <div className="lg:col-span-8">
              <div className="text-xs font-heading font-bold uppercase tracking-[0.16em] text-[#F2A14A]">Service guidance</div>
              <h2 className="font-heading !text-white mt-6 leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.3rem)", fontWeight: 600 }}>Not sure which service applies?</h2>
              <p className="mt-5 text-white/70 max-w-2xl">Share the project location, current stage and required outcome. The team can identify the relevant survey, land, planning or delivery services.</p>
            </div>
            <div className="lg:col-span-4 lg:text-right"><Link to="/contact" className="btn-outline-light">Submit your requirement <ArrowUpRight size={17} /></Link></div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SummaryMetric({ value, label }) {
  return (
    <div className="px-6 py-4 sm:px-8 sm:[&:not(:first-child)]:border-l border-[#DDE3EB]">
      <div className="font-heading text-3xl text-[#034EA1] font-semibold">{value}</div>
      <div className="mt-2 text-[10px] font-heading font-bold uppercase tracking-[0.14em] text-[#637083]">{label}</div>
    </div>
  );
}

