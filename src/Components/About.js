import React from "react";
import btnSaibaMais from "assets/img/btn-saiba-mais.png";

const About = () => {
  return (
    <section id="about" className="about" style={{
      padding: 0,
    }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3 className={"header-title fw-bold primary-color text-center"}>Adquira já seu link de acesso ao sistema <br/>fidelidade KAMAROTE DIGITAL BANK!</h3>
            <p className={"fw-bold fs-22 fst-italic text-center"}>
              Faça suas compras nas maiores<br/>
              lojas do pais com benefícios<br/>
              e descontos exclusivos para<br/>
              quem é Kamarote Digital Bank.
            </p>

            <div className={"flex flex-row justify-content-center"} style={{
              display: 'flex',
            }}>
              <a href="https://pay.kiwify.com.br/YNycH7R" className={"btn-action"}>
                <img src={btnSaibaMais} alt="Clique aqui..."/>
              </a>
            </div>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <h3 className={"header-title fw-bold fs-32 primary-color text-center"}>Conta Grátis e 100% Digital</h3>
            <p className="fw-bold fs-22">
              Uma conta totalmente pensada<br/>
              pra você comandar a sua<br/>
              vida financeira e seus<br/>
              descontos pelo celular.
            </p>
            <p className={"fw-bold fs-22"}>
              Na sua adesão ganhe na hora<br/>
              <strong>10 Mil em DESCONTOS em seu App.</strong><br/>
              E utilize como quiser em todos os<br/>
              nossos parceiros credenciados.
            </p>
          </div>
        </div>
      </div>
      <br/>
    </section>
  )
}

export default About;