import { Link } from "react-router-dom";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { BRAND, CONTACT, NAV_LINKS, OFFICES } from "@/lib/data";
import { SERVICE_GROUPS } from "@/lib/serviceCatalog";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-[#17294F] text-white">
      <div className="border-b border-white/15">
        <div className="container-wide py-9 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div><div className="text-[10px] font-heading font-bold uppercase tracking-[0.17em] text-[#F2A14A]">Project and service enquiries</div><h2 className="mt-3 font-heading text-2xl !text-white">How can Rane Management Consultant help you?</h2></div>
          <Link to="/contact" data-testid="footer-cta" className="btn-outline-light shrink-0">Submit an enquiry <ArrowUpRight size={16} /></Link>
        </div>
      </div>

      <div className="container-wide pt-16 lg:pt-20 pb-8">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="inline-block bg-white rounded-sm px-4 py-3"><BrandLogo /></div>
            <p className="mt-7 text-white/70 max-w-sm leading-relaxed text-sm">Land surveying, land acquisition, land-record management and infrastructure project planning since {BRAND.established}.</p>
            <div className="mt-7 pt-6 border-t border-white/15 max-w-sm">
              <div className="text-[10px] uppercase tracking-[0.16em] text-[#F2A14A] font-heading font-bold">Registered Office</div>
              <address className="not-italic mt-3 flex items-start gap-2.5 text-sm text-white/70 leading-relaxed"><MapPin size={15} className="text-[#F2A14A] mt-1 shrink-0" />{OFFICES[0].address}</address>
            </div>
          </div>

          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-10">
            {SERVICE_GROUPS.map((group) => (
              <div key={group.name}>
                <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.16em] text-[#F2A14A] font-heading font-bold"><span>{group.name}</span><span className="font-mono text-white/45">{String(group.services.length).padStart(2, "0")}</span></div>
                <ul className="mt-5 space-y-3">
                  {group.services.map((service) => (
                    <li key={service.slug}><Link to={`/services/${service.slug}`} className="inline-flex items-start gap-2 text-sm text-white/70 hover:text-white transition-colors"><span className="mt-2 h-1 w-1 shrink-0 bg-[#F2A14A]" />{service.title}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.16em] text-[#F2A14A] font-heading font-bold">Contact Info</div>
            <div className="mt-5 space-y-3 text-sm text-white/70">
              {CONTACT.phones.map((phone) => <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="flex items-center gap-2.5 hover:text-white"><Phone size={15} className="text-[#F2A14A]" />{phone}</a>)}
              {CONTACT.emails.map((email) => <a key={email} href={`mailto:${email}`} className="flex items-start gap-2.5 hover:text-white break-all"><Mail size={15} className="text-[#F2A14A] mt-1 shrink-0" />{email}</a>)}
              <div className="flex items-start gap-2.5"><Clock size={15} className="text-[#F2A14A] mt-1 shrink-0" />{CONTACT.hours}</div>
            </div>
            <div className="mt-7 pt-6 border-t border-white/15">
              <div className="text-[10px] uppercase tracking-[0.14em] text-white/45 font-heading font-bold">Branch offices</div>
              <div className="mt-3 text-sm text-white/70">Bhayandar West · Bhayander (W) · Virar East</div>
              <Link to="/contact#office-directory" className="inline-flex items-center gap-2 mt-4 text-sm font-heading font-semibold text-white hover:text-[#F2A14A]">View office directory <ArrowUpRight size={14} /></Link>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-white/15 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer navigation">
            {NAV_LINKS.map((link) => <Link key={link.to} to={link.to} className="text-xs text-white/60 hover:text-white transition-colors">{link.label}</Link>)}
          </nav>
          <div className="text-[10px] text-white/45 font-mono tracking-wider">© {new Date().getFullYear()} {BRAND.legal.toUpperCase()} · ALL RIGHTS RESERVED</div>
        </div>
      </div>
    </footer>
  );
}

