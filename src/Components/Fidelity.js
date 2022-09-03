import React from "react";
import bbb from "./../assets/img/bbb.jpg";

const Fidelity = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src={bbb} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <h2><strong>Parceria com as maiores e melhores produtoras de Eventos do Estado.</strong></h2>
            <p className="fst-italic"></p>
            <ul>
            </ul>
            <p>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fidelity;