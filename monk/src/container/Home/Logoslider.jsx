import React, { Component } from "react";
import { Link } from "react-router-dom";

class Logoslider extends Component {
    render() {
        return (
            <section class="section-base">
            <div class="container">
                <ul class="slider" data-options="type:carousel,arrows:false,nav:false,perView:5,perViewMd:3,perViewSm:2,gap:100,autoplay:3000">
                    <li>
                        <img src={ process.env.PUBLIC_URL + "images/logos/logo-1.png"} alt="" />
                    </li>
                    <li>
                        <img src={ process.env.PUBLIC_URL + "images/logos/logo-2.png"}  alt="" />
                    </li>
                    <li>
                        <img src={ process.env.PUBLIC_URL + "images/logos/logo-3.png"}  alt="" />
                    </li>
                    <li>
                        <img src={ process.env.PUBLIC_URL + "images/logos/logo-4.png"}  alt="" />
                    </li>
                    <li>
                        <img src={ process.env.PUBLIC_URL + "images/logos/logo-5.png"}  alt="" />
                    </li>
                    <li>
                        <img  src={ process.env.PUBLIC_URL + "images/logos/logo-6.png"} alt="logo"/>
                    </li>
                </ul>
            </div>
        </section>
        );
    }
}

export default Logoslider;