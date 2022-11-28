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
import AppBanner from "smart-app-banner-react";
import Platform from 'react-platform-js';

function Home() {

  const appInfo = {
    imageUrl:
      'https://play-lh.googleusercontent.com/vBRfpFgUc9N2FtWaVFIL-Bu0S8KLhKQE7JFHZDlqul99vzY9kV9RJdq1XVH5lzI5Og=w240-h480-rw',
    name: 'Kamarote Digital',
    publisher: 'Disponível nas lojas',
    infoText: 'Baixe agora!',
    linkButtonText: 'VER',
    linkUrl: Platform.OS === 'iOS' ?
      'https://apps.apple.com/us/app/kamarote-digital/id1644390610'
      : 'https://play.google.com/store/apps/details?id=com.infinitysolutionsapp.kamarotedigitalapp'
  }

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

      <div>
        <AppBanner
          appInfo={appInfo}
          position='bottom'
          hidden={false}
          style={{
            zIndex: 10
          }}
        />
      </div>
    </Fragment>
  );
}

export default Home;
