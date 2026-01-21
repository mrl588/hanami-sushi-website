import { usePageAnimation } from "../hooks/usePageAnimation";
import mapImage from "../assets/map.png";
import fishIcon from "../assets/redfishtrans.png";

export default function HoursLocation() {
  const address = "114 East Main St, Clinton, CT 06413";
  const pageRef = usePageAnimation(100, 120);

  return (
    <section ref={pageRef} className="bg-[#f4eadc] pt-24">
      <div className="mx-auto max-w-6xl space-y-10 px-4 py-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <img
            src={fishIcon}
            alt="Hanami fish icon"
            className="page-fade-up h-32 w-auto md:h-40"
          />
          <h1 className="page-fade-up brand-title text-2xl uppercase tracking-[0.4em] text-black md:text-3xl">
            Hours & Location
          </h1>
        </div>
        <div className="flex flex-col gap-8 md:flex-row md:justify-center">
          <div className="page-fade-up flex-1 text-center text-black md:max-w-md">
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-base font-medium uppercase tracking-[0.4em] text-black">
                  Lunch Hours
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.2em]">
                  Monday–Saturday: 11:30am–3pm
                </p>
              </div>
              <div>
                <p className="text-base font-medium uppercase tracking-[0.4em] text-black">
                  Our Location
                </p>
                <p className="mt-3 text-sm tracking-[0.2em]">
                  114 East Main St
                </p>
                <p className="mt-2 text-sm tracking-[0.2em]">
                  Clinton, CT 06413
                </p>
                <p className="mt-2 text-sm tracking-[0.2em]">
                  860.664.9268
                </p>
              </div>
            </div>
          </div>
          <div className="page-fade-up flex-1 text-center text-black md:max-w-md">
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-base font-medium uppercase tracking-[0.4em] text-black">
                  Dinner Hours
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.2em]">
                  Monday–Thursday: 3pm–9pm
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em]">
                  Friday–Saturday: 3pm–10pm
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em]">
                  Sunday: 3:00pm–9pm
                </p>
              </div>
              <div>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-sm bg-[#8A0403] px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-white transition hover:bg-[#6A0302]"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-fade-up w-full overflow-hidden border-t border-b border-black/10 bg-[#d9d6d1]">
          <img
            src={mapImage}
            alt={`Map to ${address}`}
            className="map-image w-full h-auto grayscale"
            style={{
              filter: "grayscale(100%) contrast(1.2) brightness(0.9)",
              display: "block",
            }}
          />
      </div>
    </section>
  );
}
