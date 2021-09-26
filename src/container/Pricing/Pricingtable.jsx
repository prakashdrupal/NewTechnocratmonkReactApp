import React, { Component } from "react";
import { Link } from "react-router-dom";

class Pricingtable extends Component {
    render() {
        return (
            <div class="tab-box" data-tab-anima="fade-in">
            <ul class="tab-nav align-center">
                <li class="active"><a href="#">Monthly plan</a></li>
                <li><a href="#">Annual plan</a></li>
            </ul>
            <div class="panel active">
                <div class="row" data-anima="fade-bottom" data-timeline="asc" data-time="2000">
                    <div class="col-lg-4 anima">
                        <div class="cnt-box cnt-pricing-table">
                            <div class="top-area">
                                <h2>Personal plan</h2>
                                <div class="price">$<span>19</span></div>
                                <p>Per month</p>
                            </div>
                            <ul>
                                <li>1000 messages</li>
                                <li>15GB storage</li>
                                <li>10 projects</li>
                                <li>Premium support</li>
                                <li>Dedicated guide</li>
                                <li>Great experience</li>
                                <li>Cheap prices</li>
                            </ul>
                            <div class="bottom-area">
                                <a class="btn btn-border btn-circle btn-sm" href="#">Purchase now</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 anima">
                        <div class="cnt-box cnt-pricing-table pricing-table-big">
                            <div class="top-area">
                                <h2>Business plan</h2>
                                <div class="price">$<span>49</span></div>
                                <p>Per month</p>
                            </div>
                            <ul>
                                <li>2000 messages</li>
                                <li>20GB storage</li>
                                <li>50 projects</li>
                                <li>Premium support</li>
                                <li>Dedicated guide</li>
                                <li>Cheap prices</li>
                                <li>Group rooms available</li>
                            </ul>
                            <div class="bottom-area">
                                <a class="btn btn-circle btn-sm" href="#">Purchase now</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 anima">
                        <div class="cnt-box cnt-pricing-table">
                            <div class="top-area">
                                <h2>Enterprise plan</h2>
                                <div class="price">$<span>89</span></div>
                                <p>Per month</p>
                            </div>
                            <ul>
                                <li>8000 messages</li>
                                <li>30GB storage</li>
                                <li>100 projects</li>
                                <li>Premium support</li>
                                <li>Dedicated guide</li>
                                <li>Cheap prices</li>
                                <li>Group rooms available</li>
                            </ul>
                            <div class="bottom-area">
                                <a class="btn btn-border btn-circle btn-sm" href="#">Purchase now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="panel">
                <div class="row">
                    <div class="col-lg-4 anima">
                        <div class="cnt-box cnt-pricing-table">
                            <div class="top-area">
                                <h2>Personal plan</h2>
                                <div class="price">$<span>199</span></div>
                                <p>Per year</p>
                            </div>
                            <ul>
                                <li>1000 messages</li>
                                <li>15GB storage</li>
                                <li>10 projects</li>
                                <li>Premium support</li>
                                <li>Dedicated guide</li>
                                <li>Cheap prices</li>
                                <li>English language</li>
                            </ul>
                            <div class="bottom-area">
                                <a class="btn btn-border btn-circle btn-sm" href="#">Purchase now</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 anima">
                        <div class="cnt-box cnt-pricing-table pricing-table-big">
                            <div class="top-area">
                                <h2>Business plan</h2>
                                <div class="price">$<span>499</span></div>
                                <p>Per year</p>
                            </div>
                            <ul>
                                <li>2000 messages</li>
                                <li>20GB storage</li>
                                <li>50 projects</li>
                                <li>Premium support</li>
                                <li>Dedicated guide</li>
                                <li>Cheap prices</li>
                                <li>English language</li>
                            </ul>
                            <div class="bottom-area">
                                <a class="btn btn-circle btn-sm" href="#">Purchase now</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 anima">
                        <div class="cnt-box cnt-pricing-table">
                            <div class="top-area">
                                <h2>Enterprise plan</h2>
                                <div class="price">$<span>899</span></div>
                                <p>Per year</p>
                            </div>
                            <ul>
                                <li>8000 messages</li>
                                <li>30GB storage</li>
                                <li>100 projects</li>
                                <li>Premium support</li>
                                <li>Dedicated guide</li>
                                <li>Cheap prices</li>
                                <li>English language</li>
                            </ul>
                            <div class="bottom-area">
                                <a class="btn btn-border btn-circle btn-sm" href="#">Purchase now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
export default Pricingtable;