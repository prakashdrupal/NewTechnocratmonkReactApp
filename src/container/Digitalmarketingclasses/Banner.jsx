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
                        <h1> Online One to One Digital Marketing Classes</h1>
                        <p>
                        Discover everything you need to launch your own digital marketing agency and start getting your clients on the first page of Google.
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