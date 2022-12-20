import topNavData from "../topNav/data";
import Image from "next/image";
function TopNavRes() {
  return (
    <div className="topNav bg-[#F7F7F7] text-white sm:hidden lg:block">
      <div className="w-full flex p-2 justify-between px-10 items-center">
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
          className="mr-1"
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
  );
}

export default TopNavRes;
