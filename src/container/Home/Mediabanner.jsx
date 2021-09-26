import React, { Component } from "react";
import { Link } from "react-router-dom";

class  Mediabanner extends Component {
    render() {
        return (
            <section class="section-block section-block-full section-block-right">
            <div class="block-media">
                <div class="image" data-parallax="scroll" data-bleed="0" data-image-src={ process.env.PUBLIC_URL + "images/m_banner.jpg"} ></div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h2>A Capable SEO Strategist Crew</h2>
                        <p>
Digital businesses need sustained search engine traffic, strong long-term branding, and high-conversion rates if they are to thrive. That’s where a modern, forward-thinking SEO-focused content marketing agency — Technocrat Monk — comes into the picture.
                        </p>
                    </div>
                    <div class="col"></div>
                </div>
            </div>
        </section>


        );
    }
}

export default Mediabanner;