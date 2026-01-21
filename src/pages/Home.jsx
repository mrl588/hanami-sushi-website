import { useState } from "react";
import heroCenter from "../assets/logo for now.png";
import gallery1 from "../assets/Gallery1.jpg";
import gallery2 from "../assets/Gallery2.jpg";
import gallery3 from "../assets/Gallery3.jpg";
import gallery4 from "../assets/Gallery4.jpg";
import gallery5 from "../assets/Gallery5.jpg";
import gallery6 from "../assets/Gallery6.jpg";
import gallery7 from "../assets/Gallery7.jpg";
import gallery8 from "../assets/Gallery8.jpg";
import gallery9 from "../assets/Gallery9.jpg";

const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
];

export default function Home() {
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  const totalSlides = galleryImages.length;

  const prevLeft = () =>
    setLeftIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  const nextLeft = () => setLeftIndex((prev) => (prev + 1) % totalSlides);
  const prevRight = () =>
    setRightIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  const nextRight = () => setRightIndex((prev) => (prev + 1) % totalSlides);

  return (
    <section className="bg-[#f4eadc] relative min-h-screen overflow-hidden">
      <div className="hero-overlay" />
      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4">
        <img
          src={heroCenter}
          alt="Hanami hero"
          className="w-[min(100vw,864px)] max-w-full"
          loading="eager"
        />
      </div>
      <div className="mx-auto w-[95%] pb-12 -mt-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-3">
            <div className="relative overflow-hidden rounded-sm bg-[#e9e6df] aspect-square">
              <img
                src={galleryImages[leftIndex]}
                alt={`Gallery slide ${leftIndex + 1}`}
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={prevLeft}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-sm text-[#f4eadc] transition hover:bg-black/80"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={nextLeft}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-sm text-[#f4eadc] transition hover:bg-black/80"
              >
                ›
              </button>
            </div>
            <div className="flex items-center justify-center gap-2">
              {galleryImages.map((_, i) => (
                <button
                  key={`left-dot-${i}`}
                  type="button"
                  onClick={() => setLeftIndex(i)}
                  aria-label={`Show slide ${i + 1}`}
                  className={`h-2 w-2 rounded-full ${
                    i === leftIndex ? "bg-[#6A0302]" : "bg-[#6A0302]/30"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="relative overflow-hidden rounded-sm bg-[#e9e6df] aspect-square">
              <img
                src={galleryImages[rightIndex]}
                alt={`Drink slide ${rightIndex + 1}`}
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={prevRight}
                aria-label="Previous drink image"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-sm text-[#f4eadc] transition hover:bg-black/80"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={nextRight}
                aria-label="Next drink image"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-sm text-[#f4eadc] transition hover:bg-black/80"
              >
                ›
              </button>
            </div>
            <div className="flex items-center justify-center gap-2">
              {galleryImages.map((_, i) => (
                <button
                  key={`right-dot-${i}`}
                  type="button"
                  onClick={() => setRightIndex(i)}
                  aria-label={`Show drink slide ${i + 1}`}
                  className={`h-2 w-2 rounded-full ${
                    i === rightIndex ? "bg-[#6A0302]" : "bg-[#6A0302]/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
