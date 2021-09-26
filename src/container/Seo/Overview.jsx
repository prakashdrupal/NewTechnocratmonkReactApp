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
                                <h2>SEO Audit</h2>
                                <p>
                                Actionable SEO audit of your Website
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="cnt-box cnt-box-side-icon">
                            <i class="im-hipster-headphones"></i>
                            <div class="caption">
                                <h2>Technical SEO</h2>
                                <p>
                                Optimize code and technical stuff of your website

                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="cnt-box cnt-box-side-icon">
                            <i class="im-fingerprint-2"></i>
                            <div class="caption">
                                <h2>Link Building</h2>
                                <p>
                                Earning backlinks to your website from genuine, high-quality websites
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