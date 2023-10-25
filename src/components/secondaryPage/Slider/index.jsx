import React, { useContext, useState } from "react";
import Slider from "./slider";
import props from "./sliderData.json";

const SliderComp = ({data} ) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % props.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? props.length - 1 : prevIndex - 1
    );
  };

  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === props.length - 1;
  // console.log(data.hideSlider);
  if (data.hideSlider === true) {
    return null;
  } else {
  return (
    <div className="max-w-[1200px] min-w-full flex flex-col items-center justify-center p-4">
      <Slider
        key={currentIndex}
        imageUrl={props[currentIndex].imageUrl}
        content1={props[currentIndex].content1}
        content2={props[currentIndex].content2}
        content3={props[currentIndex].content3}
        content4={props[currentIndex].content4}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        isFirstSlide={isFirstSlide}
        isLastSlide={isLastSlide}
      />
    </div>
  );
}
};

export default SliderComp;
