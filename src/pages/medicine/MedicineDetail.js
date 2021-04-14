import React from "react";
import { AudioOutlined } from "@ant-design/icons";
import ReactDOM from "react-dom";
import { Card, Button, Space, Input, List, Divider, Typography } from "antd";

const MedicineDetailComponent = ({ history }) => {
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

  
  const data = [
    "ยาแก้ปวด",
    "ยาบ้า",
    "ยาไอซ์",
    "ยาอี",
    "ยาม้า",
  ];

  return (
    <>
      

      <Space>
        <Button>คิวที่</Button>
        <Button type="primary">ยาหมดอายุ</Button>
        <Button type="primary">ยาที่มี</Button>
        <Button type="primary">เพิ่มยา</Button>
      </Space>
      <div className="touch">
        <Card className="card" bordered={true}>
          <Divider orientation="left">ใบสั่งยา</Divider>
          <List
            size="large"
            header={<div>รายการยา</div>}
            footer={<div>รวมทั้งหมด</div>}
            bordered
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Typography.Text mark>[-]</Typography.Text> {item}
              </List.Item>)}
          />
        </Card>
      </div>
    </>
  );
};


export default MedicineDetailComponent;
