import { useState } from "react";
import { toast } from "sonner";
import {
  ArrowRight,
  Check,
  Clock,
  Mail,
  MapPin,
  Send,
  Users,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { CONTACT, OFFICES, VALUES } from "@/lib/data";
import { submitForm } from "@/lib/submitForm";

const WORKING_GROUPS = [
  {
    number: "01",
    title: "Career Coaches",
    text: "Individual career guidance within Rane's working-group structure.",
  },
  {
    number: "02",
    title: "Progress Managers",
    text: "Support focused on professional progress and development needs.",
  },
  {
    number: "03",
    title: "Trainers",
    text: "Learning support aligned with individual career requirements.",
  },
];

const APPLICATION_STEPS = [
  { number: "01", title: "Submit your profile", text: "Introduce yourself, identify your area of interest and share a resume or portfolio link." },
  { number: "02", title: "Profile consideration", text: "The Rane team can retain and consider your profile against suitable requirements." },
  { number: "03", title: "Contact when relevant", text: "If an appropriate opening is available, the team will contact you directly." },
];

export default function Careers() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", role: "", resume: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.message) {
      toast.error("Please fill all required fields.");
      return;
    }
    setSubmitting(true);
    try {
      const applicationMessage = `${form.message}${form.resume ? `\n\nResume / portfolio: ${form.resume}` : ""}`;
      const result = await submitForm({ name: form.name, email: form.email, phone: form.phone, company: "", service_interest: form.role || "Open Application", message: applicationMessage, lead_type: "career" });
      if (!result.ok) throw new Error("submit failed");
      toast.success("Thank you. Your application has been submitted.");
      setForm({ name: "", email: "", phone: "", role: "", resume: "", message: "" });
    } catch {
      toast.error("Could not submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div data-testid="careers-page" className="bg-white">
      <PageHero
        chapter="Careers · Open Applications"
        title="Start your career at Rane Management Consultant."
        subtitle="Join our team of game-changers. Rane accepts resumes for consideration and contacts candidates when suitable openings are available."
        image="https://ranemanagementconsultant.com/assets/image/Careers/Image%203/mobile-banner.png"
      />

      <section data-testid="career-status" className="bg-[#F7F8FA] border-b border-[#DDE3EB]">
        <div className="container-wide py-10 lg:py-12 grid sm:grid-cols-3 border-x border-[#DDE3EB] reveal reveal-stagger">
          <StatusItem icon={Check} label="Application status" value="Open applications accepted" />
          <StatusItem icon={Users} label="Career support" value="3 working groups" />
          <StatusItem icon={MapPin} label="Registered office" value="Airoli, Navi Mumbai" />
        </div>
      </section>

      <section data-testid="career-introduction" className="section-padding bg-white">
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 reveal reveal-left">
            <SectionHeading overline="Working groups" title="You are in charge of your career—but not alone." />
            <p className="mt-6 text-[#637083] leading-relaxed">Rane's published careers approach is organised around working groups focused on individual career needs.</p>
            <div className="mt-8 p-5 bg-[#EEF3FA] border-l-2 border-[#E07000] text-sm text-[#637083] leading-relaxed">The current Rane website does not publish role-specific vacancies. Applications are accepted for future consideration.</div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 border-t-2 border-[#243D71] reveal reveal-stagger">
            {WORKING_GROUPS.map((group) => (
              <article key={group.number} className="grid sm:grid-cols-[50px_1fr_1.15fr] gap-4 py-7 border-b border-[#DDE3EB]">
                <span className="font-mono text-xs text-[#E07000]">{group.number}</span>
                <h3 className="font-heading font-semibold text-lg text-[#243D71]">{group.title}</h3>
                <p className="text-sm text-[#637083] leading-relaxed">{group.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="career-culture" className="section-padding bg-[#F7F8FA] border-y border-[#DDE3EB]">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end reveal">
            <div className="lg:col-span-6"><SectionHeading overline="Our culture" title="The values Rane presents to its people." /></div>
            <p className="lg:col-span-5 lg:col-start-8 text-[#637083] leading-relaxed">A professional environment centred on openness, participation, fairness and understanding.</p>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 border-t-2 border-[#243D71] reveal reveal-stagger">
            {VALUES.map((value, index) => (
              <article key={value.title} className="motion-card bg-white py-8 px-6 border-b border-[#DDE3EB] lg:[&:not(:first-child)]:border-l">
                <span className="font-mono text-[10px] text-[#E07000]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 font-heading font-semibold text-xl text-[#243D71]">{value.title}</h3>
                <p className="mt-3 text-sm text-[#637083] leading-relaxed">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="application-process" className="section-padding bg-white">
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4 reveal reveal-left"><SectionHeading overline="Application process" title="A simple route to consideration." /></div>
          <ol className="lg:col-span-7 lg:col-start-6 border-t-2 border-[#243D71] reveal reveal-stagger">
            {APPLICATION_STEPS.map((step) => (
              <li key={step.number} className="grid sm:grid-cols-[54px_1fr_1.2fr] gap-4 py-7 border-b border-[#DDE3EB]">
                <span className="font-mono text-xs text-[#E07000]">{step.number}</span>
                <h3 className="font-heading font-semibold text-[#243D71]">{step.title}</h3>
                <p className="text-sm text-[#637083] leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="apply" data-testid="career-application" className="section-padding bg-[#F7F8FA] border-t border-[#DDE3EB] scroll-mt-24">
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <aside className="lg:col-span-4 lg:sticky lg:top-28 reveal reveal-left">
            <SectionHeading overline="Open application" title="Submit your resume for consideration." />
            <div className="mt-9 border-t border-[#DDE3EB] text-sm text-[#637083]">
              <div className="py-5 border-b border-[#DDE3EB] flex items-start gap-3"><MapPin size={16} className="mt-0.5 shrink-0 text-[#E07000]" /><span>{OFFICES[0].address}</span></div>
              <a href={`mailto:${CONTACT.emails[0]}`} className="py-5 border-b border-[#DDE3EB] flex items-center gap-3 hover:text-[#243D71]"><Mail size={16} className="shrink-0 text-[#034EA1]" />{CONTACT.emails[0]}</a>
              <div className="py-5 border-b border-[#DDE3EB] flex items-center gap-3"><Clock size={16} className="shrink-0 text-[#034EA1]" />{CONTACT.hours}</div>
            </div>
          </aside>

          <form onSubmit={handleSubmit} data-testid="careers-form" className="lg:col-span-7 lg:col-start-6 bg-white border border-[#DDE3EB] reveal reveal-right">
            <div className="px-7 md:px-10 py-7 bg-[#243D71] flex items-center justify-between gap-4">
              <div><div className="text-[10px] font-heading font-bold uppercase tracking-[0.16em] text-[#F2A14A]">Candidate profile</div><h2 className="mt-2 font-heading text-2xl !text-white">Open application form</h2></div>
              <Send size={22} className="text-white/75" />
            </div>
            <div className="p-7 md:p-10 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Name *" id="c-name"><input id="c-name" data-testid="careers-name" required autoComplete="name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="form-control-rmc" /></Field>
                <Field label="Email *" id="c-email"><input id="c-email" type="email" required autoComplete="email" data-testid="careers-email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className="form-control-rmc" /></Field>
                <Field label="Phone number *" id="c-phone"><input id="c-phone" type="tel" required autoComplete="tel" data-testid="careers-phone" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} className="form-control-rmc" /></Field>
                <Field label="Area of interest" id="c-role"><input id="c-role" data-testid="careers-role" value={form.role} onChange={(event) => setForm({ ...form, role: event.target.value })} className="form-control-rmc" placeholder="Survey, GIS, planning…" /></Field>
              </div>
              <Field label="Resume / portfolio link" id="c-resume"><input id="c-resume" type="url" data-testid="careers-resume" value={form.resume} onChange={(event) => setForm({ ...form, resume: event.target.value })} className="form-control-rmc" placeholder="https://" /></Field>
              <Field label="Message *" id="c-message"><textarea id="c-message" rows={7} required data-testid="careers-message" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} className="form-control-rmc resize-none" placeholder="Tell us about your experience and area of interest." /></Field>
              <button type="submit" disabled={submitting} data-testid="careers-submit" className="btn-primary disabled:opacity-60">{submitting ? "Submitting…" : "Submit application"} <ArrowRight size={17} /></button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

function StatusItem({ icon: Icon, label, value }) {
  return (
    <div className="px-6 py-5 sm:px-8 sm:[&:not(:first-child)]:border-l border-[#DDE3EB] flex items-start gap-4">
      <Icon size={20} strokeWidth={1.6} className="mt-1 shrink-0 text-[#034EA1]" />
      <div><div className="text-[10px] font-heading font-bold uppercase tracking-[0.14em] text-[#637083]">{label}</div><div className="mt-2 font-heading font-semibold text-[#243D71]">{value}</div></div>
    </div>
  );
}

function Field({ label, id, children }) {
  return <label htmlFor={id} className="block"><span className="text-xs font-heading font-semibold uppercase tracking-[0.12em] text-[#637083]">{label}</span><span className="block mt-2">{children}</span></label>;
}

