import React, { Component } from "react";
import SEO from '../components/SEO';
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import Contectmap from "../container/Contact/Contectmap";
import Contactform from "../container/Contact/Contactform";
import Contactadress from "../container/Contact/Contactadress";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [],
    };
  }
  render() {
    return (
      <div>
        <SEO title="Technocratmonk || Contact Us" />
        <Header />
        <main>
        <section class="section-base">
            <div class="container">
           <Contectmap />
           <hr class="space-lg"></hr>
           <div className="row">
             <Contactform />
             <Contactadress />
           </div>
            </div>
            </section>
            </main>

        <Footer />
      </div>
    );
  }
}

export default Contact;
