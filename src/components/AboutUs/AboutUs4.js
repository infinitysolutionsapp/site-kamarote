import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    return (
      <React.Fragment>
        <section id="about" className="about-us ptb-100 gray-light-bg">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-7">
                <div className="about-content-left section-heading">
                  <h2>
                  Nascemos para transformar suas ideias <br />
                    <span>Em infinitas soluções</span>
                  </h2>

                  <div className="single-feature mb-4">
                    <div className="icon-box-wrap d-flex align-items-center mb-2">
                      <div className="mr-3 icon-box">
                        <img
                          src="img/simbolo1.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </div>
                      <p className="mb-0">
                      Aumente seus resultados e melhore o desempenho da sua empresa.
                      </p>
                    </div>
                  </div>
                  <div className="single-feature mb-4">
                    <div className="icon-box-wrap mb-2">
                      <div className="mr-3 icon-box">
                        <img
                          src="img/simbolo1.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </div>
                      <p className="mb-0">
                      Avance com a tecnologia certa e torne o seu negócio mais ágil.
                      </p>
                    </div>
                    <p></p>
                  </div>
                  <div className="single-feature mb-4">
                    <div className="icon-box-wrap mb-2">
                      <div className="mr-3 icon-box">
                        <img
                          src="img/simbolo1.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </div>
                      <p className="mb-0">
                      Atualize seus recursos e agregue vantagem competitiva ao seu negócio.
                      </p>
                    </div>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="about-content-right d-flex justify-content-center justify-content-lg-end justify-content-md-end">
                  <img
                    src="img/image-14.png"
                    alt="about us"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default About;
