import React, { Component } from "react";
import { Link } from "react-router-dom";

class Aboutteam extends Component {
    render() {
        return (
            <section class="section-base">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <h2>Team spootlights.</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua.
                        </p>
                        <a href="#" class="btn btn-sm btn-circle">View the team</a>
                    </div>
                    <div class="col-lg-8">
                        <ul class="slider slider-side" data-options="type:carousel,arrows:false,nav:true,perView:3,perViewSm:2,perViewXs:1,controls:out,gap:30">
                            <li>
                                <div class="cnt-box cnt-box-team">
                                    <img src="http://via.placeholder.com/450x450" alt="" />
                                    <div class="caption">
                                        <h2>Robert Junior</h2>
                                        <span>Founder</span>
                                        <span class="icon-links">
                                            <a href="#" target="_blank"><i class="icon-facebook"></i></a>
                                            <a href="#" target="_blank"><i class="icon-twitter"></i></a>
                                            <a href="#" target="_blank"><i class="icon-instagram"></i></a>
                                        </span>
                                        <p>
                                            Lorem ipsum dolor sitamet consectetur eiusmo.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="cnt-box cnt-box-team">
                                    <img src="http://via.placeholder.com/450x450" alt="" />
                                    <div class="caption">
                                        <h2>Jessica Poster</h2>
                                        <span>Marketing</span>
                                        <span class="icon-links">
                                            <a href="#" target="_blank"><i class="icon-facebook"></i></a>
                                            <a href="#" target="_blank"><i class="icon-twitter"></i></a>
                                            <a href="#" target="_blank"><i class="icon-instagram"></i></a>
                                        </span>
                                        <p>
                                            Lorem ipsum dolor sitamet consectetur eiusmo.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="cnt-box cnt-box-team">
                                    <img src="http://via.placeholder.com/450x450" alt="" />
                                    <div class="caption">
                                        <h2>Brad Manson</h2>
                                        <span>Software</span>
                                        <span class="icon-links">
                                            <a href="#" target="_blank"><i class="icon-facebook"></i></a>
                                            <a href="#" target="_blank"><i class="icon-twitter"></i></a>
                                            <a href="#" target="_blank"><i class="icon-instagram"></i></a>
                                        </span>
                                        <p>
                                            Lorem ipsum dolor sitamet consectetur eiusmo.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="cnt-box cnt-box-team">
                                    <img src="http://via.placeholder.com/450x450" alt="" />
                                    <div class="caption">
                                        <h2>Richard Pall</h2>
                                        <span>Marketing</span>
                                        <span class="icon-links">
                                            <a href="#" target="_blank"><i class="icon-facebook"></i></a>
                                            <a href="#" target="_blank"><i class="icon-twitter"></i></a>
                                            <a href="#" target="_blank"><i class="icon-instagram"></i></a>
                                        </span>
                                        <p>
                                            Lorem ipsum dolor sitamet consectetur eiusmo.
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>

            );
        }
    }
    
    export default Aboutteam;