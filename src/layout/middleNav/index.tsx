import Image from "next/image";
import Link from "next/link";
import Search from "../../components/seaarchInput";
import BottomNav from "../bottomNav";
import MiddleNavData from "./data";

function MiddleNav() {
  return (
    <div className="middleNav bg-[#F7F7F7]">
      <div className="topNav bg-[#F7F7F7] text-white sm:flex md:flex lg:hidden xl:hidden 2xl:hidden ">
        <div className="w-full flex p-2 justify-between lg:px-10 tel:px-2 items-center">
          <div className="place flex text-black">
            <span>
              <Image
                alt="Location"
                width={20}
                height={20}
                src="/assets/svg/loc.png"
                className="mr-1"
              />
            </span>{" "}
            Toshkent
          </div>
          {/* akjhs */}
          <Image
            alt="Location"
            width={120}
            height={10}
            src="/marketbobo.png"
            className="mr-1  tel:hidden sm:block"
          />
          <div className="nav-wrap-right flex">
            <span>
              <Image
                alt="Location"
                width={20}
                height={20}
                src="/assets/svg/phone.png"
                className="mr-1"
              />
            </span>
            <h3 className="ml-2 text-black"> +99871 209 99 44</h3>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center py-1 lg:px-8 tel:px-2 pb-2">
        <Image
          src="/marketbobo.png"
          alt="logo"
          width={190}
          height={70}
          className=" sm:hidden
          md:hidden
          lg:hidden
          2xl:flex xl:flex
         
          hidden
          "
        />
        <button className="bg-primary py-1 px-3 rounded-lg text-xl mr-4 ml-0">
          &#9776;
        </button>
        <Search />
        <ul className="list lg:flex 2xl:flex xl:flex sm:hidden hidden">
          {MiddleNavData?.map((e, i) => (
            <li
              key={i}
              className="baseitem hidden 
          sm:hidden
          md:hidden
          lg:flex
          tel:hidden
          justify-center
          xl:flex
          2xl:flex
          
          items-center flex-col xl:mr-16 sm:mr-10"
            >
              <Link
                href={e.link}
                className="baseitem flex justify-center items-center flex-col mr-16"
              >
                <Image width={23} height={23} src={e.url} alt={e.title} />
                <p className="text-sm hidden xl:block">{e.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <BottomNav />
    </div>
  );
}

export default MiddleNav;
