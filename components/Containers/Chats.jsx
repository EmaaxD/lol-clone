import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import {
  UserAddIcon,
  FolderAddIcon,
  ViewListIcon,
  SearchIcon,
  ChevronRightIcon,
  ChatAltIcon,
  BookmarkIcon,
  MicrophoneIcon,
  PuzzleIcon,
} from "@heroicons/react/outline";

import LogoUser from "../../assets/img/userlogo.png";

export const Chats = () => {
  return (
    <>
      <div className="hidden absolute right-0 h-full bg-slate-900 w-52 lg:flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center px-3 py-2">
            <span className="text-gray-200 text-xs font-semibold uppercase">
              social
            </span>

            <div className="flex items-center gap-2">
              <UserAddIcon className="w-4 h-4 text-yellow-500 cursor-pointer transition-all hover:text-yellow-600" />
              <FolderAddIcon className="w-4 h-4 text-yellow-500 cursor-pointer transition-all hover:text-yellow-600" />
              <ViewListIcon className="w-4 h-4 text-yellow-500 cursor-pointer transition-all hover:text-yellow-600" />
              <SearchIcon className="w-4 h-4 text-yellow-500 cursor-pointer transition-all hover:text-yellow-600" />
            </div>
          </div>

          <div className="px-3 py-2">
            <Disclosure defaultOpen>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center gap-2 mb-5">
                    <ChevronRightIcon
                      className={`w-4 text-gray-300 ${
                        open ? "transform rotate-90 text-gray-300" : ""
                      }`}
                    />

                    <span className="text-gray-300 text-xs font-medium">
                      General (28/170)
                    </span>
                  </Disclosure.Button>

                  <Disclosure.Panel className="flex flex-col gap-3">
                    {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                      <div className="flex cursor-pointer" key={item}>
                        <div className="relative w-7 h-7 rounded-full border border-yellow-700">
                          <Image
                            src={LogoUser}
                            className="w-full h-full object-cover rounded-full"
                            alt="logo user friend"
                          />

                          <div className="absolute -right-1 bottom-0 w-2 h-2 bg-sky-400 rounded-full border border-sky-500"></div>
                        </div>

                        <div className="flex flex-col px-3">
                          <span className="text-gray-300 text-xs font-medium">
                            Ac Balck DC
                          </span>
                          <span className="text-sky-500 text-[9.5px]">
                            En partida
                          </span>
                        </div>
                      </div>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>

        <div className="flex gap-1">
          <div className="flex bg-slate-800 rounded border border-yellow-800 p-1">
            <ChatAltIcon className="w-4 h-4 text-gray-300" />
          </div>
          <div className="flex bg-slate-800 rounded border border-yellow-800 p-1">
            <BookmarkIcon className="w-4 h-4 text-gray-300" />
          </div>
          <div className="flex bg-slate-800 rounded border border-yellow-800 p-1">
            <MicrophoneIcon className="w-4 h-4 text-gray-300" />
          </div>
          <div className="flex flex-col justify-center items-center flex-1 text-xs font-medium text-gray-600">
            V12.12
          </div>
          <div className="flex bg-slate-800 rounded border border-yellow-800 p-1">
            <PuzzleIcon className="w-4 h-4 text-gray-300" />
          </div>
        </div>
      </div>
    </>
  );
};
