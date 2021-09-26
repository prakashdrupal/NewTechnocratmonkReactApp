import React, { Component } from "react";
import { Link } from "react-router-dom";

class Formsection extends Component {
    render() {
        return (
            <section class="section-base section-color section-top-overflow">
            <div class="container">
                <form action="" class="form-box form-ajax form-inline boxed-area light" method="post" data-email="example@domain.com">
                    <div class="row">
                        <div class="col-lg-4">
                            <input id="name" name="name" placeholder="Eame and surname" type="text" class="input-text" />
                        </div>
                        <div class="col-lg-4">
                            <input id="email" name="email" placeholder="Email" type="email" class="input-text" />
                        </div>
                        <div class="col-lg-4">
                            <button class="btn btn-sm" type="submit">Subscribe</button>
                        </div>
                    </div>
                    <div class="form-checkbox">
                        <input type="checkbox" id="check" name="check" value="check" required />
                        <label for="check">You accept the terms of service and the privacy policy</label>
                    </div>
                    <div class="success-box">
                        <div class="alert alert-success">Congratulations. Your message has been sent successfully</div>
                    </div>
                    <div class="error-box">
                        <div class="alert alert-warning">Error, please retry. Your message has not been sent</div>
                    </div>
                </form>
                <hr class="space-lg" />
                {/* <div class="tab-box tab-icon tab-vertical tab-inverse" data-tab-anima="fade-left">
                    <div class="panel active">
                    <img  src={ process.env.PUBLIC_URL + "http://via.placeholder.com/960x600"} alt=""/>
                    </div>
                    <div class="panel">
                    <img  src={ process.env.PUBLIC_URL + "http://via.placeholder.com/960x600"} alt=""/>
                    </div>
                    <div class="panel">
                    <img  src={ process.env.PUBLIC_URL + "http://via.placeholder.com/960x600"} alt=""/>
                    </div>
                    <div class="panel">
                       
                        <img  src={ process.env.PUBLIC_URL + "http://via.placeholder.com/960x600"} alt=""/>
                    </div>
                    <ul class="tab-nav">
                        <li class="active"><a href="#"><i class="im-speach-bubbledialog"></i>Organise groups and events</a></li>
                        <li><a href="#"><i class="im-winter-2"></i>Multiple tracking information</a></li>
                        <li><a href="#"><i class="im-thumb"></i>Social media and news features</a></li>
                        <li><a href="#"><i class="im-sport-mode"></i>New segments and paths tools</a></li>
                    </ul>
                </div> */}
            </div>
        </section>
        );
    }
}

export default Formsection;