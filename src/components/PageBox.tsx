import React, { ReactNode } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
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

export const CodeBox = ({ codeString }: { codeString: string }) => {
  return (
    <>
      <Typography.Title level={3}>代码</Typography.Title>
      <DemoContainer>
        <SyntaxHighlighter
          language="typescript"
          style={vscDarkPlus}
          showLineNumbers
        >
          {codeString}
        </SyntaxHighlighter>
      </DemoContainer>
    </>
  );
};

export const PageContainer = styled.div`
  padding: 10px 30px;
`;

export const DemoContainer = styled.div`
  padding: 10px 0 20px 0;
`;
