import { useEffect, useRef } from "react";

const VIDEO_SRC = `${process.env.PUBLIC_URL}/media/hero_home.mp4`;
const POSTER_SRC = `${process.env.PUBLIC_URL}/media/hero_home-poster.png`;

export function HeroVideoLayer() {
  const ref = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches && ref.current) {
      ref.current.pause();
    }
  }, []);

  return (
    <>
      <video
        ref={ref}
        data-testid="hero-video"
        className="absolute inset-0 w-full h-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={POSTER_SRC}
        aria-hidden="true"
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

    </>
  );
}
