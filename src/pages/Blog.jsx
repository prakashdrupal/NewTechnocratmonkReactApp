import React, { Component } from "react";
import SEO from '../components/SEO';
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import Blogbanner from "../container/Blog/Blogbanner";
import Bloggrid from "../container/Blog/Bloggrid";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [],
    };
  }
  render() {
    return (
      <div>
        <SEO title="Technocratmonk || Blog" />
        <Header />
        <Blogbanner />
        <main class="footer-parallax-cnt">
        <Bloggrid />
        </main>

        <Footer />
      </div>
    );
  }
}

export default Blog;
