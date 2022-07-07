import Image from "next/image";

import Portada1 from "../../assets/img/parche.jpg";
import Portada2 from "../../assets/img/stellars.jpg";
import Portada3 from "../../assets/img/Mordekaiser.png";
import NewSkin1 from "../../assets/img/Kayn_15.jpg";
import NewSkin2 from "../../assets/img/Illaoi_18.jpg";

export const ContentHome = () => {
  return (
    <>
      <div className="h-full flex flex-col justify-between">
        <div className="flex justify-center md:justify-end md:pr-64 my-10 md:mt-10">
          <button className="bg-stone-700 text-gray-300 text-sm border-2 border-yellow-600 transition-all hover:bg-stone-800 rounded py-1 px-2">
            Rotacion de campeones gratuitos
          </button>
        </div>

        <div className="flex flex-col gap-3 px-6 lg:px-10">
          <div className="flex flex-col">
            <p className="text-gray-300 md:text-gray-400 font-medium uppercase">
              capsula prime gaming
            </p>
            <h2 className="text-gray-200 text-5xl font-medium uppercase">
              rp gratis y mas: <br />
              del 30 de junio al 28 <br />
              julio
            </h2>
          </div>
          <p className="text-sm text-gray-300 md:text-gray-400">
            obten 350RP, 5 de Esencia Mitica, un aspecto de <br /> 1350RP y mas
            con Prime Gaming
          </p>
          <button className="bg-stone-700 w-40 text-gray-300 border-2 border-yellow-600 transition-all hover:bg-stone-800 rounded py-1 uppercase">
            obtener ahora
          </button>
        </div>

        <div className="flex items-center flex-wrap gap-3 pl-6 pr-6 lg:pr-56 py-5">
          <div className="flex flex-col gap-1 group">
            <div className="bg-slate-900 w-52 md:w-60 lg:w-72 h-36 lg:h-48 border border-yellow-900 rounded p-[3px] cursor-pointer">
              <div className="w-full h-full flex border border-yellow-900 rounded">
                <Image
                  src={Portada1}
                  className="w-full h-full object-cover rounded transition-all group-hover:scale-110"
                  alt="portada"
                />
              </div>
            </div>
            <p className="text-gray-300 font-medium group-hover:text-gray-400">
              Lol 12:12 Continua los ajustes
            </p>
          </div>
          <div className="flex flex-col gap-1 group">
            <div className="bg-slate-900 w-52 md:w-60 lg:w-72 h-36 lg:h-48 border border-yellow-900 rounded p-[3px] cursor-pointer">
              <div className="w-full h-full flex border border-yellow-900 rounded">
                <Image
                  src={Portada2}
                  className="w-full h-full object-cover rounded transition-all group-hover:scale-110"
                  alt="portada"
                />
              </div>
            </div>
            <p className="text-gray-300 font-medium group-hover:text-gray-400">
              Se buscan Guardinas Estelares
            </p>
          </div>
          <div className="flex flex-col gap-1 group">
            <div className="bg-slate-900 w-52 md:w-60 lg:w-72 h-36 lg:h-48 border border-yellow-900 rounded p-[3px] cursor-pointer">
              <div className="w-full h-full flex border border-yellow-900 rounded">
                <Image
                  src={Portada3}
                  className="w-full h-full object-cover rounded transition-all group-hover:scale-110"
                  alt="portada"
                />
              </div>
            </div>
            <p className="text-gray-300 font-medium group-hover:text-gray-400">
              El nuevo Morder papaaaa!!
            </p>
          </div>
          <div className="flex flex-col gap-1 group">
            <div className="bg-slate-900 w-36 h-36 lg:h-48 border border-yellow-900 rounded p-[3px] cursor-pointer">
              <div className="w-full h-full flex border border-yellow-900 rounded">
                <Image
                  src={NewSkin1}
                  className="w-full h-full object-cover rounded transition-all group-hover:scale-110"
                  alt="portada"
                />
              </div>
            </div>
            <p className="text-gray-300 font-medium group-hover:text-gray-400">
              Kayn Luna de Nieve
            </p>
          </div>
          <div className="flex flex-col gap-1 group">
            <div className="bg-slate-900 w-36 h-36 lg:h-48 border border-yellow-900 rounded p-[3px] cursor-pointer">
              <div className="w-full h-full flex border border-yellow-900 rounded">
                <Image
                  src={NewSkin2}
                  className="w-full h-full object-cover rounded transition-all group-hover:scale-110"
                  alt="portada"
                />
              </div>
            </div>
            <p className="text-gray-300 font-medium group-hover:text-gray-400">
              Illaoi Luna de Nieve
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
