import Image from "next/image";

export default function Downbar() {
  return (
    <div className="z-50 downbar fixed bottom-0  w-full  text-white bg-[#333333] sm:text-[14px] text-[12px] lg:hidden">
      <div className="cont flex justify-between items-center py-1 sm:px-12 tel:px-5">
        <div className="lcard flex flex-col justify-center items-center">
          <img
            src="https://texnomart.uz/_nuxt/img/mobile-category2.7e3ae65.svg"
            alt="katalog"
          />
          <p>Katalog</p>
        </div>
        <div className="lcard flex flex-col justify-center items-center">
          <img
            src="https://texnomart.uz/_nuxt/img/mobile-card.edc19f0.svg"
            alt="savatcha"
          />
          <p>Savatcha</p>
        </div>
        <div className="lcard flex flex-col justify-center items-center">
          <img
            src="https://texnomart.uz/_nuxt/img/mobile-favorite.0e9f332.svg"
            alt="sevimlilar"
          />
          <p>Sevimlilar</p>
        </div>
        <div className="lcard flex flex-col justify-center items-center">
          <img
            src="https://texnomart.uz/_nuxt/img/mobile-profil.08cd2bf.svg"
            alt="Kirish"
          />
          <p>Kirish</p>
        </div>
      </div>
    </div>
  );
}
