import React from "react";
import { Button, Switch } from "antd";

import { useToggle } from "./useToggle";
import { DemoBox, CodeBox } from "../../components/PageBox";

const App: React.FC = () => {
  const [btnChange, toggleBtnChange] = useToggle(false);

  return (
    <>
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
      <CodeBox codeString={codeString} />
    </>
  );
};

export default App;

const codeString = `//源码
export const useToggle = (initialState: boolean = false): [boolean, any] => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = useCallback(() => {
    setState((state) => !state);
  }, []);

  return [state, toggle];
};

const [btnChange, toggleBtnChange] = useToggle(false);

//用法
const App: React.FC = () => {
  const [btnChange, toggleBtnChange] = useToggle(false);

  return (
    <>
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
      <CodeBox codeString={codeString} />
    </>
  );
};`;
