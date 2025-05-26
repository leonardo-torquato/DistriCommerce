import React, { useState, useEffect } from 'react';
import { CarouselContainer, CarouselImage, CarouselButton, CarouselDots, Dot } from './styles';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://www.jdmedia.co.za/images/carousel/Ecommerce-Banner-1920.jpg",
    "https://static.vecteezy.com/ti/vetor-gratis/p1/2294825-e-commerce-promocao-web-banner-design-gratis-vetor.jpg",
    "https://img.freepik.com/vetores-gratis/modelo-de-cartao-de-produto-gradiente_23-2149656335.jpg?t=st=1745887790~exp=1745891390~hmac=87c3a87f9798d4fc636e920235b746820af6d23121a68a768fbdf656a1d6931b&w=1380"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <CarouselContainer>
      <CarouselButton onClick={prevSlide} position="left">❮</CarouselButton>
      <CarouselImage src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <CarouselButton onClick={nextSlide} position="right">❯</CarouselButton>
      <CarouselDots>
        {images.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </CarouselDots>
    </CarouselContainer>
  );
};

export default Carousel;
