import React from 'react'

import { Form, Input, Row, Col, Button, Card } from 'antd';

import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './style.css'
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 24,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 10,
    },
};
  
function LoginComponent() {

    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    
    return (
        
        <div className="site-card-wrapper" style={{padding:"100px"}}>
        <Row gutter={16}>
       
        <Col xs={2} sm={2} md={6} lg={8} xl={9}>
        
        </Col>
        <Col xs={20} sm={20} md={12} lg={8} xl={6}>
        <Card title="Login" style={{textAlign: "center"}} bordered={false} className="blurred-box">
        <Form
        {...layout}
        name="loginForm"
        className="loginForm"
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>


      <Form.Item {...tailLayout}>
        <Button type="primary" size="middle">
        Login
        </Button>
      </Form.Item>
    </Form>             
        </Card>
        </Col>
        <Col xs={2} sm={2} md={6} lg={8} xl={9}>

        </Col>
       
        </Row>
    </div>
        
    )
}

export default LoginComponent;