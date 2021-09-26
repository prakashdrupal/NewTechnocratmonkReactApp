import React, { Component } from "react";
import { Link } from "react-router-dom";

class Videosection extends Component {
    render() {
        return (
            <section class="section-base section-color">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <h2>Best Digital Marketing Course</h2>
                        <p>
                        Today, our lives shift online, good digital marketing is increasingly central to success in the modern business era. That the reason the digital marketing industry is booming: Forbes estimate is worth more than $80 billion. This digital marketing course has been designed to help you become part of this thriving industry by teaching you how to become a digital marketing expert.
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