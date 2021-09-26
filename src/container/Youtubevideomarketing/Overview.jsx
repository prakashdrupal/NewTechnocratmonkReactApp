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
                                <h2>YouTube Channel Audit</h2>
                                <p>
                                Optimize Youtube channel with Content and targeted Tags
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="cnt-box cnt-box-side-icon">
                            <i class="im-hipster-headphones"></i>
                            <div class="caption">
                                <h2>YouTube Video Optimization</h2>
                                <p>
                                Optimize Youtube to generate organic views and Subscribers
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="cnt-box cnt-box-side-icon">
                            <i class="im-fingerprint-2"></i>
                            <div class="caption">
                                <h2>YouTube Video Promotion</h2>
                                <p>
                                Promote Youtube Videos through Google Ads for getting more views
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