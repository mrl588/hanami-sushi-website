import heroCenter from "../assets/Adc5968139dfb430396934b9617937b02A.avif";

export default function Home() {
  return (
    <section className="bg-[#f5f0e7] relative min-h-screen overflow-hidden">
      <div className="hero-overlay" />
      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4">
        <img
          src={heroCenter}
          alt="Hanami hero"
          className="w-[min(80vw,520px)] max-w-full"
        />
      </div>
    </section>
  );
}
