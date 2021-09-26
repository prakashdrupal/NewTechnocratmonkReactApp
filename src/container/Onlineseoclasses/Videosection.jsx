import React, { Component } from "react";
import { Link } from "react-router-dom";

class Videosection extends Component {
    render() {
        return (
            <section class="section-base section-color">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <h2>Build Your SEO Knowledge</h2>
                        <p>
                        Today, our lives shift online, good search engine optimization (SEO) is increasingly central to success in the modern business era. That the reason the SEO industry is booming: Forbes estimate is worth more than $80 billion. This search engine optimization (SEO) has been designed to help you become part of this thriving industry by teaching you how to become SEO expert. Our SEO courses are delivered online. You could be living anywhere in Delhi, Gurgaon, Bangalore, Mumbai, Chennai, Hyderabad, Noida, Pune, Kolkata, etc in India and you would still be eligible for the SEO course.
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