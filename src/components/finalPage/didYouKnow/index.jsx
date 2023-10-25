import { ServiceDataContext } from "@/components";
import React, { useContext } from "react";
import Image from "next/image";
import parse from "html-react-parser";

const DidYouKnow = () => {
  const { data } = useContext(ServiceDataContext);
  const paragraphs = data.didyouknow;

  return (
    <div className="flex flex-col items-center justify-center p-4 pb-10">
      <div className="flex flex-col gap-4 shadow-md p-6 md:p-12 rounded-2xl bg-gradient-to-tl from-white to-[#3d709f]/25 max-w-[1200px] w-full justify-between relative">
        <h2 className="text-[#22252B] font-bold text-[24px] pt-4 md:pt-0">
          Did you Know
        </h2>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="font-normal text-[16px] leading-7">
            {parse(paragraph)}
          </p>
        ))}
        <Image
          src="./alert.svg"
          width={70}
          height={70}
          className="absolute md:left-0 md:translate-x-[-50%] md:translate-y-[160%] top-[-8%] translate-x-[150%] "
        />
      </div>
    </div>
  );
};

export default DidYouKnow;
