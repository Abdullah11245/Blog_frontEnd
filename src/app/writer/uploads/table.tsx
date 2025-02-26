'use client'
import './uploads.css'
import React, { useState, useRef, useEffect } from 'react';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with the second card
  const [isDragging, setIsDragging] = useState(false); // Track if user is dragging
  const [startPos, setStartPos] = useState(0); // Starting position for dragging
  const [offset, setOffset] = useState(0); // Track offset during dragging

  const cards = [
    { id: 1, color: 'bg-blue-500', text: 'Card 1' },
    { id: 2, color: 'bg-green-500', text: 'Card 2' },
    { id: 3, color: 'bg-red-500', text: 'Card 3' }
  ];

  const totalCards = cards.length;

  // Type the ref explicitly to be a HTMLDivElement
  const sliderRef = useRef<HTMLDivElement | null>(null);

  // Update the slider's transform property based on currentIndex
  const getSliderTranslateX = () => {
    return -(currentIndex * 240); // 240px is the width of each card + margin
  };

  // Handle next and previous card logic (called on swipe)
  const handleChangeIndex = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
    } else if (direction === 'prev') {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
    }
  };

  // Handle mouse drag start
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartPos(e.clientX); // Get the starting X position of the mouse
  };

  // Handle mouse move
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setOffset(e.clientX - startPos); // Calculate the distance moved
  };

  // Handle mouse drag end
  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Determine swipe direction based on offset
    if (offset < -100) {
      handleChangeIndex('next'); // Swipe left -> next slide
    } else if (offset > 100) {
      handleChangeIndex('prev'); // Swipe right -> previous slide
    }

    // Reset the offset after swipe
    setOffset(0);
  };

  // Handle touch start (on mobile)
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartPos(e.touches[0].clientX); // Get the starting touch position
  };

  // Handle touch move (on mobile)
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setOffset(e.touches[0].clientX - startPos); // Track the movement
  };

  // Handle touch end (on mobile)
  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Determine swipe direction based on offset
    if (offset < -100) {
      handleChangeIndex('next'); // Swipe left -> next slide
    } else if (offset > 100) {
      handleChangeIndex('prev'); // Swipe right -> previous slide
    }

    // Reset the offset after swipe
    setOffset(0);
  };

  // Centering and smooth dragging
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${getSliderTranslateX() + offset}px)`;
    }
  }, [currentIndex, offset]);

  return (
    <div className="relative w-full h-[400px] flex justify-center items-center">
      {/* Slider container */}
      <div
        ref={sliderRef}
        className="flex transition-transform duration-500 ease-in-out slider-container"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp} // Stop drag if mouse leaves the slider
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          transform: `translateX(${getSliderTranslateX() + offset}px)`,
          cursor: isDragging ? 'grabbing' : 'grab', // Combined cursor logic here
        }}
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`transition-all duration-700 ease-in-out 
              ${index === currentIndex ? 'active-card' : 'inactive-card'} 
              cursor-pointer transform 
              ${index !== currentIndex ? 'inactive-card-scale' : ''}`} // Apply scaling effect on non-active cards
            style={{
              width: index === currentIndex ? '240px' : '120px', // Active card is square, non-active is rectangle
              height: '300px', // Keep height the same for both
              margin: '0 8px', // Reduced space between cards horizontally
            }}
            onClick={() => setCurrentIndex(index)} // Click to expand the active card
          >
            <div
              className={`w-full h-full ${card.color} rounded-lg flex items-center justify-center text-white`}
            >
              {card.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
