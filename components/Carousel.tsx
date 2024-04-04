import React, { useState } from 'react'

const Carousel: React.FC<{ dates: string; slidesPerView: number }> = ({ dates, slidesPerView }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === dates.split(",").length - slidesPerView ? 0 : prevIndex + 1
      );
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? dates.split(",").length - slidesPerView : prevIndex - 1
      );
    };

    const visibleDates = dates.split(",").slice(currentIndex, currentIndex + slidesPerView);
  
    return (
      <div className="carousel">
        <button onClick={handlePrev}>&lt;</button>
        {visibleDates.map((date, index) => (
          <span key={index}>{date}</span>
        ))}
        <button onClick={handleNext}>&gt;</button>
      </div>
    );
};

export default Carousel;
