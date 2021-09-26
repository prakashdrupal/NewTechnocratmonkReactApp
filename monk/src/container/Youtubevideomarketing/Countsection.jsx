import React, { Component } from "react";
import { Link } from "react-router-dom";

class  Countsection extends Component {
    render() {
        return (
            <section class="section-image light" style={{
                backgroundImage: 'url("images/bg.svg")',
               
              }}>
            <div class="container">
                <table class="table table-grid table-border align-left no-padding-y table-md-6">
                    <tbody>
                        <tr>
                            <td>
                                <div class="counter counter-horizontal counter-icon">
                                    <div>
                                        <h3>Downloads</h3>
                                        <div class="value text-lg">
                                            <span data-to="150" data-speed="3000">150</span>
                                            <span class="text-md">K</span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="counter counter-horizontal counter-icon">
                                    <div>
                                        <h3>Active users</h3>
                                        <div class="value text-lg">
                                            <span data-to="12" data-speed="3000">12</span>
                                            <span class="text-md">K</span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="counter counter-horizontal counter-icon">
                                    <div>
                                        <h3>Kilometers of paths</h3>
                                        <div class="value text-lg">
                                            <span data-to="75" data-speed="3000">75</span>
                                            <span class="text-md">K</span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="counter counter-horizontal counter-icon">
                                    <div>
                                        <h3>Positive reviews</h3>
                                        <div class="value text-lg">
                                            <span data-to="10" data-speed="3000">10</span>
                                            <span class="text-md">K</span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="counter counter-horizontal counter-icon">
                                    <div>
                                        <h3>Photo shared</h3>
                                        <div class="value text-lg">
                                            <span data-to="11" data-speed="3000">11</span>
                                            <span class="text-md">K</span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>


        );
    }
}

export default Countsection;