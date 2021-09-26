import React, { Component } from "react";
import SEO from '../components/SEO';
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import Successtop from "../container/Successstory/Successtop";
import Successgrid from "../container/Successstory/Successgrid";
import Successnews from "../container/Successstory/Successnews";
import Succesplan from "../container/Successstory/Succesplan";

class SuccessStories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //headers: [],
    };
  }
  render() {
    return (
      <div>
        <SEO title="Technocratmonk || Success Stories" />
        <Header />
      <main>
          <section class="section-base">
            <div class="container">
            <Successtop />
            <Successgrid />
            <Successnews />
            <Succesplan />
            </div>
          </section>
      </main>

        <Footer />
      </div>
    );
  }
}

export default SuccessStories;
