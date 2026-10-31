import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpRight, History, Radio } from "lucide-react";
import PageHero from "@/components/PageHero";
import { ACTIVE_PROJECTS, PAST_PROJECTS } from "@/lib/keyProjects";

export default function Projects() {
  const [searchParams] = useSearchParams();
  const requestedPortfolio = searchParams.get("portfolio") === "past" ? "past" : "active";
  const focusedProject = searchParams.get("focus");
  const clientCount = new Set(
    [...ACTIVE_PROJECTS, ...PAST_PROJECTS].map((project) => project.client)
  ).size;
  const projectCollections = [
    {
      type: "active",
      icon: Radio,
      title: "Active Projects",
      eyebrow: "Currently underway",
      description: "Current commissions and assignments in focus across RMCPL's project portfolio.",
      projects: ACTIVE_PROJECTS,
    },
    {
      type: "past",
      icon: History,
      title: "Past Projects",
      eyebrow: "Completed assignments",
      description: "A record of completed commissions and delivered project work.",
      projects: PAST_PROJECTS,
    },
  ];

  if (requestedPortfolio === "past") projectCollections.reverse();

  useEffect(() => {
    if (!focusedProject) return undefined;

    const targetId = `${requestedPortfolio}-${focusedProject}`;
    let secondFrame;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        const target = document.getElementById(targetId);
        if (!target) return;

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      if (secondFrame) window.cancelAnimationFrame(secondFrame);
    };
  }, [focusedProject, requestedPortfolio]);

  return (
    <div data-testid="projects-page" className="bg-white">
      <PageHero
        chapter="Projects · Active and past assignments"
        title="Project Portfolio"
        subtitle="Explore current commissions and completed assignments through concise project records covering the client, project scale and work undertaken."
        image={ACTIVE_PROJECTS[0].image}
      />

      <section data-testid="project-summary" className="border-b border-[#DDE3EB] bg-[#F7F8FA]">
        <div className="container-wide grid sm:grid-cols-3 border-x border-[#DDE3EB]">
          <SummaryMetric value={String(ACTIVE_PROJECTS.length).padStart(2, "0")} label="Active projects" />
          <SummaryMetric value={String(PAST_PROJECTS.length).padStart(2, "0")} label="Past projects" />
          <SummaryMetric value={String(clientCount).padStart(2, "0")} label="Client organisations" />
        </div>
      </section>

      <main className="section-padding border-b border-[#DDE3EB] bg-[#F7F8FA]">
        <div className="container-wide space-y-20 lg:space-y-28">
          {projectCollections.map((collection) => (
            <ProjectCollection
              key={collection.type}
              {...collection}
              focusedProject={collection.type === requestedPortfolio ? focusedProject : null}
            />
          ))}
        </div>
      </main>

      <section className="section-padding border-t border-[#DDE3EB] bg-white">
        <div className="container-wide">
          <div className="grid items-center gap-10 border-l-4 border-[#E07000] bg-[#243D71] px-7 py-12 md:px-12 lg:grid-cols-12 lg:px-16 lg:py-16 reveal">
            <div className="lg:col-span-8">
              <div className="font-heading text-xs font-bold uppercase tracking-[0.16em] text-[#F2A14A]">Project enquiry</div>
              <h2 className="mt-6 font-heading leading-tight !text-white" style={{ fontSize: "clamp(2rem, 4vw, 3.35rem)", fontWeight: 600 }}>Planning a comparable assignment?</h2>
              <p className="mt-5 max-w-2xl text-white/70">Share the location, project stage, required service and expected technical deliverables with the RMCPL team.</p>
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

function ProjectCollection({ type, icon: Icon, title, eyebrow, description, projects, focusedProject }) {
  const isActive = type === "active";

  return (
    <section id={`${type}-projects`} data-testid={`${type}-projects-section`} aria-labelledby={`${type}-projects-heading`} className={`scroll-mt-28 reveal ${focusedProject ? "is-visible" : ""}`}>
      <header className={`relative overflow-hidden border-y border-[#DDE3EB] px-5 py-5 md:px-7 md:py-6 ${
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
              <span className={`h-2 w-2 rounded-full ${isActive ? "animate-pulse bg-[#E07000]" : "bg-[#637083]"}`} aria-hidden="true" />
              {eyebrow}
            </div>
            <h2 id={`${type}-projects-heading`} className="mt-1.5 font-heading text-xl font-semibold text-[#243D71] md:text-2xl">{title}</h2>
            <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-[#637083]">{description}</p>
          </div>

          <div className="shrink-0 md:text-right">
            <div className="font-heading text-2xl font-semibold text-[#243D71]">{String(projects.length).padStart(2, "0")}</div>
            <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-[#637083]">Project records</div>
          </div>
        </div>
      </header>

      <div className="mt-9 space-y-8 lg:mt-10 lg:space-y-10">
        {projects.map((project, index) => (
          <ProjectRecord
            key={`${type}-${project.slug}`}
            project={project}
            type={type}
            imageRight={index % 2 === 1}
            focused={project.slug === focusedProject}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectRecord({ project, type, imageRight, focused }) {
  return (
    <article
      id={`${type}-${project.slug}`}
      data-focused={focused ? "true" : undefined}
      aria-current={focused ? "true" : undefined}
      className={`scroll-mt-28 grid min-w-0 overflow-hidden border bg-white transition-[border-color,box-shadow] duration-500 reveal lg:grid-cols-12 ${focused ? "is-visible" : ""} ${
        focused
          ? "border-[#E07000] shadow-[0_28px_65px_-36px_rgba(224,112,0,0.38)] ring-2 ring-[#E07000]/15"
          : "border-[#DDE3EB] shadow-[0_24px_55px_-46px_rgba(23,41,79,0.7)]"
      }`}
    >
      <div className={`min-w-0 border-b border-[#DDE3EB] lg:col-span-5 lg:border-b-0 ${imageRight ? "lg:order-2 lg:border-l" : "lg:border-r"}`}>
        <div className="image-frame aspect-[16/10] min-h-0 sm:min-h-80 lg:aspect-auto lg:h-full lg:min-h-[430px]">
          <img src={project.image} alt={project.title} loading="lazy" />
        </div>
      </div>

      <div className={`min-w-0 p-6 md:p-9 lg:col-span-7 lg:p-11 xl:p-12 ${imageRight ? "lg:order-1" : ""}`}>
        <h3 className="max-w-3xl font-heading text-2xl font-semibold leading-[1.2] text-[#243D71] md:text-3xl">
          {project.title}
        </h3>

        <div className="mt-7 grid border-y border-[#DDE3EB] sm:grid-cols-[minmax(0,1fr)_180px]">
          <div className="py-5 sm:pr-7">
            <div className="font-heading text-[9px] font-bold uppercase tracking-[0.16em] text-[#034EA1]">Client</div>
            <p className="mt-2 font-heading text-base font-semibold leading-relaxed text-[#243D71]">{project.client}</p>
          </div>
          <div className="border-t border-[#DDE3EB] py-5 sm:border-l sm:border-t-0 sm:pl-7">
            <div className="font-heading text-[9px] font-bold uppercase tracking-[0.16em] text-[#034EA1]">Project scale</div>
            <p className="mt-2 font-heading text-lg font-semibold text-[#243D71]">{project.metric}</p>
          </div>
        </div>

        <div className="mt-7">
          <div className="flex items-center gap-3 font-heading text-[10px] font-bold uppercase tracking-[0.16em] text-[#E07000]">
            <span className="h-px w-8 bg-[#E07000]" aria-hidden="true" />
            Project overview
          </div>
          <p className="mt-4 text-[15px] leading-7 text-[#637083] md:text-base md:leading-8">{project.overview}</p>
        </div>
      </div>
    </article>
  );
}

function SummaryMetric({ value, label }) {
  return (
    <div className="border-[#DDE3EB] px-6 py-8 sm:px-8 sm:[&:not(:first-child)]:border-l">
      <div className="font-heading text-3xl font-semibold text-[#034EA1]">{value}</div>
      <div className="mt-2 font-heading text-[10px] font-bold uppercase tracking-[0.14em] text-[#637083]">{label}</div>
    </div>
  );
}
