import React, { useMemo } from "react";
import {
  useParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import queryString from "query-string";

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
