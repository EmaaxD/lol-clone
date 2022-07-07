import { LoginBackground } from "./LoginBackground";

export const LayoutLogin = ({ children }) => {
  return (
    <>
      <div className="relative h-screen flex shadow-md rounded-md">
        {
          <>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:-translate-x-0 lg:relative rounded-lg bg-white w-11/12 sm:w-4/5 md:w-1/2 lg:w-1/3 flex flex-col justify-between lg:rounded-l-lg lg:rounded-none shadow-xl lg:shadow-none border-2 border-gray-300 lg:border-none px-4 md:px-7 pt-14 md:pt-20 pb-4 z-10"
              id="containerLogin"
            >
              {children}
            </div>
          </>
        }

        <LoginBackground />
      </div>
    </>
  );
};
