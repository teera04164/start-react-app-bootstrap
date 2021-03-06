
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import Login from '../../container/login'
import routes from '../../../routes';
import Cart from '../../container/Deshboard/statistics'


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout



class Nav extends React.Component {
    state = {
        collapsed: false,
        isRedirect : false,
        openInfo : false
    }
    render() {
      if(this.props.info){
        this.setState({openInfo : true})
      }
      console.log(routes);
      
  
        return (
          <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              {/* <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item> */}
            </Menu>
          </Header>
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub2']}
                style={{ height: '100%', borderRight: 0 }}
              >
              <Menu.Item key="1">
              <NavLink to="/deshboard">
              <Icon type="home" />
              <span>หน้าหลัก</span>
              </NavLink>
            </Menu.Item>
                {/* <Menu.Item
                  key="sub1"
                  title={
                    <span>
                      <Icon type="user" />
                     หน้าหลัก
                    </span>
                  }
                >
                  <Menu.Item key="1">
                  <NavLink to="/deshboard/card">
                    option1
                    </NavLink>
                    </Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </Menu.Item> */}
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                     
                       <Icon type="laptop" />
                      ตัวจัดการ
                    
                     
                    </span>
                  }
                >
                  <Menu.Item key="5">
                  <NavLink to="/semester">
                    <Icon type="plus" />สร้างปีการศึกษาใหม่
                  </NavLink>  
                  </Menu.Item>
                  <Menu.Item key="6">
                  <NavLink to="/learnning_management">
                    <Icon type="plus" />จัดการเรียนการสอน
                  </NavLink>  
                  </Menu.Item>
                  <Menu.Item key="7">
                  <NavLink to="/sub">
                    <Icon type="plus" />จัดการวิชาเรียน
                  </NavLink>
                  </Menu.Item>
                  <Menu.Item key="8">
                    <NavLink to ='/teacher'>
                    <Icon type="plus" />จัดการครู/อาจารย์
                    </NavLink>
                  
          
                    </Menu.Item>
                  <Menu.Item key="9">
                    <NavLink to = '/student'>
                    <Icon type="plus" />จัดการนักเรียน
                    </NavLink>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="10">
              <NavLink to="/">
              <Icon type="home" />
              <span>ออกจากระบบ</span>
              </NavLink>
            </Menu.Item>
                {/* <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="notification" />
                      subnav 3
                    </span>
                  }
                >
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu> */}
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              {/* <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb> */}
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                {routes}
              </Content>
            </Layout>
          </Layout>
        </Layout>
        )
    }
}

export default Nav