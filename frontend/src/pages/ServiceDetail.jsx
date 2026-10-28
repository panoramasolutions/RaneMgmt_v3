import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  FileText,
  MapPin,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { getServiceBySlug, SERVICE_CATALOG } from "@/lib/serviceCatalog";

const sectionId = (title) =>
  title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function ServiceDetail() {
  const { serviceSlug } = useParams();
  const service = getServiceBySlug(serviceSlug);

  if (!service) return <Navigate to="/services" replace />;

  const projectCount = service.subservices.reduce(
    (total, item) => total + item.projects.length,
    0
  );
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
            <RecordFact label="Published project references" value={String(projectCount).padStart(2, "0")} />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <aside className="lg:col-span-3 lg:sticky lg:top-28 reveal reveal-left">
            <div className="border-t-2 border-[#243D71]">
              <div className="py-5 border-b border-[#DDE3EB]">
                <div className="text-[10px] font-heading font-bold uppercase tracking-[0.16em] text-[#034EA1]">On this page</div>
                <h2 className="mt-2 font-heading text-xl text-[#243D71]">Service contents</h2>
              </div>
              <nav aria-label={`${service.title} page sections`}>
                {service.subservices.map((item, index) => (
                  <a key={item.title} href={`#${sectionId(item.title)}`} className="group grid grid-cols-[28px_1fr] gap-3 py-4 border-b border-[#DDE3EB] text-sm">
                    <span className="font-mono text-[10px] text-[#E07000]">{String(index + 1).padStart(2, "0")}</span>
                    <span className="font-heading font-semibold leading-snug text-[#637083] group-hover:text-[#034EA1] transition-colors">{item.title}</span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="mt-8 p-5 bg-[#EEF3FA] border-l-2 border-[#E07000]">
              <div className="text-[10px] font-heading font-bold uppercase tracking-[0.14em] text-[#034EA1]">Need this service?</div>
              <p className="mt-3 text-sm text-[#637083] leading-relaxed">Share your project location, stage and required output.</p>
              <Link to="/contact" className="editorial-link mt-5">Submit requirement <ArrowUpRight size={15} /></Link>
            </div>
          </aside>

          <div className="lg:col-span-8 lg:col-start-5">
            <div className="pb-12 lg:pb-16 border-b border-[#DDE3EB] reveal">
              <div className="eyebrow">Service overview</div>
              <h2 className="mt-6 font-heading text-[#243D71] leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.35rem)", fontWeight: 600 }}>What this service covers.</h2>
              <p className="mt-6 text-lg text-[#637083] leading-relaxed max-w-3xl">{service.summary}</p>
            </div>

            <div className="mt-12 space-y-12">
              {service.subservices.map((item, index) => (
                <article
                  key={item.title}
                  id={sectionId(item.title)}
                  className="scroll-mt-28 border border-[#DDE3EB] bg-white reveal"
                >
                  <header className="grid grid-cols-[auto_1fr_auto] gap-4 items-center px-6 md:px-8 py-5 bg-[#243D71]">
                    <span className="font-mono text-xs text-[#F2A14A]">{String(index + 1).padStart(2, "0")}</span>
                    <span className="text-[10px] font-heading font-bold uppercase tracking-[0.16em] text-white/65">Service scope</span>
                    <FileText size={17} className="text-white/75" aria-hidden="true" />
                  </header>

                  <div className="grid md:grid-cols-2">
                    <div className="image-frame aspect-[4/3] md:aspect-auto md:min-h-[330px]">
                      <img src={item.image} alt={`${item.title} service`} loading="lazy" />
                    </div>
                    <div className="p-7 md:p-9 flex flex-col justify-center">
                      <h2 className="font-heading text-[#243D71] leading-tight" style={{ fontSize: "clamp(1.55rem, 2.5vw, 2.25rem)", fontWeight: 600 }}>{item.title}</h2>
                      <p className="mt-5 text-[#637083] leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {(item.projects.length > 0 || item.features.length > 0) && (
                    <div className={`grid ${item.projects.length > 0 && item.features.length > 0 ? "md:grid-cols-2" : ""} border-t border-[#DDE3EB]`}>
                      {item.projects.length > 0 && (
                        <div className="p-7 md:p-8 md:[&:not(:only-child)]:border-r border-[#DDE3EB]">
                          <div className="flex items-center justify-between gap-4">
                            <h3 className="text-xs font-heading font-bold uppercase tracking-[0.16em] text-[#243D71]">Client projects</h3>
                            <span className="font-mono text-[10px] text-[#E07000]">{String(item.projects.length).padStart(2, "0")}</span>
                          </div>
                          <ul className="mt-5 space-y-3">
                            {item.projects.map((project) => (
                              <li key={project} className="flex gap-2 text-sm text-[#637083] leading-snug">
                                <MapPin size={14} className="mt-0.5 shrink-0 text-[#E07000]" aria-hidden="true" />{project}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {item.features.length > 0 && (
                        <div className="p-7 md:p-8 bg-[#F7F8FA]">
                          <h3 className="text-xs font-heading font-bold uppercase tracking-[0.16em] text-[#243D71]">Key features</h3>
                          <ul className="mt-5 space-y-3">
                            {item.features.map((feature) => (
                              <li key={feature} className="flex gap-2 text-sm text-[#1D2938]">
                                <Check size={15} className="mt-0.5 shrink-0 text-[#034EA1]" aria-hidden="true" />{feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </article>
              ))}
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

