import React, { useState } from 'react';
import { Helmet } from 'react-helmet'

import { useHistory } from 'react-router-dom'

import { Card, Col, Row, Button, Modal, Space, Search, Input } from 'antd';

import { PlusOutlined, DownOutlined, AudioOutlined } from '@ant-design/icons';

import './style.css'

import DateList from './table/DateList'
import QueList from './table/DateList'


const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);


const Home = ({ history }) => {
  const TITLE = 'Home | Dashboard'

  const [queueVisible, setQueueVisible] = useState(false);

  const [dateVisible, setDateVisible] = useState(false);

  const { Search } = Input;

  console.log(history.location);

  return (
    <div>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Button style={{ margin: "10px" }} type="primary" shape="round" size="large" >จำนวนนัด </Button>

      <br></br>
      <Button style={{ margin: "10px", backgroundColor: "#f759ab", color: "white" }} onClick={() => setQueueVisible(true)} type="text" shape="round" size="large" icon={<PlusOutlined />} >เพิ่มนัด</Button>

      <Modal
        title="Add date"
        visible={queueVisible}
        onOk={() => setQueueVisible(false)}
        onCancel={() => setQueueVisible(false)}
        width={1000}
        style={{ top: 20 }}
      >
        <Space direction="vertical">
          <Search placeholder="input search text" style={{ width: '100%' }} />
        </Space>
      </Modal>

      <Button style={{ margin: "10px", backgroundColor: "#52c41a", color: "white" }} onClick={() => setDateVisible(true)} type="text" shape="round" size="large" icon={<PlusOutlined />} >เพิ่มคิว</Button>
      <Modal
        title="Add Queue"
        style={{ top: 20 }}
        visible={dateVisible}
        onOk={() => setDateVisible(false)}
        onCancel={() => setDateVisible(false)}
        width={1000}
      >
        <Space direction="vertical">
          <Search placeholder="input search text" style={{ width: '100%' }} />
        </Space>
      </Modal>
      <Row >
        <Col style={{ padding: "2px" }} xs={24} sm={24} md={24} lg={24} xl={12}>

          <div className="touch">
            <Card className="card" title="รายการนัด" bordered={true}>
              < DateList></DateList>
            </Card>
          </div>

        </Col>
        <Col style={{ padding: "2px" }} xs={24} sm={24} md={24} lg={24} xl={12}>
          <div className="touch">
            <Card className="card" title="จำนวนคิว" bordered={true}>
              <QueList></QueList>
            </Card>
          </div>
        </Col>
      </Row>

    </div>
  )
}

export default Home;