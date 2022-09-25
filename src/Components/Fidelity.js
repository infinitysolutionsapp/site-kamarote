import React from "react";
import imag from "./../assets/img/imag.png";
import app from "./../assets/img/app.png";
import story from "./../assets/img/story.png";

const Fidelity = () => {
  return (
    <section id="contact" className="contact section-bg" style={{
      paddingTop: 10
    }}>
      <div className="roww" >
        <img src={imag} className="img-fluid" alt="" />
      </div>
      <div className="social-links">
        <div className="imgapp">
          <button onclick="()">
            <img className="image" src={app}/></button>
          <button onclick="()">
            <img className="image" src={story}/></button>
        </div>
      </div>
    </section>
  )
}

export default Fidelity;