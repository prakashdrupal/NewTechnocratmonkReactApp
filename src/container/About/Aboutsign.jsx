import React, { Component } from "react";
import { Link } from "react-router-dom";

class Aboutsign extends Component {
    render() {
        return (
            <section class="section-base section-color">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua.
                            Utenim ad minim veniam quisolor in reprehenderite nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequate.
                        </p>
                    </div>
                    <div class="col-lg-4">
                        <div class="box-sign no-margin">
                            <img alt="sign" src="images/sign-dark.png" />
                            <b>Albert Patterson</b>
                            <span>Founder &amp; CEO</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
                         
        );
    }
}

export default Aboutsign;