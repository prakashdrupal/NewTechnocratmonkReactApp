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
                        <h2>SEO Audit:</h2>
                        <p>
                        Need a clear and actionable SEO audit of your site? We will perform an in-depth audit of every single SEO aspect of your website to focus on organic search presence and provide you with clear steps to correct and improve your site’s search friendliness.
                       </p>
<p><b>What You’ll Get</b></p>
<ul>
<li>Technical and on-site SEO analysis & feedback</li>
<li>Backlink profile audit & management</li>
<li>Content improvement suggestions and new ideas for Content</li>
<li>Competitor and traffic analysis</li>
</ul>

                        <a href="#" class="btn-text">Explore services</a>
                    </div>
                </div>
                <hr class="space-lg" />
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6" data-anima="fade-left" data-time="1000">
                        <hr class="space-sm visible-md" />
                        <h2>Technical SEO</h2>
                        <p>
                        Dealing with code and technical stuff can be daunting. But that’s no excuse to miss out on high rankings and lucrative traffic. Leave it to our proficient technical SEO team to take care of the technical aspects of getting your website on top of Google search results.
</p>
<p><b>What You’ll Achieve</b></p>
<ul>
<li>Setup monitoring and management of Google Analytics and Search Console</li>
<li>Actionable recommendations on boosting site speed, sitemap and robots.txt file corrections</li>
<li>Monthly audit reports on website crawlability, indexability, on-page, and off-page factors</li>
<li>Detailed recommendations to improve your website from technical SEO stand-point</li>
</ul>
                        <a href="#" class="btn-text">Explore services</a>
                    </div>
                    <div class="col-lg-6 col-md-6" data-anima="fade-right" data-time="1000">
                        <img   class="margin-23"  src={ process.env.PUBLIC_URL + "images/phone-15.png"} alt=""/>
                    </div>
                </div>
                <hr class="space-lg" />
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6" data-anima="fade-left" data-time="1000">
                      
                        <img   class="margin-23"  src={ process.env.PUBLIC_URL + "images/phone-14.png"} alt=""/>
                    </div>
                    <div class="col-lg-6 col-md-6" data-anima="fade-right" data-time="1000">
                        <h2>Link Building:</h2>
                        <p>
                        Earning backlinks to your website from genuine, high-quality websites is the single biggest way to rank higher in Google. However, it is quite a tall order to produce link-worthy content and get it published on such sites.
That’s where we come in. Our time-tested outreach tactics will ensure you build a healthy link profile that results in high rankings.
</p>
<p><b>What You’ll Get</b></p>
<ul>
<li>Custom, result-oriented link building strategy</li>
<li>Quality backlinks acquired from high authority websites</li>
<li>Tangible increase in rankings and domain authority</li>
<li>Increase in the online visibility of your brand</li>
</ul>
                        <a href="#" class="btn-text">Explore services</a>
                    </div>
                </div>
                <hr class="space-lg" />
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6" data-anima="fade-left" data-time="1000">
                        <hr class="space-sm visible-md" />
                        <h2>Local SEO:</h2>
                        <p>
                       
                        Get this — 46% of all Google searches are looking for local information, and over 28% of local searches become purchases.<br/>
But that’s not it — 92% of searchers will pick businesses on the first page of local search results. So, it’s time to put your business on the map. Our competent local SEO team will get you in front of the right customers at the right time.
</p>
<p><b>What You’ll Get</b></p>
<ul>
<li>Complete Google My Business setup</li>
<li>NAP optimization strategy & execution</li>
<li>Local content and links strategy & execution</li>
<li>Well-optimized and improved website from Local SEO stand-point</li>
</ul>

                        <a href="#" class="btn-text">Explore services</a>
                    </div>
                    <div class="col-lg-6 col-md-6" data-anima="fade-right" data-time="1000">
                        <img   class="margin-23"  src={ process.env.PUBLIC_URL + "images/phone-15.png"} alt=""/>
                    </div>
                </div>
                <hr class="space-sm" />
                
            </div>
        </section>

        );
    }
}

export default Features;