import React, {Fragment} from "react";

import Footer from "Components/Footer";
import About from "Components/About";
import Contact from "Modules/Contact";
import FidelityCard from "Components/FidelityCard";
import Fidelity from "Components/Fidelity";
import FidelityApp from "Components/FidelityApp";
import StoresBanner from "Modules/StoresBanner";
import BannerHome from "Components/BannerHome/BannerHome";
import OpenAccount from "Components/OpenAccount";
import BannerHorizontal from "Components/BannerHorizontal";
import LinkApps from "Components/LinkApps";

function Home() {
  return (
    <Fragment>
      <BannerHome/>

      <main id="main">
        <FidelityCard/>
        <StoresBanner/>
        <FidelityApp/>
        <BannerHorizontal />
        <About/>
        <Fidelity/>
        <OpenAccount />
        <LinkApps />
        <Contact/>
      </main>
      <Footer/>
    </Fragment>
  );
}

export default Home;
