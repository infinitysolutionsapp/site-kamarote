import React from "react";
import imag from "./../assets/img/imag.png";
import app from "./../assets/img/aapp.png";
import story from "./../assets/img/sstory.png";

const Fidelity = () => {

  const handleOpenAndroid = () => {
    window.open('https://play.google.com/store/apps/details?id=com.infinitysolutionsapp.kamarotedigitalapp');
  }

  return (
    <section id="contact" className="contact section-bg" style={{
      paddingTop: 10
    }}>
      <div className="roww" >
        <img src={imag} className="img-fluid" alt="" />
      </div>
      <div className="social-links">
        <div className="imgapp btn-img-store">
          <img className="image" src={app}/>
          <img className="image" src={story} onClick={handleOpenAndroid} />
        </div>
      </div>
    </section>
  )
}

export default Fidelity;