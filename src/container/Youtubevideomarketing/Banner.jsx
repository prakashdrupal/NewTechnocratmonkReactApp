import React, { Component } from "react";
import { Link } from "react-router-dom";

class Banner extends Component {
    render() {
        return (
            <section class="section-video light">
            <video autoplay loop muted playsinline poster="images/banner_1.jpg">
                <source src={ process.env.PUBLIC_URL + "images/video.mp4"} type="video/mp4"></source> 
                
               {/* <source src="https://templates.themekit.dev/codrop/media/video-2.mp4" type="video/mp4"></source> */}
            </video>
            <div class="container">
                <div class="row align-items-center" data-anima="fade-in" data-time="1000">
                    <div class="col-lg-6">
                        <h1 className="text-primary"> Best YouTube Video Marketing Services That'll Increase Your Videos Views and Business</h1>
                        <p>
                        Our YouTube video marketing experts will understand your requirement and will create a 100% YouTube video marketing strategy to grow your channel and video views.

                        </p>
                    </div>
                    <div class="col-lg-6 align-right align-left-md" data-anima="fade-in" data-time="1000">
                        <a href="#" class="btn btn-circle btn-sm">Talk to Founder </a>
                        <a href="#" class="btn btn-circle btn-border light btn-sm">Success Stories</a>
                    </div>
                </div>
               </div>
        </section>


        );
    }
}

export default Banner;