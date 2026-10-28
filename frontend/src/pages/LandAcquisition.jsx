import { Link } from "react-router-dom";
import { ArrowUpRight, AlertTriangle, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { ACQUISITION_STAGES } from "@/lib/data";

const CHALLENGES = [
  { title: "Ownership Complexity", text: "Fragmented inheritance, undivided shares, missing chain of title." },
  { title: "Documentation Issues", text: "Inconsistent 7/12, mutation gaps and untraceable historical entries." },
  { title: "Stakeholder Coordination", text: "Hundreds of landholders with conflicting interests and timelines." },
  { title: "Regulatory Approvals", text: "Layered approvals across revenue, environment and local bodies." },
];

const SOLUTIONS = [
  { title: "End-to-End Statutory Closure", text: "From identification to compensation closure under one accountable team." },
  { title: "Survey-Backed Defensibility", text: "Every acquisition map backed by DGPS or drone survey—audit ready." },
  { title: "Stakeholder Programme", text: "Structured outreach, grievance handling and government liaison." },
  { title: "Regulatory Navigation", text: "Decades of experience across revenue, RFCTLARR and state-specific rules." },
];

const STORIES = [
  { title: "Western Dedicated Freight Corridor", metric: "JNPT → Bhilad", text: "Land acquisition consultancy for a strategic section—revenue records, JMS and coordination." },
  { title: "Mumbai–Pune Missing Link", metric: "MSRDC", text: "Advisory across the engineering-intensive Sahyadri section." },
  { title: "Samruddhi Mahamarg · Package 5", metric: "MSRDC", text: "Cadastral reconciliation with alignment for the Nagpur–Mumbai expressway." },
];

export default function LandAcquisition() {
  return (
    <div data-testid="acquisition-page" className="bg-white">
      <PageHero
        chapter="Land Acquisition"
        title="From land identification to statutory acquisition."
        subtitle="A nine-stage acquisition programme for highways, freight corridors, ports, industrial parks and renewables."
        image="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2000&auto=format&fit=crop"
      />

      <section data-testid="acq-process" className="section-padding bg-white">
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start"><SectionHeading overline="Process flow" title="Nine stages. One accountable team." subtitle="A structured route from alignment and records to possession and audit-ready handover." /></div>
          <ol className="lg:col-span-7 lg:col-start-6 border-t border-[#DDE3EB]">
            {ACQUISITION_STAGES.map((stage) => (
              <li key={stage.step} data-testid={`stage-${stage.step}`} className="grid sm:grid-cols-[64px_1fr_1.25fr] gap-4 py-6 border-b border-[#DDE3EB]">
                <span className="font-mono text-xs text-[#E07000]">{stage.step}</span>
                <h3 className="font-heading font-semibold text-[#243D71]">{stage.title}</h3>
                <p className="text-sm text-[#637083] leading-relaxed">{stage.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding bg-[#F7F8FA]">
        <div className="container-wide">
          <SectionHeading overline="Where acquisition fails · How we de-risk" title="Common challenges. Clear responses." />
          <div className="mt-14 grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div data-testid="challenges">
              <div className="flex items-center gap-3 pb-5 border-b-2 border-[#E07000]"><AlertTriangle size={20} className="text-[#E07000]" /><h3 className="font-heading font-semibold text-xl text-[#243D71]">Common challenges</h3></div>
              <div>{CHALLENGES.map((item) => <div key={item.title} className="py-6 border-b border-[#DDE3EB]"><h4 className="font-heading font-semibold text-[#243D71]">{item.title}</h4><p className="mt-2 text-sm text-[#637083]">{item.text}</p></div>)}</div>
            </div>
            <div data-testid="solutions">
              <div className="flex items-center gap-3 pb-5 border-b-2 border-[#034EA1]"><Check size={20} className="text-[#034EA1]" /><h3 className="font-heading font-semibold text-xl text-[#243D71]">RMCPL response</h3></div>
              <div>{SOLUTIONS.map((item) => <div key={item.title} className="py-6 border-b border-[#DDE3EB]"><h4 className="font-heading font-semibold text-[#243D71]">{item.title}</h4><p className="mt-2 text-sm text-[#637083]">{item.text}</p></div>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeading overline="Recent closures" title="From blocked to break-ground." />
          <div className="mt-14 grid md:grid-cols-3 border-t border-[#DDE3EB]">
            {STORIES.map((story, index) => (
              <article key={story.title} data-testid={`story-${story.title.toLowerCase().split(" ")[0]}`} className="py-9 md:px-8 md:first:pl-0 md:last:pr-0 border-b md:[&:not(:first-child)]:border-l border-[#DDE3EB]">
                <div className="font-heading font-semibold text-2xl text-[#034EA1]">{story.metric}</div>
                <h3 className="font-heading font-semibold text-xl text-[#243D71] mt-5">{story.title}</h3>
                <p className="mt-3 text-sm text-[#637083] leading-relaxed">{story.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-12"><Link to="/contact" data-testid="acquisition-cta" className="btn-primary">Discuss your acquisition <ArrowUpRight size={17} /></Link></div>
        </div>
      </section>
    </div>
  );
}
