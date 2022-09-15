import React from "react";
import imag from "./../assets/img/imag.png";
import app from "./../assets/img/app.png";
import story from "./../assets/img/story.png";

const Fidelity = () => {
  return (
    <section>
          <div className="roww">
            <img src={imag} className="img-fluid" alt=""/>
      </div>
      <div className="imgapp">
      <button onclick="()">
      <img src={app} /></button>
      <button onclick="()">
      <img src={story} /></button>
      </div>
    </section>
  )
}

export default Fidelity;