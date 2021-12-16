import React from "react";
import { Button, Switch } from "antd";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import { useToggle } from "./useToggle";
import { PageContainer, DemoBox, CodeBox } from "../../components/PageBox";

const Component = () => {
  const codeString = `export const useToggle = (initialState: boolean = false): [boolean, any] => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = useCallback(() => {
    setState((state) => !state);
  }, []);

  return [state, toggle];
};

const [btnChange, toggleBtnChange] = useToggle(false);`;
  return (
    <SyntaxHighlighter
      language="typescript"
      style={vscDarkPlus}
      showLineNumbers
    >
      {codeString}
    </SyntaxHighlighter>
  );
};

const App: React.FC = () => {
  const [btnChange, toggleBtnChange] = useToggle(false);

  return (
    <PageContainer>
      <DemoBox>
        <Button
          type="primary"
          onClick={toggleBtnChange}
          style={{ marginRight: 20 }}
        >
          切换
        </Button>
        <Switch checked={btnChange} />
      </DemoBox>
      <CodeBox>
        <Component />
      </CodeBox>
    </PageContainer>
  );
};

export default App;
