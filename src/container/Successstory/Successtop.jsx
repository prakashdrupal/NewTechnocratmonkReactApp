import React, { Component } from "react";
import { Link } from "react-router-dom";

class Successtop extends Component {
    render() {
        return (
            <div>
            <div class="Hr space-lg"> </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="space-xs"> </div>
                    <h1>Succesfull stories.</h1>
                    <p>
                        See how MapperKit inside sales team drove 80% of its revenue through live chat with Codrop.
                        They launched their enterprise platform and built a powerful user experience in less than three months.
                    </p>
                    <a href="#" class="btn  btn-circle btn-sm">Read this story</a>
                </div>
                <div class="col-lg-6">
                    <img class="margin-23 margin-md-23" src="http://via.placeholder.com/1019x608" />
                </div>
            </div>
            </div>
            );
}
}

export default Successtop;