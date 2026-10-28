import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  History,
  Radio,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import StatCounter from "@/components/StatCounter";
import { HeroVideoLayer } from "@/components/HeroVideo";
import {
  BRAND,
  CONTACT,
  STATS,
  TRUST_CLIENTS,
} from "@/lib/data";
import { SERVICE_GROUPS } from "@/lib/serviceCatalog";
import { HOME_ACTIVE_PROJECTS, HOME_PAST_PROJECTS } from "@/lib/keyProjects";

const WHY_RANE = [
  { title: "Experience", text: "Established in 1995 with decades of land, survey and government consulting work." },
  { title: "Expert team", text: "Licensed surveyors, engineers, GIS specialists and land-revenue professionals." },
  { title: "Modern technology", text: "DGPS, ETS, drones, GIS tools and application development support field delivery." },
  { title: "Comprehensive services", text: "Survey, records, acquisition, planning, clearances, architecture and valuation." },
  { title: "Versatility", text: "Services adapt to government, semi-government and private-sector requirements." },
  { title: "Reliability", text: "Accurate information supports planning, approvals and confident project decisions." },
];

export default function Home() {
  const [portfolioView, setPortfolioView] = useState("active");
  const displayedProjects = portfolioView === "active" ? HOME_ACTIVE_PROJECTS : HOME_PAST_PROJECTS;

  return (
    <div data-testid="home-page" className="bg-white">
      <section data-testid="home-hero" className="relative overflow-hidden bg-white border-b border-[#DDE3EB]">
        <div className="hidden lg:block absolute inset-y-0 right-0 w-[42%] bg-[#F3F6FA]" aria-hidden="true" />
        <div className="relative max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 xl:px-16 py-10 md:py-12 lg:py-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-center">
          <div className="lg:col-span-5 fade-up">
            <div className="eyebrow">Established {BRAND.established} · Navi Mumbai</div>
            <h1
              data-testid="hero-headline"
              className="font-heading text-[#243D71] mt-6 max-w-3xl leading-[1.01]"
              style={{ fontSize: "clamp(2.75rem, 4.8vw, 4.75rem)", fontWeight: 700 }}
            >
              Precision engineering for <span className="text-[#034EA1]">resilient infrastructure.</span>
            </h1>
            <p className="mt-7 text-base lg:text-lg text-[#637083] max-w-xl leading-relaxed">
              Land survey, land records, acquisition, master planning and infrastructure consultancy for government, semi-government and private projects.
            </p>

            <div className="mt-7 flex flex-wrap gap-2" aria-label="Organisation coverage">
              {["Government", "Semi-Government", "Private Sector"].map((label) => (
                <span key={label} className="inline-flex items-center gap-2 border border-[#DDE3EB] bg-[#F7F8FA] px-3 py-2 text-[11px] font-heading font-bold uppercase tracking-[0.1em] text-[#243D71]">
                  <Check size={13} className="text-[#E07000]" />{label}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/services" data-testid="hero-cta-primary" className="btn-primary">View service directory <ArrowUpRight size={17} /></Link>
              <Link to="/contact" data-testid="hero-cta-secondary" className="btn-outline">Contact Rane <ArrowRight size={16} /></Link>
            </div>
          </div>

          <div className="lg:col-span-7 hero-image-enter">
            <div className="relative">
              <div className="absolute -inset-3 md:-inset-4 border border-[#CDD8E7]" aria-hidden="true" />
              <div className="relative overflow-hidden bg-[#17294F] border border-[#17294F] shadow-[0_28px_65px_-34px_rgba(23,41,79,0.55)]">
                <div className="h-11 px-4 sm:px-5 flex items-center justify-between gap-4 border-b border-white/15">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="h-2 w-2 rounded-full bg-[#F2A14A] shrink-0" aria-hidden="true" />
                    <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-white/70 truncate">RMCPL · Field intelligence</span>
                  </div>
                  <span className="hidden sm:inline font-mono text-[9px] uppercase tracking-[0.16em] text-white/45">Project overview</span>
                </div>
                <div className="relative aspect-video bg-black">
                  <HeroVideoLayer />
                </div>
                <div className="px-4 py-4 sm:px-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-white/15">
                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#F2A14A]">Survey · Acquisition · Planning</div>
                    <div className="mt-1 font-heading text-sm sm:text-base text-white">Reliable field data for informed decisions.</div>
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/50 sm:text-right whitespace-nowrap">Established 1995</div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section data-testid="stats-section" className="bg-[#F7F8FA] border-b border-[#DDE3EB]">
        <div className="container-wide py-12 lg:py-14">
          <div className="pb-7 border-b border-[#DDE3EB] reveal">
            <div><div className="eyebrow">RMCPL in numbers</div><h2 className="mt-4 font-heading text-2xl text-[#243D71]">Published experience at a glance.</h2></div>
          </div>
          <div className="grid md:grid-cols-3 reveal reveal-stagger">
            {STATS.map((stat, index) => (
              <div key={stat.label} data-testid={`stat-${index}`} className="py-8 lg:py-10 lg:pr-8 border-b border-[#DDE3EB] lg:[&:not(:nth-child(3n+1))]:pl-8 lg:[&:not(:nth-child(3n+1))]:border-l">
                <div className="font-heading text-[#034EA1] leading-none" style={{ fontSize: "clamp(2rem, 3.6vw, 3.15rem)", fontWeight: 650 }}><StatCounter valueText={stat.valueText} /></div>
                <div className="mt-3 text-xs uppercase tracking-[0.12em] text-[#637083] font-heading font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="about-summary" className="bg-white border-b border-[#DDE3EB]">
        <div className="container-wide py-16 md:py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-4 reveal">
              <div className="eyebrow">About RMCPL</div>
              <h2 className="mt-6 font-heading text-[#243D71] leading-tight" style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: 650 }}>
                Built on precision. Evolving with infrastructure.
              </h2>
              <p className="mt-6 text-[#637083] leading-relaxed">
                Three defining milestones trace the company&apos;s growth from land surveying to integrated infrastructure and GIS solutions.
              </p>
              <Link to="/about" className="btn-primary mt-8">
                Read our story <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="lg:col-span-7 lg:col-start-6 border-t-2 border-[#243D71] reveal reveal-stagger">
              <article className="grid sm:grid-cols-[88px_1fr] gap-4 sm:gap-8 py-7 border-b border-[#DDE3EB]">
                <div className="font-mono text-sm text-[#E07000]">1995</div>
                <p className="text-[#637083] leading-relaxed">
                  Founded by Director Mr. Manmohan B. Rane, the company specializes in providing precise land survey data for private and government agencies.
                </p>
              </article>
              <article className="grid sm:grid-cols-[88px_1fr] gap-4 sm:gap-8 py-7 border-b border-[#DDE3EB]">
                <div className="font-mono text-sm text-[#E07000]">2002</div>
                <p className="text-[#637083] leading-relaxed">
                  RMCPL expanded into city survey work for corporations across Maharashtra, successfully completing eight municipal city survey projects. This growth opened the way to broader land acquisition, infrastructure planning and design services.
                </p>
              </article>
              <article className="grid sm:grid-cols-[88px_1fr] gap-4 sm:gap-8 py-7 border-b border-[#DDE3EB]">
                <div className="font-mono text-sm text-[#E07000]">2014</div>
                <p className="text-[#637083] leading-relaxed">
                  Anticipating future demand, the company established an IT cell for GIS solutions to support emerging needs in mapping-technology application development.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section data-testid="clientele" className="bg-white border-b border-[#DDE3EB] py-16 md:py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 xl:px-16 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-3 reveal">
            <div className="eyebrow">Institutional trust</div>
            <h2 className="mt-5 font-heading text-[#243D71] leading-tight" style={{ fontSize: "clamp(2.2rem, 4vw, 3.35rem)", fontWeight: 650 }}>
              Our Clients
            </h2>
            <p className="mt-5 text-[#637083] leading-relaxed">
              Trusted by leading infrastructure organizations and institutions for dependable engineering expertise, precision, and execution.
            </p>
          </div>

          <div className="lg:col-span-9 client-marquee overflow-hidden border-y border-[#DDE3EB] bg-[#F3F6FA] py-8 md:py-10" aria-label="RMCPL client organisations">
            <div className="client-marquee-track">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex shrink-0 items-stretch gap-5 pr-5" aria-hidden={copy === 1 ? "true" : undefined}>
                  {TRUST_CLIENTS.map((client) => (
                    <div key={`${copy}-${client.name}`} className="w-40 md:w-48 h-28 md:h-32 shrink-0 flex items-center justify-center bg-white border border-[#DDE3EB] px-5 md:px-6 shadow-[0_10px_28px_-24px_rgba(23,41,79,0.55)]">
                      <img
                        src={client.image}
                        alt={copy === 0 ? client.name : ""}
                        loading="lazy"
                        className="w-full h-16 md:h-20 object-contain"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section data-testid="featured-projects" className="section-padding bg-white border-b border-[#DDE3EB]">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-7 reveal">
            <SectionHeading
              overline="Active and completed assignments"
              title="Project Portfolio"
              subtitle="Explore RMCPL's active commissions and completed assignments across water, transport, land acquisition, municipal infrastructure and geospatial engineering."
            />
            <Link to={`/projects?portfolio=${portfolioView}`} data-testid="projects-view-all" className="btn-primary shrink-0">
              View detailed projects <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="mt-10 p-2 bg-[#17294F] grid md:grid-cols-2 gap-2 reveal" role="tablist" aria-label="Project portfolio type">
            <PortfolioTab
              active={portfolioView === "active"}
              icon={Radio}
              label="Active Projects"
              description="Assignments currently in focus"
              onClick={() => setPortfolioView("active")}
              controls="home-project-panel"
            />
            <PortfolioTab
              active={portfolioView === "past"}
              icon={History}
              label="Past Projects"
              description="Completed project record"
              onClick={() => setPortfolioView("past")}
              controls="home-project-panel"
            />
          </div>

          <div id="home-project-panel" role="tabpanel" className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-7 reveal reveal-stagger">
            {displayedProjects.map((project, index) => (
              <article key={`${portfolioView}-${project.slug}`} className="group border border-[#DDE3EB] bg-white motion-card overflow-hidden flex">
                <Link to={`/projects?portfolio=${portfolioView}#${project.slug}`} className="flex w-full flex-col" aria-label={`View details for ${project.title}`}>
                  <div className="image-frame aspect-[16/10] relative">
                    <img src={project.image} alt={project.title} loading="lazy" />
                    <div className="absolute left-0 top-0 px-4 py-2.5 bg-white/95 backdrop-blur-sm flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${portfolioView === "active" ? "bg-[#E07000] animate-pulse" : "bg-[#637083]"}`} aria-hidden="true" />
                      <span className="text-[9px] font-heading font-bold uppercase tracking-[0.14em] text-[#243D71]">
                        {portfolioView === "active" ? "Active project" : "Past project"}
                      </span>
                    </div>
                    <div className="absolute left-4 bottom-4 bg-[#17294F] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white shadow-sm">
                      {project.metric}
                    </div>
                  </div>
                  <div className="p-6 md:p-7 flex flex-1 flex-col">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-heading text-[10px] font-bold uppercase tracking-[0.15em] text-[#E07000]">Project portfolio</span>
                      <span className="font-mono text-[10px] text-[#637083]">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="mt-4 font-heading text-[1.35rem] md:text-2xl leading-[1.25] font-semibold text-[#243D71] group-hover:text-[#034EA1] transition-colors">{project.title}</h3>
                    <div className="mt-4 pt-4 border-t border-[#DDE3EB]">
                      <div className="text-[9px] font-heading font-bold uppercase tracking-[0.14em] text-[#637083]">{project.category}</div>
                      <p className="mt-2 text-sm leading-relaxed text-[#637083] line-clamp-2">{project.summary}</p>
                    </div>
                    <span className="editorial-link mt-6 pt-1">View project details <ArrowRight size={15} /></span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="service-directory" className="section-padding bg-[#F7F8FA] border-y border-[#DDE3EB]">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end reveal">
            <div className="lg:col-span-6"><SectionHeading overline="Service directory" title="Find the right expertise for your requirement." /></div>
            <div className="lg:col-span-4 lg:col-start-9 lg:text-right"><Link to="/services" className="editorial-link">View full service details <ArrowRight size={16} /></Link></div>
          </div>

          <div className="mt-14 grid lg:grid-cols-2 gap-8 reveal reveal-stagger">
            {SERVICE_GROUPS.map((group) => (
              <section key={group.name} className="bg-white border border-[#DDE3EB] motion-card">
                <div className="px-6 md:px-8 py-6 bg-[#243D71] text-white flex items-center justify-between gap-4">
                  <div><div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#F2A14A]">Service group</div><h3 className="mt-2 font-heading text-2xl !text-white">{group.name}</h3></div>
                  <span className="font-mono text-sm text-white/70">{String(group.services.length).padStart(2, "0")}</span>
                </div>
                <div className="px-6 md:px-8">
                  {group.services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <Link key={service.slug} to={`/services/${service.slug}`} className="group grid grid-cols-[36px_1fr_auto] gap-4 py-6 border-b border-[#DDE3EB] last:border-b-0 items-start">
                        <Icon size={20} strokeWidth={1.6} className="text-[#034EA1] mt-0.5" aria-hidden="true" />
                        <span><span className="block font-heading font-semibold text-[#243D71] group-hover:text-[#034EA1] transition-colors">{service.title}</span><span className="block mt-1.5 text-xs leading-relaxed text-[#637083]">{service.subservices.length} specialist services</span></span>
                        <span className="font-mono text-[10px] text-[#E07000]">{String(index + 1).padStart(2, "0")}</span>
                      </Link>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="why-rane" className="section-padding bg-[#F7F8FA] border-y border-[#DDE3EB]">
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start reveal reveal-left">
            <SectionHeading overline="Why choose us" title="Structured for dependable project support." subtitle="The strengths presented on Rane's current website, organised for quick review." />
          </div>
          <div className="lg:col-span-7 lg:col-start-6 grid sm:grid-cols-2 border-t border-[#DDE3EB] reveal reveal-stagger">
            {WHY_RANE.map((item, index) => (
              <div key={item.title} className="py-7 sm:px-6 border-b border-[#DDE3EB] sm:even:border-l">
                <span className="font-mono text-[10px] text-[#E07000]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-heading font-semibold text-lg text-[#243D71]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#637083]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="final-cta" className="section-padding bg-[#F7F8FA] border-t border-[#DDE3EB]">
        <div className="container-wide">
          <div className="bg-[#243D71] px-7 py-12 md:px-12 lg:px-16 lg:py-16 grid lg:grid-cols-12 gap-10 items-center border-l-4 border-[#E07000] reveal">
            <div className="lg:col-span-8">
              <div className="text-xs font-heading font-bold uppercase tracking-[0.16em] text-[#F2A14A]">Project enquiry</div>
              <h2 className="font-heading !text-white mt-6 leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 600 }}>How can we help you?</h2>
              <p className="mt-5 text-white/70 max-w-2xl">Discuss your survey, land, planning, clearance, architecture or valuation requirement with the Rane team.</p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/75"><a href={`tel:${CONTACT.phones[0].replace(/\s/g, "")}`} className="hover:text-white">{CONTACT.phones[0]}</a><a href={`mailto:${CONTACT.emails[0]}`} className="hover:text-white">{CONTACT.emails[0]}</a></div>
            </div>
            <div className="lg:col-span-4 lg:text-right"><Link to="/contact" data-testid="final-cta-primary" className="btn-outline-light">Submit an enquiry <ArrowUpRight size={17} /></Link></div>
          </div>
        </div>
      </section>
    </div>
  );
}

function PortfolioTab({ active, icon: Icon, label, description, onClick, controls }) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      aria-controls={controls}
      onClick={onClick}
      className={`group flex items-center gap-4 px-5 py-4 md:px-6 md:py-5 text-left transition-all duration-300 ${
        active ? "bg-white shadow-lg" : "bg-transparent hover:bg-white/10"
      }`}
    >
      <span className={`grid h-11 w-11 shrink-0 place-items-center border ${active ? "border-[#DDE3EB] bg-[#F7F8FA] text-[#E07000]" : "border-white/20 text-white/70"}`}>
        <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className={`block font-heading text-base md:text-lg font-semibold ${active ? "text-[#243D71]" : "text-white"}`}>{label}</span>
        <span className={`mt-1 block text-xs ${active ? "text-[#637083]" : "text-white/55"}`}>{description}</span>
      </span>
      <ArrowRight size={17} className={`ml-auto transition-transform group-hover:translate-x-1 ${active ? "text-[#034EA1]" : "text-white/50"}`} aria-hidden="true" />
    </button>
  );
}
