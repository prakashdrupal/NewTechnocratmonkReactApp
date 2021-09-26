import React, { Component } from "react";
import { Link } from "react-router-dom";

class Aboutslider extends Component {
    render() {
        return (
            <section class="section-image no-padding-y light" style={{
                backgroundImage: 'url("images/bg.svg")',
               
              }}>
            <div class="container">
                <hr class="space space-40" />
                <ul class="slider" data-options="type:carousel,arrows:false,nav:false,perView:6,perViewMd:4,perViewSm:3,perViewXs:2,gap:100,autoplay:3000">
                <li>
                        <img src={ process.env.PUBLIC_URL + "images/logos/white/logo-1.png"} alt="" />
                    </li>
                    <li>
                        <img src={ process.env.PUBLIC_URL + "images/logos/white/logo-2.png"}  alt="" />
                    </li>
                    <li>
                        <img src={ process.env.PUBLIC_URL + "images/logos/white/logo-3.png"}  alt="" />
                    </li>
                    <li>
                        <img src={ process.env.PUBLIC_URL + "images/logos/white/logo-4.png"}  alt="" />
                    </li>
                    <li>
                        <img src={ process.env.PUBLIC_URL + "images/logos/white/logo-5.png"}  alt="" />
                    </li>
                    <li>
                        <img  src={ process.env.PUBLIC_URL + "images/logos/white/logo-6.png"} alt="logo"/>
                    </li>
                </ul>
                <hr class="space-sm" />
            </div>
        </section>
                   
        );
    }
}

export default Aboutslider;