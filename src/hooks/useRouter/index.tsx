import { Button } from "antd";
import React from "react";
import { CodeBox, DemoBox } from "../../components/PageBox";
import { useRouter } from "./useRouter";

const App = () => {
  const router = useRouter();

  return (
    <>
      <DemoBox>
        <div>
          pathname:
          {router.pathname}
        </div>
        <div>
          userId:
          {router.query.userId}
        </div>
        <div>
          <Button
            type="primary"
            onClick={() => {
              router.navigate("/");
            }}
          >
            回首页
          </Button>
          <Button
            onClick={() => {
              router.setSearchParams({ userId: "100" });
            }}
          >
            设置路由参数
          </Button>
        </div>
      </DemoBox>
      <CodeBox codeString={codeString} />
    </>
  );
};

export default App;

const codeString = `//源码
export const useRouter = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  return useMemo(() => {
    return {
      navigate,
      pathname: location.pathname,
      query: {
        ...queryString.parse(location.search),
        ...params,
      },
      location,
      setSearchParams,
    };
  }, [location, navigate, params, setSearchParams]);
};

//用法
const App = () => {
  const router = useRouter();

  return (
    <>
      <DemoBox>
        <div>
          pathname:
          {router.pathname}
        </div>
        <div>
          userId:
          {router.query.userId}
        </div>
        <div>
          <Button
            type="primary"
            onClick={() => {
              router.navigate("/");
            }}
          >
            回首页
          </Button>
          <Button
            onClick={() => {
              router.setSearchParams({ userId: "100" });
            }}
          >
            设置路由参数
          </Button>
        </div>
      </DemoBox>
      <CodeBox codeString={codeString} />
    </>
  );
};`;
