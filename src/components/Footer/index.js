import React from "react";

class Footer extends React.Component {
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
        <footer className="footer-section">
          <div
            className={"footer-top background-img-2 " + (this.props.noSubscription ? 'py-5' : 'pt-150 pb-5')} 
            style={{
              backgroundImage: "url('img/footer-bg-2.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center top",
              backgroundSize: "cover"
            }}
          >
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-lg-3 mb-3 mb-lg-0">
                  <div className="footer-nav-wrap text-white">
                    <img
                      src="img/logo-color-2.png"
                      alt="footer logo"
                      width="120"
                      className="img-fluid mb-3"
                    />
                    <p>
                    Através de um processo profundo de mudanças,
                     implementamos metodologias ágeis para acelerar as nossas entregas e apresentar valor constantemente.
                    </p>

                    <div className="social-list-wrap">
                      <ul className="social-list list-inline list-unstyled">
                        <li className="list-inline-item">
                          <a href="https://www.facebook.com/infinitysolutionsapp" target="_blank" title="Facebook">
                            <span className="ti-facebook"></span>
                          </a>
                        </li>
                        {/*<li className="list-inline-item">*/}
                        {/*  <a href="/#" target="_blank" title="Twitter">*/}
                        {/*    <span className="ti-twitter"></span>*/}
                        {/*  </a>*/}
                        {/*</li>*/}
                        <li className="list-inline-item">
                          <a href="https://www.instagram.com/infinitysolutionsapp" target="_blank" title="Instagram">
                            <span className="ti-instagram"></span>
                          </a>
                        </li>
                        {/*<li className="list-inline-item">*/}
                        {/*  <a href="/#" target="_blank" title="printerst">*/}
                        {/*    <span className="ti-pinterest"></span>*/}
                        {/*  </a>*/}
                        {/*</li>*/}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 ml-auto mb-4 mb-lg-0">
                  <div className="footer-nav-wrap text-white">
                    <h5 className="mb-3 text-white">Outros links</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <a href="/#">Sobre nós</a>
                      </li>
                      <li className="mb-2">
                        <a href="/#">Contate nos</a>
                      </li>
                     {/* <li className="mb-2">
                        <a href="/#">Pricing</a>
                      </li>
                      <li className="mb-2">
                        <a href="/#">Privacy Policy</a>
                       </li> */}
                      <li className="mb-2">
                        <a href="/#">Política de privacidade</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 ml-auto mb-4 mb-lg-0">
                  <div className="footer-nav-wrap text-white">
                    <h5 className="mb-3 text-white">Suporte</h5>
                    <ul className="list-unstyled support-list">
                      <li className="mb-2 d-flex align-items-center">
                        <span className="ti-location-pin mr-2"></span>
                        Rua Honorato Pereira, 1858, Centro,
                        
                        Cascavel-CE, 62850-000
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <span className="ti-mobile mr-2"></span>{" "}
                        <a href="#"> +55 85 4042-1151</a>
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <span className="ti-email mr-2"></span>
                        <a href=" contato@infinitysolutionsapp.com">  contato@infinitysolutionsapp.com</a>
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <span className="ti-world mr-2"></span>
                        <a href="/#"> www.infinitysolutionsapp.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="footer-nav-wrap text-white">
                    <h5 className="mb-3 text-white">Localização</h5>
                    <img
                      src="img/map.jpeg"
                      alt="location map"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom gray-light-bg pt-4 pb-4">
            <div className="container">
              <div className="row text-center justify-content-center">
                <div className="col-md-6 col-lg-5">
                  <p className="copyright-text pb-0 mb-0">
                    Copyrights © 2022. All rights reserved by
                    <a href="/#"> Infinity Solutions LTDA</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
