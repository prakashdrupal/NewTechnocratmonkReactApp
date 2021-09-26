import React, { Component } from "react";
import SEO from '../components/SEO';
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import Aboutbanner from "../container/About/Aboutbanner";
import Aboutslider from "../container/About/Aboutslider";
import Aboutcontent from "../container/About/Aboutcontent";
import Aboutgrid from "../container/About/Aboutgrid";
import Aboutsign from "../container/About/Aboutsign";
import Aboutteam from "../container/About/Aboutteam";
import Aboutapp from "../container/About/Aboutapp";

class Aboutus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [],
    };
  }
  render() {
    return (
      <div>
        <SEO title="Technocratmonk || About Us" />
        <Header />
       <Aboutbanner />
       <main class="footer-parallax-cnt">
       <Aboutslider />
       <Aboutcontent />
       <Aboutgrid />
       <Aboutsign />
       <Aboutteam />
       <Aboutapp />
       </main>
        <Footer />
      </div>
    );
  }
}

export default Aboutus;
