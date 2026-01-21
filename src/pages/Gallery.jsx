import redFish from "../assets/redfishtrans.png";
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
  { id: 1, src: gallery1, alt: "Gallery image 1" },
  { id: 2, src: gallery2, alt: "Gallery image 2" },
  { id: 3, src: gallery3, alt: "Gallery image 3" },
  { id: 4, src: gallery4, alt: "Gallery image 4" },
  { id: 5, src: gallery5, alt: "Gallery image 5" },
  { id: 6, src: gallery6, alt: "Gallery image 6" },
  { id: 7, src: gallery7, alt: "Gallery image 7" },
  { id: 8, src: gallery8, alt: "Gallery image 8" },
  { id: 9, src: gallery9, alt: "Gallery image 9" },
];

export default function Gallery() {
  return (
    <section className="bg-[#f4eadc] pt-24">
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
