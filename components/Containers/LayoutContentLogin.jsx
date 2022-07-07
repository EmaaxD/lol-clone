import Image from "next/image";
import Link from "next/link";

import RiotLogo from "../../assets/img/riotLogo.webp";

export const LayoutContentLogin = ({ type = "login", children }) => {
  return (
    <>
      <div className="h-full flex flex-col gap-9 md:gap-12">
        {/* logo form login */}
        <div className="w-36 lg:w-28 mx-auto">
          <Image
            src={RiotLogo}
            className="w-full h-full object-cover"
            alt="Logo Riot Games"
          />
        </div>

        {<>{children}</>}
      </div>

      <div className="relative flex flex-col justify-center items-center pt-10 pb-2">
        <span className="text-gray-400 text-xs lg:text-[10.3px] font-semibold transition-all hover:text-black hover:font-bold uppercase cursor-pointer">
          ¿no puedes iniciar sesion?
        </span>

        {type === "login" && (
          <Link href="/create-account">
            <span className="text-gray-400 text-xs lg:text-[10.3px] font-semibold transition-all hover:text-black hover:font-bold uppercase cursor-pointer">
              crear cuenta
            </span>
          </Link>
        )}

        {type === "create" && (
          <Link href="/">
            <span className="text-gray-400 text-xs lg:text-[10.3px] font-semibold transition-all hover:text-black hover:font-bold uppercase cursor-pointer">
              iniciar session
            </span>
          </Link>
        )}

        <span
          className="absolute bottom-0 right-0 text-gray-400 hover:text-gray-700 font-medium uppercase cursor-pointer"
          style={{ fontSize: 10 }}
        >
          v53.0.0
        </span>
      </div>
    </>
  );
};
