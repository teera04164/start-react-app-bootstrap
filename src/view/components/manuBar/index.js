import { Layout } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Avatar } from 'antd';
import { Menu, Dropdown, Button, Icon, message } from 'antd';
import {
    BrowserRouter as Router,

    Redirect,

  } from 'react-router-dom'

const { Header, Sider, Content } = Layout
const SubMenu = Menu.SubMenu

const menu = (
    <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">
        <i class="fas fa-user"></i>
        &nbsp;profile
      </Menu.Item>
        <Menu.Item key="2">
        <i class="fas fa-cog"></i>
        &nbsp;Setting
      </Menu.Item>

        <Menu.Item key="3" onClick={this.onClickSignOut}>
        <a  rel="noopener noreferrer" href="/login">
        <i class="fas fa-sign-out-alt"></i>
        &nbsp;Sign Out
      </a>
     
      </Menu.Item>
    </Menu>
);



class Nav extends React.Component {
    state = {
        collapsed: false,
        isRedirect : false
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }
    handleButtonClick = (e) => {
        message.info('Click on left button.');
        console.log('click left button', e);
    }

    handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    }

    onClickSignOut = () => {
        
        this.setState({isRedirect : true})
       
        console.log("TCL: Nav -> onClickSignOut -> isRedirect", this.state.isRedirect)
    }

    render() {
    const { isRedirect } = this.state;
      if (isRedirect === true) {
          return (<Redirect to='/login' />);
      }
        return (
            <Layout style={{ minHeight: '100vh' }}>


                <Sider
                    collapsible
                    theme="light"
                >
                    <div className="logo" >
                        <table style={{ border: "1" }}>
                            <tbody>
                                <tr>
                                    <td>
                                        <img
                                            alt="description of wfdsdf"
                                            src="https://scontent.fbkk9-2.fna.fbcdn.net/v/t1.0-9/12020061_792796374170658_6418240742981712420_n.png?_nc_cat=109&_nc_ht=scontent.fbkk9-2.fna&oh=e25a239720729289d49688d2ef00a942&oe=5D57B088" width="25%" style={{textAlign:"center", margin: "10px" }} />
                                          
                                    </td>

                                </tr>
                                </tbody>
                        </table>
                    </div>

                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['4']}
                        style={{ height: '100%', borderRight: 0 }}
                        theme="light"
                    >
                        <Menu.Item key="1">
                            <NavLink className='btn-slider' to="/"> <Icon type="dashboard" />
                                <span>Dashboard </span></NavLink>
                        </Menu.Item>
                        <Menu.Item key="2" style={{ marginTop: "16px" }}>
                            <NavLink to="/list">
                                <Icon type="usergroup-add" />
                                <span > นักเรียน </span>
                            </NavLink>
                        </Menu.Item>
                        <SubMenu
                            key="7"
                            title={<span>
                                <Icon type="usergroup-add" />
                                <span>นักเรียน</span>
                            </span>}
                        >
                            <Menu.Item key="4">
                                <NavLink to="/campaign/draft">
                                    <Icon type="inbox" />
                                    <span > เพิ่มนักเรียน </span></NavLink>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <NavLink to="/campaign/delivered">
                                    <Icon type="upload" />
                                    <span > นักเรียนทั้งหมด </span></NavLink></Menu.Item>

                        </SubMenu>
                        <SubMenu
                            key="4"
                            title={<span>
                                <Icon type="profile" />
                                <span>Campaign</span>
                            </span>}
                        >
                            <Menu.Item key="4">
                                <NavLink to="/campaign/draft">
                                    <Icon type="inbox" />
                                    <span > Draft </span></NavLink>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <NavLink to="/campaign/delivered">
                                    <Icon type="upload" />
                                    <span > Delivered </span></NavLink></Menu.Item>

                        </SubMenu>
                        <Menu.Item key="6">
                            <NavLink to="/template">
                                <Icon type="layout" />
                                <span > Template </span></NavLink>
                        </Menu.Item>
                    </Menu>

                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <div className="float-right mr-3">
                            <Dropdown overlay={menu} trigger={['click']}>
                                <a className="ant-dropdown-link" href="#">
                                    <Avatar style={{ textAlign: "right" }} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                </a>

                            </Dropdown>
                        </div>

                    </Header>
                    <Content style={{
                        margin: '20px 16px', minHeight: 280,
                    }}
                    >


                    </Content>
                </Layout>

            </Layout>
        )
    }
}

export default Nav