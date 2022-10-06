import React, {Fragment} from "react";

import Footer from "Components/Footer";
import PrivacyPolicy from "Components/PrivacyPolicy";

function Home() {
  return (
    <Fragment>
      <main id="main">
        <PrivacyPolicy/>
      </main>
      <Footer/>
    </Fragment>
  );
}

export default Home;
