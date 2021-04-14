import React from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { Card, Col, Row, Button, Modal, Space, Search, Input } from "antd";

const PatientComponent = ({ history }) => {
  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );
  const onSearch = (value) => console.log(value);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Firstname",
      dataIndex: "firstname",
    },
    {
      title: "Lastname",
      dataIndex: "lastname",
    },
    {
      title: "Contacts",
      dataIndex: "contacts",
    },
  ];
  const data = [
    {
      key: "1",
      id: "1",
      firstname: "John",
      lastname: "Brown",
      contacts: "0832546544",
    },
    {
      key: "2",
      id: "2",
      firstname: "Jim",
      lastname: "Green",
    },
    {
      key: "3",
      id: "3",
      firstname: "Joe",
      lastname: "Black",
    },
  ];

  return (
    <>
      <Row>
        <Col
          style={{ padding: "15px" }}
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={16}
        >
          <Space>
            <Button type="primary">เพิ่มผู้ป่วย</Button>
            
          </Space>
        </Col>

        <Col style={{ padding: "10px" }} xs={24} sm={24} md={24} lg={24} xl={8}>
          <Search
            placeholder="Search"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={24}>
          <div className="touch">
            <Card className="card" title="รายชื่อผู้ป่วย" bordered={true}>
              <Table columns={columns} dataSource={data} size="middle" />
            </Card>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default PatientComponent;
