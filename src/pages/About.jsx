import { usePageAnimation } from "../hooks/usePageAnimation";
import fishIcon from "../assets/redfishtrans.png";

export default function About() {
  const pageRef = usePageAnimation(100, 120);

  return (
    <section ref={pageRef} className="bg-[#f4eadc] pt-24">
      <div className="mx-auto w-[70%] px-4 py-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <img
            src={fishIcon}
            alt="Hanami fish icon"
            className="page-fade-up h-32 w-auto md:h-40"
          />

          <h1
            className="page-fade-up menu-title-fluid uppercase tracking-[0.35em] text-black"
            style={{ fontFamily: '"Aleo", serif' }}
          >
            About
          </h1>
        </div>

        <div className="mt-10 space-y-6 text-center">
          <p
            className="page-fade-up text-black/80 leading-relaxed"
            style={{
              fontFamily: '"Noto Serif JP","Noto Serif",serif',
              fontSize: "clamp(1.1rem, 0.6vw + 1rem, 1.45rem)",
            }}
          >
            Located along the scenic Connecticut shoreline in Clinton, Hanami
            Japanese Restaurant brings an authentic taste of Japan to your
            table. Our award‑winning menu features expertly crafted sushi,
            sizzling hibachi, and comforting ramen—made with the freshest
            ingredients and traditional techniques.
          </p>
          <p
            className="page-fade-up text-black/80 leading-relaxed"
            style={{
              fontFamily: '"Noto Serif JP","Noto Serif",serif',
              fontSize: "clamp(1.1rem, 0.6vw + 1rem, 1.45rem)",
            }}
          >
            At Hanami, we pair a warm, inviting atmosphere with exceptional
            service to create a dining experience that delights both the palate
            and the senses. Whether you're celebrating a special occasion or
            enjoying a casual meal, Hanami is your destination for Japanese
            cuisine done right.
          </p>
        </div>
      </div>
    </section>
  );
}

