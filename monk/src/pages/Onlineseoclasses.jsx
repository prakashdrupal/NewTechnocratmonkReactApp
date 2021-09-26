import React, { Component } from "react";
import SEO from '../components/SEO';
import Header from "../common/header/Header";
import Banner from "../container/Onlineseoclasses/Banner"
import Overview from "../container/Onlineseoclasses/Overview";
import Videosection from "../container/Onlineseoclasses/Videosection";
import Logoslider from "../container/Home/Logoslider";
import Mediabanner from "../container/Onlineseoclasses/Mediabanner";
import Features from "../container/Onlineseoclasses/Features";
import Servicessection from "../container/Onlineseoclasses/Servicessection";
import Countsection from "../container/Home/Countsection";
import News from "../container/Home/News";
import Review from "../container/Home/Review";
import Footer from "../common/footer/Footer";

class Onlineseoclasses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [],
    };
  }
  render() {
    return (
      <div>
        <SEO title="Technocratmonk || Services" />
        <Header />
      
        <main>
      <Banner />
      <Overview />
      <Videosection />
      <Logoslider />
      <Features />
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

export default Onlineseoclasses;
