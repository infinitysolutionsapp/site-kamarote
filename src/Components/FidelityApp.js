import React from "react";
import bbb1 from "./../assets/img/bbb1.png";

const FidelityApp = () => {
  return (
    <section id="about" className="about" style={{
      paddingTop: 0
    }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src={bbb1} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
              <h1>A construção dessa nova <strong>experiência única </strong>
                e integrada é uma <strong>evolução</strong> ao nosso objetivo de sermos a melhor <strong>solução em descontos</strong>,
                desde o aspiracional dos nossos clientes até á conclusão  da <strong>compra</strong> em um de <strong>nossos parceiros.</strong></h1>
            <p className="fst-italic"></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FidelityApp;