import React, { Component } from "react";
import { Link } from "react-router-dom";

class Formbanner extends Component {
    render() {
        return (
            <section class="section-image light" data-parallax="scroll" data-image-src={ process.env.PUBLIC_URL + "images/banner_3.jpg"} >
            <div class="container">
                <hr class="space-lg" />
            </div>
        </section>


        );
    }
}

export default Formbanner;