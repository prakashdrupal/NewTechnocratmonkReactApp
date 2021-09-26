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
                                            <h2>Industry Experience</h2>
                                            <p>
                                            12+ years of hands-on industry experience.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid-item">
                                    <div class="cnt-box cnt-box-side-icon">
                                        <i class="im-cool-guy"></i>
                                        <div class="caption">
                                            <h2>Relationship with Brands</h2>
                                            <p>
                                            100+ trust-based relationships established with publications over a decade.  
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid-item">
                                    <div class="cnt-box cnt-box-side-icon">
                                        <i class="im-laptop-3"></i>
                                        <div class="caption">
                                            <h2>Content Marketing That Helps</h2>
                                            <p>
                                            100+ trust-based relationships established with publications over a decade. 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid-item">
                                    <div class="cnt-box cnt-box-side-icon">
                                        <i class="im-lock-user"></i>
                                        <div class="caption">
                                            <h2>Content Marketing That Helps</h2>
                                            <p>
                                            Bespoke content marketing for a clearly defined human audience & optimized for search engines.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid-item">
                                    <div class="cnt-box cnt-box-side-icon">
                                        <i class="im-shuffle-4"></i>
                                        <div class="caption">
                                            <h2>Digital PR</h2>
                                            <p>
                                            Create links and mentions from industry-leading websites and publications. That’s help in branding.
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