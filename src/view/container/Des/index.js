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
           <h1>
               Des
           </h1>
        //     <div className="gutter-example">
        //     <Row gutter={16}>
        //       <Col className="gutter-row" span={6}>
        //         <div className="gutter-box">col-6</div>
        //       </Col>
        //       <Col className="gutter-row" span={6}>
        //         <div className="gutter-box">col-6</div>
        //       </Col>
        //       <Col className="gutter-row" span={6}>
        //         <div className="gutter-box">col-6</div>
        //       </Col>
        //       <Col className="gutter-row" span={6}>
        //         <div className="gutter-box">col-6</div>
        //       </Col>
        //     </Row>
        //   </div>
             
           

                )
            }
        }
export default Login;
