import React from 'react';

import {Layout, Menu,Dropdown,Button} from 'antd';
import {MenuUnfoldOutlined, MenuFoldOutlined, HomeOutlined, PaperClipOutlined, UserOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './Sidebar.css'

import Home from './Home';
import Report from './Report';

const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <HomeOutlined />,
        cName: 'nav-text',
    },
    {
        title: 'Reports',
        path: '/report',
        icon: <PaperClipOutlined />,
        cName: 'nav-text'
    }
];

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);



const { Header, Sider, Content, Footer } = Layout;


class SidebarComponent extends React.Component {

        
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  


  render() {
    return (

        <Layout>
        <Sider style={{ height: 'auto',overflow: 'auto'}} trigger={null} collapsible collapsed={this.state.collapsed}>
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
            {React.createElement(this.state.collapsed
              ? MenuUnfoldOutlined
              : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle
            })}
            <span className="header-profile">
            <Dropdown overlay={menu} placement="bottomRight" arrow>
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
            <Route exact path="/" component={Home} />
            <Route path="/report" component={Report} />
          </Content>

          <Footer className="footer"style={{ textAlign: 'center' }}>Oatwant Coppyright 2021</Footer>

        </Layout>

      </Layout>
    )
  }
}

export default SidebarComponent;