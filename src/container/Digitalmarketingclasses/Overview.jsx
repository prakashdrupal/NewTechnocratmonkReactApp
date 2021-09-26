import React, { Component } from "react";
import { Link } from "react-router-dom";

class Overview extends Component {
    render() {
        return (
            <section id="overview" class="section-image light" style={{
                backgroundImage: 'url("images/bg.svg")',
               
              }}>
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="cnt-box cnt-box-side-icon">
                            <i class="im-edit-map"></i>
                            <div class="caption">
                                <h2>Free Trial</h2>
                                <p>
                                Start learning today - free 3-day trial
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="cnt-box cnt-box-side-icon">
                            <i class="im-hipster-headphones"></i>
                            <div class="caption">
                                <h2>World Class Learning</h2>
                                <p>
                                World-class learning with Technocrat Monk
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="cnt-box cnt-box-side-icon">
                            <i class="im-fingerprint-2"></i>
                            <div class="caption">
                                <h2>Build Own Business</h2>
                                <p>
                                Helps in builds a remarkable strategy for your business
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        );
    }
}

export default Overview;