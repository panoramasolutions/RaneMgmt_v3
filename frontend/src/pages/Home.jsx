import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Check,
  History,
  Pause,
  Play,
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
import { HOME_ACTIVE_PROJECTS, HOME_PAST_PROJECTS, KEY_PROJECTS } from "@/lib/keyProjects";

const WHY_RANE = [
  { title: "Experience", text: "Established in 1995 with decades of land, survey and government consulting work." },
  { title: "Expert team", text: "Licensed surveyors, engineers, GIS specialists and land-revenue professionals." },
  { title: "Modern technology", text: "DGPS, ETS, drones, GIS tools and application development support field delivery." },
  { title: "Comprehensive services", text: "Survey, records, acquisition, planning, geospatial systems and statutory studies." },
  { title: "Versatility", text: "Services adapt to government, semi-government and private-sector requirements." },
  { title: "Reliability", text: "Accurate information supports planning, approvals and confident project decisions." },
];

const projectImage = (slug) => KEY_PROJECTS.find((project) => project.slug === slug)?.image;

const SECTOR_STORIES = [
  {
    title: "Highways & Road Infrastructure",
    text: "Survey and land support for expressways, corridors and major road networks.",
    images: [
      projectImage("mumbai-pune-expressway-missing-link"),
      projectImage("samruddhi-mahamarg-package-5"),
    ],
  },
  {
    title: "Rail & Transit Networks",
    text: "Geospatial and land-acquisition expertise for rail and transit corridors.",
    images: [
      projectImage("central-railway-mobile-lidar-survey"),
      projectImage("dfccil-western-dedicated-freight-corridor"),
    ],
  },
  {
    title: "Water & Utility Infrastructure",
    text: "Engineering surveys for water-supply and essential utility networks.",
    images: [
      projectImage("mumbai-water-supply-infrastructure-survey"),
      projectImage("uttan-drone-survey-contour-mapping"),
    ],
  },
  {
    title: "Urban Planning & City Surveys",
    text: "Spatial records for municipal planning, property mapping and governance.",
    images: [
      projectImage("thane-city-survey-property-mapping"),
      projectImage("khalapur-existing-land-use-plan"),
    ],
  },
  {
    title: "Land Acquisition & Records",
    text: "Land, revenue-record and acquisition support for infrastructure delivery.",
    images: [
      projectImage("samruddhi-mahamarg-package-5"),
      projectImage("mumbai-pune-expressway-missing-link"),
    ],
  },
  {
    title: "GIS & Digital Mapping",
    text: "Digital mapping and GIS applications that turn field data into planning intelligence.",
    images: [
      projectImage("uttan-drone-survey-contour-mapping"),
      projectImage("thane-city-survey-property-mapping"),
    ],
  },
];

