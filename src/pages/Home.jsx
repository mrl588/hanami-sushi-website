import heroCenter from "../assets/Adc5968139dfb430396934b9617937b02A.avif";
import heroFallback from "../assets/Hanami_Logo_Inverted.jpg";

export default function Home() {
  return (
    <section className="bg-[#f4eadc] relative min-h-screen overflow-hidden">
      <div className="hero-overlay" />
      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4">
        <picture>
          <source srcSet={heroCenter} type="image/avif" />
          <img
            src={heroFallback}
            alt="Hanami hero"
            className="w-[min(80vw,520px)] max-w-full"
            loading="eager"
          />
        </picture>
      </div>
    </section>
  );
}
