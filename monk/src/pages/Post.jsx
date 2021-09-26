import React, { Component } from "react";
import SEO from '../components/SEO';
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import Postbanner from "../container/post/Postbanner";
import Postcontent from "../container/post/Postcontent";
import Postfooter from "../container/post/Postfooter";
import Postsocial from "../container/post/Postsocial";
import Postuser from "../container/post/Postuser";
import Postrelated from "../container/post/Postrelated";
import Postsearch from "../container/post/Postsearch";
import Postcategory from "../container/post/Postcategory";
import Latestpost from "../container/post/Latestpost";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [],
    };
  }
  render() {
    return (
      <div>
        <SEO title="Technocratmonk || Post" />
        <Header />
        <Postbanner />
        
<main class="footer-parallax-cnt">
<section class="section-base boxed-page">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 text-color">
                    <Postcontent />
                    <Postfooter />
                    <Postsocial />
                    <Postuser />
                    <Postrelated />
                    </div>
                    <div class="col-lg-4 widget">
                     <Postsearch />
                     <Postcategory />
                     <Latestpost />

                    </div>
                    </div>
                    </div>
                    </section>

</main>
        <Footer />
      </div>
    );
  }
}

export default Post;
