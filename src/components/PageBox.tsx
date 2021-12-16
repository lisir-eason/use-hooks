import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { Typography } from "antd";

export const DemoBox: React.FC = ({ children }) => {
  return (
    <>
      <Typography.Title level={3}>实例</Typography.Title>
      <DemoContainer>{children}</DemoContainer>
    </>
  );
};

export const CodeBox: React.FC = ({ children }) => {
  return (
    <>
      <Typography.Title level={3}>代码</Typography.Title>
      <DemoContainer>{children}</DemoContainer>
    </>
  );
};

export const PageContainer = styled.div`
  padding: 10px 30px;
`;

export const DemoContainer = styled.div`
  padding: 10px 0 20px 0;
`;
