import React from "react";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { Table } from "antd";

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
      <Space direction="vertical">
        <Search
          placeholder="ค้นหาคิวจ่ายยา"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </Space>
      <div>
        <Table columns={columns} dataSource={data} size="middle" />
      </div>
      ,
    </>
  );
};

export default MedicineComponent;
