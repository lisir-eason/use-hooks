import React from "react";
import { Button, Typography } from "antd";
import { useAsync } from "./useAsync";
import { CodeBox, DemoBox } from "../../components/PageBox";

const App = () => {
  const { execute, status, value, error } = useAsync(asyncFn, false);

  return (
    <>
      <DemoBox>
        {status === "idle" && <div>点击下面的按钮开始你的异步请求</div>}
        {status === "success" && (
          <div>
            <Typography.Text type="success">{value}</Typography.Text>
          </div>
        )}
        {status === "error" && (
          <div>
            <Typography.Text type="danger">{error}</Typography.Text>
          </div>
        )}
        {status === "pending" && <div>请求中......</div>}
        <Button onClick={execute} type="primary" loading={status === "pending"}>
          点击开始
        </Button>
      </DemoBox>
      <CodeBox codeString={codeString} />
    </>
  );
};

export default App;

const codeString = `//源码
export const useAsync = <T>(asyncFn: () => Promise<T>, immediate = true) => {
  const [status, setStatus] = useState<statusType>("idle");
  const [value, setValue] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(() => {
    setStatus("pending");
    setValue(null);
    setError(null);

    asyncFn()
      .then((res) => {
        setValue(res);
        setStatus("success");
      })
      .catch((err) => {
        setError(err);
        setStatus("error");
      });
  }, [asyncFn]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
    return () => {};
  }, [execute, immediate]);

  return { execute, status, value, error };
};

//用法
const App = () => {
  const { execute, status, value, error } = useAsync(asyncFn, false);

  return (
    <>
      <DemoBox>
        {status === "idle" && <div>点击下面的按钮开始你的异步请求</div>}
        {status === "success" && (
          <div>
            <Typography.Text type="success">{value}</Typography.Text>
          </div>
        )}
        {status === "error" && (
          <div>
            <Typography.Text type="danger">{error}</Typography.Text>
          </div>
        )}
        {status === "pending" && <div>请求中......</div>}
        <Button onClick={execute} type="primary" loading={status === "pending"}>
          点击开始
        </Button>
      </DemoBox>
      <CodeBox codeString={codeString} />
    </>
  );
};`;

const asyncFn = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rnd = Math.random() * 10;
      if (rnd <= 5) {
        resolve("恭喜，成功了！");
      } else {
        reject("抱歉，失败了！");
      }
    }, 2000);
  });
};
