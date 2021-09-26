import React, { Component } from "react";
import { Link } from "react-router-dom";

class Videosection extends Component {
    render() {
        return (
            <section class="section-base section-color">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <h2>We Lead from the Front</h2>
                        <p>
                        It’s time to rocket your brand online hence you should modernize your outlook. We can surely enhance your business and boost the conversion rate of your customers into quality leads.
With our excellent search engine and social approaches, we optimize your websites and give you comprehensive results. 
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