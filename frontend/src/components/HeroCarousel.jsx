import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroSlides from "../helpers/heroSlides";
import "../styles/HeroCarousel.css";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = heroSlides[currentSlide];

  useEffect(() => {
    heroSlides.forEach(({ image }) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  return (
    <div className="heroCarousel" aria-live="polite">
      <div key={currentSlide} className="hero-slide">
        <img src={slide.image} alt={slide.title} />

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span>New collection</span>
          <h2>{slide.title}</h2>
          <p>{slide.description}</p>
        </div>
      </div>

      <div className="hero-buttons">
        <button onClick={previousSlide} aria-label="Previous slide">
          <ChevronLeft size={32} />
        </button>

        <button onClick={nextSlide} aria-label="Next slide">
          <ChevronRight size={32} />
        </button>
      </div>

      <div className="hero-indicators">
        {heroSlides.map((slide) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(slide.id)}
            aria-label={`Go to slide ${slide.id + 1}`}
            className={currentSlide === slide.id ? "active" : ""}
          />
        ))}
      </div>

      <button className="hero-cta">Explore Collection</button>
    </div>
  );
}
