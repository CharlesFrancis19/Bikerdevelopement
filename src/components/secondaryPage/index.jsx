import React, { useContext } from "react";
import CardComp from "./Card";
import SliderComp from "./Slider";
import { ServiceDataContext } from "..";

const SecondaryPage = () => {
  const {data} = useContext(ServiceDataContext);
  return (
    <>
      <div className="bg-[#F9FCFF] p-4 flex flex-col gap-14 pb-24">
        <div className="flex flex-col items-center justify-center leading-10 p-4">
          <div className="text-center p-4 ">
            <p className="font-Euclid-Circular-A text-4xl font-bold leading-12 tracking-normal text-center2">{data.why}</p>
            <p className="text-lg">
             {data.content}
            </p>
          </div>
        </div>
        <CardComp/>
        <SliderComp data={data}/>
      </div>
    </>
  );
};

export default SecondaryPage;
