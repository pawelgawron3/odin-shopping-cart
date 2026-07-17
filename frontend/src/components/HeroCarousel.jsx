import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroSlides from "../helpers/heroSlides";
import styles from "../styles/HeroCarousel.module.css";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slide = heroSlides[currentSlide];

  useEffect(() => {
    heroSlides.forEach(({ image }) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  return (
    <div
      className={styles.heroCarousel}
      aria-live="polite"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div key={currentSlide} className={styles.heroSlide}>
        <img src={slide.image} alt={slide.title} />

        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContent}>
          <span>New collection</span>
          <h2>{slide.title}</h2>
          <p>{slide.description}</p>
        </div>
      </div>

      <div className={styles.heroButtons}>
        <button onClick={previousSlide} aria-label="Previous slide">
          <ChevronLeft size={32} />
        </button>

        <button onClick={nextSlide} aria-label="Next slide">
          <ChevronRight size={32} />
        </button>
      </div>

      <div className={styles.heroIndicators}>
        {heroSlides.map((slide) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(slide.id)}
            aria-label={`Go to slide ${slide.id + 1}`}
            className={`${styles.indicator} ${
              currentSlide === slide.id ? styles.indicatorActive : ""
            }`}
          />
        ))}
      </div>

      <button className={styles.heroCta}>Explore Collection</button>
    </div>
  );
}
