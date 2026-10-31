import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  FileText,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { getServiceBySlug, SERVICE_CATALOG } from "@/lib/serviceCatalog";

const sectionId = (title) =>
  title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function ServiceDetail() {
  const { serviceSlug } = useParams();
  const service = getServiceBySlug(serviceSlug);
  const firstSectionId = service?.subservices[0]
    ? sectionId(service.subservices[0].title)
    : "";
  const [activeSection, setActiveSection] = useState(firstSectionId);

  useEffect(() => {
    setActiveSection(firstSectionId);
    if (!service) return undefined;

    const sections = service.subservices
      .map((item) => document.getElementById(sectionId(item.title)))
      .filter(Boolean);
    let frame;

    const updateActiveSection = () => {
      frame = undefined;
      const activationLine = 150;
      const passedSections = sections.filter(
        (section) => section.getBoundingClientRect().top <= activationLine
      );
      const currentSection = passedSections[passedSections.length - 1] || sections[0];
      if (currentSection) setActiveSection(currentSection.id);
    };

    const queueUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", queueUpdate, { passive: true });
    window.addEventListener("resize", queueUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", queueUpdate);
      window.removeEventListener("resize", queueUpdate);
    };
  }, [firstSectionId, service]);

  const showSection = (id) => {
    setActiveSection(id);
    const target = document.getElementById(id);
    if (!target) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  if (!service) return <Navigate to="/services" replace />;

  const currentIndex = SERVICE_CATALOG.findIndex((item) => item.slug === service.slug);
  const relatedServices = [
    ...SERVICE_CATALOG.slice(currentIndex + 1),
    ...SERVICE_CATALOG.slice(0, currentIndex),
  ].slice(0, 4);

  return (
    <div data-testid={`service-detail-${service.slug}`} className="bg-white">
      <PageHero
        chapter={`Services · ${service.group}`}
        title={service.title}
        subtitle={service.tagline}
        image={service.image}
      />

      <section data-testid="service-record-summary" className="bg-[#F7F8FA] border-b border-[#DDE3EB]">
        <div className="container-wide py-10 lg:py-12">
          <Link to="/services" className="editorial-link"><ArrowLeft size={15} /> Back to service directory</Link>
          <div className="mt-8 grid sm:grid-cols-3 border-y border-[#DDE3EB] reveal reveal-stagger">
            <RecordFact label="Classification" value={service.group} />
            <RecordFact label="Service scopes" value={String(service.subservices.length).padStart(2, "0")} />
            <RecordFact label="Delivery approach" value="Integrated" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] border border-[#DDE3EB] bg-[#F7F8FA] overflow-hidden">
            <div className="image-frame aspect-[16/10] md:aspect-auto md:min-h-[390px]">
              <img src={service.image} alt={`${service.title} service`} />
            </div>
            <div className="p-7 md:p-9 lg:p-11 flex flex-col justify-center">
              <div className="eyebrow">Service overview</div>
              <h2 className="mt-6 font-heading text-[#243D71] leading-tight" style={{ fontSize: "clamp(1.9rem, 3vw, 2.8rem)", fontWeight: 600 }}>What this service covers.</h2>
              <p className="mt-6 text-[#637083] leading-[1.8]">{service.summary}</p>
            </div>
          </div>

          <div className="mt-14 lg:mt-16 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <aside className="lg:col-span-4 lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto lg:pr-2">
              <div className="border-t-2 border-[#243D71]">
                <div className="py-5 border-b border-[#DDE3EB]">
                  <div className="text-[10px] font-heading font-bold uppercase tracking-[0.16em] text-[#034EA1]">Explore this service</div>
                  <h2 className="mt-2 font-heading text-xl text-[#243D71]">Service contents</h2>
                  <p className="mt-2 text-xs text-[#637083]">Select a scope to jump directly to its details.</p>
                </div>
                <nav aria-label={`${service.title} service contents`}>
                  {service.subservices.map((item, index) => {
                    const id = sectionId(item.title);
                    const isActive = activeSection === id;

                    return (
                      <button
                        key={item.title}
                        type="button"
                        aria-current={isActive ? "true" : undefined}
                        onClick={() => showSection(id)}
                        className={`group relative w-full grid grid-cols-[32px_1fr_auto] items-center gap-3 py-4 pr-4 border-b border-[#DDE3EB] text-left text-sm transition-colors ${
                          isActive ? "bg-[#EEF3FA]" : "hover:bg-[#F7F8FA]"
                        }`}
                      >
                        <span className={`absolute inset-y-0 left-0 w-0.5 transition-colors ${isActive ? "bg-[#E07000]" : "bg-transparent"}`} aria-hidden="true" />
                        <span className={`font-mono text-[10px] pl-2 ${isActive ? "text-[#E07000]" : "text-[#9A6A34]"}`}>{String(index + 1).padStart(2, "0")}</span>
                        <span className={`font-heading font-semibold leading-snug transition-colors ${isActive ? "text-[#034EA1]" : "text-[#637083] group-hover:text-[#034EA1]"}`}>{item.title}</span>
                        <ArrowRight size={14} className={`transition-transform ${isActive ? "translate-x-0 text-[#034EA1]" : "-translate-x-1 text-[#A6B2C2] group-hover:translate-x-0"}`} aria-hidden="true" />
                      </button>
                    );
                  })}
                </nav>
              </div>

              <div className="mt-8 p-5 bg-[#EEF3FA] border-l-2 border-[#E07000]">
                <div className="text-[10px] font-heading font-bold uppercase tracking-[0.14em] text-[#034EA1]">Need this service?</div>
                <p className="mt-3 text-sm text-[#637083] leading-relaxed">Share your project location, stage and required output.</p>
                <Link to="/contact" className="editorial-link mt-5">Submit requirement <ArrowUpRight size={15} /></Link>
              </div>
            </aside>

            <div className="lg:col-span-8 space-y-10">
              {service.subservices.map((item, index) => {
                const id = sectionId(item.title);
                const isActive = activeSection === id;

                return (
                  <article
                    key={item.title}
                    id={id}
                    className={`scroll-mt-28 border bg-white transition-[border-color,box-shadow] duration-300 ${
                      isActive
                        ? "border-[#034EA1] shadow-[0_18px_45px_rgba(36,61,113,0.10)]"
                        : "border-[#DDE3EB]"
                    }`}
                  >
                    <header className={`grid grid-cols-[auto_1fr_auto] gap-4 items-center px-6 md:px-8 py-5 transition-colors ${
                      isActive ? "bg-[#243D71]" : "bg-[#F7F8FA] border-b border-[#DDE3EB]"
                    }`}>
                      <span className={`font-mono text-xs ${isActive ? "text-[#F2A14A]" : "text-[#E07000]"}`}>{String(index + 1).padStart(2, "0")}</span>
                      <span className={`text-[10px] font-heading font-bold uppercase tracking-[0.16em] ${isActive ? "text-white/70" : "text-[#637083]"}`}>Service scope</span>
                      <FileText size={17} className={isActive ? "text-white/80" : "text-[#034EA1]"} aria-hidden="true" />
                    </header>

                    <div className="p-7 md:p-10">
                      <h2 className="font-heading text-[#243D71] leading-tight" style={{ fontSize: "clamp(1.65rem, 2.6vw, 2.35rem)", fontWeight: 600 }}>{item.title}</h2>
                      <p className="mt-5 max-w-3xl text-[#637083] leading-[1.8]">{item.description}</p>
                    </div>

                    {(item.scopeOfServices.length > 0 || item.applications.length > 0 || item.deliverables) && (
                      <div className="grid md:grid-cols-2 border-t border-[#DDE3EB]">
                        {item.scopeOfServices.length > 0 && (
                          <div className="p-7 md:p-8 md:border-r border-[#DDE3EB]">
                            <h3 className="text-xs font-heading font-bold uppercase tracking-[0.16em] text-[#243D71]">Scope of services</h3>
                            <ul className="mt-5 space-y-3">
                              {item.scopeOfServices.map((entry) => (
                                <li key={entry} className="flex gap-3 text-sm text-[#637083] leading-relaxed">
                                  <Check size={15} className="mt-1 shrink-0 text-[#E07000]" aria-hidden="true" />{entry}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {(item.applications.length > 0 || item.deliverables) && (
                          <div className="p-7 md:p-8 bg-[#F7F8FA]">
                            {item.applications.length > 0 && (
                              <div>
                                <h3 className="text-xs font-heading font-bold uppercase tracking-[0.16em] text-[#243D71]">Applications</h3>
                                <p className="mt-4 text-sm text-[#637083] leading-relaxed">{item.applications.join(" · ")}</p>
                              </div>
                            )}
                            {item.deliverables && (
                              <div className={item.applications.length > 0 ? "mt-7 pt-7 border-t border-[#DDE3EB]" : ""}>
                                <h3 className="text-xs font-heading font-bold uppercase tracking-[0.16em] text-[#243D71]">Key deliverables</h3>
                                <p className="mt-4 text-sm text-[#637083] leading-relaxed">{item.deliverables}</p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F7F8FA] border-y border-[#DDE3EB]">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 reveal">
            <div><div className="eyebrow">Continue exploring</div><h2 className="font-heading text-[#243D71] mt-5 text-3xl">Related service records</h2></div>
            <Link to="/services" className="editorial-link">Full directory <ArrowRight size={16} /></Link>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 border-t-2 border-[#243D71] reveal reveal-stagger">
            {relatedServices.map((item, index) => (
              <Link key={item.slug} to={`/services/${item.slug}`} className="group motion-card py-7 sm:px-6 border-b sm:[&:not(:first-child)]:border-l border-[#DDE3EB] bg-white">
                <div className="flex items-center justify-between gap-3"><span className="font-mono text-[10px] text-[#E07000]">{String(index + 1).padStart(2, "0")}</span><ArrowUpRight size={15} className="text-[#034EA1] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></div>
                <span className="block mt-5 font-heading font-semibold text-[#243D71] group-hover:text-[#034EA1]">{item.title}</span>
                <span className="block mt-2 text-xs text-[#637083]">{item.subservices.length} service scopes</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide bg-[#243D71] px-7 py-12 md:px-12 lg:px-16 lg:py-16 grid lg:grid-cols-12 gap-10 items-center border-l-4 border-[#E07000] reveal">
          <div className="lg:col-span-8"><div className="text-xs font-heading font-bold uppercase tracking-[0.16em] text-[#F2A14A]">Project discussion</div><h2 className="font-heading !text-white mt-6 leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.3rem)", fontWeight: 600 }}>Discuss your {service.title.toLowerCase()} requirement.</h2><p className="mt-4 text-white/70 max-w-2xl">Tell the team about your project location, current records, expected deliverables and timeline.</p></div>
          <div className="lg:col-span-4 lg:text-right"><Link to="/contact" className="btn-outline-light">Contact the team <ArrowUpRight size={17} /></Link></div>
        </div>
      </section>
    </div>
  );
}

function RecordFact({ label, value }) {
  return (
    <div className="px-5 py-5 sm:px-8 sm:[&:not(:first-child)]:border-l border-[#DDE3EB]">
      <div className="text-[10px] font-heading font-bold uppercase tracking-[0.14em] text-[#637083]">{label}</div>
      <div className="mt-2 font-heading text-xl font-semibold text-[#243D71]">{value}</div>
    </div>
  );
}

