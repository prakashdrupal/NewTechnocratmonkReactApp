import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (

    <footer className="footer-parallax light">
    <i className="scroll-top-btn scroll-top show"></i>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <h4>Company and team</h4>
                    <div className="menu-inner menu-inner-vertical">
                        <ul>
                            <li>
                                <a href="#">Company details and team</a>
                            </li>
                            <li>
                                <a href="#">News and blog</a>
                            </li>
                            <li>
                                <a href="#">Press area</a>
                            </li>
                            <li>
                                <a href="#">Affiliates and marketing</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <h4>Help and support</h4>
                    <div className="menu-inner menu-inner-vertical">
                        <ul>
                            <li>
                                <a href="#">Help centre</a>
                            </li>
                            <li>
                                <a href="#">Feedbacks</a>
                            </li>
                            <li>
                                <a href="#">Request new features</a>
                            </li>
                            <li>
                                <a href="#">Contact us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <h4>Learn more</h4>
                    <div className="menu-inner menu-inner-vertical">
                        <ul>
                            <li>
                                <a href="#">Apps stores</a>
                            </li>
                            <li>
                                <a href="#">Partners</a>
                            </li>
                            <li>
                                <a href="#">Privacy and terms</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <h4>Follow us</h4>
                    <div className="icon-links icon-social icon-links-grid social-colors">
                        <a className="facebook"><i className="icon-facebook"></i></a>
                        <a className="twitter"><i className="icon-twitter"></i></a>
                        <a className="linkedin"><i className="icon-linkedin"></i></a>
                        <a className="youtube"><i className="icon-youtube"></i></a>
                        <a className="instagram"><i className="icon-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bar">
            <div className="container">
                <span>© Codrop LTD 2019. Codrop is a powerful Landing Page App Template built with <a target="_blank" href="https://themekit.dev/code/">Themekit</a> by the <a target="_blank" href="https://schiocco.com/">Schiocco</a> Team. </span>
                <span><img src={process.env.PUBLIC_URL + "stylesht/media/logo-light.svg"} /></span>
            </div>
        </div>
    
    </footer>



);
}
}

export default Footer;

