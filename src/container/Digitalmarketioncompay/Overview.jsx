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
                                <h2>Search Engine Optimization</h2>
                                <p>
                                Enhance your online presence and divert more yet relevant traffic to your business website with our customized SEO strategies and services.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="cnt-box cnt-box-side-icon">
                            <i class="im-hipster-headphones"></i>
                            <div class="caption">
                                <h2>Social Media Marketing</h2>
                                <p>
                                Engage your targeted audience more creatively and spread your brand awareness by opting for our effective social media marketing services
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="cnt-box cnt-box-side-icon">
                            <i class="im-fingerprint-2"></i>
                            <div class="caption">
                                <h2>Pay Per Click Ads</h2>
                                <p>
                                Significantly increase your revenue and grow your business with our expertly designed and result-oriented PPC campaigns
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