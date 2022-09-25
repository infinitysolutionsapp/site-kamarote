import React from "react";
import bbb from "./../assets/img/bbb.png";

const FidelityCard = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src={bbb} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 pt-6 pt-lg-5" style={{
            marginTop: 20
          }}>
            <h3>Cartão fidelidade Vitalicio
              <br/><h2><strong>( BANK KAMAROTE DIGITAL )</strong></h2>
              com desconto de 10% ate 50% seguindo as regras, nos maiores e melhores eventos e lojas do
              Brasil,
              <br/>Parceria com as maiores e melhores produtoras de Eventos do Estado.</h3>
            <p className="fst-italic"></p>
            <ul>
            <button type="button" class="fill" style={{
              marginTop: 20
            }}><a href="https://pay.kiwify.com.br/YNycH7R">Quero meu cartão</a></button>
            </ul>
            <p>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FidelityCard;