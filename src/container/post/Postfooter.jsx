import React, { Component } from "react";
import { Link } from "react-router-dom";

class Postfooter extends Component {
    render() {
        return (
            <div class="row">
            <div class="col-lg-8">
                <ul class="icon-list icon-list-horizontal icon-list-blog">
                    <li>
                        <i class="icon-calendar"></i><a href="#">21 Apr 2019</a>
                    </li>
                    <li>
                        <i class="icon-bookmark"></i>
                        <a href="#">Finance</a>,
                        <a href="#">Software</a>
                    </li>
                    <li>
                        <i class="icon-user"></i><a href="#">Admin</a>
                    </li>
                </ul>
            </div>
            <div class="col-lg-4 align-right align-left-md">
                <div class="list-nav">
                    <a href="#"></a>
                    <a class="list-archive" href="#"></a>
                    <a href="#">Next post</a>
                </div>
            </div>
            <hr class="space" />
        </div>
      
            );
        }
        }
        
        export default Postfooter;