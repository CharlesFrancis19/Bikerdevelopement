import { ServiceDataContext } from "@/components";
import React, { useContext } from "react";
import Image from "next/image";

const Documents = () => {
  const {data} = useContext(ServiceDataContext);
  if (!data || !data.documents || data.documents.length === 0) {
    return ;
  }

  return (
    <>
      <div className="max-w-[1200px] m-auto p-4 flex flex-col gap-4 pb-4">
        <h2 className="text-[#87A1AC] font-semibold text-3xl">
          Documents required for service verification
        </h2>
        <ul className="flex flex-col gap-8">
          {data.documents.map((service, index) => (
            <li key={index} className="flex gap-4 items-center">
              <div className="flex gap-2"><Image src="./blue-tick.svg" width={20} height={20}/>{service}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="max-w-[1200px] m-auto p-4 flex flex-col gap-4 pb-14">
        <h2 className="text-[#87A1AC] text-[32px]">
        * Government Fee
        </h2>
        <p>{data.govermentFee}</p>
      </div>
    </>
  );
};

export default Documents;
