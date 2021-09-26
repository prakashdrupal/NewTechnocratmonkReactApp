import React, { Component } from "react";
import { Link } from "react-router-dom";

class  Review extends Component {
    render() {
        return (
            <section id="reviews" class="section-base">
            <div class="container">
                <ul class="slider" data-options="type:carousel,arrows:true,nav:false,perView:3,perViewSm:2,perViewXs:1,gap:30,controls:out">
                    <li>
                        <div class="cnt-box cnt-box-testimonials rating-5">
                            <img src="http://via.placeholder.com/450x450" alt="" />
                            <p>
                                Lorem ipsum dolor sitamet consectetur adipisicing elito sed do eiusmod tempore.
                            </p>
                            <p class="testimonial-info">
                                <span>Robert Junior</span>
                                <span>Slack</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="cnt-box cnt-box-testimonials rating-5">
                            <img src="http://via.placeholder.com/450x450" alt="" />
                            <p>
                                Lorem ipsum dolor sitamet consectetur adipisicing elito sed do eiusmod tempore.
                            </p>
                            <p class="testimonial-info">
                                <span>Jessica Poster</span>
                                <span>Facebook</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="cnt-box cnt-box-testimonials rating-4">
                            <img src="http://via.placeholder.com/450x450" alt="" />
                            <p>
                                Lorem ipsum dolor sitamet consectetur adipisicing elito sed do eiusmod tempore.
                            </p>
                            <p class="testimonial-info">
                                <span>Brad Manson</span>
                                <span>Google</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="cnt-box cnt-box-testimonials rating-5">
                            <img src="http://via.placeholder.com/450x450" alt="" />
                            <p>
                                Lorem ipsum dolor sitamet consectetur adipisicing elito sed do eiusmod tempore.
                            </p>
                            <p class="testimonial-info">
                                <span>Richard Pall</span>
                                <span>Microsoft</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        );
    }
}

export default Review;