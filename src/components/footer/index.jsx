import React from "react";
import Image from "next/image";

const FooterBanner = () => {
  return (
    <div className="bg-black">
      <div className=" text-white  flex flex-col md:flex-row justify-between max-w-[1200px] m-auto p-4 gap-4">
        <div className="flex flex-col gap-2">
          <Image src="/blacklogo.png" width={200} height={200} />
          <p className="text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
            quisquam itaque aliquid distinctio debitis eveniet
          </p>
          <p className="text-sm">
            Connect with us to simplify your service
          </p>
        </div>
        <div>
          <ul className="flex gap-2 flex-col">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Bike Service</li>
            <li>others</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">Contact Information</p>
          <p>Email: xyz@gmail.com</p>
          <p>Phone: +91 9787065558</p>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
