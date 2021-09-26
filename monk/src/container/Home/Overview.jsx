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
                                <h2>SEO</h2>
                                <p>
                                With a blend of sublime content and technical SEO tweaks, we ensure your website ranks on top, ethically.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="cnt-box cnt-box-side-icon">
                            <i class="im-hipster-headphones"></i>
                            <div class="caption">
                                <h2>Content Marketing</h2>
                                <p>
                                We'll produce killer content for your brand and then get it the attention it deserves.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="cnt-box cnt-box-side-icon">
                            <i class="im-fingerprint-2"></i>
                            <div class="caption">
                                <h2>Social Media</h2>
                                <p>
                                 We'll help you establish a solid social media presence and then sustain it.
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