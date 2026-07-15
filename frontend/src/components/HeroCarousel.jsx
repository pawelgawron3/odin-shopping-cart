import { useState } from "react";
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

  return (
    <div className="heroCarousel">
      <img src={slide.image} alt={slide.title} />

      <div className="hero-content">
        <span>New collection</span>
        <h2>{slide.title}</h2>
        <p>{slide.description}</p>
      </div>
    </div>
  );
}
