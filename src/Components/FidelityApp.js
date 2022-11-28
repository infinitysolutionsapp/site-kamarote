import React from "react";
import bbb1 from "./../assets/img/bbb1.png";
import btnClickHere from "assets/img/btn-click-here.png";

const FidelityApp = () => {
  return (
    <section id="about" className="about" style={{
      paddingTop: 0,
    }}>
      <div className="container">
        <div className="row" style={{
          alignItems: 'center'
        }}>
          <div className="col-lg-6 pt-lg-0">
            <h3 className={"primary-color header-title fw-bold"}>COMO USAR MEUS DESCONTOS ?</h3>
            <p className={"fw-bold fs-14"}>
              Você busca a loja desejada no seu App, clica no link,
              apresenta o QR code do valor de desconto e pronto,
              agora é só efetuar o pagamento.
            </p>
            <p className={"fw-bold fs-14"}>
              Ah, Quando clicar no cupom escolhido, já será redirecionado
              para o site da respectiva loja. Agora é só escolher seu produto
              e aproveitar seu saldo de desconto disponível na sua conta.
            </p>
          </div>
          <div className="col-lg-4">
            <img src={bbb1} alt="" style={{
              marginBottom: -34,
              width: 'auto',
              height: 300,
              margin: 0,
              padding: 0
            }} />
          </div>
          <div className="col-lg-2">
            <div className={"flex flex-row justify-content-center"} style={{
              display: 'flex',
            }}>
              <a href="https://pay.kiwify.com.br/YNycH7R" className={"btn-action"}>
                <img src={btnClickHere} alt="Clique aqui..."/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FidelityApp;