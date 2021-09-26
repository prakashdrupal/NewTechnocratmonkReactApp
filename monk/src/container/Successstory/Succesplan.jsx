import React, { Component } from "react";
import { Link } from "react-router-dom";

class Succesplan extends Component {
    render() {
        return (
           <div>
                  <hr class="space-lg" />
                <h2 class="align-center">Simple cheap plans for everyone.</h2>
                <p class="align-center width-650">
                    Lorem ipsum dolor sit amet no sea takimata sanctus est lorem ipsum dolor sit amete
                    sare nostrud exercitation ullamco sea takiquis nostrud exercitatio.
                </p>
                <hr class="space" />
                <table class="table table-grid table-border align-center table-full-sm no-padding-y">
                    <tbody>
                        <tr>
                            <td>
                                <div class="counter counter-vertical counter-icon align-center">
                                    <div>
                                        <h3>Monthly activations</h3>
                                        <div class="value">
                                            <span class="text-md" data-to="29" data-speed="3000" data-unit="%">29</span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                                <hr class="space-xs" />
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipis ulla pariatur.
                                </p>
                            </td>
                            <td>
                                <div class="counter counter-vertical counter-icon align-center">
                                    <div>
                                        <h3>Conversations</h3>
                                        <div class="value">
                                            <span class="text-md" data-to="30000" data-speed="3000" data-unit="+">30000</span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                                <hr class="space-xs" />
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipis ulla pariatur.
                                </p>
                            </td>
                            <td>
                                <div class="counter counter-vertical counter-icon align-center">
                                    <div>
                                        <h3>Revenues increase</h3>
                                        <div class="value">
                                            <span class="text-md" data-to="5" data-speed="3000" data-unit="x">5</span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                                <hr class="space-xs" />
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipis ulla pariatur.
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
           </div>

            );
        }
        }
        
        export default Succesplan;