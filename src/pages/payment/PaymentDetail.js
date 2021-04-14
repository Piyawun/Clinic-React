import React from "react";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import { Button } from "antd";


const PaymentDetailComponent = ({ history }) => {
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
        <Card className="card" title="ใบเสร็จ" bordered={true}>
          <h1>วันที่ : ที่จ่ายเงิน</h1>
          <h1>id : </h1>
          <h1>ลิสต์รายการยาว่ามีอะไรบ้าง ราคาเท่าไหร่ :</h1>


        </Card>
        <h1></h1>
        <Button type="primary">พิมพ์ใบเสร็จ</Button>
      </div>
    </>
  );
};

export default PaymentDetailComponent;
