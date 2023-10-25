import React from "react";
import Image from "next/image";

const Slider = ({
  imageUrl,
  content1,
  content2,
  content3,
  content4,
  prevSlide,
  nextSlide,
  isFirstSlide,
  isLastSlide,
}) => {
  const last = isFirstSlide ? "contrast-0 cursor-not-allowed" : "";
  const first = isLastSlide ? "contrast-0 cursor-not-allowed" : "";

  return (
    <div className="flex flex-col md:flex-row gap-4 shadow-md p-6 md:p-12 rounded-2xl bg-gradient-to-tl from-white to-[#]/25 max-w-[1200px] w-full justify-between">
      <div className="flex flex-col gap-4 leading-6 w-full md:max-w-[795px]">
        <p className="font-normal text-2xl md:text-4xl">{content1}</p>
        <p className="text-base">{content2}</p>
        <div className="text-base">
          <p>
            <strong>{content3}</strong>
          </p>
          <p>{content4}</p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center mt-4 md:mt-0">
        <Image src={imageUrl} width={100} height={100} alt="Slider" />
        <div className="flex gap-4 mt-4">
          <button
            onClick={prevSlide}
            disabled={isFirstSlide}
            className={`${last}`}
          >
            <Image
              src="./arrow.svg"
              width={25}
              height={25}
              className="rotate-180"
              alt="Previous"
            />
          </button>

          <button
            onClick={nextSlide}
            disabled={isLastSlide}
            className={`${first}`}
          >
            <Image
              width={25}
              height={25}
              src="./arrow.svg"
              alt="Next"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
