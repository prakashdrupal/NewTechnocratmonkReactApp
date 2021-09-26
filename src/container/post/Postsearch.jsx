import React, { Component } from "react";
import { Link } from "react-router-dom";

class Postsearch extends Component {
    render() {
        return (
            <form class="form-box">
            <div class="input-text-btn">
                <input class="input-text" type="text" placeholder="Search ..." /><input type="submit" value="Search" class="btn" />
            </div>
        </form>

            );
        }
        }
        
        export default Postsearch;