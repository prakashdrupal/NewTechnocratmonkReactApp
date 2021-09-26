import React, { Component } from "react";
import { Link } from "react-router-dom";

class  Servicessection extends Component {
    render() {
        return (
            <section class="section-base">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <h2>Latest SEO Trends:</h2>
                        <hr class="space-sm" />
                        <ul class="icon-list icon-circle">
                            <li>Helped dozens of businesses build</li>
                            <li>referral and search engine traffic,</li>
                            <li>transforming them into revered brands.</li>
                        </ul>
                    </div>
                      

                    <div class="col-lg-9">
                        <hr class="space-xs" />
                        <div class="grid-list" data-columns="2" data-columns-sm="1">
                            <div class="grid-box">
                                <div class="grid-item">
                                    <div class="cnt-box cnt-box-side-icon">
                                        <i class="im-bar-chart4"></i>
                                        <div class="caption">
                                            <h2>More Video Views</h2>
                                            <p>
                                            We will drive more views to your videos through our top-quality YouTube marketing services.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid-item">
                                    <div class="cnt-box cnt-box-side-icon">
                                        <i class="im-cool-guy"></i>
                                        <div class="caption">
                                            <h2>More YouTube Subscribers</h2>
                                            <p>
                                            Our YouTube marketing agency creates high-quality actionable content that drives more exposure and followers  
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid-item">
                                    <div class="cnt-box cnt-box-side-icon">
                                        <i class="im-laptop-3"></i>
                                        <div class="caption">
                                            <h2>Better Branding</h2>
                                            <p>
                                            Our content helps your channel to build better branding on YouTube
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid-item">
                                    <div class="cnt-box cnt-box-side-icon">
                                        <i class="im-lock-user"></i>
                                        <div class="caption">
                                            <h2>More Engagement</h2>
                                            <p>
                                            We create high-quality content to engage your audience and followers
                                            </p>
                                        </div>
                                    </div>
                                </div>
                               
                                {/* <div class="grid-item">
                                    <div class="cnt-box cnt-box-side-icon">
                                        <i class="im-security-settings"></i>
                                        <div class="caption">
                                            <h2>Validation</h2>
                                            <p>
                                                Lorem ipsum dolor sit ame  elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua.
                                            </p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            <div class="list-pagination">
                                <ul class="pagination" data-page-items="4" data-pagination-anima="fade-bottom"></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        );
    }
}

export default Servicessection;