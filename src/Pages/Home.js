import React, {Fragment} from "react";

import Footer from "Components/Footer";
import About from "Components/About";
import Contact from "Modules/Contact";
import FidelityCard from "Components/FidelityCard";
import Fidelity from "Components/Fidelity";
import FidelityApp from "Components/FidelityApp";
import StoresBanner from "Modules/StoresBanner";
import BannerHome from "Components/BannerHome/BannerHome";

function Home() {
  return (
    <Fragment>
      <BannerHome/>

      <main id="main">
        <FidelityCard/>
        <StoresBanner/>
        <FidelityApp/>
        <Fidelity/>
        <About/>
        {/*<BeOurPartner/>*/}
        <Contact/>
      </main>
      <Footer/>
    </Fragment>
  );
}

export default Home;
