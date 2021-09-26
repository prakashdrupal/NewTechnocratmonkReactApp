import React, { Component } from "react";
import { Link } from "react-router-dom";

class  News extends Component {
    render() {
        return (
            <section id="news" class="section-base section-color">
            <div class="container">
                <h2 class="align-center">Latest news from the sports world.</h2>
                <p class="width-650 align-center">
                    Lorem ipsum dolor sit amet no sea takimata sanctus est Lorem ipsum dolor sit amete
                    sare nostrud exercitation ullamco sea takiquis nostrud exercitatio.
                </p>
                <hr class="space" />
                <div class="row">
                    <div class="col-lg-4">
                        <div class="grid-list" data-columns="1">
                            <div class="grid-box">
                                <div class="grid-item">
                                    <div class="cnt-box cnt-box-blog-top boxed">
                                        <a href="#" class="img-box">
                                            <div class="blog-date">
                                                <span>23</span>
                                                <span>JAN 2018</span>
                                            </div>
                                            <img src="http://via.placeholder.com/800x600" alt="" />
                                        </a>
                                        <div class="caption">
                                            <h2>
                                                Ten Red Bull Music Festival performers and musicians.
                                            </h2>
                                            <ul class="icon-list icon-list-horizontal">
                                                <li><i class="icon-bookmark"></i><a href="#">Events</a></li>
                                                <li class="icon-links">
                                                    <a href="#" data-social="share-fadebook" data-social-url=""><i class="icon-facebook"></i></a>
                                                    <a href="#" data-social="share-twitter" data-social-url=""><i class="icon-twitter"></i></a>
                                                    <a href="#" data-social="share-linkedin" data-social-url=""><i class="icon-linkedin"></i></a>
                                                </li>
                                            </ul>
                                            <p>
                                                Lorem ipsum dolor sitamet consectetur adipisicing elito sed do eiusmod tempore.
                                                Duis aute irure dolor in reprehenderit in velie.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="grid-list" data-columns="1">
                            <div class="grid-box">
                                <div class="grid-item">
                                    <div class="cnt-box cnt-box-blog-side boxed">
                                        <a href="#" class="img-box">
                                            <div class="blog-date">
                                                <span>01</span>
                                                <span>JAN 2018</span>
                                            </div>
                                            <img src="http://via.placeholder.com/800x600" alt="" />
                                        </a>
                                        <div class="caption">
                                            <h2>How far will an elite jumper go for the chance to break boundaries in their sport</h2>
                                            <ul class="icon-list icon-list-horizontal">
                                                <li><i class="icon-bookmark"></i><a href="#">Music</a></li>
                                                <li class="icon-links">
                                                    <a href="#" data-social="share-fadebook" data-social-url=""><i class="icon-facebook"></i></a>
                                                    <a href="#" data-social="share-twitter" data-social-url=""><i class="icon-twitter"></i></a>
                                                    <a href="#" data-social="share-linkedin" data-social-url=""><i class="icon-linkedin"></i></a>
                                                </li>
                                            </ul>
                                            <p>
                                                Lorem ipsum dolor sitamet consectetur adipisicing elito sed do eiusmod tempore.
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid-item">
                                    <div class="cnt-box cnt-box-blog-side boxed">
                                        <a href="#" class="img-box">
                                            <div class="blog-date">
                                                <span>12</span>
                                                <span>JAN 2018</span>
                                            </div>
                                            <img src="http://via.placeholder.com/800x600" alt="" />
                                        </a>
                                        <div class="caption">
                                            <h2>
                                                Hit the hiking and trail running routes with endless trails over beautiful peaks
                                            </h2>
                                            <ul class="icon-list icon-list-horizontal">
                                                <li><i class="icon-bookmark"></i><a href="#">Events</a></li>
                                                <li class="icon-links">
                                                    <a href="#" data-social="share-fadebook" data-social-url=""><i class="icon-facebook"></i></a>
                                                    <a href="#" data-social="share-twitter" data-social-url=""><i class="icon-twitter"></i></a>
                                                    <a href="#" data-social="share-linkedin" data-social-url=""><i class="icon-linkedin"></i></a>
                                                </li>
                                            </ul>
                                            <p>
                                                Lorem ipsum dolor sitamet consectetur adipisicing elito sed do eiusmod tempore.
                                                Duis aute irure dolor in reprehenderit in voluptate velit e dolore eu fugiat nulla pariature.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        );
    }
}

export default News;