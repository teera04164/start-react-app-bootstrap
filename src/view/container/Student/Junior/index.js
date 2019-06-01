import React, { Component } from 'react';
import $ from "jquery";
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, Icon, Tooltip } from 'antd';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter,
    BrowserRouter,
    Switch
} from 'react-router-dom'

const Style = {
    tr: {
        textAlign: "left"
    }
}

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
                <div class="container">
                    <div class="row ">
                        <div class="col-sm">
                        <h5 style={{ color: "gray" }}>จำนวนนักเรียนชั้นมัธยมศึกษาตอนต้น</h5>
                    </div>
                        <div class="col-sm">
                    </div>
                        <div class="col-sm " style = {{textAlign : "right"}}>
                            <Link to = "/student">
                            <button type="button" class="btn btn-outline-warning btn-sm"><i class='fas fa-angle-left'></i>ย้อนกลับ </button>
                            </Link>
                       
                        </div>
            </div>
                </div>
               
               
                <center>

                    <table class="table" style={{ margin: "20px", width: "80%", align: "center" }}>
                        <caption>List of users</caption>
                        <thead>
                            <tr>
                                <th scope="col">ชั้นประถมศึกษาปีที่</th>
                                <th scope="col">ชั้นเรียน</th>
                                <th scope="col">ชาย</th>
                                <th scope="col">หญิง</th>
                                <th scope="col">รวม</th>
                                <th scope="col"></th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr style={Style.tr}>
                                <th scope="row">1</th>
                                <td>ชั้นประถมศึกษาปีที่ 1</td>
                                <td>87</td>
                                <td>85</td>
                                <td>101</td>
                                <td></td>
                            </tr>
                            <tr style={Style.tr}>
                                <th scope="row"></th>
                                <td>ชั้นประถมศึกษาปีที่ 1/1</td>
                                <td>87</td>
                                <td>85</td>
                                <td>101</td>
                                <td><button type="button" class="btn btn-info btn-sm"><i class='fas fa-search'></i> แสดง</button></td>
                            </tr>
                            <tr style={Style.tr}>
                                <th scope="row"></th>
                                <td>ชั้นประถมศึกษาปีที่ 1/2</td>
                                <td>87</td>
                                <td>85</td>
                                <td>101</td>
                                <td><button type="button" class="btn btn-info btn-sm"><i class='fas fa-search'></i> แสดง</button></td>
                            </tr>
                            <tr style={Style.tr}>
                                <th scope="row">2</th>
                                <td>ชั้นประถมศึกษาปีที่ 2</td>
                                <td>87</td>
                                <td>85</td>
                                <td>101</td>
                                <td></td>
                            </tr>
                            <tr style={Style.tr}>
                                <th scope="row"></th>
                                <td>ชั้นประถมศึกษาปีที่ 2/1</td>
                                <td>87</td>
                                <td>85</td>
                                <td>101</td>
                                <td><button type="button" class="btn btn-info btn-sm"><i class='fas fa-search'></i> แสดง</button></td>
                            </tr>
                            <tr style={Style.tr}>
                                <th scope="row"></th>
                                <td>ชั้นประถมศึกษาปีที่ 2/2</td>
                                <td>87</td>
                                <td>85</td>
                                <td>101</td>
                                <td><button type="button" class="btn btn-info btn-sm"><i class='fas fa-search'></i> แสดง</button></td>
                            </tr>
                            <tr style={Style.tr}>
                                <th scope="row">3</th>
                                <td>ชั้นประถมศึกษาปีที่ 3</td>
                                <td>87</td>
                                <td>85</td>
                                <td>101</td>
                                <td></td>
                            </tr>
                            <tr style={Style.tr}>
                                <th scope="row"></th>
                                <td>ชั้นประถมศึกษาปีที่ 3/1</td>
                                <td>87</td>
                                <td>85</td>
                                <td>101</td>
                                <td><button type="button" class="btn btn-info btn-sm"><i class='fas fa-search'></i> แสดง</button></td>
                            </tr>
                            <tr style={Style.tr}>
                                <th scope="row"></th>
                                <td>ชั้นประถมศึกษาปีที่ 3/2</td>
                                <td>87</td>
                                <td>85</td>
                                <td>101</td>
                                <td><button type="button" class="btn btn-info btn-sm"><i class='fas fa-search'></i> แสดง</button></td>
                            </tr>
                        </tbody>
                    </table>

                </center>

            </div>


        )
    }
}
export default Login;
