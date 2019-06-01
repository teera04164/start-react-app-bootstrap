
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './style.css'
import Login from '../../container/login'
import routes from '../../../routes';
import Cart from '../../container/Deshboard/statistics'


const { Header, Sider, Content } = Layout;

const { SubMenu } = Menu;


class Nav extends React.Component {
    state = {
        collapsed: false,
        isRedirect : false,
        openInfo : false
    }

    
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }

    render() {
      if(this.props.info){
        this.setState({openInfo : true})
      }     
        return (
            <Layout>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed} style={{height : "900px"}}>
              <div className="logo" >
                  </div>
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                <NavLink to="/deshboard">
                  <Icon type="user" />
                  <span>หน้าหลัก</span>
                  </NavLink>
                </Menu.Item>
        
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                       <Icon type="laptop" />
                      <span>ตัวจัดการ</span>
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
                <Menu.Item key="2">
                  <Icon type="video-camera" />
                  <span>nav 2</span>
                  
                </Menu.Item>
                <Menu.Item key="3">
                    <NavLink to = "/junior">
                    <Icon type="upload" />
                  <span>nav 3</span>
                    </NavLink>
                  
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
              </Header>
            <div className = "contaimer ">
                  {this.props.location}
            </div>
              <Content
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  background: '#fff',
                  minHeight: 280,
                }}
              >
                 {routes}
              </Content>
            </Layout>
          </Layout>
        )
    }
}

export default Nav