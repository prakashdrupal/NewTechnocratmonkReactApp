import React, { Component } from "react";
import { Link } from "react-router-dom";

class Aboutbanner extends Component {
    render() {
        return (
<header class="header-image ken-burn-center light" data-parallax="true" data-natural-height="600" data-natural-width="1920" data-bleed="0" data-image-src={ process.env.PUBLIC_URL + "images/wide-2.jpeg"} data-offset="0">
        <div class="container">
            <h1>About us.</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua eprehenderite exercita.</h2>
            <ol class="breadcrumb">
                <li><a href="/">Home</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Blog</a></li>
            </ol>
        </div>
    </header>
            
        );
    }
}

export default Aboutbanner;