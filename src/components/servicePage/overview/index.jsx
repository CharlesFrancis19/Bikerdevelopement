import React, { useContext } from "react";
import parse from "html-react-parser";
import { ServiceDataContext } from "@/components";

const Overview = () => {
  const { data } = useContext(ServiceDataContext);
  if (!data || !data.overview || data.overview.length === 0) {
    return null;
  }

  const { title, content, advantages, heading } = data.overview[0];

  const colorCodes = ["#439CFF", "#A266F9", "#49DCB6", "#FEBB3E"];
  let colorIndex = 0;

  return (
    <div className="max-w-[1200px] m-auto p-4 flex flex-col gap-4">
      <h2 className="flex text-[#171717] text-[32px] justify-center font-semibold">
        {title}
      </h2>
      <h3 className="text-[#87A1AC] font-semibold text-3xl">{heading}</h3>
      <p className="font-normal text-base">{content}</p>
      <h3 className="text-[#87A1AC] font-semibold text-3xl">
        Advantages of service registration
      </h3>
      <ul className="flex flex-col gap-8">
        {advantages.map((advantage, index) => {
          colorIndex = index % colorCodes.length;
          const bgColor = colorCodes[colorIndex];
          const liStyle = {
            backgroundColor: bgColor,
          };

          return (
            <li key={index} className="flex gap-4">
              <div className="flex gap-6">
                <div
                  style={liStyle}
                  className="md:h-3 md:min-w-3 rounded-full p-4 h-2 mt-[2px] min-w-[4px] hidden md:block"
                ></div>
                <div>{parse(advantage)}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Overview;
