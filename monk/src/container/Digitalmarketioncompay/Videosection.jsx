import React, { Component } from "react";
import { Link } from "react-router-dom";

class Videosection extends Component {
    render() {
        return (
            <section class="section-base section-color">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <h2>Hire a Digital Marketing Company </h2>
                        <p>
                        If you are still in a dilemma, then you are taking a wrong step for your business. Digital marketing plays a vital role in reaching the targeted audience. Only when you have a partnered with an efficient marketing agency, you can expect to acquire the best from the marketing approach. With the only agenda to offer relevant leads to the businesses, the top marketing agencies avail for the best in order to offer engaging and great experiences to their clients. 
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