import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src="assets/img/bggg.jpg" className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <h2><strong>Pagamento Único, e seu link de acesso já é liberado no sistema fidelidade Kamarote
              Digital.</strong></h2>
            <p className="fst-italic">

            </p>
            <ul>
              <li>Ative seu QRCODE direto no App e use seu cupom de desconto disponível em nossos parceiros
                credenciados
              </li>
            </ul>
            <p>
            </p>

            <h2><strong>Vem de Kamarote e seja nosso Parceiro!</strong></h2>
            <p className="fst-italic">
              Aqui sua marca será muito mais reconhecida!
            </p>
            <ul>
              <li>
                Contate-nos Whats: <a href="https://api.whatsapp.com/send?phone=5585981762876" target={"_blank"}><strong>(85) 98176-2876</strong></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;