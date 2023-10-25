import React, { useContext, useState } from "react";
import { ServiceDataContext } from "@/components";
import Image from "next/image";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const { data } = useContext(ServiceDataContext);
  const faqData = data.faq;

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
      <h3 className="text-[40px] pb-2 text-center">{data.faqtitle}</h3>
      {faqData.map((item, index) => (
        <div
          className="flex md:justify-center p-2 w-full"
          onClick={() => toggleAccordion(index)}
          key={index}
        >
          <div className="flex flex-col items-start md:w-[1200px] w-full">
            <div className="flex flex-col items-start p-4 w-full">
              <div
                className={`w-full font-medium flex gap-2 pb-2 justify-between ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <div>{item.question}</div>
                <div>
                  {activeIndex === index && (
                    <Image
                      src="dash.svg"
                      alt="Active"
                      className="ml-2"
                      width={20}
                      height={20}
                    />
                  )}
                  {activeIndex !== index && (
                    <Image
                      src="add.svg"
                      alt="Inactive"
                      className="ml-2"
                      width={20}
                      height={20}
                    />
                  )}
                </div>
              </div>
              {activeIndex === index && (
                <div className="max-w-[950] font-normal text-[16px]">
                  {item.answer}
                </div>
              )}
            </div>
            <span className="bg-[#CCCCCC] w-full h-[2px] pl-4"></span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Faq;
