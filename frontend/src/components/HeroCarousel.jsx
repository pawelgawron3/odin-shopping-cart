import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "../assets/carlos-vaz-unsplash.jpg";
import hero2 from "../assets/molly-mears-unsplash.jpg";
import hero3 from "../assets/tamara-bellis-unsplash.jpg";
import hero4 from "../assets/vooglam-eyewear-unsplash.jpg";
import "../styles/HeroCarousel.css";

const heroSlides = [
  {
    id: 0,
    image: hero1,
    title: "Timeless Elegance",
    description:
      "Crafted for those who appreciate refined design and everyday sophistication.",
  },
  {
    id: 1,
    image: hero2,
    title: "Modern Classics",
    description:
      "Contemporary frames inspired by timeless silhouettes and effortless style.",
  },
  {
    id: 2,
    image: hero3,
    title: "Made to Stand Out",
    description:
      "Premium eyewear designed to express confidence with every glance.",
  },
  {
    id: 3,
    image: hero4,
    title: "See Beyond Trends",
    description:
      "Discover handcrafted frames that combine comfort, quality, and lasting style.",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = heroSlides[currentSlide];

  useEffect(() => {
    heroSlides.forEach(({ image }) => {
      const img = new Image();
      img.src = image;
    });
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
