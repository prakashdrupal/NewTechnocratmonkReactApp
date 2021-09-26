import React, { Component } from "react";
import { Link } from "react-router-dom";

class Appbanner extends Component {
    render() {
        return (
            <section class="section-image light" style={{
                backgroundImage: 'url("images/bg.svg")',
               
              }}>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                        <h2>Get the app now.</h2>
                        <p>
                            Lorem ipsum dolor sit amet no sea takimata sanctus est Lorem ipsum dolor sit amete
                            sare nostrud exercitation ullamco.
                        </p>
                    </div>
                    <div class="col-lg-6 col-md-6 align-right align-left-sm">
                        <a class="btn-store" href="#">
                        <img  src={ process.env.PUBLIC_URL + "images/store-google-white.png"} alt="logo"/></a>
                        <a class="btn-store" href="#"><img  src={ process.env.PUBLIC_URL + "images/store-apple-white.png"} alt="logo"/></a>
                        
                    </div>
                </div>
            </div>
        </section>

        );
    }
}

export default Appbanner;