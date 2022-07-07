import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { useSession, signIn } from "next-auth/react";

import { userContext } from "../../context/actions/UserProvider";

import { LoadingLogin } from "../UI/Loadings";
import { FormLogin } from "../UI/FormLogin";

import { validationString } from "../../utils/validations";
import { LayoutContentLogin } from "./LayoutContentLogin";

export const LoginForm = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const { handleSetUser } = useContext(userContext);

  const router = useRouter();

  const { data, status } = useSession();

  const handleChange = ({ target }) => {
    setForm((c) => ({
      ...c,
      [target.name]: target.value,
    }));
  };

  const handleLoginSocMed = async () => {
    setLoading((c) => !c);
    try {
      const login = signIn();
    } catch (error) {
      console.log("error login social medial", error);
      setLoading((c) => !c);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading((c) => !c);
    setError(null);

    try {
      const toSend = {
        username: await validationString(form.username),
        password: await validationString(form.password),
      };

      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(toSend),
      });
      const data = await res.json();
      console.log("data", data);

      if (data?.success === true) {
        handleSetUser(data?.user, "login");

        router.push("/home");
      } else {
        setError({ message: data?.error });
      }
      setLoading((c) => !c);
    } catch (error) {
      console.log("error", error);
      setLoading((c) => !c);
      setError({ message: error.message });
    }
  };

  useEffect(() => {
    (function () {
      if (data && status === "authenticated") {
        handleSetUser(data?.user, "social");
        router.push("/home");
      }
      // console.log("data", data);
      // console.log("status", status);
    })();
  }, [data]);

  useEffect(() => {
    (function () {
      if (form.username !== "" && form.password !== "") {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    })();
  }, [form]);

  useEffect(() => {
    return () => setLoading(false);
  }, []);

  return (
    <>
      {loading && (
        <>
          <LoadingLogin />
        </>
      )}

      {!loading && (
        <>
          <LayoutContentLogin type="login">
            {/* form login */}
            <FormLogin
              type="login"
              form={form}
              disabled={disabled}
              error={error}
              onHandleChange={handleChange}
              onHandleLoginSocMed={handleLoginSocMed}
              onHandleSubmit={handleSubmit}
            />
          </LayoutContentLogin>
        </>
      )}
    </>
  );
};
