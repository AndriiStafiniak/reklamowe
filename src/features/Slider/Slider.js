import { useEffect, useState } from "react";
import { Container, Dot, Dots, Slide, SlideImg } from "./style";

const menImage = require("../../images/men.png");
const womenImage = require("../../images/women.png");
const jewelryImage = require("../../images/jewelery.png");
const electronicImage = require("../../images/electronic.png");
function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [menImage, womenImage, jewelryImage, electronicImage];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2300);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      {slides.map((slideImage, index) => (
        <Slide key={index} left={-100 * (currentSlide - index)}>
          <SlideImg src={slideImage} alt={`Slide ${index}`} />
        </Slide>
      ))}
      <Dots>
        {slides.map((_, idx) => (
          <Dot
            key={idx}
            active={currentSlide === idx}
            onClick={() => setCurrentSlide(idx)}
          />
        ))}
      </Dots>
    </Container>
  );
}

export default Slider;
