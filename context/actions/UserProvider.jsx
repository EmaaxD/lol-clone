import { useEffect, createContext, useReducer } from "react";
import { useRouter } from "next/router";

import { initialState, userReducer } from "../reducers/userReducer";

import { SET_USER } from "../types";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const router = useRouter();

  useEffect(() => {
    (function () {
      if (localStorage.getItem("auth")) {
        dispatch({
          type: SET_USER,
          payload: JSON.parse(localStorage.getItem("auth")),
        });
        router.push("/home");
      } else {
        localStorage.clear();
        router.push("/");
      }
    })();
  }, []);

  const handleSetUser = (user, type) => {
    if (type === "social") {
      localStorage.setItem("auth", JSON.stringify({ ...user?.user }));
    } else {
      localStorage.setItem("auth", JSON.stringify({ ...user }));
    }

    dispatch({
      type: SET_USER,
      payload: { ...user, type },
    });
  };

  const handleSignDown = () => {
    localStorage.clear();

    dispatch({
      type: SET_USER,
      payload: null,
    });
  };

  return (
    <userContext.Provider
      value={{
        user: state.user,
        handleSetUser,
        handleSignDown,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
