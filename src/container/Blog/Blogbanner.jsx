import React, { Component } from "react";
import { Link } from "react-router-dom";

class Blogbanner extends Component {
    render() {
        return (
            <header class="header-image ken-burn-center light" data-parallax="true" data-natural-height="600" data-natural-width="1920" data-bleed="0" data-image-src="http://via.placeholder.com/1920x700" data-offset="0">
            <div class="container">
                <h1>Our blog.</h1>
                <h2>Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua eprehenderite exercita.</h2>
                <ol class="breadcrumb">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">Pages</a></li>
                    <li><a href="#">Blog</a></li>
                </ol>
            </div>
        </header>

);
}
}

export default Blogbanner;