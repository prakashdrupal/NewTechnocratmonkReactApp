import React, { Component } from "react";
import SEO from '../components/SEO';
import Header from "../common/header/Header";
import Banner from "../container/Seo/Banner"
import Overview from "../container/Seo/Overview";
import Videosection from "../container/Seo/Videosection";
import Logoslider from "../container/Home/Logoslider";
import Features from "../container/Seo/Features";
import Servicessection from "../container/Seo/Servicessection";
import Countsection from "../container/Home/Countsection";
import News from "../container/Home/News";
import Review from "../container/Home/Review";
import Footer from "../common/footer/Footer";

class Seo extends Component {
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

export default Seo;
