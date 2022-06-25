import React, {Component} from "react";

import Header from "../components/Header/header";
import HeroSection from "../components/HeroSection/HeroSectionReview";
import FooterSection from "../components/Footer";
import PricingSection from "../components/Pricing";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <HeroSection />
          <PricingSection hideFaq={true} faq="four" bgColor="gray" />
        </div>
        <FooterSection noSubscription={true} />
      </React.Fragment>
    );
  }
}

export default Theme;
