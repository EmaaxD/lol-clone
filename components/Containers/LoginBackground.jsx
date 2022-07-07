import React from "react";
import { UserIcon } from "@heroicons/react/solid";

export const LoginBackground = () => {
  return (
    <>
      <div className="relative w-full login__container__background shadow-md rounded-lg lg:rounded-r-lg lg:rounded-none">
        <div className="flex justify-between items-center p-10">
          <div className="relative bg-fuchsia-600 origin-center rotate-45 px-5 py-5 text-black text-2xl font-black shadow-md rounded cursor-pointer transition-all hover:bg-fuchsia-800">
            <span
              className="absolute inset-y-0 left-4"
              style={{ transform: "rotate(317deg)" }}
            >
              !
            </span>
          </div>

          <div className="h-12 w-12 backdrop-blur-sm bg-white/30 flex flex-col justify-center items-center shadow-xl rounded-lg cursor-pointer transition-all group hover:backdrop-blur-md">
            <UserIcon className="h-7 w-7 text-gray-300 group-hover:text-gray-200" />
          </div>
        </div>
      </div>
    </>
  );
};
