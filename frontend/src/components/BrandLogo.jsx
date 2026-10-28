const LOGO = "https://ranemanagementconsultant.com/uploads/nav/Rane-Logo-WebsiteTopHead-01.png";

export default function BrandLogo({ compact = false }) {
  return (
    <span className={`relative inline-flex items-center bg-white ${compact ? "h-12 w-[190px]" : "h-14 w-[225px]"}`}>
      <span className="flex items-center gap-2" aria-hidden="true">
        <span className="font-heading text-2xl font-extrabold tracking-[-0.08em] text-[#034EA1]">RANE</span>
        <span className="h-8 border-l border-[#DDE3EB] pl-2 text-[8px] uppercase leading-[1.15] tracking-[0.08em] text-[#637083]">Management<br />Consultant<br />Pvt. Ltd.</span>
      </span>
      <img src={LOGO} alt="Rane Management Consultant Pvt. Ltd." className="absolute inset-0 h-full w-full bg-white object-contain object-left" />
    </span>
  );
}
