import React, { Component } from "react";
import SEO from '../components/SEO';
import Header from "../common/header/Header";
import Banner from "../container/Youtubevideomarketing/Banner"
import Overview from "../container/Youtubevideomarketing/Overview";
import Videosection from "../container/Youtubevideomarketing/Videosection";
import Logoslider from "../container/Home/Logoslider";
import Features from "../container/Youtubevideomarketing/Features";
import Servicessection from "../container/Youtubevideomarketing/Servicessection";
import Countsection from "../container/Home/Countsection";
import News from "../container/Home/News";
import Review from "../container/Home/Review";
import Footer from "../common/footer/Footer";

class Youtubevideomarketing extends Component {
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

export default Youtubevideomarketing;
