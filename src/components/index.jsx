import React, { useContext } from "react";
import Image from "next/image";
import LandingPage from "./Main/landingPage";
import SecondaryPage from "./secondaryPage";
import FinalPage from "./finalPage";
import HeaderBanner from "./header";
import FooterBanner from "./footer";

import MHeaderBanner from "./mobileHeader";
import SerivcePage from "./servicePage";


export const ServiceDataContext = React.createContext();

export default function Home(props) {
  const { data } = props;
  return (
    <ServiceDataContext.Provider value={{ data }}>
      {/* <React.Fragment> */}
      <MHeaderBanner/>
      <HeaderBanner />
      <LandingPage />
      <SecondaryPage /> 
     <SerivcePage/>
      <FinalPage />
      <FooterBanner />
      {/* </React.Fragment> */}
    </ServiceDataContext.Provider>
  );
}
