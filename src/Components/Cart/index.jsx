import React from "react";
import { Avatar, Card, Skeleton } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import Meta from "antd/es/card/Meta";

const Catrs = ({
  loading,
  image,
  title,
  email,
  surname,
  Deleteted,
  EditData,
}) => {
  return (
    <Card
      hoverable
      bordered
      style={{
        width: 300,
        marginTop: 16,
      }}
      actions={[
        <DeleteOutlined onClick={Deleteted} style={{ color: "red" }} />,
        <EditOutlined
          key="edit"
          onClick={EditData}
          style={{ color: "green" }}
        />,
        // <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Skeleton loading={loading} avatar active>
        <Meta
          avatar={<Avatar draggable size={"large"} src={image} />}
          title={title}
          description={surname}
        />
        <p style={{ marginTop: "10px", color: "lightgray" }}>{email}</p>
      </Skeleton>
    </Card>
  );
};

export default Catrs;
