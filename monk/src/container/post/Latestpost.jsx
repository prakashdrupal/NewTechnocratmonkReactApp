import React, { Component } from "react";
import { Link } from "react-router-dom";

class Latestpost extends Component {
    render() {
        return (
<div>
<hr class="space-sm" />
                        <h3>Latest posts</h3>
                        <hr class="space-sm" />
                        <div class="menu-inner menu-inner-vertical menu-inner-image">
                            <ul>
                                <li>
                                    <a href="#">
                                        <img src="http://via.placeholder.com/400x400" alt="" />
                                        <span>February 12, 2020</span>
                                        Shipping family turned money become billionare
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="http://via.placeholder.com/400x400" alt="" />
                                        <span>February 25, 2020</span>
                                        Six best practices for using artificial intelligence data
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="http://via.placeholder.com/400x400" alt="" />
                                        <span>April 19, 2020</span>
                                        Machine learning and AI are raising concerns
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="http://via.placeholder.com/400x400" alt="" />
                                        <span>April 20, 2020</span>
                                        Commodity traders turn to long as big oil fail more then expected
                                    </a>
                                </li>
                            </ul>
                        </div>
</div>

);
}
}

export default Latestpost;