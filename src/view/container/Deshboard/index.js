import React, { Component } from 'react';
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter,
    BrowserRouter,
    Switch
} from 'react-router-dom'
import Manubar from "../../components/manuBar"
import "./Deshboard.css"


class Login extends Component {
    constructor() {
        super();
        this.state = {
            redirectToReferrer: false
        };

    }
    componentDidUpdate() {

    }
    handleClickLogin = () => {
        this.setState({ redirectToReferrer: true })
    }

    render() {
        return (
            <div>
                <Manubar/>
             
            </div>

                )
            }
        }
export default Login;
