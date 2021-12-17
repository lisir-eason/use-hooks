import React from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { Link } from "react-router-dom";

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
  {
    key: 1,
    name: "useAsync",
    description: "一个用来管理异步请求状态的自定义hook",
    to: "/useAsync",
  },
  {
    key: 2,
    name: "useAuth",
    description: "一个用来管理用户登录状态的hook",
    to: "/useAuth",
  },
  {
    key: 3,
    name: "useRouter",
    description:
      "react-router-dom已经提供了很多的hook，useRouter降其融合在一个hook中",
    to: "/useRouter?userId=1",
  },
];

const HomePage: React.FC = () => {
  return (
    <Table columns={columns} dataSource={data} pagination={false} bordered />
  );
};

export default HomePage;
