export default function PageHero({ overline, title, subtitle, image, chapter }) {
  return (
    <section data-testid="page-hero" className="bg-white border-b border-[#DDE3EB]">
      <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-16 items-center py-16 md:py-20 lg:py-24">
        <div className="lg:col-span-6 py-4 lg:py-10 fade-up">
          {(chapter || overline) && <div className="eyebrow">{chapter || overline}</div>}
          <h1 className="font-heading text-[#243D71] mt-7 leading-[1.05]" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 700 }}>
            {title}
          </h1>
          {subtitle && <p className="mt-7 text-base lg:text-lg text-[#637083] max-w-xl leading-relaxed">{subtitle}</p>}
        </div>
        <div className="lg:col-span-6 hero-image-enter">
          <div className="image-frame aspect-[4/3] lg:aspect-[5/4]">
            <img src={image} alt="" aria-hidden="true" loading="eager" />
          </div>
        </div>
      </div>
    </section>
  );
}
