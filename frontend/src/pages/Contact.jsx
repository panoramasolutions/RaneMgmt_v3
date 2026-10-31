import { useState } from "react";
import { toast } from "sonner";
import {
  ArrowUpRight,
  Check,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { CONTACT, OFFICES } from "@/lib/data";
import { submitForm } from "@/lib/submitForm";

const PROJECT_TYPES = [
  "GIS / GPS Survey",
  "Drone Survey",
  "Clearance Certificate",
  "Land Mutation & Transfer",
  "Land Record Verification & Modification",
  "Master Planning",
  "Geospatial & IT Solutions",
  "Project Planning & Management",
  "Architecture",
  "Land & Building Valuations",
  "Land Acquisition",
  "General Enquiry",
];

const BRIEF_GUIDANCE = [
  "Project or property location",
  "Service or approval required",
  "Approximate area or corridor length",
  "Current project stage and available records",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", organization: "", email: "", phone: "", project_type: "", location: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.message) {
      toast.error("Please fill all required fields.");
      return;
    }
    setSubmitting(true);
    try {
      const result = await submitForm({ name: form.name, email: form.email, phone: form.phone, company: form.organization, service_interest: form.project_type, location: form.location, message: form.message, lead_type: "inquiry" });
      if (!result.ok) throw new Error("submit failed");
      toast.success("Thank you. Your enquiry has been submitted.");
      setForm({ name: "", organization: "", email: "", phone: "", project_type: "", location: "", message: "" });
    } catch {
      toast.error("Could not submit. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div data-testid="contact-page" className="bg-white">
      <PageHero
        chapter="Contact · Public Enquiry"
        title="Get in touch with us."
        subtitle="Contact Rane Management Consultant for surveying, land acquisition, land records, planning, geospatial systems, feasibility studies and statutory clearances."
        image="https://ranemanagementconsultant.com/uploads/Home-page/homepage-banner-(1)1.webp"
      />

      <section data-testid="contact-channels" className="bg-[#F7F8FA] border-b border-[#DDE3EB]">
        <div className="container-wide py-10 lg:py-12 grid md:grid-cols-3 border-x border-[#DDE3EB] reveal reveal-stagger">
          <QuickContact icon={Phone} label="Call" items={CONTACT.phones} type="tel" />
          <QuickContact icon={Mail} label="Email" items={CONTACT.emails} type="mailto" />
          <div className="min-w-0 px-6 py-5 md:px-8 md:[&:not(:first-child)]:border-l border-[#DDE3EB] flex items-start gap-4">
            <Clock size={21} strokeWidth={1.6} className="mt-1 shrink-0 text-[#034EA1]" />
            <div className="min-w-0"><div className="text-[10px] font-heading font-bold uppercase tracking-[0.15em] text-[#637083]">Working hours</div><div className="mt-2 font-heading font-semibold text-[#243D71]">{CONTACT.hours}</div></div>
          </div>
        </div>
      </section>

      <section data-testid="contact-enquiry" className="section-padding bg-white">
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <aside className="lg:col-span-4 lg:sticky lg:top-28 reveal reveal-left">
            <SectionHeading overline="Project enquiry" title="Send the team a clear requirement." />
            <p className="mt-6 text-[#637083] leading-relaxed">Providing the following information helps identify the relevant service and project team.</p>
            <ul className="mt-8 border-t-2 border-[#243D71]">
              {BRIEF_GUIDANCE.map((item, index) => (
                <li key={item} className="flex items-start gap-3 py-4 border-b border-[#DDE3EB] text-sm text-[#637083]">
                  <span className="font-mono text-[10px] text-[#E07000] mt-0.5">{String(index + 1).padStart(2, "0")}</span>
                  <span className="flex-1">{item}</span>
                  <Check size={14} className="mt-0.5 text-[#034EA1]" />
                </li>
              ))}
            </ul>
            <div className="mt-8 p-5 bg-[#EEF3FA] border-l-2 border-[#E07000]">
              <div className="text-[10px] font-heading font-bold uppercase tracking-[0.14em] text-[#034EA1]">Registered office landline</div>
              <a href={`tel:${CONTACT.landline.replace(/\s/g, "")}`} className="mt-3 block font-heading font-semibold text-[#243D71] hover:text-[#034EA1]">{CONTACT.landline}</a>
            </div>
          </aside>

          <form onSubmit={handleSubmit} data-testid="contact-form" className="lg:col-span-7 lg:col-start-6 border border-[#DDE3EB] bg-white reveal reveal-right">
            <div className="px-7 md:px-10 py-7 bg-[#243D71] flex items-center justify-between gap-5">
              <div><div className="text-[10px] font-heading font-bold uppercase tracking-[0.16em] text-[#F2A14A]">Enquiry record</div><h2 className="mt-2 font-heading text-2xl !text-white">Project and service requirement</h2></div>
              <Send size={23} strokeWidth={1.5} className="text-white/75" />
            </div>

            <div className="p-7 md:p-10 space-y-6">
              <p className="text-sm text-[#637083]">Fields marked * are required.</p>
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Name *" id="f-name"><input id="f-name" required autoComplete="name" data-testid="contact-name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="form-control-rmc" /></Field>
                <Field label="Organization" id="f-org"><input id="f-org" autoComplete="organization" data-testid="contact-organization" value={form.organization} onChange={(event) => setForm({ ...form, organization: event.target.value })} className="form-control-rmc" /></Field>
                <Field label="Email *" id="f-email"><input id="f-email" type="email" required autoComplete="email" data-testid="contact-email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className="form-control-rmc" /></Field>
                <Field label="Contact No. *" id="f-phone"><input id="f-phone" type="tel" required autoComplete="tel" data-testid="contact-phone" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} className="form-control-rmc" /></Field>
                <Field label="Select service" id="f-type"><select id="f-type" data-testid="contact-project-type" value={form.project_type} onChange={(event) => setForm({ ...form, project_type: event.target.value })} className="form-control-rmc"><option value="">Select service</option>{PROJECT_TYPES.map((type) => <option key={type} value={type}>{type}</option>)}</select></Field>
                <Field label="Project location" id="f-loc"><input id="f-loc" data-testid="contact-location" value={form.location} onChange={(event) => setForm({ ...form, location: event.target.value })} className="form-control-rmc" placeholder="Village, city or corridor" /></Field>
              </div>
              <Field label="Requirement details *" id="f-message"><textarea id="f-message" rows={7} required data-testid="contact-message" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} className="form-control-rmc resize-none" placeholder="Describe the site, current stage, available records and required outcome." /></Field>
              <button type="submit" disabled={submitting} data-testid="contact-submit" className="btn-primary disabled:opacity-60">{submitting ? "Sending…" : "Submit enquiry"} <ArrowUpRight size={17} /></button>
            </div>
          </form>
        </div>
      </section>

      <section data-testid="office-directory" className="section-padding bg-[#F7F8FA] border-y border-[#DDE3EB]">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end reveal">
            <div className="lg:col-span-6"><SectionHeading overline="Office directory" title="Registered and branch offices." /></div>
            <p className="lg:col-span-5 lg:col-start-8 text-[#637083] leading-relaxed">Rane's published office network covers Airoli, Bhayandar and Virar.</p>
          </div>

          <div className="mt-14 grid lg:grid-cols-12 gap-8 items-stretch">
            <article className="lg:col-span-5 bg-[#243D71] text-white p-7 md:p-10 border-l-4 border-[#E07000] reveal reveal-left">
              <div className="text-[10px] font-heading font-bold uppercase tracking-[0.16em] text-[#F2A14A]">Primary location</div>
              <h3 className="mt-5 font-heading text-2xl !text-white">{OFFICES[0].label}</h3>
              <address className="not-italic mt-6 text-white/75 leading-relaxed">
                <div className="flex items-start gap-3"><MapPin size={17} className="mt-1 shrink-0 text-[#F2A14A]" />{OFFICES[0].address}</div>
                <div className="mt-7 pt-6 border-t border-white/20 space-y-3">
                  <a href={`tel:${OFFICES[0].phone.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-white"><Phone size={16} className="text-[#F2A14A]" />{OFFICES[0].phone}</a>
                  <a href={`tel:${OFFICES[0].secondaryPhone.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-white"><Phone size={16} className="text-[#F2A14A]" />{OFFICES[0].secondaryPhone}</a>
                  <a href={`mailto:${OFFICES[0].email}`} className="flex min-w-0 items-start gap-3 hover:text-white break-all"><Mail size={16} className="mt-1 shrink-0 text-[#F2A14A]" />{OFFICES[0].email}</a>
                </div>
              </address>
            </article>

            <div className="lg:col-span-7 grid sm:grid-cols-3 border-t-2 border-[#243D71] reveal reveal-stagger">
              {OFFICES.slice(1).map((office, index) => (
                <article key={`${office.label}-${index}`} className="motion-card bg-white p-6 border-b border-[#DDE3EB] sm:[&:not(:first-child)]:border-l">
                  <span className="font-mono text-[10px] text-[#E07000]">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-5 font-heading font-semibold text-lg text-[#243D71]">{office.label}</h3>
                  <address className="not-italic mt-4 flex items-start gap-2 text-sm text-[#637083] leading-relaxed"><MapPin size={14} className="mt-1 shrink-0 text-[#034EA1]" />{office.address}</address>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section data-testid="contact-map" className="bg-white">
        <div className="container-wide py-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 reveal">
          <div><div className="eyebrow">Location map</div><h2 className="font-heading font-semibold text-2xl text-[#243D71] mt-4">Registered Office · Airoli, Navi Mumbai</h2></div>
          <a href="https://www.google.com/maps/search/?api=1&query=Shubhangi+Niwas+Row+House+C-17+Sector+4+Airoli+Navi+Mumbai+400708" target="_blank" rel="noreferrer" className="editorial-link">Open in Google Maps <ArrowUpRight size={16} /></a>
        </div>
        <iframe title="Rane Management Consultant Registered Office" src="https://www.google.com/maps?q=Shubhangi+Niwas+Row+House+C-17+Sector+4+Airoli+Navi+Mumbai+400708&output=embed" className="w-full h-[440px] grayscale-[20%] border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </section>
    </div>
  );
}

function QuickContact({ icon: Icon, label, items, type }) {
  return (
    <div className="min-w-0 px-6 py-5 md:px-8 md:[&:not(:first-child)]:border-l border-[#DDE3EB] flex items-start gap-4">
      <Icon size={21} strokeWidth={1.6} className="mt-1 shrink-0 text-[#034EA1]" />
      <div className="min-w-0"><div className="text-[10px] font-heading font-bold uppercase tracking-[0.15em] text-[#637083]">{label}</div><div className="mt-2 min-w-0 space-y-1">{items.map((item) => <a key={item} href={`${type}:${type === "tel" ? item.replace(/\s/g, "") : item}`} className={`block min-w-0 font-heading font-semibold text-[#243D71] hover:text-[#034EA1] ${type === "mailto" ? "break-all" : ""}`}>{item}</a>)}</div></div>
    </div>
  );
}

function Field({ label, id, children }) {
  return <label htmlFor={id} className="block"><span className="text-xs font-heading font-semibold uppercase tracking-[0.12em] text-[#637083]">{label}</span><span className="block mt-2">{children}</span></label>;
}

