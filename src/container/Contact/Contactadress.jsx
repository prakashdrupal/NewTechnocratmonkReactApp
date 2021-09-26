import React, { Component } from "react";
import { Link } from "react-router-dom";

class Contactadress extends Component {
    render() {
        return (
            <div class="col-lg-4">
                        <hr class="space visible-md" />
                        <h2>Contacts.</h2>
                        <p>
                            Lorem ipsum dolor sit ametete consecte turerno adipiscing elitsed do eiusmod tempo incididunt utlabore et dolore aliqua.
                        </p>
                        <ul class="text-list text-list-bold">
                            <li><b>Address</b><p>139 Baker St, E1 7PT, London</p></li>
                            <li><b>Web</b><p>domain.com</p></li>
                            <li><b>Email</b><p>info@domain.com</p></li>
                            <li><b>Phone</b><p>(02) 123 456 789999</p></li>
                            <li><b>Skype</b><p>example.name</p></li>
                        </ul>
                        <hr class="space space-40" />
                        <div class="icon-links icon-social   social-colors">
                            <a class="facebook"><i class="icon-facebook"></i></a>
                            <a class="twitter"><i class="icon-twitter"></i></a>
                            <a class="instagram"><i class="icon-instagram"></i></a>
                            <a class="pinterest"><i class="icon-pinterest"></i></a>
                        </div>
                    </div>

            );
}
}

export default Contactadress;