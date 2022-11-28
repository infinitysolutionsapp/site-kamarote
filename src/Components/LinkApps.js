import React from "react";
import app from "./../assets/img/aapp.png";
import story from "./../assets/img/sstory.png";
import BannerHorizontal from "Components/BannerHorizontal";

const LinkApps = () => {

  const handleOpenAndroid = () => {
    window.open('https://play.google.com/store/apps/details?id=com.infinitysolutionsapp.kamarotedigitalapp');
  }

  const handleOpenIOS = () => {
    window.open('https://apps.apple.com/us/app/kamarote-digital/id1644390610');
  }

  return (
    <BannerHorizontal customStyle={{
      height: 80,
      minHeight: 80,
    }}>
      <div className="imgapp btn-img-store" style={{
        paddingTop: 20,
        paddingLeft: 40,
      }}>
        <img className="image" id="app-app-store" src={app} onClick={handleOpenIOS}/>
        <img className="image" id="app-play-store" src={story} onClick={handleOpenAndroid}/>
      </div>
    </BannerHorizontal>
  )
}

export default LinkApps;