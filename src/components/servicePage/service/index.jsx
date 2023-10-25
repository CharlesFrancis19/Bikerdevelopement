import React, { useContext } from "react";
import parse from "html-react-parser";
import { ServiceDataContext } from "@/components";

const Service = () => {
  const { data } = useContext(ServiceDataContext);
  if (!data || !data.process || data.process.length === 0) {
    return null;
  }
  const service = data.process;

  const colorCodes = ["#50C2A4", "#F1AB86", "#54A5FE", "#AD77FA", "#DEA02C"];
  let colorIndex = 0;

  return (
    <div className="max-w-[1200px] m-auto p-4 flex flex-col gap-4">
      <h2 className="text-[#87A1AC] font-semibold text-3xl">
        Process of service documents verification
      </h2>
      <ul className="flex flex-col gap-8">
        {service.map((service, index) => {
          colorIndex = index % colorCodes.length;
          const startColor = colorCodes[colorIndex];
          const endColor = colorCodes[(colorIndex + 1) % colorCodes.length];

          const gradientStyle = {
            background: `linear-gradient(45deg, white, ${endColor} 90%)`,
          };

          return (
            <li key={index} className="flex gap-4 items-center flex-col md:flex-row">
              <div
                style={gradientStyle}
                className="min-w-[96px] h-24 flex flex-col items-center justify-center text-white rounded-full text-xl font-bold"
              >
                <div className="min-w-[64px] h-16 flex flex-col items-center justify-center bg-white text-black rounded-full text-m font-medium py-4">
                  Step
                  <div>{(index + 1).toString().padStart(2, "0")}</div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[22px]">{service.title}</h3>
                <div>{service.content}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Service;
