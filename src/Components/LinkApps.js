import React from "react";
import imag from "./../assets/img/imag.png";
import app from "./../assets/img/aapp.png";
import story from "./../assets/img/sstory.png";

const Fidelity = () => {

  const handleOpenAndroid = () => {
    window.open('https://play.google.com/store/apps/details?id=com.infinitysolutionsapp.kamarotedigitalapp');
  }

  const handleOpenIOS = () => {
    window.open('https://apps.apple.com/us/app/kamarote-digital/id1644390610');
  }

  return (
    <section id="contact" className="contact section-bg" style={{
      padding: 0
    }}>
      <div className="roww" >
        <img src={imag} className="img-fluid" alt="" />
      </div>
      <div className="social-links">
        <div className="imgapp btn-img-store">
          <img className="image" id="app-app-store" src={app} onClick={handleOpenIOS} />
          <img className="image" id="app-play-store" src={story} onClick={handleOpenAndroid} />
        </div>
      </div>
    </section>
  )
}

export default Fidelity;