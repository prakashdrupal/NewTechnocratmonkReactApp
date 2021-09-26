import React, { Component } from "react";
import { Link } from "react-router-dom";

class Postcategory extends Component {
    render() {
        return (


            <div>
                 <div class="hr space-sm"> </div>
                        <h3>Categories</h3>
                        <div class="space-xs"> </div>
                        <div class="menu-inner menu-inner-vertical">
                            <ul>
                                <li>
                                    <Link to="#">
                                        Finance and money
                                    </Link>
                                </li>
                                <li>
                                <Link to="#">
                                        Software
                                        </Link>
                                </li>
                                <li>
                                <Link to="#">
                                        Technology
                                        </Link>
                                </li>
                                <li> <Link to="#"> Business</Link>
                                </li>
                            </ul>
                        </div>
            </div>
            );
        }
        }
        
        export default Postcategory;