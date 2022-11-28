import React from "react";
import config from './../../package.json';
import BannerHorizontal from "Components/BannerHorizontal";

const Footer = () => {
  return (
    <BannerHorizontal customStyle={{
      height: 80,
      minHeight: 80
    }}>
      <footer id="footer">
        <div className="container">
          <div className="copyright">
            &copy; Copyright <span>Kamarote Digital</span>. Todos os direitos reservados
          </div>
          {/*<div className="credits">*/}
          {/*  Designed by <a href="https://infinitysolutionsapp.com/" target={"_blank"}>Infinity Solutions</a>*/}
          {/*  <div className={"mt-2 fst-italic"}>*/}
          {/*    <span>Versão: { config.version }</span>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </footer>
    </BannerHorizontal>
  )
}

export default Footer;