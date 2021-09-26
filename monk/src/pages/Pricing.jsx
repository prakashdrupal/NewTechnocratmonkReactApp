import React, { Component } from "react";
import SEO from '../components/SEO';
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import Pricingtop from "../container/Pricing/Pricingtop";
import Pricingtable from "../container/Pricing/Pricingtable";
import Priceservice from "../container/Pricing/Priceservice";
import Pricingbottom from "../container/Pricing/Pricingbottom";

class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [],
    };
  }
  render() {
    return (
      <div>
        <SEO title="Technocratmonk || Pricing" />
        <Header />
        <main>
        <section class="section-base section-color">
            <div class="container">
                <hr class="space-lg" />
                <Pricingtop />
                <hr class="space-lg" />
                <Pricingtable />
                <hr class="space-lg"></hr>
                <Priceservice />
                </div>
                </section>
                <section class="section-base">
                  <div className="container">
                  <Pricingbottom />

                  </div>
                </section>
                </main>

        <Footer />
      </div>
    );
  }
}

export default Pricing;
