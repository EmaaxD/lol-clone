import { ArrowRightIcon } from "@heroicons/react/outline";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { InputPassword } from "./Inputs";

export const FormLogin = (props) => {
  const {
    type,
    form,
    disabled,
    success,
    error,
    onHandleChange,
    onHandleLoginSocMed,
    onHandleSubmit,
  } = props;

  return (
    <>
      <form
        className="h-full flex flex-col justify-between items-center"
        onSubmit={onHandleSubmit}
      >
        <div className="w-full flex flex-col gap-4 px-4 sm:px-5 mb-12 lg:mb-0">
          <h4 className="text-black text-2xl font-bold capitalize text-center">
            {type === "login" && <>ingresar</>}
            {type === "create" && <>registrar</>}
          </h4>

          {error && (
            <div className="bg-red-500 text-white text-base md:text-sm shadow rounded-md text-center py-2 px-3">
              {error?.message || "Error interno"}
            </div>
          )}

          {success && (
            <div className="bg-green-500 text-white text-base md:text-sm shadow rounded-md text-center py-2 px-3">
              {success?.message || "Error interno"}
            </div>
          )}

          {/* inputs login */}
          <div className="flex flex-col">
            {type === "create" && (
              <div className="floating-input mb-3 relative rounded-lg">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={form.email}
                  className="border border-gray-200 bg-gray-100 text-sm font-bold focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-4 h-11"
                  placeholder="name@example.com"
                  onChange={onHandleChange}
                />
                <label
                  htmlFor="email"
                  className="absolute top-0 left-0 text-gray-400 font-bold px-3 py-3 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out uppercase"
                >
                  email
                </label>
              </div>
            )}

            <div className="floating-input mb-3 relative rounded-lg">
              <input
                type="text"
                name="username"
                id="username"
                value={form.username}
                className="border border-gray-200 bg-gray-100 text-sm font-bold focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-4 h-11"
                placeholder="name@example.com"
                onChange={onHandleChange}
              />
              <label
                htmlFor="username"
                className="absolute top-0 left-0 text-gray-400 font-bold px-3 py-3 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out uppercase"
              >
                nombre de usuario
              </label>
            </div>

            <InputPassword
              name="password"
              value={form.password}
              text="contraseña"
              onHandleChange={onHandleChange}
            />

            {type === "create" && (
              <InputPassword
                name="verifyPassword"
                value={form.verifyPassword}
                text="Verificar contraseña"
                onHandleChange={onHandleChange}
              />
            )}
          </div>

          {/* buttons login social medial */}
          {type === "login" && (
            <>
              <div className="flex justify-between items-center gap-2">
                <button
                  type="button"
                  className="w-full bg-blue-600 rounded transition-all hover:opacity-90 p-1"
                  onClick={onHandleLoginSocMed}
                >
                  <IoLogoFacebook className="text-white mx-auto" size={20} />
                </button>

                <button
                  type="button"
                  className="w-full rounded bg-gray-50 border border-gray-300 transition-all hover:bg-gray-100 p-1"
                  onClick={onHandleLoginSocMed}
                >
                  <FcGoogle className="mx-auto" size={20} />
                </button>

                <button
                  type="button"
                  className="w-full rounded bg-black transition-all hover:opacity-90 p-1"
                >
                  <IoLogoApple className="text-white mx-auto" size={20} />
                </button>
              </div>
            </>
          )}

          {/* stay connected */}
          {type === "login" && (
            <>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="accept"
                  id="accept"
                  className="bg-gray-500 p-2 accent-red-500"
                />
                <label
                  htmlFor="accept"
                  className="text-black text-sm lg:text-[11.5px] font-bold"
                >
                  Permanecer conectado
                </label>
              </div>
            </>
          )}
        </div>

        <button
          type="submit"
          className={`p-5 ${
            disabled ? "border-2" : "border-2 border-red-500 bg-red-500"
          } rounded-2xl`}
          disabled={disabled}
        >
          <ArrowRightIcon
            className={`w-5 h-5 ${disabled ? "text-gray-300" : "text-white"}`}
          />
        </button>
      </form>
    </>
  );
};
