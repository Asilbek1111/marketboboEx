import topNavData from "./data";
import Image from "next/image";
function TopNav() {
  return (
    <div className="topNav bg-black text-white bg-topnav sm:hidden lg:block hidden xl:block 2xl:block">
      <div className="w-full flex p-2 justify-between px-10">
        <div className="nav-wrap-left flex justify-around">
          <div className="place flex">
            <span>
              <Image
                alt="Location"
                width={20}
                height={20}
                src="/assets/svg/loc4.svg"
                className="mr-1"
              />
            </span>{" "}
            Toshkent
          </div>
          <ul className="list flex list-none ml-5">
            {topNavData?.map((e, i) => (
              <li
                className="2xl:ml-3 xl:ml-3 sm:ml-3 sm:text-[12px] 2xl:text-[17px] "
                key={i}
              >
                {e.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="nav-wrap-right flex">
          <span className="md:hidden xl:hidden 2xl:block">Aлоқа маркази :</span>
          <h3 className="ml-2"> +99871 209 99 44</h3>
          <select className="bg-[#333333] ml-4">
            <option value="uz">Uzbek</option>
            <option value="uz">English</option>
            <option value="uz">Korean</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
