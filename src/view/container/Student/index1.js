import React, { Component } from 'react';
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, Icon, Tooltip } from 'antd';
import './style.css'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter,
    BrowserRouter,
    Switch
} from 'react-router-dom'



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
            <Row>
                <Col span={12} style={{ textAlign: "center", marginTop: "100px" }}>
                    <Link to="/student/junior">
                        <button type="button" class="btn btn-outline-primary"><i class="fa fa-address-card fa-10x"></i></button>
                        <br />
                        <h1>มัธยมศึกษาตอนต้น</h1>
                    </Link>


                </Col>
                <Col span={12} style={{ textAlign: "center", marginTop: "100px" }}>
                    <button type="button" class="btn btn-outline-success"><i class="far fa-address-card fa-10x"></i></button>
                    <br /><h1>มัธยมศึกษาตอนปลาย</h1>
                </Col>
            </Row>
            </div>



        )
    }
}
export default Login;
