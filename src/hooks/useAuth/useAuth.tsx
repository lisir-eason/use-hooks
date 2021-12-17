import React, { ReactNode, useContext, useEffect, useState } from "react";
import { statusType, useAsync } from "../useAsync/useAsync";

export interface AuthProviderI {
  user: User | null;
  signIn: () => void;
  signOut: () => void;
  isLoading: boolean;
}

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

interface User {
  name: string;
  age: number;
}

const signInPromise = (): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "eason", age: 12 });
    }, 2000);
  });
};

const signOutPromise = (): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "eason", age: 12 });
    }, 2000);
  });
};
