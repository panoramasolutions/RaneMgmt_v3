import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Award, Building2, MapPin, UserRound } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Timeline from "@/components/Timeline";
import { BRAND, LEADERSHIP, OFFICES, TIMELINE, VALUES } from "@/lib/data";

const PROFILE_FACTS = [
  { label: "Legal name", value: BRAND.legal },
  { label: "Established", value: "1995" },
  { label: "Founder", value: "Manmohan Balkrishna Rane" },
  { label: "Registered office", value: "Airoli, Navi Mumbai" },
  { label: "Municipal city surveys", value: "8 completed projects" },
  { label: "GIS & IT cell", value: "Established in 2016" },
];

const INSTITUTIONS = [
  "Central Railway",
  "MIDC",
  "MSRDC",
  "CIDCO",
  "MMRDA",
  "MCGM",
  "Thane Municipal Corporation",
  "Mira-Bhayander Municipal Corporation",
  "Vasai-Virar Municipal Corporation",
];

const EVOLUTION = [
  { year: "1995", title: "Land survey & revenue data", text: "The company begins by supporting private and government planning requirements." },
  { year: "2002", title: "Municipal city surveys", text: "Modern survey equipment and computerised data are applied to city-survey programmes." },
  { year: "2016", title: "GIS & application development", text: "An IT cell is created and Viraj Manmohan Rane joins as Joint Director." },
  { year: "Today", title: "Integrated project consultancy", text: "Survey, acquisition, records, planning, design and liaison operate as connected services." },
];

