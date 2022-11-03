import React from "react";
import config from './../../package.json';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="copyright">
          &copy; Copyright <span>Kamarote Digital</span>. Todos os direitos reservados
        </div>
        <div className="credits">
          Designed by <a href="https://infinitysolutionsapp.com/" target={"_blank"}>Infinity Solutions</a>
          <div className={"mt-2 fst-italic"}>
            <span>Versão: { config.version }</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;