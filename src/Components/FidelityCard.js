import React from "react";
import bbb from "./../assets/img/bbb.png";
import btnClickHere from "./../assets/img/btn-click-here.png";

const FidelityCard = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src={bbb} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 pt-6 pt-lg-5">
            <h3 className={"header-title fw-bold primary-color text-center"}>KAMAROTE DIGITAL BANK</h3>
            <p className={"fs-14 fw-bold"}>
              Descontos de 10% até 85% em nossos parceiros
              credenciados, vantagens e garantias em suas compras
              nas melhores Rojas do pais.
            </p>
            <p className={"fs-14 fw-bold"}>
              Muito mais para quem faz
              A gente vai além pra você ganhar sempre mais.
            </p>
            <div className={"flex flex-row justify-content-center"} style={{
              display: 'flex',
            }}>
              <a href="https://pay.kiwify.com.br/YNycH7R" className={"btn-action"}>
                <img src={btnClickHere} alt="Clique aqui..."/>
              </a>
            </div>
            <br/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FidelityCard;