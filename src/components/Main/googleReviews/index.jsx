import React from "react";

const DEFAULT_IMG_PATH = {
  url: "google.svg",
  alt: "google",
  height: 30,
  width: 80,
};

export const GoogleReview = (props) => {
  const {
    image = DEFAULT_IMG_PATH,
    tagLine = "Google Reviews",
    reviewimage = DEFAULT_IMG_PATH,
    rating = "4.3",
    reviews = "9,500+ Happy Reviews",
  } = props;

  return (
    <div className="flex items-center gap-2">
      <img src={image.url} width={image.width} alt={image.alt} className="mb-0" />
      <div className="flex flex-col">
        <p className="font-semibold text-lg text-gray-800 ">{tagLine}</p>
        <div className="flex flex-row  text-gray-600 font-semibold">
          <p className="flex gap-2 pr-3 "><img
            src={reviewimage.url}
            width={reviewimage.width}
            alt={reviewimage.alt}
            className="md:mb-0"
          />{rating}</p>  
            <p>{reviews}</p>
        </div>
      </div>
    </div>
  );
};
