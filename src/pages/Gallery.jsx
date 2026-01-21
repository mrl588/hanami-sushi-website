import hanamiLogo from "../assets/Hanami_Logo_Inverted.jpg";
import redFish from "../assets/redfishtrans.png";
import heroAvif from "../assets/Adc5968139dfb430396934b9617937b02A.avif";
import mapImage from "../assets/map.png";

const baseImages = [
  { src: hanamiLogo, alt: "Hanami logo" },
  { src: redFish, alt: "Red fish art" },
  { src: heroAvif, alt: "Hanami hero" },
  { src: mapImage, alt: "Location map" },
];

const galleryImages = Array.from({ length: 9 }, (_, i) => ({
  ...baseImages[i % baseImages.length],
  id: i,
}));

export default function Gallery() {
  return (
    <section className="bg-[#f5f0e7] pt-24">
      <div className="mx-auto w-[95%] py-8 md:py-12">
        <div className="flex flex-col items-center gap-4 text-center mb-8 md:mb-12">
          <img
            src={redFish}
            alt="Hanami fish icon"
            className="h-32 w-auto md:h-40"
          />
          <h1
            className="menu-title-fluid uppercase tracking-[0.35em] text-black"
            style={{ fontFamily: '"Aleo", serif' }}
          >
            Gallery
          </h1>
          <p className="text-sm md:text-base text-black/70" style={{ fontFamily: '"Soin Sans", sans-serif' }}>
            A glimpse of Hanami — select shots of our space, plates, and details.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 min-h-[70vh]">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              className="overflow-hidden rounded-sm bg-[#e9e6df] aspect-square"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
