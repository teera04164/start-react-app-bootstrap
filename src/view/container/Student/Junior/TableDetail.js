import React, { Component } from 'react';
import $ from "jquery";
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, Icon, Tooltip } from 'antd';
import { Table } from 'antd';
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

const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () => <a href="javascript:;">Delete</a>,
    },
]
const data = [
    {
        key: 1,
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
        key: 2,
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
    {
        key: 3,
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
];

class Login extends Component {
    constructor() {
        super();
        this.state = {
            redirectToReferrer: false,
            classNo: ''
        };

    }
    componentDidMount = async () => {
        this.setState({ classNo: this.props.match.params.classNo })
    }


    render() {
        // console.log(this.props.match.params.classNo)

        return (
            <div>
                <div class="container">
                    <div class="row ">
                        <div class="col-sm">
                            <h5 style={{ color: "gray" }}>จำนวนนักเรียนชั้นมัธยมศึกษาตอนต้น</h5>
                        </div>
                        <div class="col-sm">
                        </div>
                        <div class="col-sm " style={{ textAlign: "right" }}>
                            <Link to="/student/junior">
                                <button type="button" class="btn btn-outline-warning btn-sm"><i class='fas fa-angle-left'></i>ย้อนกลับ </button>
                            </Link>

                        </div>
                    </div>
                </div>
                <Table
                    columns={columns}
                    expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
                    dataSource={data}
                />,
              
            </div>


        )
    }
}
export default Login;
