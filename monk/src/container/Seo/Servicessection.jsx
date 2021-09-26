import React, { Component } from "react";
import { Link } from "react-router-dom";

class  Servicessection extends Component {
    render() {
        return (
            <section class="section-base">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <h2>Technocrat Monk's SEO services</h2>
                        <hr class="space-sm" />
                        <p>Technocrat Monk is known for rendering reliable SEO services. Our SEO specialists and experts strive to deliver optimal business profits to you by giving proper exposure to your websites on the Internet.
</p>
                    </div>
                      

                    <div class="col-lg-9">
                        <hr class="space-xs" />
                        <div class="grid-list" data-columns="2" data-columns-sm="1">
                            <div class="grid-box">
                                <div class="grid-item">
                                    <div class="cnt-box cnt-box-side-icon">
                                        <i class="im-bar-chart4"></i>
                                        <div class="caption">
                                            <h2>Organic Traffic</h2>
                                            <p>
                                            A website that is optimized using our best SEO techniques surely lands on top most position after being searched by users.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid-item">
                                    <div class="cnt-box cnt-box-side-icon">
                                        <i class="im-cool-guy"></i>
                                        <div class="caption">
                                            <h2>Improved Leads and Conversion in Sales</h2>
                                            <p>
                                            Our SEO techniques help in converting valuable leads and organic traffic for more business resulting in paying customers for you.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid-item">
                                    <div class="cnt-box cnt-box-side-icon">
                                        <i class="im-laptop-3"></i>
                                        <div class="caption">
                                            <h2>Better Website Usability</h2>
                                            <p>
                                            Optimizing the website, makes it easier for search engine to navigate and give exact result to the searchers.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid-item">
                                    <div class="cnt-box cnt-box-side-icon">
                                        <i class="im-lock-user"></i>
                                        <div class="caption">
                                            <h2>Brand Awareness</h2>
                                            <p>
                                            It helps you in gaining users trust and makes your website more popular among the audience as it is appearing on the landing page of most of the search engines.
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