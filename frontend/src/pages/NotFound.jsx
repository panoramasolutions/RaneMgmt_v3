import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div data-testid="not-found-page" className="bg-[#F7F8FA]">
      <section className="container-wide min-h-[62vh] py-20 lg:py-28 flex items-center">
        <div className="w-full grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-4 reveal is-visible">
            <div className="font-heading text-[#034EA1] leading-none" style={{ fontSize: "clamp(6rem, 15vw, 11rem)", fontWeight: 700 }}>404</div>
          </div>
          <div className="lg:col-span-6 lg:col-start-6 fade-up">
            <div className="eyebrow">Page not found</div>
            <h1 className="mt-7 font-heading text-[#243D71] leading-tight" style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)", fontWeight: 650 }}>The requested record could not be located.</h1>
            <p className="mt-6 text-[#637083] leading-relaxed max-w-xl">The link may be outdated or the page may have moved. Return to the homepage or use the official service directory.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/" className="btn-primary"><ArrowLeft size={16} /> Return home</Link>
              <Link to="/services" className="btn-outline">Service directory <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

