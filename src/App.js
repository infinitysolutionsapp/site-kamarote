import React, {Fragment} from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import BannerHome from "./Components/BannerHome";
import About from "./Components/About";
import StoresList from "./Modules/StoresList";
import Contact from "./Modules/Contact";
import FidelityCard from "./Components/FidelityCard";

function App() {
  return (
    <Fragment>
      <Header/>
      <BannerHome/>

      <main id="main">
        <FidelityCard />
        <StoresList />
        <About />
        <Contact />
      </main>
      <Footer/>
    </Fragment>
  );
}

export default App;
