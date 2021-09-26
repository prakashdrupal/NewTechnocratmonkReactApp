import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SEO from '../components/SEO';
import Header from "../common/header/Header";
import Banner from "../container/Home/Banner";
import Overview from "../container/Home/Overview";
import Videosection from "../container/Home/Videosection";
import Logoslider from "../container/Home/Logoslider";
import Mediabanner from "../container/Home/Mediabanner";
import Features from "../container/Home/Features";
import Appbanner from "../container/Home/Appbanner";
import Formbanner from "../container/Home/Formbanner";
import Formsection from "../container/Home/Formsection";
import Tabslider from "../container/Home/Tabslider";
import Servicessection from "../container/Home/Servicessection";
import Countsection from "../container/Home/Countsection";
import News from "../container/Home/News";
import Review from "../container/Home/Review";
import Footer from "../common/footer/Footer";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: []
    };
  }
  render() {
    return (
      <div>
         <SEO title="Technocratmonk || Home" />
      <Header />
      <main>
      <Banner />
      <Overview />
      <Videosection />
      <Logoslider />
      <Mediabanner />
      <Features />
      <Appbanner />
      <Formbanner />
      <Formsection />
      <Tabslider />
      <Servicessection />
      <Countsection />
      <News />
      <Review />
      </main>
       <Footer />
   </div>
   
    );
  }
}

export default withRouter(Home);