export default function About() {
  return (
    <div data-testid="about-page" className="bg-white">
      <PageHero
        chapter="About · Company Profile"
        title="Your trusted partner in land surveying."
        subtitle="Independent research and consulting services for land, infrastructure and government-sector requirements since 1995."
        image="https://ranemanagementconsultant.com/uploads/About-us/Our-vision.webp"
      />

      <section data-testid="company-profile" className="bg-[#F7F8FA] border-b border-[#DDE3EB]">
        <div className="container-wide py-12 lg:py-16 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4 reveal reveal-left">
            <div className="eyebrow">Company particulars</div>
            <h2 className="mt-5 font-heading text-3xl text-[#243D71]">RMCPL at a glance.</h2>
            <p className="mt-4 text-sm text-[#637083] leading-relaxed">A concise profile based on Rane's published company history.</p>
          </div>
          <dl className="lg:col-span-7 lg:col-start-6 grid sm:grid-cols-2 border-t-2 border-[#243D71] reveal reveal-stagger">
            {PROFILE_FACTS.map((fact, index) => (
              <div key={fact.label} className="py-6 sm:px-6 border-b border-[#DDE3EB] sm:even:border-l">
                <dt className="text-[10px] font-heading font-bold uppercase tracking-[0.14em] text-[#637083]">{String(index + 1).padStart(2, "0")} · {fact.label}</dt>
                <dd className="mt-2 font-heading font-semibold text-[#243D71]">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section data-testid="company-story" className="section-padding bg-white">
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32 reveal reveal-left">
            <div className="image-frame aspect-[4/3]"><img src="https://ranemanagementconsultant.com/uploads/About-us/Piechart.webp" alt="Rane Management Consultant mission" loading="lazy" /></div>
            <div className="mt-5 flex items-start gap-3 border-l-2 border-[#E07000] pl-4 text-sm text-[#637083]">
              <MapPin size={16} className="mt-0.5 shrink-0 text-[#034EA1]" />
              <span>{OFFICES[0].address}</span>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 reveal reveal-right">
            <SectionHeading overline="Our story" title="Precision and innovation, built over three decades." />
            <div className="mt-8 space-y-6 text-[#637083] leading-relaxed">
              <p>Rane Management Consultant Pvt. Ltd. was established in 1995 under the leadership of Mr. Manmohan Balkrishna Rane to provide precise land survey and land revenue data for private and government projects.</p>
              <p>In 2002, the company began City Survey work for municipal corporations in Maharashtra. Eight municipal projects were completed, including work for Thane, Mira-Bhayander and Vasai-Virar Municipal Corporations.</p>
              <p>The practice then expanded into land acquisition, infrastructure planning and design. Its work on Maharashtra Samruddhi Mahamarg is presented by Rane as a record for the fastest land-acquisition completion for an Indian infrastructure project.</p>
              <p>In 2016, Mr. Viraj Manmohan Rane joined as Joint Director and the company established an IT cell for GIS solutions and application development.</p>
            </div>

            <ol className="mt-12 border-t-2 border-[#243D71] reveal reveal-stagger">
              {EVOLUTION.map((item) => (
                <li key={item.year} className="grid sm:grid-cols-[74px_1fr_1.25fr] gap-4 py-6 border-b border-[#DDE3EB]">
                  <span className="font-mono text-xs text-[#E07000]">{item.year}</span>
                  <h3 className="font-heading font-semibold text-[#243D71]">{item.title}</h3>
                  <p className="text-sm text-[#637083] leading-relaxed">{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section data-testid="mission-vision" className="section-padding bg-[#F7F8FA] border-y border-[#DDE3EB]">
        <div className="container-wide">
          <div className="max-w-2xl reveal"><SectionHeading overline="Purpose" title="A national vision, supported by a clear mission." /></div>
          <div className="mt-14 grid lg:grid-cols-2 gap-8 reveal reveal-stagger">
            <article className="bg-white border border-[#DDE3EB] p-7 md:p-10 border-t-4 border-t-[#034EA1] motion-card">
              <div className="flex items-center justify-between gap-4"><span className="text-xs font-heading font-bold uppercase tracking-[0.16em] text-[#034EA1]">Our vision</span><Award size={24} strokeWidth={1.5} className="text-[#E07000]" /></div>
              <h3 className="mt-6 font-heading text-2xl text-[#243D71]">National recognition and impact.</h3>
              <p className="mt-5 text-[#637083] leading-relaxed">To become a nationally recognised leader in land surveying, infrastructure project planning, land acquisition and land-record management—setting high standards for quality, accuracy and innovation.</p>
            </article>
            <article className="bg-white border border-[#DDE3EB] p-7 md:p-10 border-t-4 border-t-[#E07000] motion-card">
              <div className="flex items-center justify-between gap-4"><span className="text-xs font-heading font-bold uppercase tracking-[0.16em] text-[#034EA1]">Our mission</span><Building2 size={24} strokeWidth={1.5} className="text-[#034EA1]" /></div>
              <h3 className="mt-6 font-heading text-2xl text-[#243D71]">Exceptional service across India.</h3>
              <p className="mt-5 text-[#637083] leading-relaxed">To provide land surveying, land acquisition, land-record management and engineering project-planning services that consistently exceed client expectations.</p>
            </article>
          </div>
        </div>
      </section>

      <section data-testid="company-journey" className="section-padding bg-white">
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start reveal reveal-left"><SectionHeading overline="Our journey" title="Documented milestones from 1995 to 2023." subtitle="Key points from Rane's published company history." /></div>
          <div className="lg:col-span-7 lg:col-start-6"><Timeline items={TIMELINE} /></div>
        </div>
      </section>

      <section data-testid="leadership" className="section-padding bg-[#F7F8FA] border-y border-[#DDE3EB]">
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4 reveal reveal-left"><SectionHeading overline="Leadership" title="The people named in Rane's company story." /></div>
          <div className="lg:col-span-7 lg:col-start-6 grid sm:grid-cols-2 gap-6 reveal reveal-stagger">
            {LEADERSHIP.map((person, index) => (
              <article key={person.name} className="bg-white border border-[#DDE3EB] p-7 md:p-8 motion-card">
                <div className="flex items-center justify-between gap-4"><span className="font-mono text-xs text-[#E07000]">{String(index + 1).padStart(2, "0")}</span><UserRound size={22} strokeWidth={1.5} className="text-[#034EA1]" /></div>
                <h3 className="mt-6 font-heading font-semibold text-xl text-[#243D71]">{person.name}</h3>
                <div className="mt-2 text-xs uppercase tracking-[0.12em] text-[#034EA1]">{person.role}</div>
                <p className="mt-5 text-sm text-[#637083] leading-relaxed">{person.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="culture-institutions" className="section-padding bg-white">
        <div className="container-wide grid lg:grid-cols-12 gap-16 lg:gap-20">
          <div className="lg:col-span-5 reveal reveal-left">
            <SectionHeading overline="Our culture" title="We care for our own." />
            <div className="mt-10 grid sm:grid-cols-2 border-t border-[#DDE3EB]">
              {VALUES.map((value, index) => (
                <div key={value.title} className="py-6 sm:px-5 border-b border-[#DDE3EB] sm:even:border-l">
                  <span className="font-mono text-[10px] text-[#E07000]">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 font-heading font-semibold text-[#243D71]">{value.title}</h3>
                  <p className="mt-2 text-xs text-[#637083] leading-relaxed">{value.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 reveal reveal-right">
            <SectionHeading overline="Institutional experience" title="Government bodies named in Rane's history." />
            <div className="mt-10 border-t-2 border-[#243D71]">
              {INSTITUTIONS.map((institution, index) => (
                <div key={institution} className="flex items-center gap-4 py-4 border-b border-[#DDE3EB]">
                  <span className="font-mono text-[10px] text-[#E07000]">{String(index + 1).padStart(2, "0")}</span>
                  <span className="font-heading font-semibold text-[#243D71]">{institution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F7F8FA] border-t border-[#DDE3EB]">
        <div className="container-wide bg-[#243D71] px-7 py-12 md:p-14 lg:p-16 grid lg:grid-cols-12 gap-10 items-center border-l-4 border-[#E07000] reveal">
          <div className="lg:col-span-8"><div className="text-xs font-heading font-bold uppercase tracking-[0.16em] text-[#F2A14A]">Work with Rane</div><h2 className="font-heading !text-white mt-6 leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.3rem)", fontWeight: 600 }}>How can we help you?</h2><p className="mt-4 text-white/70 max-w-2xl">Explore the complete service directory or submit your project requirement to the team.</p></div>
          <div className="lg:col-span-4 lg:text-right flex lg:justify-end flex-wrap gap-3"><Link to="/services" className="btn-outline-light">View services <ArrowRight size={16} /></Link><Link to="/contact" data-testid="about-cta" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#243D71] font-heading font-semibold rounded-md hover:bg-[#EEF3FA]">Enquire now <ArrowUpRight size={17} /></Link></div>
        </div>
      </section>
    </div>
  );
}
