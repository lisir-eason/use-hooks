import { useCallback, useEffect, useState } from "react";

type statusType = "idle" | "pending" | "success" | "error";

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
