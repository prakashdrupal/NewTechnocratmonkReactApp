import React, { Component } from "react";
import { Link } from "react-router-dom";

class  Servicessection extends Component {
    render() {
        return (
            <section class="section-base">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <h2>Benefits of Technocrat Monk's SEO Course</h2>
                        <hr class="space-sm" />
                        <ul class="icon-list ">
                            <li className="pl-0">Discover everything you need to know the benefits of SEO Course:</li>
                            
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
                                            <h2>A Wide Range of Career Options: </h2>
                                            <p >
                                            It’s suitable for anyone thinking about a career in SEO or starting an SEO agency.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid-item">
                                    <div class="cnt-box cnt-box-side-icon">
                                        <i class="im-cool-guy"></i>
                                        <div class="caption">
                                            <h2>Better Salary: </h2>
                                            <p>
                                            SEO jobs are ever on the rise and qualified professionals who have earned a specialized certification in the field are eligible for high salaries.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid-item">
                                    <div class="cnt-box cnt-box-side-icon">
                                        <i class="im-laptop-3"></i>
                                        <div class="caption">
                                            <h2>Flexibility: </h2>
                                            <p>
                                            SEO online certification courses offer you the flexibility to be your own boss and work at your own convenience due to the abundance of freelance opportunities.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid-item">
                                    <div class="cnt-box cnt-box-side-icon">
                                        <i class="im-lock-user"></i>
                                        <div class="caption">
                                            <h2>Run Own Agency</h2>
                                            <p>
                                            After completion of our SEO course, you can run own digital marketing agency. 
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