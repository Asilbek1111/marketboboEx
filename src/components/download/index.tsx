function Download() {
  return (
    <section className="w-full h-[415px]  lg:block hidden">
      <div className="container mx-auto w-fit ">
        <div className="rounded-xl flex justify-center items-center space-x-40  bg-[#f7f7f7] px-40 ">
          <img
            src="https://texnomart.uz/_nuxt/img/phone-min.d3c6b0c.png"
            alt="#"
            className="w-[475px] h-[440px] relative top-4 "
          />
          <div className="space-y-6 w-[420px] flex flex-col justify-center items-start  ">
            <h1 className="font-bold text-[38px] ">Иловани юкланг</h1>
            <p className="text-[18px] text-[#333]">
              Ҳаридларни уйдан чиқмаган ҳолда мобил илова <br /> орқали амалга
              оширинг!
            </p>
            <div className="flex justify-center items-center space-x-4 ">
              <img
                src="https://texnomart.uz/_nuxt/img/quar-code.e14205a.png"
                alt="#"
                title="qr code"
                className="w-[112px h-[112px]"
              />
              <div className="w-[180px] h-[96px] text-[#333] ">
                Камерани йўналтиринг ва Texnomart иловасини бепул юкланг
              </div>
            </div>
            <img
              src="https://texnomart.uz/_nuxt/img/play-market-kr.a90fe79.png"
              alt="#"
              className="w-[110px] h-[37px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Download;
