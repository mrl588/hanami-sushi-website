import { useEffect, useState } from "react";
import { usePageAnimation } from "../hooks/usePageAnimation";
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

const leftGalleryImages = galleryImages.slice(0, 5); // Images 1-5
const rightGalleryImages = galleryImages.slice(5, 9); // Images 6-9

export default function Home() {
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);
  const [leftPaused, setLeftPaused] = useState(false);
  const [rightPaused, setRightPaused] = useState(false);
  const [leftFadeKey, setLeftFadeKey] = useState(0);
  const [rightFadeKey, setRightFadeKey] = useState(0);
  const [leftPrevIndex, setLeftPrevIndex] = useState(0);
  const [rightPrevIndex, setRightPrevIndex] = useState(0);
  const [leftIsTransitioning, setLeftIsTransitioning] = useState(false);
  const [rightIsTransitioning, setRightIsTransitioning] = useState(false);
  const [animationDelay, setAnimationDelay] = useState(3600); // Start with longer delay
  
  useEffect(() => {
    // Check after a brief delay to ensure DOM is ready
    const checkDelay = setTimeout(() => {
      const introOverlay = document.querySelector('.intro-overlay');
      const isIntroVisible = introOverlay && 
        window.getComputedStyle(introOverlay).display !== 'none' &&
        window.getComputedStyle(introOverlay).opacity !== '0';
      
      if (!isIntroVisible) {
        // Intro is not playing, start immediately
        setAnimationDelay(100);
      }
      // If intro is visible, keep the 3600ms delay
    }, 50);
    
    return () => clearTimeout(checkDelay);
  }, []);
  
  // Auto-scroll for left gallery (images 1-5)
  useEffect(() => {
    if (leftPaused) return;
    
    const interval = setInterval(() => {
      setLeftIndex((prev) => {
        setLeftPrevIndex(prev);
        setLeftIsTransitioning(true);
        setLeftFadeKey((k) => k + 1);
        
        // Reset transitioning state after animation completes
        setTimeout(() => {
          setLeftIsTransitioning(false);
        }, 800);
        
        return (prev + 1) % leftGalleryImages.length;
      });
    }, 4000); // 4 seconds
    
    return () => clearInterval(interval);
  }, [leftPaused]);
  
  // Auto-scroll for right gallery (images 6-9)
  useEffect(() => {
    if (rightPaused) return;
    
    const interval = setInterval(() => {
      setRightIndex((prev) => {
        setRightPrevIndex(prev);
        setRightIsTransitioning(true);
        setRightFadeKey((k) => k + 1);
        
        // Reset transitioning state after animation completes
        setTimeout(() => {
          setRightIsTransitioning(false);
        }, 800);
        
        return (prev + 1) % rightGalleryImages.length;
      });
    }, 4000); // 4 seconds
    
    return () => clearInterval(interval);
  }, [rightPaused]);
  
  const pageRef = usePageAnimation(animationDelay, 150);

  const prevLeft = () => {
    setLeftPaused(true);
    setLeftPrevIndex(leftIndex);
    setLeftIsTransitioning(true);
    setLeftFadeKey((k) => k + 1);
    setLeftIndex((prev) => {
      const next = (prev - 1 + leftGalleryImages.length) % leftGalleryImages.length;
      setTimeout(() => setLeftIsTransitioning(false), 800);
      return next;
    });
  };
  
  const nextLeft = () => {
    setLeftPaused(true);
    setLeftPrevIndex(leftIndex);
    setLeftIsTransitioning(true);
    setLeftFadeKey((k) => k + 1);
    setLeftIndex((prev) => {
      const next = (prev + 1) % leftGalleryImages.length;
      setTimeout(() => setLeftIsTransitioning(false), 800);
      return next;
    });
  };
  
  const prevRight = () => {
    setRightPaused(true);
    setRightPrevIndex(rightIndex);
    setRightIsTransitioning(true);
    setRightFadeKey((k) => k + 1);
    setRightIndex((prev) => {
      const next = (prev - 1 + rightGalleryImages.length) % rightGalleryImages.length;
      setTimeout(() => setRightIsTransitioning(false), 800);
      return next;
    });
  };
  
  const nextRight = () => {
    setRightPaused(true);
    setRightPrevIndex(rightIndex);
    setRightIsTransitioning(true);
    setRightFadeKey((k) => k + 1);
    setRightIndex((prev) => {
      const next = (prev + 1) % rightGalleryImages.length;
      setTimeout(() => setRightIsTransitioning(false), 800);
      return next;
    });
  };

  return (
    <section ref={pageRef} className="bg-[#f4eadc] relative min-h-screen overflow-hidden">
      <div className="hero-overlay" />
      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4">
        <img
          src={heroCenter}
          alt="Hanami hero"
          className="page-fade-up w-[min(100vw,864px)] max-w-full"
          loading="eager"
        />
      </div>
      <div className="mx-auto w-[95%] pb-12 -mt-60">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-3 page-fade-up">
            <div className="relative overflow-hidden rounded-sm bg-[#e9e6df] aspect-square">
              {leftIsTransitioning && (
                <img
                  src={leftGalleryImages[leftPrevIndex]}
                  alt={`Gallery slide ${leftPrevIndex + 1}`}
                  className="gallery-fade-out absolute inset-0 h-full w-full object-cover"
                />
              )}
              <img
                key={leftFadeKey}
                src={leftGalleryImages[leftIndex]}
                alt={`Gallery slide ${leftIndex + 1}`}
                className="gallery-fade-in absolute inset-0 h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={prevLeft}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-sm text-[#f4eadc] transition hover:bg-black/80 z-10"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={nextLeft}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-sm text-[#f4eadc] transition hover:bg-black/80 z-10"
              >
                ›
              </button>
            </div>
            <div className="flex items-center justify-center gap-2">
              {leftGalleryImages.map((_, i) => (
                <button
                  key={`left-dot-${i}`}
                  type="button"
                  onClick={() => {
                    setLeftPaused(true);
                    setLeftPrevIndex(leftIndex);
                    setLeftIsTransitioning(true);
                    setLeftFadeKey((k) => k + 1);
                    setLeftIndex(i);
                    setTimeout(() => setLeftIsTransitioning(false), 800);
                  }}
                  aria-label={`Show slide ${i + 1}`}
                  className={`h-2 w-2 rounded-full transition ${
                    i === leftIndex ? "bg-[#6A0302]" : "bg-[#6A0302]/30"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="space-y-3 page-fade-up">
            <div className="relative overflow-hidden rounded-sm bg-[#e9e6df] aspect-square">
              {rightIsTransitioning && (
                <img
                  src={rightGalleryImages[rightPrevIndex]}
                  alt={`Drink slide ${rightPrevIndex + 1}`}
                  className="gallery-fade-out absolute inset-0 h-full w-full object-cover"
                />
              )}
              <img
                key={rightFadeKey}
                src={rightGalleryImages[rightIndex]}
                alt={`Drink slide ${rightIndex + 1}`}
                className="gallery-fade-in absolute inset-0 h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={prevRight}
                aria-label="Previous drink image"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-sm text-[#f4eadc] transition hover:bg-black/80 z-10"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={nextRight}
                aria-label="Next drink image"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-sm text-[#f4eadc] transition hover:bg-black/80 z-10"
              >
                ›
              </button>
            </div>
            <div className="flex items-center justify-center gap-2">
              {rightGalleryImages.map((_, i) => (
                <button
                  key={`right-dot-${i}`}
                  type="button"
                  onClick={() => {
                    setRightPaused(true);
                    setRightPrevIndex(rightIndex);
                    setRightIsTransitioning(true);
                    setRightFadeKey((k) => k + 1);
                    setRightIndex(i);
                    setTimeout(() => setRightIsTransitioning(false), 800);
                  }}
                  aria-label={`Show drink slide ${i + 1}`}
                  className={`h-2 w-2 rounded-full transition ${
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
