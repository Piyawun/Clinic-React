import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import { Layout, Menu, Dropdown, Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  PaperClipOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  FormOutlined,
  CreditCardOutlined,
  MedicineBoxOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

import './Sidebar.css'


import axios from 'axios'

const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <HomeOutlined />,
    cName: 'nav-text',
  },
  {
    title: 'Patient',
    path: '/patient',
    icon: <UsergroupAddOutlined />,
    cName: 'nav-text'
  },
  {
    title: 'Doctor',
    path: '/doctor',
    icon: <FormOutlined />,
    cName: 'nav-text'
  },
  {
    title: 'Payment',
    path: '/payment',
    icon: <CreditCardOutlined />,
    cName: 'nav-text'
  },
  {
    title: 'Medicine',
    path: '/medicine',
    icon: <MedicineBoxOutlined />,
    cName: 'nav-text'
  }
  ,
  {
    title: 'User Management',
    path: '/user',
    icon: <UserOutlined />,
    cName: 'nav-text'
  }
];

const { Header, Sider, Content, Footer } = Layout;

const Fetch = () => {
  console.log(localStorage.getItem('expires_in'));
  axios.get("/patent").then(({ data }) => {
    console.log(data);
  })
}

const MenuBar = (history) => {
  return (
    <Menu>
      <Menu.Item>
        <a onClick={() => {

          localStorage.removeItem('refreshToken')
          localStorage.removeItem('accessToken')
          localStorage.removeItem('expires_in')
          history.push('/')
        }}>Logout</a>
      </Menu.Item>
    </Menu>
  )
}

const SidebarComponent = ({ children }) => {
  const [state, setState] = useState({
    collapsed: false
  });
  const toggle = () => {
    setState({
      collapsed: !state.collapsed
    });
  };



  let history = useHistory();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider style={{ height: 'auto', overflow: 'auto' }} trigger={null} collapsible collapsed={state.collapsed}>
        <div className="logo" />

        <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>

          {SidebarData.map((item, index) => {
            return (
              <Menu.Item key={index} className={item.cName} icon={item.icon}>
                <Link to={item.path}>
                  <span>
                    {item.title}
                  </span>
                </Link>
              </Menu.Item>
            )
          })}
        </Menu>
      </Sider>

      <Layout className="site-layout">
        <Header
          className="site-layout-background header"
          style={{
            padding: 0
          }}>
          {React.createElement(state.collapsed
            ? MenuUnfoldOutlined
            : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle
          })}
          <span className="header-profile">
            <Dropdown overlay={MenuBar(history)} placement="bottomRight" arrow>
              <Button><UserOutlined /></Button>
            </Dropdown>
          </span>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280
          }}>
          <div className="layout-content" style={{ backgroundColor: 'whitesmoke', padding: "10px" }}>
            {children}
          </div>
        </Content>

        <Footer className="footer" style={{ textAlign: 'center' }}>Oatwant Coppyright 2021</Footer>

      </Layout>

    </Layout>
  )
}

export default SidebarComponent;