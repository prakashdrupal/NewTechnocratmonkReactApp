import React, { Component } from "react";
import { Link } from "react-router-dom";

class Postrelated extends Component {
    render() {
        return (
            
                        <div class="grid-list" data-columns="2" data-columns-sm="1">
                       <h2 className="mb-5">Related articles.</h2>
            <div class="space-sm"></div>
                            <div class="grid-box">
                                <div class="grid-item">
                                    <Link to="#" class="media-box media-box-half">
                                        <img src="http://via.placeholder.com/600x400" alt="" />
                                        <div class="caption">
                                            <h2>Jessica Adams Exibition In New York With After Show</h2>
                                            <div class="extra-field">Technology</div>
                                            <p>
                                                October 25, 2019
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                                <div class="grid-item">
                                    <a href="#" class="media-box media-box-half">
                                        <img src="http://via.placeholder.com/600x400" alt="" />
                                        <div class="caption">
                                            <h2>How to change your business and make money</h2>
                                            <div class="extra-field">Business</div>
                                            <p>
                                                October 24, 2019
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>



            );
        }
        }
        
        export default Postrelated;