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
                        <h2>Proper Marketing Order for Appear in Google</h2>
                        <p>
                        When you have a great website that is known for its looks and performance, you definitely get appreciation from people, but are it enough to become a brand? Certainly, No 1.<br/>
You need to make proper marketing in order to appear on the top of the Google search and able to attract people to your website.<br/>
Only when you have a large number of customers, you can improve business ROI. Your search for finding fame ends with a digital marketing company.


                        </p>
                        <a href="#" class="btn-text">Explore services</a>
                    </div>
                </div>
                <hr class="space-sm" />
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6" data-anima="fade-left" data-time="1000">
                        <hr class="space-sm visible-md" />
                        <h2>Pay Only When You Get Results after Attracting Your Customers :</h2>
                        <p>
                        PPC is so far one of the best marketing way for businesses. This enhances the chances of reaching more number of potential clients and allows you to pay only when someone clicks on your ad. This ensures staying within the budget while acquiring desirable results. With our analysis, we get a detailed report on the performance and then optimize it as required. Our use of Custom Ads scripts ensures creating dynamic campaigns
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
                        <h2>PPC Platforms Majorly Used By Us:</h2>
                        
<p>Google Ads Platforms:</p>
                     <ul className="p-0 list-group-ul">
                     <li>YouTube</li>
                     <li>App Installation Ads</li>
                     <li>Promotions with Google Sponsors</li>
                     <li>Google Shopping</li>
                     <li>Programmatic Display</li>
                     <li>Search Marketing</li>
                     <li>Dynamic Remarketing</li>
</ul>

                        <a href="#" class="btn-text">Explore services</a>
                    </div>
                </div>
                <hr class="space-sm" />
              
            </div>
        </section>

        );
    }
}

export default Features;