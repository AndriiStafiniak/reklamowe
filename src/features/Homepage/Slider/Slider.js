import React, { useState, useEffect } from "react";
import {
  SliderContainer,
  SliderImage,
  SliderDot,
  DotsContainer,
} from "./style";

const images = [
  "url1.jpg",
  "url2.jpg",
  "url3.jpg",
  // ... twoje obrazy
];

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide((prev) => {
        if (prev === images.length - 1) {
          // Zamiast bezpośrednio wracać do 0, dodajemy kopię pierwszego slajdu na końcu
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentSlide(0);
          }, 0);
          return prev;
        }
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <SliderContainer>
      <div
        style={{
          display: "flex",
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
        }}
      >
        {images.map((image, index) => (
          <SliderImage key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
        {/* Dodajemy kopię pierwszego slajdu na końcu */}
        <SliderImage src={images[0]} alt="Slide 1 copy" />
      </div>
      <DotsContainer>
        {images.map((_, index) => (
          <SliderDot
            key={index}
            $active={currentSlide === index}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </DotsContainer>
    </SliderContainer>
  );
};
