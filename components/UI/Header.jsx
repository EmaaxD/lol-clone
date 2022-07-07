import { useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
import { UserCircleIcon, BriefcaseIcon } from "@heroicons/react/solid";
import { LogoutIcon } from "@heroicons/react/outline";
import { GrMoney } from "react-icons/gr";
import { MdGavel } from "react-icons/md";
import { BsFillDiamondFill } from "react-icons/bs";

import { userContext } from "../../context/actions/UserProvider";

import LogoLol from "../../assets/img/League_of_legends_logo.webp";
import UserLogo from "../../assets/img/userlogo.png";

export const Header = () => {
  const router = useRouter();

  const { user, handleSignDown } = useContext(userContext);

  const handleLogout = () => {
    handleSignDown();

    if (user?.type === "social") {
      signOut();
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <header className="flex justify-between pl-6 lg:pl-10 border-t-2 border-yellow-500 border-b border-b-gray-50 rounded-t-lg">
        <div className="flex items-center gap-3 py-6">
          {/* play button */}
          <div
            className="relative flex items-center border border-yellow-800 pl-6 pr-2 py-1"
            style={{
              background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))",
            }}
          >
            <div className="absolute -left-2 w-11 h-11">
              <Image
                src={LogoLol}
                className="w-full h-full object-cover"
                alt="logo play lol"
              />
            </div>

            <div className="border border-blue-900 ml-3">
              <button
                className="text-white font-medium px-4 uppercase z-10"
                style={{
                  border: "2px solid transparent",
                  background:
                    "linear-gradient(#0000009e, #000000db) padding-box, radial-gradient(farthest-corner at 50% 50%, #263fff, #5ec2b8) border-box",
                }}
              >
                juega
              </button>
            </div>
          </div>

          <div className="w-7 h-7 rounded-full border-2 border-blue-400 p-[2px]">
            <div className="bg-blue-500 w-full h-full flex justify-center items-center rounded-full text-white font-bold text-lg cursor-pointer transition-all hover:bg-blue-600">
              !
            </div>
          </div>

          <ul className="hidden md:flex items-center">
            <li className="px-2">
              <Link href="/home">
                <a className="text-white font-semibold uppercase">inicio</a>
              </Link>
            </li>
            <li className="px-2">
              <Link href="/tft">
                <a className="text-gray-500 hover:text-white font-semibold uppercase">
                  tft
                </a>
              </Link>
            </li>
            <li className="px-2">
              <Link href="/clash">
                <a className="text-gray-500 hover:text-white font-semibold uppercase">
                  clash
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex">
          <div className="flex items-center divide-x">
            <div className="flex items-center gap-5 px-3">
              <Link href="/profile">
                <a>
                  <UserCircleIcon className="w-6 h-6 text-gray-400" />
                </a>
              </Link>
              <Link href="/profile">
                <a>
                  <BriefcaseIcon className="w-6 h-6 text-gray-400" />
                </a>
              </Link>
              <Link href="/profile">
                <a>
                  <MdGavel className="w-6 h-6 text-gray-400" />
                </a>
              </Link>
              <Link href="/profile">
                <a>
                  <GrMoney
                    className="w-6 h-6 text-gray-400"
                    style={{ filter: "invert(1)", opacity: 0.7 }}
                  />
                </a>
              </Link>
            </div>

            <div className="flex flex-col px-2 gap-1">
              <div className="flex items-center gap-1">
                <BsFillDiamondFill className="h-3 w-3 text-yellow-500" />
                <span className="text-white text-xs font-medium">93</span>
              </div>
              <div className="flex items-center gap-1">
                <BsFillDiamondFill className="h-3 w-3 text-blue-500" />
                <span className="text-white text-xs font-medium">269</span>
              </div>
            </div>

            <div className="flex lg:hidden px-2">
              <LogoutIcon
                className="h-7 w-7 text-red-600"
                onClick={handleLogout}
              />
            </div>
          </div>

          <div className="hidden relative bg-slate-900 w-52 lg:flex items-center gap-1 rounded-tr-lg px-3">
            <div className="relative w-12 h-12 rounded-full p-1 border border-yellow-700">
              <div className="w-full h-full rounded-full border border-yellow-700">
                <Image
                  src={UserLogo}
                  className="w-full h-full object-cover rounded-full"
                  alt="logo profile"
                />
              </div>

              <div className="bg-slate-900 absolute -bottom-2 border border-yellow-700 rounded-md text-gray-300 text-xs font-bold px-2">
                295
              </div>
            </div>

            <div className="flex flex-1 flex-col">
              <h5 className="text-gray-300 font-semibold capitalize">emaaxd</h5>
              <div className="flex items-center gap-1">
                <span className="bg-green-500 w-2 h-2 border border-green-300 rounded-full"></span>
                <span className="text-green-500 text-xs">
                  "Saliendo de la man..."
                </span>
              </div>
            </div>

            <div className="absolute top-0 -right-1 p-2">
              <LogoutIcon
                className="h-7 w-7 text-red-600"
                onClick={handleLogout}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
