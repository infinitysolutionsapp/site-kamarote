import React, {Fragment} from "react";

import Footer from "Components/Footer";
import StoresList from "Modules/StoresList";

function ListStores() {
  return (
    <Fragment>
      <main id="main">
        <h2 className={"text-center pt-4"}><strong>KAMAROTE DIGITAL</strong></h2>
        <a href="/" style={{
          marginLeft: 10,
          color: 'green'
        }}>Voltar</a>
        <StoresList/>
      </main>
      <Footer/>
    </Fragment>
  );
}

export default ListStores;
