import React, { useContext } from "react";
import { GoogleReview } from "../googleReviews";
import LeadFormPrimary from "../LeadForm/LeadFormPrimary";
import { ServiceDataContext } from "@/components";
import Image from "next/image";

const LandingPage = () => {
  const { data } = useContext(ServiceDataContext);
  return (
    <>
      <div className="flex flex-col md:flex-row  gap-8 md:gap-32 m-auto max-w-[1200px] p-4 pb-8">
        <div className="md:w-3/4 flex flex-col gap-8  leading-10 m-auto">
          <h1 className="font-bold md:text-5xl text-3xl w-full">
            {data?.title}
          </h1>
          <div>
            {data.list}
          </div>
          <ul className="w-full flex flex-col gap-4">
            {data?.listItems?.map((item, index) => (
              <li key={index} className="flex gap-1 md:leading-8 leading-6">
                {" "}
                <div className="py-4 pr-4 w-16">
                  <Image src="tick.svg" width={33} height={33} />
                </div>
                <div>{item}</div>
              </li>
            ))}
          </ul>
          <div className="hidden md:block">
            <GoogleReview
              image={{
                url: "google.svg",
                width: 64,
                height: 64,
              }}
              tagLine="Google Reviews"
              reviewimage={{
                url: "stars.svg",
                width: 100,
                height: 100,
              }}
              rating="4.3/5"
              reviews="9,500+ Happy Reviews"
            />
          </div>
        </div>
        <div className="md:w-2/4">
        <LeadFormPrimary />
          <div className="md:hidden flex justify-center mt-4">
            <GoogleReview
              image={{
                url: "google.svg",
                width: 64,
                height: 64,
              }}
              tagLine="Google Reviews"
              reviewimage={{
                url: "stars.svg",
                width: 100,
                height: 100,
              }}
              rating="4.3/5"
              reviews="9,500+ Happy Reviews"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
