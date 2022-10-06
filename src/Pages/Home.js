import React, {Fragment} from "react";
import {Scrollbars} from 'react-custom-scrollbars';

import Footer from "Components/Footer";
import BannerHome from "Components/BannerHome";
import About from "Components/About";
import StoresList from "Modules/StoresList";
import Contact from "Modules/Contact";
import FidelityCard from "Components/FidelityCard";
import Fidelity from "Components/Fidelity";
import FidelityApp from "Components/FidelityApp";

function Home() {
  return (
    <Scrollbars style={{
      width: '100%',
      height: '100vh',
    }}>

      <Fragment>
        <BannerHome/>

        <main id="main">
          <FidelityCard/>
          <StoresList/>
          <FidelityApp/>
          <Fidelity/>
          <About/>
          <Contact/>
        </main>
        <Footer/>
      </Fragment>
    </Scrollbars>
  );
}

export default Home;
