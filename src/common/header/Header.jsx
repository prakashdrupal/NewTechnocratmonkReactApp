import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav
        className="menu-classic menu-fixed menu-transparent menu-one-page align-right light" id="sidebarContainer"
        data-menu-anima="fade-bottom"
        data-scroll-detect="true"
      >
        <div className="container">
          <div className="menu-brand">
            <Link to="">
              <img
                className="logo-default"
                src={process.env.PUBLIC_URL + "images/logo.png"}
                alt="logo"
              />
              <img
                className="logo-retina"
                src={process.env.PUBLIC_URL + "images/logo.png"}
                alt="logo"
              />
            </Link>
          </div>
          
          <div className="openSideM">
  <input type="checkbox" class="openSideMenu" id="openSideMenu"/>
<label for="openSideMenu" class="sideIconToggle">
    <div class="spinner diagonal part-1"></div>
    <div class="spinner horizontal"></div>
    <div class="spinner diagonal part-2"></div>
  </label>

  <div id="sideMenu">
    <ul class="sideMenuInner">
      <li class="active" onclick="hideSidebar()"><a href="#" data-toggle="tab">Item1</a></li>
      <li onclick="hideSidebar()"><a href="#" data-toggle="tab">Item2</a></li>
      <li onclick="hideSidebar()"><a href="#" data-toggle="tab">Item3</a></li>
    </ul>
  </div>
</div>
          <div className="menu-cnt">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="about-us">About</Link>
              </li>
              <li>
                <Link to="pricing">Pricing</Link>
              </li>
              <li className="dropdown">
                <Link to="">Services</Link>
                <ul>
                  <li>
                    <Link to="digital-marketing-company">Digital Marketing Company</Link>
                  </li>
                  <li>
                    <Link to="digital-marketing-classes">Digital Marketing Classes</Link>
                  </li>
                  <li>
                    <Link to="online-seo-classes">Online Seo Classes</Link>
                  </li>
                  <li>
                    <Link to="seo">SEO</Link>
                  </li>
                  <li>
                    <Link to="youtube-video-marketing">Youtube Video Marketing</Link>
                  </li>
                  <li>
                    <Link to="success-stories">Success stories</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="contact">Contact Us</Link>
              </li>
              <li>
                <Link to="blog">Blog</Link>
              </li>
            </ul>
            <div className="menu-right">
              <div className="menu-custom-area">
                <Link className="btn btn-xs btn-circle btn-border" to="#">
                  Sign up
                </Link>
              </div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
