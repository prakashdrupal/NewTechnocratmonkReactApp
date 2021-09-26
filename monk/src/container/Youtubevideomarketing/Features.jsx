import React, { Component } from "react";
import { Link } from "react-router-dom";

class Features extends Component {
    render() {
        return (
            <section id="features" class="section-base section-color">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6" data-anima="fade-left" data-time="1000">
                      
                        <img   class="margin-23"  src={ process.env.PUBLIC_URL + "images/phone-14.png"} alt=""/>
                    </div>
                    <div class="col-lg-6 col-md-6" data-anima="fade-right" data-time="1000">
                    <h2>How Technocrat Monk Can Help? <br/>
                        YouTube Channel Audit</h2>
                        <p>
                        We make a complete audit of the channel and videos. Give us a chance to have a look at your content that is presently there and with our best practices we can actually aid in getting the video proper views and likes that it deserves. We will find out the points that are lacking you back along with biggest competitors present in the niche.
                        </p>
                        <a href="#" class="btn-text">Explore services</a>
                    </div>
                </div>
                <hr class="space-sm" />
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6" data-anima="fade-left" data-time="1000">
                        <hr class="space-sm visible-md" />
                        <h2>YouTube Video Optimization</h2>
                        <p>
                        Optimizing the current videos present on your channel has a lot to do on your promotional strategy. We have a strong and knowledgeable YouTube SEO team, who can place the contents in a way that it gets easily tracked.<br/>
After proper and in-depth research made by the team, we execute them to acquire great results. For more information, you can directly talk to us today.

                        </p>
                        <a href="#" class="btn-text">Explore services</a>
                    </div>
                    <div class="col-lg-6 col-md-6" data-anima="fade-right" data-time="1000">
                        <img   class="margin-23"  src={ process.env.PUBLIC_URL + "images/phone-15.png"} alt=""/>
                    </div>
                </div>
                <hr class="space-sm" />
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6" data-anima="fade-left" data-time="1000">
                      
                        <img   class="margin-23"  src={ process.env.PUBLIC_URL + "images/phone-14.png"} alt=""/>
                    </div>
                    <div class="col-lg-6 col-md-6" data-anima="fade-right" data-time="1000">
                    <h2>YouTube Video Promotion</h2>
                        <p>
                        We help in making proper promotion in order to reach the audience. Even if you want or ever wish to market the videos on YouTube or On Facebook, we take this step in order to easily reach the targeted market. We find out a great way with our research works to reach the targeted niche and accomplish your business goals as fast as you can.
We being the top YouTube video marketing company in India can help you by giving new ideas regarding the videos that can be effectual for your channel. All you need is pre-planning in order to boost the customer base, views, and engagement. We make sure that your brand becomes a brand by creating appealing videos.
</p>
                        <a href="#" class="btn-text">Explore services</a>
                    </div>
                </div>
                <hr class="space-sm" />
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6" data-anima="fade-left" data-time="1000">
                        <hr class="space-sm visible-md" />
                        <h2>Technocrat Monk's YouTube Video Marketing Services</h2>
                        <ul>
                        <li>Informative and appealing videos</li>
                        <li>More likes and shares</li>
                        <li>Acquire more audience</li>

                        </ul>
       
                        <a href="#" class="btn-text">Explore services</a>
                    </div>
                    <div class="col-lg-6 col-md-6" data-anima="fade-right" data-time="1000">
                        <img   class="margin-23"  src={ process.env.PUBLIC_URL + "images/phone-15.png"} alt=""/>
                    </div>
                </div>
            </div>
        </section>

        );
    }
}

export default Features;