import React, { Component } from "react";
import SEO from '../components/SEO';
import Header from "../common/header/Header";
import Banner from "../container/Digitalmarketingclasses/Banner"
import Overview from "../container/Digitalmarketingclasses/Overview";
import Videosection from "../container/Digitalmarketingclasses/Videosection";
import Logoslider from "../container/Home/Logoslider";
import Features from "../container/Digitalmarketingclasses/Features";
import Servicessection from "../container/Digitalmarketingclasses/Servicessection";
import Countsection from "../container/Home/Countsection";
import News from "../container/Home/News";
import Review from "../container/Home/Review";
import Footer from "../common/footer/Footer";

class Digitalmarketingclasses extends Component {
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

export default Digitalmarketingclasses;
