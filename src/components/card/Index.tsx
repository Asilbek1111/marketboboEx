import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Image from "next/image";

import { categories, logos, phones } from "../../utils/consts";

import { FreeMode } from "swiper";
// or only core styles


function Card() {
  return (
    <>
      <div className="cont">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            300: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 6,
            },
          }}
        >
          {logos?.map((e, i) => (
            <SwiperSlide>
              <a
                className="tel:px-[10px] lg:px-[40px]  rounded-xl shadow-[0_1.17143px_14.0571px_rgba(0,0,0,0.06)]  w-[80%] h-full  py-[16px] block"
                href="#"
              >
                <img src={e.url} alt="#" title="#" className="w-full h-full " />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* categories */}
      <div className="cont  mt-10 py-2 lg:px-7 tel:px-2">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            300: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 6,
            },
          }}
        >
          {categories?.map((e, i) => (
            <SwiperSlide>
              <a
                href="#"
                className="w-[80%] h-[78px] mt-8  py-[16px] lg:px-[24px] tel:px-[12px]  rounded-[12px] border-[1px] shadow-[0_1.17143px_14.0571px_rgba(0,0,0,0.06)] flex  items-center flex-wrap justify-center"
              >
                <img src={e.url} alt="#" title="#" className="w-full h-full " />
                <p className="text-base text-center text-[#333] tel:text-[13px]">
                  {e.title}
                </p>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* telefonlar */}

      <span className="text-[#fbc100] bg-[#333] rounded text-sm py-1 px-1  relative right-16 top-2">
        Зўр нарх
      </span>
      <div className="cont w-full  mb-[10rem] py-2 lg:px-7 tel:px-2">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper"
          scrollbar={{ draggable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            300: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 6,
            },
          }}
        >
          {phones?.map((e, i) => (
            <SwiperSlide>
              <div className=" w-[190px] h-[330px]  mt-[30px] pt-[5px]  mb-[20px] flex flex-col justify-start items-center hover:border-3 hover:border-[#ededed] hover:rounded-md hover:shadow-xl transition duration-150 ease-out hover:ease-in ">
                <span className="text-[#fbc100] bg-[#333] rounded text-sm py-1 px-1  relative right-16 top-2">
                  Зўр нарх
                </span>
                <a href="./index.html" className=" mb-[26px]">
                  <img src={e.url} alt="#" title="phone" />
                </a>
                <div className="flex flex-col justify-center items-start space-y-2">
                  <a href="./index.html block w-[206px] h-[40px] ">
                    <p className=" color-[#373f41]  mx-3 ">{e.title}</p>
                  </a>
                  <a href="./index.html">
                    <strong className="mx-3 my-[10px] block">{e.price}</strong>
                  </a>
                  <div className="flex items-center justify-center">
                    <a
                      href="./index.html"
                      className="mx-3 font-semibold block border-2 border-[transparent] rounded-md bg-[#fbc100] py-[7px] px-[12px] "
                    >
                      <svg
                        className="inline-block mr-2 transition duration-150 ease-out hover:ease-in"
                        xmlns="http://www.w3.org/2000/svg"
                        width={21}
                        height={20}
                        viewBox="0 0 21 20"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.33301 1.74999C1.33301 1.24373 1.74342 0.833313 2.24969 0.833313H4.71301C5.14707 0.833313 5.52164 1.13774 5.61034 1.56264L6.22362 4.50004H17.8333C18.8458 4.50004 19.6666 5.32086 19.6666 6.3334V10.298C19.6666 11.166 19.0581 11.9149 18.2086 12.0926L8.24725 14.1761C7.25609 14.3833 6.28456 13.7479 6.07735 12.7567L3.96795 2.66668H2.24969C1.74342 2.66668 1.33301 2.25626 1.33301 1.74999ZM7.68189 11.4846C7.78538 11.9803 8.27118 12.2982 8.76684 12.1946L17.1042 10.4513C17.5289 10.3625 17.8333 9.98794 17.8333 9.55398V7.25008C17.8333 6.74382 17.4229 6.3334 16.9166 6.3334H6.6064L7.68189 11.4846Z"
                          fill="#333333"
                        />
                        <path
                          d="M7.16669 19.1666C8.08718 19.1666 8.83338 18.4204 8.83338 17.4999C8.83338 16.5795 8.08718 15.8333 7.16669 15.8333C6.2462 15.8333 5.5 16.5795 5.5 17.4999C5.5 18.4204 6.2462 19.1666 7.16669 19.1666Z"
                          fill="#333333"
                        />
                        <path
                          d="M15.4997 19.1666C16.4202 19.1666 17.1664 18.4204 17.1664 17.4999C17.1664 16.5795 16.4202 15.8333 15.4997 15.8333C14.5792 15.8333 13.833 16.5795 13.833 17.4999C13.833 18.4204 14.5792 19.1666 15.4997 19.1666Z"
                          fill="#333333"
                        />
                      </svg>
                      Саватчага
                    </a>
                    <img
                      src="https://texnomart.uz/_nuxt/img/like-default.103ba85.svg"
                      className="h-[30px] ml-2 "
                      alt="default"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Card;
