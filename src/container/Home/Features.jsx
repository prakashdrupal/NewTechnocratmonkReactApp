import React, { Component } from "react";
import { Link } from "react-router-dom";

class Features extends Component {
    render() {
        return (
            <section id="features" class="section-base section-color">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6" data-anima="fade-left" data-time="1000">
                      
                        <img   class="margin-23"  src={ process.env.PUBLIC_URL + "images/phone-14.png"} alt=""/>
                    </div>
                    <div class="col-lg-6 col-md-6" data-anima="fade-right" data-time="1000">
                        <h2>Business Goals Achieved with <br />Latest Digital Marketing Trends</h2>
                        <p>
                        Technocrat Monk is a modern digital marketing consultancy that shares strong strategies in order to solve your major business marketing problems.

                        </p>
                        <a href="#" class="btn-text">Explore services</a>
                    </div>
                </div>
                <hr class="space-sm" />
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6" data-anima="fade-left" data-time="1000">
                        <hr class="space-sm visible-md" />
                        <h2>Dashboard of Success Stories of Our Clients:</h2>
                        <p>
                        Here is a recent case study proving our track record. Read here that what we’ve achieved for our clients and how we did that. 
                        </p>
                        <a href="#" class="btn-text">Explore services</a>
                    </div>
                    <div class="col-lg-6 col-md-6" data-anima="fade-right" data-time="1000">
                        <img   class="margin-23"  src={ process.env.PUBLIC_URL + "images/phone-15.png"} alt=""/>
                    </div>
                </div>
            </div>
        </section>

        );
    }
}

export default Features;