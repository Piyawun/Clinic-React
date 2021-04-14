import React from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Router, Link } from "react-router-dom";
import { Card, Col, Row, Button, Modal, Space, Search, Input, Table } from "antd";

const MedicineComponent = ({ history }) => {
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
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "ปุ่มรายละเอียด",
        dataIndex: "Detail",
      render: (text, record) => (

            <Space size="middle">

                <Link to={{ pathname: `/medicine/detail/${record.age}`, query: "/medicine/detail/" }} >
                    <Button type="primary">
                        รายละเอียด </Button>
                </Link>

            </Space>
        ),
    },
  ];
  const data = [
    {
      id: "123456",
      name: "John Brown",
      age: 32,
      Detail: "",
    },
    {
      id: "123457",
      name: "Jim Green",
      age: 42,
      Detail: "",
    },
    {
      id: "123458",
      name: "Joe Black",
      age: 32,
      Detail: "",
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
        ></Col>

        <Col style={{ padding: "10px" }} xs={24} sm={24} md={24} lg={24} xl={8}>
          <Search
            placeholder="ค้นหาคิวจ่ายยา"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
        </Col>
      </Row>
      
      <div className="touch">
        <Card className="card" title="ใบสั่งยา" bordered={true}>
          <Table columns={columns} dataSource={data} size="middle" />
        </Card>
      </div>
      ,
    </>
  );
};

export default MedicineComponent;
