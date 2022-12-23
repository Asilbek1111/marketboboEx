import SimpleAccordion from "../Accordion";

export default function Footer() {
  return (
    <footer className="mt-20 w-full h-auto text-white bg-[#333333] pb-6 tel:mb-12 lg:mb-0">
      <div className="cont  h-full flex tel:flex-col ">
        <SimpleAccordion />
        <div className="parent__footer-top md:flex lg:justify-around tel:justify-start py-10 ">
          <div className="child__box-top-1 hidden md:flex flex-col space-y-8">
            <p className="text-[13px] mb-[13px] ">
              Саволингиз борми? Қўнғироқ қилинг
            </p>
            <a
              href="tel:+998 71 209 99 44"
              className="text-[28px] text-white no-underline "
            >
              +998 71 209 99 44
            </a>
            <ul className="flex justify-center items-center space-x-4 cursor-pointer">
              <li className="bg-[#D8D8D833] p-2 rounded-md">
                {" "}
                <a href="https://www.facebook.com/">
                  <img
                    src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath d='M14.992 4.653h2.009V1.155C16.654 1.107 15.463 1 14.075 1c-2.896 0-4.88 1.821-4.88 5.17v3.08H6v3.91h3.195V23h3.918v-9.839h3.067l.486-3.91h-3.554V6.557c.001-1.13.306-1.904 1.88-1.904z' fill='%23fff'/%3E%3C/svg%3E"
                    alt="#"
                  />
                </a>
              </li>
              <li className="bg-[#D8D8D833] p-2 rounded-md">
                {" "}
                <a href="https://telegram.org/">
                  <img
                    src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath d='M9.633 15.083l-.364 5.119c.52 0 .746-.224 1.016-.492l2.441-2.333 5.059 3.704c.927.517 1.581.245 1.831-.853l3.32-15.558.001-.001c.295-1.372-.495-1.908-1.4-1.571L2.022 10.569c-1.332.517-1.311 1.26-.226 1.596l4.99 1.552 11.59-7.252c.545-.36 1.04-.16.633.2l-9.375 8.418z' fill='%23fff'/%3E%3C/svg%3E
         "
                    alt="#"
                  />
                </a>
              </li>
              <li className="bg-[#D8D8D833] p-2 rounded-md">
                {" "}
                <a href="https://www.instagram.com/">
                  <img
                    src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath d='M16.929 1H7.07A6.078 6.078 0 001 7.071v9.858A6.078 6.078 0 007.071 23h9.858A6.078 6.078 0 0023 16.929V7.07A6.078 6.078 0 0016.929 1zm4.12 15.929a4.124 4.124 0 01-4.12 4.12H7.07a4.124 4.124 0 01-4.119-4.12V7.07a4.124 4.124 0 014.12-4.119h9.857a4.124 4.124 0 014.12 4.12v9.857z' fill='%23fff'/%3E%3Cpath d='M12 6.332A5.675 5.675 0 006.33 12 5.675 5.675 0 0012 17.67 5.675 5.675 0 0017.669 12a5.675 5.675 0 00-5.67-5.668zm0 9.385A3.721 3.721 0 018.283 12 3.721 3.721 0 0112 8.283 3.721 3.721 0 0115.717 12 3.721 3.721 0 0112 15.717zm5.907-11.041a1.437 1.437 0 00-1.431 1.432c0 .376.153.745.42 1.012.265.266.635.42 1.011.42.377 0 .746-.154 1.012-.42.267-.267.42-.636.42-1.012 0-.378-.153-.747-.42-1.013a1.437 1.437 0 00-1.012-.419z' fill='%23fff'/%3E%3C/svg%3E"
                    alt="#"
                  />
                </a>
              </li>
              <li className="bg-[#D8D8D833] p-2 rounded-md">
                {" "}
                <a href="https://www.youtube.com/">
                  <img
                    src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M17.082 4c2.8 0 4.266.385 5.06 1.33.798.947.858 2.4.858 4.507v3.809c0 2.415-.38 3.81-1.274 4.664-.87.833-2.216 1.173-4.644 1.173H6.918C1.915 19.483 1 17.517 1 13.646V9.837c0-1.998 0-3.442.771-4.422C2.563 4.41 4.053 4 6.918 4h10.164zm-6.574 10.68l4.616-2.413a.71.71 0 00-.002-1.258l-4.615-2.397a.71.71 0 00-1.037.63v4.808a.71.71 0 001.038.63z' fill='%23fff'/%3E%3C/svg%3E"
                    alt="#"
                  />
                </a>
              </li>
            </ul>
            <a href="https://play.google.com/store/games?hl=en&code">
              <img
                src="https://texnomart.uz/_nuxt/img/playmarket-logo-kr.24580f9.svg"
                alt="#"
              />
            </a>
            <a href="#">Дўконлар манзиллари</a>
          </div>
          <div className="child__box-top-2 flex flex-col space-y-6 tel:hidden lg:flex">
            <h2 className="text-[18px] font-semibold ">Компания</h2>
            <ul className="space-y-2">
              <li>
                <a href="#">B2B савдоси</a>
              </li>
              <li>
                <a href="#">Биз ҳақимизда</a>
              </li>
              <li>
                <a href="#">Янгиликлар ва шарҳлар</a>
              </li>
              <li>
                <a href="#">IMEI ни текшириш</a>
              </li>
            </ul>
          </div>
          <div className="child__box-top-3 flex flex-col space-y-6 tel:hidden lg:flex">
            <h2 className="text-[18px] font-semibold">Маълумот</h2>
            <ul className="space-y-2">
              <li>
                <a href="#">B2B савдоси</a>
              </li>
              <li>
                <a href="#">Биз ҳақимизда</a>
              </li>
              <li>
                <a href="#">Янгиликлар ва шарҳлар</a>
              </li>
              <li>
                <a href="#">IMEI ни текшириш</a>
              </li>
              <li>
                <a href="#">IMEI ни текшириш</a>
              </li>
            </ul>
          </div>
          <div className="child__box-top-4 flex flex-col space-y-6 tel:hidden lg:flex ">
            <h2 className="text-[18px] font-semibold">Компания</h2>
            <ul className="space-y-2">
              <li>
                <a href="#">B2B савдоси</a>
              </li>
              <li>
                <a href="#">Биз ҳақимизда</a>
              </li>
              <li>
                <a href="#">Янгиликлар ва шарҳлар</a>
              </li>
              <li>
                <a href="#">IMEI ни текшириш</a>
              </li>
            </ul>
            <a
              href="https://telegram.org/"
              className=" border-dashed border-2 border-[#d8d8d833] flex p-4"
            >
              <img
                src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath d='M9.633 15.083l-.364 5.119c.52 0 .746-.224 1.016-.492l2.441-2.333 5.059 3.704c.927.517 1.581.245 1.831-.853l3.32-15.558.001-.001c.295-1.372-.495-1.908-1.4-1.571L2.022 10.569c-1.332.517-1.311 1.26-.226 1.596l4.99 1.552 11.59-7.252c.545-.36 1.04-.16.633.2l-9.375 8.418z' fill='%23fff'/%3E%3C/svg%3E"
                className="mr-4"
                alt="#"
              />
              Бонусингизни билиб олинг
            </a>
          </div>

          <div className="child__box-top-1 md:hidden flex flex-col lg:space-y-8 tel:space-y-5  tel:px-3 sm:px-7 md:px-7">
            <p className="text-[13px] lg:mb-[13px]  tel:mb-[5px]">
              Саволингиз борми? Қўнғироқ қилинг
            </p>
            <a
              href="tel:+998 71 209 99 44"
              className="text-[28px] text-white no-underline tel:text-[20px]"
            >
              +998 71 209 99 44
            </a>
            <ul className="flex lg:justify-center tel:justify-start items-center space-x-4 cursor-pointer">
              <li className="bg-[#D8D8D833] p-2 rounded-md">
                {" "}
                <a href="https://www.facebook.com/">
                  <img
                    src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath d='M14.992 4.653h2.009V1.155C16.654 1.107 15.463 1 14.075 1c-2.896 0-4.88 1.821-4.88 5.17v3.08H6v3.91h3.195V23h3.918v-9.839h3.067l.486-3.91h-3.554V6.557c.001-1.13.306-1.904 1.88-1.904z' fill='%23fff'/%3E%3C/svg%3E"
                    alt="#"
                  />
                </a>
              </li>
              <li className="bg-[#D8D8D833] p-2 rounded-md">
                {" "}
                <a href="https://telegram.org/">
                  <img
                    src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath d='M9.633 15.083l-.364 5.119c.52 0 .746-.224 1.016-.492l2.441-2.333 5.059 3.704c.927.517 1.581.245 1.831-.853l3.32-15.558.001-.001c.295-1.372-.495-1.908-1.4-1.571L2.022 10.569c-1.332.517-1.311 1.26-.226 1.596l4.99 1.552 11.59-7.252c.545-.36 1.04-.16.633.2l-9.375 8.418z' fill='%23fff'/%3E%3C/svg%3E
         "
                    alt="#"
                  />
                </a>
              </li>
              <li className="bg-[#D8D8D833] p-2 rounded-md">
                {" "}
                <a href="https://www.instagram.com/">
                  <img
                    src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath d='M16.929 1H7.07A6.078 6.078 0 001 7.071v9.858A6.078 6.078 0 007.071 23h9.858A6.078 6.078 0 0023 16.929V7.07A6.078 6.078 0 0016.929 1zm4.12 15.929a4.124 4.124 0 01-4.12 4.12H7.07a4.124 4.124 0 01-4.119-4.12V7.07a4.124 4.124 0 014.12-4.119h9.857a4.124 4.124 0 014.12 4.12v9.857z' fill='%23fff'/%3E%3Cpath d='M12 6.332A5.675 5.675 0 006.33 12 5.675 5.675 0 0012 17.67 5.675 5.675 0 0017.669 12a5.675 5.675 0 00-5.67-5.668zm0 9.385A3.721 3.721 0 018.283 12 3.721 3.721 0 0112 8.283 3.721 3.721 0 0115.717 12 3.721 3.721 0 0112 15.717zm5.907-11.041a1.437 1.437 0 00-1.431 1.432c0 .376.153.745.42 1.012.265.266.635.42 1.011.42.377 0 .746-.154 1.012-.42.267-.267.42-.636.42-1.012 0-.378-.153-.747-.42-1.013a1.437 1.437 0 00-1.012-.419z' fill='%23fff'/%3E%3C/svg%3E"
                    alt="#"
                  />
                </a>
              </li>
              <li className="bg-[#D8D8D833] p-2 rounded-md">
                {" "}
                <a href="https://www.youtube.com/">
                  <img
                    src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M17.082 4c2.8 0 4.266.385 5.06 1.33.798.947.858 2.4.858 4.507v3.809c0 2.415-.38 3.81-1.274 4.664-.87.833-2.216 1.173-4.644 1.173H6.918C1.915 19.483 1 17.517 1 13.646V9.837c0-1.998 0-3.442.771-4.422C2.563 4.41 4.053 4 6.918 4h10.164zm-6.574 10.68l4.616-2.413a.71.71 0 00-.002-1.258l-4.615-2.397a.71.71 0 00-1.037.63v4.808a.71.71 0 001.038.63z' fill='%23fff'/%3E%3C/svg%3E"
                    alt="#"
                  />
                </a>
              </li>
            </ul>
            <a href="https://play.google.com/store/games?hl=en&code">
              <img
                src="https://texnomart.uz/_nuxt/img/playmarket-logo-kr.24580f9.svg"
                alt="#"
              />
            </a>
            <a href="#">Дўконлар манзиллари</a>
          </div>
        </div>
        <hr className=" border-[#d8d8d833]" />
        <div className="parent__footer-bottom  md:flex justify-between lg:items-center  px-20  pt-4 tel:justify-start">
          <p className="text-[12px] hidden md:inline">
            2016-2022 © texnomart.uz. Барча ҳуқуқлар ҳимояланган. Товарларнинг
            кўрсатилган қиймати ва
            <br /> уларни сотиб олиш шартлари жорий санага амал қилади
          </p>
          <ul className="flex justify-center items-center space-x-2">
            <li>
              <a href="https://uzcard.uz/index.php/en/">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAcCAYAAAA9UNxEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKXSURBVHgB7ZldSFNhGMf/5pxu6NiWS9FZXkSDUsqosQsF66JCYmAEFhFSSd0lBELdFV30cTm6qS5c3UTQbjJiRs1laR9i2lppa8XKbW3i3Kfbcl+9x2A0FtVFzxrbfvDCec77cOB/nvd5zvO+pyyVSjUDGGSjE4XNNBvdZUzwFLvYguLAyAlOoYhYhSKDB0K0unG8nrGn7TqZCKdP7MnwuXhVj5O9O4HhM0BiGTx5G/jKo6CCVLDh2SxGJ6xpWyatyRJ8z2BCp3IDWgIuxD8akfQ7SQXnxZK+wKLM67qE8tr1oCYvBHPLXn1Kh1fK60ipr4CSvClaFpsbvQNaHDs3BEpKVTrXHNi7HYFQNG3L6yWg5L8LFlTxEYsn07awkg9KiAWX/dFj8M4Y7C5f2lZtbsb+rq2ggjSHBVUVGfZyLJ7lE4nGMuxyXjkoIRXMNRo/4w9GYLY407bN7oHHt5Th01QvBSWkglsVjVn3zmqG8Nm5COe8H/3nb2fNb2tdB0pId0tc9W3vuZxRhX+HRCTEsLYfa1bXgArSCIuqq3BIrfxr/+MHO0jFcpDvh7nHa24YoLk5gkQi+UufSj4PfT3tGOjbBWpydgBgd3mh009hwmSDayGAeDyBtQ1StG1swuF9KtSKq5ELSice/xKrbR4O1lQsLIZw95EJSfZuX7AIc42GxxuCzeFBKPwND8dnWbeVwOOXH1bmRp6/BxWkgifffsGDsXcQs+obCEVW8tnyycVmUnhjceDarSfw+sO4bzTDHwgjwL7T+lEzdqgUoIJ0Sc999SLIIiivE+PppBW7OzbBNDOHRrZBCC5FUcG6KqGADzfLae7a4fahRdEAmYSuUpdyuNDhBBtRPExzgo/gx2+IQsfIRvd3aYsETCPHV5cAAAAASUVORK5CYII="
                  alt="demo"
                />
              </a>
            </li>
            <li>
              <a href="https://alifshop.uz/uz">
                <img
                  src="https://texnomart.uz/_nuxt/img/alif.6e1bcde.png"
                  alt="demo"
                />
              </a>
            </li>
            <li>
              <a href="https://intend.uz/">
                <img
                  src="https://texnomart.uz/_nuxt/img/intend.81957d2.png"
                  alt="demo"
                />
              </a>
            </li>
            <li>
              <a href="https://usa.visa.com/">
                <img
                  src="https://texnomart.uz/_nuxt/img/ofb.b3ef2cd.png"
                  alt="demo"
                />
              </a>
            </li>
            <li>
              <a href="https://usa.visa.com/">
                <img
                  src="https://texnomart.uz/_nuxt/img/payme.677630d.png"
                  alt="demo"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
