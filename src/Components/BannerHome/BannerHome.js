import React from 'react';
import {ParallaxBanner, ParallaxBannerLayer} from "react-scroll-parallax";
import imgMobile from 'assets/img/mobb.png';
import imgDesktop from 'assets/img/backk.png';
import {useWindowSize} from 'usehooks-ts'

import './BannerHome.css';

const BannerHome = () => {
  const {width, height} = useWindowSize();

  if (!width || !height) {
    return null;
  }

  if (width > 500) {
    return (
      <ParallaxBanner style={{
        aspectRatio: '2 / 1',
        position: 'static',
      }}>
        <ParallaxBannerLayer speed={-1}>
          <img
            src={imgDesktop}
            alt="Banco Digital"
            className={"slow banner-home"}
          />
        </ParallaxBannerLayer>
      </ParallaxBanner>
    )
  }

  return (
    <img
      style={{
        height: height,
      }}
      src={imgMobile}
      alt="Banco Digital"
      className={"slow banner-home"}
    />
  )
}

export default BannerHome;