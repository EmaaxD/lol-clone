import React from "react";

export const LoadingLogin = () => {
  return (
    <>
      <div className="h-96 lg:h-full flex flex-col justify-center items-center">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 lg:border-gray-600 h-12 w-12 mb-4"></div>
      </div>
    </>
  );
};
