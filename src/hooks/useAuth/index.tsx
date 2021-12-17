import { Button, Typography } from "antd";
import React from "react";
import { CodeBox, DemoBox } from "../../components/PageBox";
import { AuthProviderI, useAuth } from "./useAuth";

const App = () => {
  const auth = useAuth();
  const curAuth = auth as AuthProviderI;

  return (
    <>
      <DemoBox>
        {curAuth.user ? (
          <div>
            <Typography.Text type="success">
              登录成功！欢迎：
              {curAuth.user.name}
            </Typography.Text>
            <Button loading={auth?.isLoading} onClick={auth?.signOut}>
              登出
            </Button>
          </div>
        ) : (
          <div>
            <Typography.Text type="danger">
              还未登录，请点击登录按钮登录！
            </Typography.Text>
            <Button
              type="primary"
              loading={auth?.isLoading}
              onClick={auth?.signIn}
            >
              登录
            </Button>
          </div>
        )}
      </DemoBox>
      <CodeBox codeString={codeString} />
    </>
  );
};

export default App;

const codeString = `//源码
const authContext = React.createContext<AuthProviderI | undefined>(undefined);

export const ProvideAuth = ({ children }: { children: ReactNode }) => {
  const auth = useProvideAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

const useProvideAuth = () => {
  const {
    execute: runLogin,
    status: loginStatus,
    value: loginValue,
  } = useAsync(signInPromise, false);
  const [user, setUser] = useState<null | User>(loginValue);
  const { execute: runSignOut, status: logoutStatus } = useAsync(
    signOutPromise,
    false
  );

  const signIn = async () => {
    await runLogin();
  };

  const signOut = async () => {
    await runSignOut();
    setUser(null);
  };

  useEffect(() => {
    setUser(loginValue);
  }, [loginValue]);

  return {
    user,
    signIn,
    signOut,
    isLoading: loginStatus === "pending" || logoutStatus === "pending",
  };
};

export const useAuth = () => {
  return useContext(authContext);
};

//用法
const App = () => {
  const auth = useAuth();
  const curAuth = auth as AuthProviderI;

  return (
    <>
      <DemoBox>
        {curAuth.user ? (
          <div>
            <Typography.Text type="success">
              登录成功！欢迎：
              {curAuth.user.name}
            </Typography.Text>
            <Button loading={auth?.isLoading} onClick={auth?.signOut}>
              登出
            </Button>
          </div>
        ) : (
          <div>
            <Typography.Text type="danger">
              还未登录，请点击登录按钮登录！
            </Typography.Text>
            <Button
              type="primary"
              loading={auth?.isLoading}
              onClick={auth?.signIn}
            >
              登录
            </Button>
          </div>
        )}
      </DemoBox>
      <CodeBox codeString={codeString} />
    </>
  );
};`;
