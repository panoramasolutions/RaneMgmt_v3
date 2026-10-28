import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ArrowUpRight,
  ChevronDown,
  Clock,
  Mail,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { CONTACT, NAV_LINKS } from "@/lib/data";
import { SERVICE_GROUPS } from "@/lib/serviceCatalog";
import BrandLogo from "@/components/BrandLogo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const panelRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        setServicesOpen(false);
        setMobileServicesOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      data-testid="site-navbar"
      className={`sticky top-0 z-50 bg-white transition-shadow ${scrolled ? "shadow-[0_8px_30px_rgba(36,61,113,0.10)]" : ""}`}
      onMouseLeave={() => setServicesOpen(false)}
    >
      <div className="hidden xl:block bg-[#17294F] text-white border-b border-white/10">
        <div className="container-wide h-8 flex items-center justify-between gap-8 text-[10px]">
          <div className="font-heading font-semibold uppercase tracking-[0.14em] text-white/70">Rane Management Consultant Pvt. Ltd. · Established 1995</div>
          <div className="flex items-center gap-6 text-white/75">
            <a href={`tel:${CONTACT.phones[0].replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 hover:text-white"><Phone size={11} className="text-[#F2A14A]" />{CONTACT.phones[0]}</a>
            <a href={`mailto:${CONTACT.emails[0]}`} className="inline-flex items-center gap-1.5 hover:text-white"><Mail size={11} className="text-[#F2A14A]" />{CONTACT.emails[0]}</a>
            <span className="inline-flex items-center gap-1.5"><Clock size={11} className="text-[#F2A14A]" />Mon–Sat · 09:00–18:00</span>
          </div>
        </div>
      </div>

      <div className="border-b border-[#DDE3EB]">
        <div className="container-wide flex h-[82px] xl:h-[76px] items-center justify-between gap-7">
          <Link to="/" data-testid="nav-logo" className="shrink-0" aria-label="Rane Management Consultant home">
            <span className="sm:hidden"><BrandLogo compact /></span>
            <span className="hidden sm:inline-flex"><BrandLogo /></span>
          </Link>

          <nav className="hidden xl:flex items-center gap-7" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => (
              <div
                key={link.to}
                className="relative"
                onMouseEnter={() => link.megaMenu && setServicesOpen(true)}
                onFocus={() => link.megaMenu && setServicesOpen(true)}
              >
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z-]/g, "")}`}
                  className={({ isActive }) =>
                    `relative inline-flex items-center gap-1 py-6 text-[13px] font-heading font-semibold transition-colors after:absolute after:bottom-4 after:left-0 after:h-0.5 after:bg-[#E07000] after:transition-all ${
                      isActive
                        ? "text-[#243D71] after:w-full"
                        : "text-[#637083] after:w-0 hover:text-[#243D71] hover:after:w-full"
                    }`
                  }
                >
                  {link.label}
                  {link.megaMenu && <ChevronDown size={13} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} aria-hidden="true" />}
                </NavLink>
              </div>
            ))}
          </nav>

          <Link to="/contact" data-testid="nav-cta" className="btn-primary !px-4 !py-2.5 !text-xs !tracking-normal whitespace-nowrap hidden xl:inline-flex">
            Start a conversation <ArrowUpRight size={14} />
          </Link>

          <button
            type="button"
            data-testid="nav-mobile-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="xl:hidden min-h-11 min-w-11 inline-flex items-center justify-center text-[#243D71]"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {servicesOpen && (
        <div data-testid="services-mega-menu" className="absolute left-0 right-0 top-full hidden xl:block bg-white border-b border-[#DDE3EB] shadow-[0_22px_50px_-34px_rgba(36,61,113,0.45)]">
          <div className="container-wide py-9 grid grid-cols-12 gap-12">
            <div className="col-span-4 pr-10 border-r border-[#DDE3EB]">
              <div className="eyebrow">Official service directory</div>
              <h2 className="font-heading text-2xl text-[#243D71] mt-5 leading-tight">Nine service areas across land and infrastructure.</h2>
              <p className="mt-4 text-sm text-[#637083] leading-relaxed">Browse technical expertise and project-delivery capabilities.</p>
              <Link to="/services" className="editorial-link mt-7">View complete directory <ArrowUpRight size={15} /></Link>
            </div>
            <div className="col-span-8 grid grid-cols-2 gap-x-10">
              {SERVICE_GROUPS.map((serviceGroup) => (
                <div key={serviceGroup.name}>
                  <div className="pb-2 flex items-center justify-between gap-3 text-[10px] font-heading font-bold uppercase tracking-[0.18em] text-[#637083]"><span>{serviceGroup.name}</span><span className="font-mono text-[#E07000]">{String(serviceGroup.services.length).padStart(2, "0")}</span></div>
                  {serviceGroup.services.map((service, index) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      data-testid={`mega-service-${service.slug}`}
                      className="group flex gap-4 py-3 border-b border-[#DDE3EB]"
                    >
                      <span className="font-mono text-[10px] text-[#E07000] pt-1">{String(index + 1).padStart(2, "0")}</span>
                      <span className="font-heading font-semibold text-sm text-[#243D71] group-hover:text-[#034EA1]">{service.title}</span>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {open && (
        <div id="mobile-navigation" ref={panelRef} data-testid="nav-mobile-panel" className="xl:hidden fixed inset-x-0 top-[82px] bottom-0 overflow-y-auto bg-white">
          <nav className="container-rmc py-6" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => link.megaMenu ? (
              <div key={link.to} className="border-b border-[#DDE3EB]">
                <div className="grid grid-cols-[1fr_48px] items-center">
                  <NavLink to={link.to} className={({ isActive }) => `py-4 font-heading text-lg ${isActive ? "text-[#034EA1]" : "text-[#243D71]"}`}>{link.label}</NavLink>
                  <button type="button" aria-label="Toggle service links" aria-expanded={mobileServicesOpen} onClick={() => setMobileServicesOpen((value) => !value)} className="h-12 inline-flex items-center justify-center text-[#243D71]">
                    <ChevronDown size={18} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                </div>
                {mobileServicesOpen && (
                  <div className="pb-5 grid sm:grid-cols-2 gap-x-6 bg-[#F7F8FA] -mx-5 md:-mx-8 px-5 md:px-8 border-t border-[#DDE3EB]">
                    {SERVICE_GROUPS.map((group) => (
                      <div key={group.name} className="pt-4">
                        <div className="text-[10px] font-heading font-bold uppercase tracking-[0.15em] text-[#E07000]">{group.name}</div>
                        {group.services.map((service) => <Link key={service.slug} to={`/services/${service.slug}`} className="flex items-center justify-between gap-3 py-3 border-b border-[#DDE3EB] text-sm font-heading font-semibold text-[#243D71]">{service.title}<ArrowUpRight size={13} /></Link>)}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                data-testid={`nav-mobile-${link.label.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z-]/g, "")}`}
                className={({ isActive }) => `flex items-center justify-between py-4 border-b border-[#DDE3EB] font-heading text-lg ${isActive ? "text-[#034EA1]" : "text-[#243D71]"}`}
              >
                {link.label}<ArrowUpRight size={16} />
              </NavLink>
            ))}
            <div className="mt-6 p-5 bg-[#F7F8FA] border-l-2 border-[#E07000] text-sm text-[#637083]">
              <a href={`tel:${CONTACT.phones[0].replace(/\s/g, "")}`} className="flex items-center gap-2 font-semibold text-[#243D71]"><Phone size={14} className="text-[#034EA1]" />{CONTACT.phones[0]}</a>
              <div className="mt-2 flex items-center gap-2"><Clock size={14} className="text-[#034EA1]" />Mon–Sat · 09:00–18:00</div>
            </div>
            <Link to="/contact" data-testid="nav-mobile-cta" className="btn-primary w-full mt-5">Start a conversation <ArrowUpRight size={16} /></Link>
          </nav>
        </div>
      )}
    </header>
  );
}

