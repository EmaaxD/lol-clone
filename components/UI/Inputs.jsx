import { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

export const InputPassword = ({ name, value, text, onHandleChange }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="floating-input mb-3 relative rounded-lg">
        <input
          type={show ? "text" : "password"}
          name={name}
          id={name}
          value={value}
          className="border border-gray-200 bg-gray-100 text-sm font-bold focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-4 h-11"
          placeholder="name@example.com"
          onChange={onHandleChange}
        ></input>

        <label
          htmlFor={name}
          className="absolute top-0 left-0 text-gray-400 font-bold px-3 py-3 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out uppercase"
        >
          {text}
        </label>

        <div
          className="absolute inset-y-3 right-2 cursor-pointer seePassword"
          onClick={() => setShow((c) => !c)}
        >
          {show ? (
            <BsFillEyeSlashFill className="text-gray-600" size={20} />
          ) : (
            <BsFillEyeFill className="text-gray-600" size={20} />
          )}
        </div>
      </div>
    </>
  );
};
