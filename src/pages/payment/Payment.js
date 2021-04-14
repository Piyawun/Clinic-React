import React from "react";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { Card, Col, Row } from "antd";
import { Button } from "antd";
import { Router, Link } from "react-router-dom";

const payment = ({ history }) => {
  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );
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
      title: "Detail Receipt",
      dataIndex: "detail",
      render: (text, record) => (
        <Space size="middle">
          <Link
            to={{
              pathname: `/payment/detail/${record.age}`,
              query: "/paymant/paymentdetail",
            }}
          >
            <Button type="primary">รับผู้ป่วย {record.name}</Button>
          </Link>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      id: "123456",
      name: "นางสาวชอบติ่ง แต่ผู้บอกมันดูบ้าผช",
      detail: "" ,
    },
  ];

  const onSearch = (value) => console.log(value);

  return (
    <>
      <Space direction="vertical">
        <Search
          placeholder="search id patient"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </Space>
      <h1></h1>

      <div className="touch">
        <Card className="card" title="จำนวนคิว" bordered={true}>
          <Row gutter={16}>
            <Col span={24}>
              <Card
                title="List of Prescription (รายละเอียดการสั่งยา)"
                bordered={false}
              >
                <div>
                  <h4></h4>
                  <Table columns={columns} dataSource={data} size="middle" />
                </div>
              </Card>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
};

export default payment;
