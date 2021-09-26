import React, { Component } from "react";
import { Link } from "react-router-dom";

class Successnews extends Component {
    render() {
        return (
       
            <div class="row">
            <div className="hr space-lg"></div>
            <div class="col-lg-6">
                <img class="margin-23" src="http://via.placeholder.com/1019x608" />
                <hr class="space-sm" />
                <h3>Circlebot Alphabet Division</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua.
                </p>
                <a href="#" class="btn-text">Read this story</a>
            </div>
            <div class="col-lg-6">
                <hr class="space-xs" />
                <h2>More stories from our<br />best costumers around the world.</h2>
                <hr class="space-sm" />
                <div class="grid-list" data-columns="1">
                    <div class="grid-box">
                        <div class="grid-item">
                            <div class="cnt-box cnt-box-side ">
                                <a href="#" class="img-box"><img src="http://via.placeholder.com/800x600" alt="" /></a>
                                <div class="caption">
                                    <h2>Richard Scally</h2>
                                    <p>
                                        Lorem ipsum dolor sitamet consectetur adipisicing elito sed do eiusmo.
                                    </p>
                                    <a href="#" class="btn-text">Read this story</a>
                                </div>
                            </div>
                        </div>
                        <div class="grid-item">
                            <div class="cnt-box cnt-box-side ">
                                <a href="#" class="img-box"><img src="http://via.placeholder.com/800x600" alt="" /></a>
                                <div class="caption">
                                    <h2>Bluecircle</h2>
                                    <p>
                                        Lorem ipsum dolor sitamet consectetur adipisicing elito sed do tempo.
                                    </p>
                                    <a href="#" class="btn-text">Read this story</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


);
}
}

export default Successnews;