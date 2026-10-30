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
        <div className="home-hero-media hidden lg:block" aria-hidden="true">
          <HeroVideoLayer />
        </div>
        <div className="home-hero-blend hidden lg:block absolute inset-0 pointer-events-none" aria-hidden="true" />
        <div className="home-hero-purpose hidden lg:block">
          <div className="home-hero-purpose-label">Our commitment</div>
          <p>Contributing to <span>Nation-building.</span></p>
        </div>

        <div className="relative z-10 max-w-[1440px] min-h-[660px] xl:min-h-[700px] mx-auto px-5 md:px-8 lg:px-12 xl:px-16 flex items-center">
          <div className="w-full py-10 md:py-12 lg:py-16">
          <div className="lg:w-[48%] fade-up">
            <div className="eyebrow">Established {BRAND.established} · Navi Mumbai</div>
            <h1
              data-testid="hero-headline"
              className="font-heading text-[#243D71] mt-6 max-w-3xl leading-[0.98]"
              style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 700 }}
            >
              <span className="block">Surveying <span className="text-[#034EA1]">Precision.</span></span>
              <span className="block mt-2">GIS <span className="text-[#034EA1]">Intelligence.</span></span>
              <span className="block mt-2">Engineering <span className="text-[#034EA1]">Excellence.</span></span>
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

          <div className="relative lg:hidden mt-10 -mx-5 md:-mx-8 aspect-[16/10] overflow-hidden bg-[#17294F] hero-image-enter">
            <HeroVideoLayer />
            <div className="absolute inset-x-5 bottom-5 border-l-2 border-[#E07000] bg-[#17294F]/85 px-5 py-4 backdrop-blur-sm shadow-xl">
              <div className="font-heading text-[9px] font-bold uppercase tracking-[0.18em] text-[#F2A14A]">Our commitment</div>
              <p className="mt-1.5 font-heading text-lg font-semibold leading-tight text-white">Contributing to Nation-building.</p>
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

      <section data-testid="about-summary" className="bg-[#FBFCFE] border-b border-[#DDE3EB]">
        <div className="container-wide py-16 md:py-20 lg:py-[5.5rem]">
          <div className="grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.38fr)] gap-12 lg:gap-16 xl:gap-24 items-start">
            <div className="reveal lg:pt-2">
              <div className="eyebrow">About RMCPL</div>
              <h2 className="mt-6 max-w-[520px] font-heading text-[#243D71] leading-[1.08] tracking-[-0.035em]" style={{ fontSize: "clamp(2.15rem, 3.4vw, 3.15rem)", fontWeight: 650 }}>
                Geospatial, Land & Engineering Consultancy.
              </h2>
              <p className="mt-6 max-w-md text-[1.02rem] text-[#637083] leading-[1.75]">
                Three defining milestones trace the company&apos;s growth from land surveying to integrated infrastructure and GIS solutions.
              </p>
              <Link to="/about" className="btn-primary mt-9">
                Read our story <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="reveal reveal-stagger">
              <div className="flex items-center justify-between gap-6 pb-4 border-b-2 border-[#243D71]">
                <span className="font-heading text-[10px] font-bold uppercase tracking-[0.18em] text-[#243D71]">Company evolution</span>
                <span className="font-mono text-[10px] tracking-[0.14em] text-[#637083]">1995 — 2025</span>
              </div>
              <article className="group grid sm:grid-cols-[96px_1fr] gap-4 sm:gap-8 px-3 sm:px-4 py-7 md:py-8 border-b border-[#DDE3EB] transition-colors duration-200 hover:bg-white">
                <div className="flex items-center gap-3 self-start pt-1">
                  <span className="h-2 w-2 rounded-full bg-[#E07000]" aria-hidden="true" />
                  <span className="font-mono text-xs tracking-[0.08em] text-[#E07000]">1995</span>
                </div>
                <p className="text-[15px] md:text-base text-[#637083] leading-[1.75] tracking-[-0.005em]">
                  Founded by Director Mr. Manmohan B. Rane, the company specializes in providing precise land survey data for private and government agencies.
                </p>
              </article>
              <article className="group grid sm:grid-cols-[96px_1fr] gap-4 sm:gap-8 px-3 sm:px-4 py-7 md:py-8 border-b border-[#DDE3EB] transition-colors duration-200 hover:bg-white">
                <div className="flex items-center gap-3 self-start pt-1">
                  <span className="h-2 w-2 rounded-full bg-[#E07000]" aria-hidden="true" />
                  <span className="font-mono text-xs tracking-[0.08em] text-[#E07000]">2002</span>
                </div>
                <p className="text-[15px] md:text-base text-[#637083] leading-[1.75] tracking-[-0.005em]">
                  RMCPL expanded into city survey work for corporations across Maharashtra, successfully completing eight municipal city survey projects. This growth opened the way to broader land acquisition, infrastructure planning and design services.
                </p>
              </article>
              <article className="group grid sm:grid-cols-[96px_1fr] gap-4 sm:gap-8 px-3 sm:px-4 py-7 md:py-8 border-b border-[#DDE3EB] transition-colors duration-200 hover:bg-white">
                <div className="flex items-center gap-3 self-start pt-1">
                  <span className="h-2 w-2 rounded-full bg-[#E07000]" aria-hidden="true" />
                  <span className="font-mono text-xs tracking-[0.08em] text-[#E07000]">2016</span>
                </div>
                <p className="text-[15px] md:text-base text-[#637083] leading-[1.75] tracking-[-0.005em]">
                  Anticipating future demand, the company established an IT cell for GIS solutions to support emerging needs in mapping-technology application development.
                </p>
              </article>
              <article className="group grid sm:grid-cols-[96px_1fr] gap-4 sm:gap-8 px-3 sm:px-4 py-7 md:py-8 border-b border-[#DDE3EB] transition-colors duration-200 hover:bg-white">
                <div className="flex items-center gap-3 self-start pt-1">
                  <span className="h-2 w-2 rounded-full bg-[#E07000]" aria-hidden="true" />
                  <span className="font-mono text-xs tracking-[0.08em] text-[#E07000]">2025</span>
                </div>
                <p className="text-[15px] md:text-base text-[#637083] leading-[1.75] tracking-[-0.005em]">
                  Custom GIS web application for municipal corporations, integrated with PM Gati Shakti data.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section data-testid="clientele" className="bg-white border-b border-[#DDE3EB] py-14 md:py-16">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 xl:px-16 grid lg:grid-cols-12 gap-9 lg:gap-12 items-center">
          <div className="lg:col-span-3 reveal">
            <div className="eyebrow">Institutional trust</div>
            <h2 className="mt-5 font-heading text-[#243D71] leading-[1.08] tracking-[-0.03em]" style={{ fontSize: "clamp(2.15rem, 3.7vw, 3.2rem)", fontWeight: 650 }}>
              Our Clients
            </h2>
            <p className="mt-5 max-w-sm text-[0.98rem] text-[#637083] leading-[1.7]">
              Trusted by leading infrastructure organizations and institutions for dependable engineering expertise, precision, and execution.
            </p>
          </div>

          <div className="lg:col-span-9 client-marquee overflow-hidden border-y border-[#DDE3EB] bg-white py-2 md:py-3" aria-label="RMCPL client organisations">
            <div className="client-marquee-track">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex shrink-0 items-stretch" aria-hidden={copy === 1 ? "true" : undefined}>
                  {TRUST_CLIENTS.map((client) => (
                    <div key={`${copy}-${client.name}`} className="w-44 md:w-48 h-24 md:h-28 shrink-0 flex items-center justify-center border-r border-[#E3E8EF] px-3 md:px-4">
                      <img
                        src={client.image}
                        alt={copy === 0 ? client.name : ""}
                        loading="lazy"
                        className="w-full h-full max-h-[5.25rem] md:max-h-[6rem] object-contain scale-[1.28] transition-transform duration-300 hover:scale-[1.34]"
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

          <div className="mt-10 reveal">
            <div className="mb-3 flex items-center justify-between gap-5">
              <div className="flex items-center gap-3">
                <span className="font-heading text-[10px] font-bold uppercase tracking-[0.17em] text-[#637083]">Browse by project status</span>
                <span className="h-px w-16 bg-[#DDE3EB]" aria-hidden="true" />
              </div>
              <div className="hidden items-center gap-2 font-heading text-xs font-semibold text-[#243D71] sm:flex" aria-live="polite">
                <span className={`h-2 w-2 rounded-full ${portfolioView === "active" ? "bg-[#E07000] animate-pulse" : "bg-[#637083]"}`} aria-hidden="true" />
                {portfolioView === "active" ? "Viewing active assignments" : "Viewing completed assignments"}
              </div>
            </div>
            <div className="relative grid w-full grid-cols-2 gap-1.5 overflow-hidden rounded-2xl border border-[#D5DEE9] bg-[#F1F4F8] p-1.5 shadow-[0_22px_50px_-38px_rgba(23,41,79,0.75)]" role="tablist" aria-label="Project portfolio type">
              <span
                className="pointer-events-none absolute bottom-1.5 left-1.5 top-1.5 w-[calc(50%-0.5625rem)] overflow-hidden rounded-xl bg-[#243D71] shadow-[0_18px_36px_-22px_rgba(23,41,79,0.95)] transition-transform duration-500 ease-out"
                style={{ transform: portfolioView === "active" ? "translateX(0)" : "translateX(calc(100% + 0.375rem))" }}
                aria-hidden="true"
              >
                <span className="absolute -right-10 -top-14 h-32 w-32 rounded-full bg-white/[0.06]" />
                <span className="absolute inset-x-6 bottom-0 h-0.5 bg-[#E07000]" />
              </span>
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
      className={`group relative z-10 flex min-w-0 items-center gap-3 overflow-hidden rounded-xl px-3 py-4 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#034EA1] focus-visible:ring-offset-2 sm:gap-4 sm:px-6 sm:py-5 ${
        active
          ? "bg-transparent"
          : "bg-transparent hover:bg-white/75"
      }`}
    >
      <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg border transition-colors duration-300 sm:h-12 sm:w-12 ${
        active
          ? "border-white/15 bg-white/10 text-[#F2A14A]"
          : "border-[#DDE3EB] bg-white text-[#637083] group-hover:border-[#BFCBDD] group-hover:text-[#034EA1]"
      }`}>
        <Icon size={19} strokeWidth={1.9} aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className={`block truncate font-heading text-sm font-semibold transition-colors duration-300 sm:text-base md:text-lg ${active ? "text-white" : "text-[#243D71]"}`}>{label}</span>
        <span className={`mt-1 hidden truncate text-xs transition-colors duration-300 sm:block ${active ? "text-white/65" : "text-[#637083]"}`}>{description}</span>
      </span>
      <span className={`ml-auto hidden h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-300 md:grid ${
        active ? "bg-white/10 text-white" : "bg-white text-[#637083] group-hover:text-[#034EA1]"
      }`}>
        <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </button>
  );
}