export default function Home() {
  const [sectorPage, setSectorPage] = useState(0);
  const [sectorPaused, setSectorPaused] = useState(false);
  const [sectorInteracting, setSectorInteracting] = useState(false);

  useEffect(() => {
    if (sectorPaused || sectorInteracting || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const timer = window.setInterval(() => {
      setSectorPage((current) => (current + 1) % SECTOR_STORIES.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, [sectorPaused, sectorInteracting]);

  const changeSectorPage = (direction) => {
    setSectorPage((current) => (current + direction + SECTOR_STORIES.length) % SECTOR_STORIES.length);
  };

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

      <section data-testid="sectors-we-serve" className="border-b border-[#DDE3EB] bg-white">
        <div className="container-wide py-16 md:py-20 lg:py-24">
          <div className="grid items-end gap-8 lg:grid-cols-12 reveal">
            <div className="lg:col-span-7">
              <SectionHeading
                overline="RMCPL sector portfolio"
                title="Sectors We Serve"
                subtitle="A view of the infrastructure and development segments supported by RMCPL's surveying, land, GIS and consultancy expertise."
              />
            </div>
            <div className="hidden lg:col-span-4 lg:col-start-9 lg:block lg:text-right">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#637083]">
                One sector story at a time
              </span>
            </div>
          </div>

          <div
            className="mt-10"
            role="region"
            aria-roledescription="carousel"
            aria-label="RMCPL sectors"
            onMouseEnter={() => setSectorInteracting(true)}
            onMouseLeave={() => setSectorInteracting(false)}
            onFocusCapture={() => setSectorInteracting(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setSectorInteracting(false);
            }}
          >
            <article key={sectorPage} className="sector-slide-enter overflow-hidden border border-[#DDE3EB] bg-white shadow-[0_22px_52px_-42px_rgba(23,41,79,0.75)]">
              <div className="grid gap-px bg-[#DDE3EB] md:grid-cols-2">
                {SECTOR_STORIES[sectorPage].images.map((image, index) => (
                  <div key={`${SECTOR_STORIES[sectorPage].title}-${index}`} className="image-frame group relative aspect-[16/10] overflow-hidden bg-[#EEF2F7] md:aspect-[16/9]">
                    <img
                      src={image}
                      alt={`${SECTOR_STORIES[sectorPage].title} project view ${index + 1}`}
                      loading="lazy"
                      className="transition-transform duration-700 group-hover:scale-[1.025]"
                    />
                  </div>
                ))}
              </div>
              <div className="border-t-2 border-[#E07000] px-5 py-6 md:px-8 md:py-7">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-[#243D71] md:text-2xl">
                    {SECTOR_STORIES[sectorPage].title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#637083] md:text-base">
                    {SECTOR_STORIES[sectorPage].text}
                  </p>
                </div>
              </div>
            </article>

            <div className="mt-7 flex flex-col gap-5 border-t border-[#DDE3EB] pt-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2" aria-label={`Sector slide ${sectorPage + 1} of ${SECTOR_STORIES.length}`}>
                {SECTOR_STORIES.map((sector, index) => (
                  <button
                    key={sector.title}
                    type="button"
                    onClick={() => setSectorPage(index)}
                    aria-label={`Show sector slide ${index + 1}`}
                    aria-current={sectorPage === index ? "true" : undefined}
                    className={`h-1.5 rounded-full transition-all duration-300 ${sectorPage === index ? "w-9 bg-[#E07000]" : "w-5 bg-[#CDD8E7] hover:bg-[#8FA2BC]"}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button type="button" onClick={() => changeSectorPage(-1)} className="grid h-10 w-10 place-items-center border border-[#DDE3EB] bg-white text-[#243D71] transition-colors hover:border-[#9FB0C7] hover:text-[#034EA1]" aria-label="Previous sector slide">
                  <ChevronLeft size={18} aria-hidden="true" />
                </button>
                <button type="button" onClick={() => setSectorPaused((current) => !current)} className="inline-flex h-10 items-center gap-2 border border-[#DDE3EB] bg-white px-4 font-heading text-xs font-semibold text-[#243D71] transition-colors hover:border-[#9FB0C7] hover:text-[#034EA1]" aria-label={sectorPaused ? "Resume automatic sector slides" : "Pause automatic sector slides"}>
                  {sectorPaused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}
                  {sectorPaused ? "Play" : "Pause"}
                </button>
                <button type="button" onClick={() => changeSectorPage(1)} className="grid h-10 w-10 place-items-center border border-[#DDE3EB] bg-white text-[#243D71] transition-colors hover:border-[#9FB0C7] hover:text-[#034EA1]" aria-label="Next sector slide">
                  <ChevronRight size={18} aria-hidden="true" />
                </button>
              </div>
            </div>
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
            <Link to="/projects" data-testid="projects-view-all" className="btn-primary shrink-0">
              View detailed projects <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="mt-12 space-y-16 lg:space-y-20">
            <ProjectPortfolioGroup
              type="active"
              icon={Radio}
              title="Active Projects"
              eyebrow="Currently underway"
              description="Assignments currently in focus across RMCPL's survey, land, infrastructure and geospatial portfolio."
              projects={HOME_ACTIVE_PROJECTS}
            />
            <ProjectPortfolioGroup
              type="past"
              icon={History}
              title="Past Projects"
              eyebrow="Completed assignments"
              description="A selected record of completed commissions and delivered project work."
              projects={HOME_PAST_PROJECTS}
            />
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
              <p className="mt-5 text-white/70 max-w-2xl">Discuss your survey, land, planning, geospatial, feasibility or clearance requirement with the Rane team.</p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/75"><a href={`tel:${CONTACT.phones[0].replace(/\s/g, "")}`} className="hover:text-white">{CONTACT.phones[0]}</a><a href={`mailto:${CONTACT.emails[0]}`} className="hover:text-white">{CONTACT.emails[0]}</a></div>
            </div>
            <div className="lg:col-span-4 lg:text-right"><Link to="/contact" data-testid="final-cta-primary" className="btn-outline-light">Submit an enquiry <ArrowUpRight size={17} /></Link></div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectPortfolioGroup({ type, icon: Icon, title, eyebrow, description, projects }) {
  const isActive = type === "active";

  return (
    <section data-testid={`${type}-project-group`} aria-labelledby={`${type}-projects-title`} className="reveal">
      <div className={`relative overflow-hidden border-y border-[#DDE3EB] px-5 py-5 md:px-6 md:py-6 ${
        isActive
          ? "bg-[linear-gradient(90deg,#FFF7ED_0%,#FBFCFE_46%,#FFFFFF_100%)]"
          : "bg-[linear-gradient(90deg,#F1F4F8_0%,#FBFCFE_46%,#FFFFFF_100%)]"
      }`}>
        <span className={`absolute inset-y-0 left-0 w-1 ${isActive ? "bg-[#E07000]" : "bg-[#243D71]"}`} aria-hidden="true" />
        <div className="flex flex-col gap-5 md:flex-row md:items-center">
          <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-lg border ${
            isActive
              ? "border-[#F4D2AE] bg-white text-[#E07000]"
              : "border-[#CDD8E7] bg-white text-[#243D71]"
          }`}>
            <Icon size={20} strokeWidth={1.9} aria-hidden="true" />
          </span>

          <div className="min-w-0 flex-1">
            <div className={`flex items-center gap-2 font-heading text-[10px] font-bold uppercase tracking-[0.16em] ${isActive ? "text-[#E07000]" : "text-[#637083]"}`}>
              <span className={`h-2 w-2 rounded-full ${isActive ? "bg-[#E07000] animate-pulse" : "bg-[#637083]"}`} aria-hidden="true" />
              {eyebrow}
            </div>
            <h3 id={`${type}-projects-title`} className="mt-1.5 font-heading text-xl font-semibold text-[#243D71] md:text-2xl">{title}</h3>
            <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-[#637083]">{description}</p>
          </div>

          <Link to={`/projects?portfolio=${type}`} className="editorial-link shrink-0 self-start md:self-center">
            View all {type} projects <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      <div className="mt-7 grid gap-7 md:grid-cols-2 lg:grid-cols-3 reveal reveal-stagger">
        {projects.map((project) => (
          <article key={`${type}-${project.slug}`} className="group flex overflow-hidden border border-[#DDE3EB] bg-white motion-card">
            <Link to={`/projects?portfolio=${type}&focus=${project.slug}`} className="flex w-full flex-col" aria-label={`View details for ${project.title}`}>
              <div className="image-frame relative aspect-[16/10]">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="absolute left-0 top-0 flex items-center gap-2 bg-white/95 px-4 py-2.5 backdrop-blur-sm">
                  <span className={`h-2 w-2 rounded-full ${isActive ? "bg-[#E07000] animate-pulse" : "bg-[#637083]"}`} aria-hidden="true" />
                  <span className="font-heading text-[9px] font-bold uppercase tracking-[0.14em] text-[#243D71]">
                    {isActive ? "Active project" : "Past project"}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <h4 className="font-heading text-[1.35rem] font-semibold leading-[1.25] text-[#243D71] transition-colors group-hover:text-[#034EA1] md:text-2xl">{project.title}</h4>
                <div className="mt-5 grid flex-1 gap-5 border-t border-[#DDE3EB] pt-5 sm:grid-cols-[minmax(0,1fr)_auto]">
                  <div className="min-w-0">
                    <div className="font-heading text-[9px] font-bold uppercase tracking-[0.14em] text-[#637083]">Client</div>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-[#243D71]">{project.client}</p>
                  </div>
                  <div className="sm:min-w-24 sm:border-l sm:border-[#DDE3EB] sm:pl-5">
                    <div className="font-heading text-[9px] font-bold uppercase tracking-[0.14em] text-[#637083]">Project scale</div>
                    <p className="mt-2 font-heading text-base font-semibold text-[#034EA1]">{project.metric}</p>
                  </div>
                </div>
                <span className="editorial-link mt-6 border-t border-[#DDE3EB] pt-5">View project details <ArrowRight size={15} /></span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
