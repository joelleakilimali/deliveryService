import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../pages/home.css";

const Carousel = ({ items, itemRenderer }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  const carouselStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };

  return (
    <div style={carouselStyle}>
      <button onClick={prevSlide} className="carousel-button">
        <FaArrowLeft />
      </button>
      <div className="carousel-content m-10 " style={{ display: "flex" }}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            {itemRenderer(item)}
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="carousel-button">
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Carousel;
