import React, { Component } from 'react';
import $ from "jquery";
import './login.css'
import 'bootstrap/dist/css/bootstrap.min.css';


class Deshboard extends Component {
    constructor() {
        super();
        this.state = {
        };

    }
    componentDidUpdate() {

    }


    render() {


        return (
            <React.Fragment>
                <div class="navbar">
                    <a href="#home">Home</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                </div>
            </React.Fragment>

        )
    }
}
export default Deshboard;
