import React from "react";
import bbb from "./../assets/img/bbb.png";
import btnClickHere from "./../assets/img/btn-click-here.png";

const OpenAccount = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pt-lg-5">
            <p className={"fs-14 fw-bold fs-36"}>
              A construção dessa nova&nbsp;
              <strong>expediência única</strong> e integrada é
              uma <strong>evolução</strong> ao nosso objetivo
              de sermos O diferente dos iguais,
              é a melhor <strong>solução em Descontos,</strong>
              desde o aspiracional dos nossos
              clientes até á conclusão da <strong>compra</strong>
              em um de <strong>nossos parceiros.</strong>
            </p>
            <br/>
          </div>
          <div className="col-lg-6">
            <div className={"flex flex-row justify-content-center"} style={{
              display: 'flex',
            }}>
              <a href="https://pay.kiwify.com.br/YNycH7R" className={"btn-action"}>
                <img src={btnClickHere} alt="Clique aqui..."/>
              </a>
            </div>
            <img src={bbb} className="img-fluid" alt=""/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OpenAccount;