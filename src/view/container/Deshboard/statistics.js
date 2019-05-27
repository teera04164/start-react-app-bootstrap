import React, { Component } from 'react';
import $ from "jquery";
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
           
              
          <Row gutter={16}>
          <Col span={6}>
              <Card
                  bordered={false} title="send finish "
                  extra={[<Tooltip title="จำนวนอีเมลที่ถูกส่งทั้งหมด"><Icon type="info-circle" /></Tooltip>]}

              >
                  <Row gutter={16} style={{ textAlign: 'center' }} >
                      <Col span={12} ><Icon type="mail" theme="twoTone" style={{ fontSize: '48px', }} /> </Col>
                      <Col span={12} >
                          <p style={{ fontSize: '230%', }} >70</p>
                      </Col>
                  </Row>
              </Card>
          </Col>
          <Col span={6}>
              <Card
                  bordered={false} title="send finish "
                  extra={[<Tooltip title="จำนวนอีเมลทั้งหมดที่ถูกส่งสำเร็จ"><Icon type="info-circle" /></Tooltip>]}

              >
                  <Row gutter={16} style={{ textAlign: 'center' }} >
                      <Col span={12} > <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" style={{ fontSize: '48px', }} /> </Col>
                      <Col span={12} >
                          <p style={{ fontSize: '32px', }} >60</p>
                      </Col>
                  </Row>
              </Card>
          </Col>
          <Col span={6}>
              <Card
                  bordered={false} title="send finish "
                  extra={[<Tooltip title="จำนวนอีเมลทั้งหมดที่ถูกส่งไม่สำเร็จ"><Icon type="info-circle" /></Tooltip>]}
              >
                  <Row gutter={16} style={{ textAlign: 'center' }} >
                      <Col span={12} ><Icon type="close-circle" theme="twoTone" twoToneColor="#c41a52" style={{ fontSize: '48px', }} /> </Col>
                      <Col span={12} >
                          <p style={{ fontSize: '32px', }} >50</p>
                      </Col>
                  </Row>
              </Card>
          </Col>
      </Row>
             
           

                )
            }
        }
export default Login;
