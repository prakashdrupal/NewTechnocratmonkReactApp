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
                                            <h2>Search Engine Optimization</h2>
                                            <p>
                                            Enhance your online presence and divert more yet relevant traffic to your business website with our customized SEO strategies and services
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid-item">
                                    <div class="cnt-box cnt-box-side-icon">
                                        <i class="im-cool-guy"></i>
                                        <div class="caption">
                                            <h2>Social Media Marketing</h2>
                                            <p>
                                            Engage your targeted audience more creatively and spread your brand awareness by opting for our effective social media marketing services  
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid-item">
                                    <div class="cnt-box cnt-box-side-icon">
                                        <i class="im-laptop-3"></i>
                                        <div class="caption">
                                            <h2>Pay Per Click Ads</h2>
                                            <p>
                                            Significantly increase your revenue and grow your business with our expertly designed and result-oriented PPC campaigns
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid-item">
                                    <div class="cnt-box cnt-box-side-icon">
                                        <i class="im-lock-user"></i>
                                        <div class="caption">
                                            <h2>Display Ads</h2>
                                            <p>
                                            Grab the attention of maximum eyeballs online by displaying your brand in the right place. Avail our display advertising services to have your brand presence everywhere
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