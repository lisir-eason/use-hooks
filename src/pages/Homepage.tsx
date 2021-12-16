import React from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { Link } from "react-router-dom";
import { PageContainer } from "../components/PageBox";

interface User {
  key: number;
  name: string;
  description: string;
  to: string;
}

const columns: ColumnsType<User> = [
  {
    key: "name",
    title: "Hooks Name",
    dataIndex: "name",
    render: (text, record) => <Link to={record.to}>{text}</Link>,
  },
  {
    key: "description",
    title: "Description",
    dataIndex: "description",
  },
];

const data: User[] = [
  {
    key: 0,
    name: "useToggle",
    description: "一个用来保存布尔值并取反布尔值的hook",
    to: "/useToggle",
  },
];

const HomePage: React.FC = () => {
  return (
    <PageContainer>
      <Table columns={columns} dataSource={data} pagination={false} bordered />
    </PageContainer>
  );
};

export default HomePage;
