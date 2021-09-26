import React, { Component } from "react";
import { Link } from "react-router-dom";

class Videosection extends Component {
    render() {
        return (
            <section class="section-base section-color">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <h2>Grow Your Traffic, Engagement, and Conversions</h2>
                        <p>
                        In fact, studies suggest that over 70% of clicked search results are organic, and 80% of users completely ignore paid advertisements. So, while paid ads are great for driving instant traffic, if you’re looking for a sustainable, medium- to long-term strategy for driving qualified traffic to your website, SEO is the best answer.

                        </p>
                        <Link  class="btn-text active">Take a deeper look</Link>
                    </div>
                    <div class="col-lg-6">
                        <hr class="space-sm visible-md" />
                        
                        <Link to='https://www.youtube.com/watch?v=65KxEe4MgqI' class="img-box btn-video lightbox shadow-1" data-lightbox-anima="fade-top" >
                        <img   class="margin-23"  src={ process.env.PUBLIC_URL + "images/banner_3.jpg"} alt=""/>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Videosection;