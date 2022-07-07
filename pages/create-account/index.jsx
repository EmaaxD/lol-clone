import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { LoadingLogin } from "../../components/UI/Loadings";
import { LayoutContentLogin } from "../../components/Containers/LayoutContentLogin";
import { FormLogin } from "../../components/UI/FormLogin";
import { LayoutLogin } from "../../components/Containers/LayoutLogin";

import {
  comparationsPasswords,
  validationString,
} from "../../utils/validations";

export default function index() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    verifyPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const router = useRouter();

  const handleChange = ({ target }) => {
    setForm((c) => ({
      ...c,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading((c) => !c);
    setError(null);

    try {
      const toSend = {
        email: await validationString(form.email),
        username: await validationString(form.username),
        password: await validationString(form.password),
        verifyPassword: await validationString(form.verifyPassword),
      };

      await comparationsPasswords(toSend.password, toSend.verifyPassword);

      delete toSend.verifyPassword;

      const res = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(toSend),
      });
      const data = await res.json();

      if (data?.success === true) {
        setSuccess({ message: "Cuenta creadata exitosamente!!" });
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
      if (
        form.email !== "" &&
        form.username !== "" &&
        form.password !== "" &&
        form.verifyPassword !== ""
      ) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    })();
  }, [form]);

  useEffect(() => {
    let timer = null;

    (function () {
      if (success) {
        timer = setTimeout(() => {
          router.push("/");
        }, 2000);
      }
    })();

    return () => clearTimeout(timer);
  }, [success]);

  return (
    <>
      <LayoutLogin>
        <LayoutContentLogin type="create">
          {loading && (
            <>
              <LoadingLogin />
            </>
          )}

          {!loading && (
            <>
              {/* form login */}
              <FormLogin
                type="create"
                form={form}
                disabled={disabled}
                success={success}
                error={error}
                onHandleChange={handleChange}
                onHandleSubmit={handleSubmit}
              />
            </>
          )}
        </LayoutContentLogin>
      </LayoutLogin>
    </>
  );
}
