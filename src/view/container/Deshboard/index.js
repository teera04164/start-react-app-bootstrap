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
import Info from "../info"
import "./Deshboard.css"


class Login extends Component {
    constructor() {
        super();
        this.state = {
            redirectToReferrer: true
        };

    }
    componentDidUpdate() {

    }
    handleClickLogin = () => {
        this.setState({ redirectToReferrer: true })
    }
    renderRedirect = () => {
        if (this.state.redirectToReferrer) {
          return <Redirect to='/deshboard' />
        }
      }

    render() {
        return (
            <div>

<Manubar/>
{/* <Redirect to='/deshboard' /> */}
            </div>
           
          

                )
            }
        }
export default Login;
