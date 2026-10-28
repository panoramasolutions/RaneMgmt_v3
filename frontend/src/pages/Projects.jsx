import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check, History, Radio } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { ACTIVE_PROJECTS, PAST_PROJECTS } from "@/lib/keyProjects";

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const portfolioView = searchParams.get("portfolio") === "past" ? "past" : "active";
  const visibleProjects = portfolioView === "active" ? ACTIVE_PROJECTS : PAST_PROJECTS;
  const categoryCount = new Set(visibleProjects.map((project) => project.category)).size;
  const clientCount = new Set(visibleProjects.map((project) => project.client)).size;

  const selectPortfolio = (view) => {
    setSearchParams({ portfolio: view }, { replace: true });
  };

  return (
    <div data-testid="projects-page" className="bg-white">
      <PageHero
        chapter="Projects · Active and past assignments"
        title="Project Portfolio"
        subtitle="Browse current commissions and completed work across survey, land acquisition, statutory clearance, railway, municipal and GIS assignments."
        image={visibleProjects[0].image}
      />

      <section data-testid="project-summary" className="bg-[#F7F8FA] border-b border-[#DDE3EB]">
        <div className="container-wide grid sm:grid-cols-3 border-x border-[#DDE3EB]">
          <SummaryMetric value={String(visibleProjects.length).padStart(2, "0")} label={`${portfolioView} projects`} />
          <SummaryMetric value={String(categoryCount).padStart(2, "0")} label="Project categories" />
          <SummaryMetric value={String(clientCount).padStart(2, "0")} label="Client organisations" />
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-white border-b border-[#DDE3EB]">
        <div className="container-wide">
          <div className="mb-14 p-2 bg-[#17294F] grid md:grid-cols-2 gap-2 reveal" role="tablist" aria-label="Project portfolio type">
            <PortfolioTab
              active={portfolioView === "active"}
              icon={Radio}
              label="Active Projects"
              description="Current commissions and assignments in focus"
              onClick={() => selectPortfolio("active")}
              controls="project-directory-panel"
            />
            <PortfolioTab
              active={portfolioView === "past"}
              icon={History}
              label="Past Projects"
              description="Completed assignments and delivered outcomes"
              onClick={() => selectPortfolio("past")}
              controls="project-directory-panel"
            />
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end reveal">
            <div className="lg:col-span-6">
              <SectionHeading
                overline="Complete project record"
                title="Key Projects"
                subtitle="Select an assignment to move directly to its overview, scope, outcome and principal highlights."
              />
            </div>
          </div>

          <nav id="project-directory-panel" role="tabpanel" className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#DDE3EB] reveal reveal-stagger" aria-label={`${portfolioView} project directory`}>
            {visibleProjects.map((project, index) => (
              <a key={`${portfolioView}-${project.slug}`} href={`#${project.slug}`} className="group min-h-28 p-5 border-r border-b border-[#DDE3EB] hover:bg-[#F7F8FA] transition-colors">
                <div className="flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 font-mono text-[10px] text-[#E07000]">
                    <span className={`h-1.5 w-1.5 rounded-full ${portfolioView === "active" ? "bg-[#E07000]" : "bg-[#637083]"}`} />
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <ArrowRight size={14} className="text-[#034EA1] group-hover:translate-x-1 transition-transform" />
                </div>
                <span className="block mt-4 font-heading font-semibold leading-snug text-[#243D71] group-hover:text-[#034EA1]">{project.title}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="section-padding bg-[#F7F8FA]">
        <div className="container-wide space-y-12 lg:space-y-16">
          {visibleProjects.map((project, index) => (
            <article key={`${portfolioView}-${project.slug}`} id={project.slug} className="scroll-mt-32 min-w-0 overflow-hidden bg-white border border-[#DDE3EB] reveal">
              <header className="px-6 py-6 md:px-8 lg:px-10 bg-[#243D71] text-white grid md:grid-cols-[70px_1fr_auto] gap-4 md:gap-6 items-center">
                <div className="font-mono text-sm text-[#F2A14A]">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.18em] text-white/55">
                    <span className={`h-1.5 w-1.5 rounded-full ${portfolioView === "active" ? "bg-[#F2A14A] animate-pulse" : "bg-white/50"}`} />
                    {portfolioView} project · {project.category}
                  </div>
                  <h2 className="mt-2 font-heading text-xl md:text-2xl !text-white leading-tight">{project.title}</h2>
                </div>
                <div className="md:text-right">
                  <div className="font-heading text-lg text-white">{project.metric}</div>
                  <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-white/50">Project scale</div>
                </div>
              </header>

              <div className="grid min-w-0 lg:grid-cols-12">
                <div className="min-w-0 lg:col-span-5 border-b lg:border-b-0 lg:border-r border-[#DDE3EB]">
                  <div className="image-frame aspect-[16/10] min-h-0 sm:min-h-72 lg:aspect-auto lg:h-full">
                    <img src={project.image} alt={project.title} loading="lazy" />
                  </div>
                </div>
                <div className="min-w-0 lg:col-span-7 p-6 md:p-8 lg:p-10">
                  <div className="text-[10px] font-heading font-bold uppercase tracking-[0.16em] text-[#034EA1]">Client</div>
                  <div className="mt-2 font-heading font-semibold text-lg text-[#243D71]">{project.client}</div>

                  <div className="mt-8 text-[10px] font-heading font-bold uppercase tracking-[0.16em] text-[#034EA1]">Project overview</div>
                  <p className="mt-3 text-[#637083] leading-relaxed">{project.overview}</p>

                  <div className="mt-8 p-5 bg-[#EEF3FA] border-l-2 border-[#E07000]">
                    <div className="text-[10px] font-heading font-bold uppercase tracking-[0.16em] text-[#243D71]">Project outcome</div>
                    <p className="mt-3 text-sm text-[#637083] leading-relaxed">{project.outcome}</p>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 border-t border-[#DDE3EB]">
                <ProjectList title="Our scope of work" items={project.scope} />
                <ProjectList title="Project highlights" items={project.highlights} bordered />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding bg-white border-t border-[#DDE3EB]">
        <div className="container-wide">
          <div className="bg-[#243D71] px-7 py-12 md:px-12 lg:px-16 lg:py-16 grid lg:grid-cols-12 gap-10 items-center border-l-4 border-[#E07000] reveal">
            <div className="lg:col-span-8">
              <div className="text-xs font-heading font-bold uppercase tracking-[0.16em] text-[#F2A14A]">Project enquiry</div>
              <h2 className="font-heading !text-white mt-6 leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.35rem)", fontWeight: 600 }}>Planning a comparable assignment?</h2>
              <p className="mt-5 text-white/70 max-w-2xl">Share the location, project stage, required service and expected technical deliverables with the RMCPL team.</p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link to="/contact" className="btn-outline-light">Discuss your project <ArrowUpRight size={17} /></Link>
            </div>
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
      className={`group min-w-0 flex items-center gap-4 px-5 py-4 md:px-7 md:py-5 text-left transition-all duration-300 ${
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
      <ArrowRight size={17} className={`ml-auto shrink-0 transition-transform group-hover:translate-x-1 ${active ? "text-[#034EA1]" : "text-white/50"}`} aria-hidden="true" />
    </button>
  );
}

function SummaryMetric({ value, label }) {
  return (
    <div className="px-6 py-8 sm:px-8 sm:[&:not(:first-child)]:border-l border-[#DDE3EB]">
      <div className="font-heading text-3xl text-[#034EA1] font-semibold">{value}</div>
      <div className="mt-2 text-[10px] font-heading font-bold uppercase tracking-[0.14em] text-[#637083]">{label}</div>
    </div>
  );
}

function ProjectList({ title, items, bordered = false }) {
  return (
    <div className={`p-6 md:p-8 lg:p-10 ${bordered ? "border-t lg:border-t-0 lg:border-l border-[#DDE3EB]" : ""}`}>
      <h3 className="font-heading text-xl text-[#243D71]">{title}</h3>
      <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-[#637083] leading-relaxed">
            <Check size={14} className="mt-1 shrink-0 text-[#E07000]" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
