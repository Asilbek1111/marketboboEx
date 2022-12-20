import Image from "next/image";
import Link from "next/link";
import bottomNavData from "./data";
function BottomNav() {
  return (
    <div className="sm:hidden md:hidden lg:block xl-block 2xl:block bottomnav">
      <div className="flex justify-between items-center px-8 p-2">
        <button className=" bg-primary px-5 py-2 rounded-xl justify-between items-center hidden lg:flex">
          <Image
            src="/assets/svg/category.png"
            alt="category"
            width={30}
            height={30}
            className="mr-2"
          />
          <p className="font-semibold text-base">Categories</p>
        </button>
        <ul className="flex justify-between items-center">
          {bottomNavData?.map((e, i) => (
            <li key={i} className="mr-10 lg:mr-7 sm:mr-4">
              <Link
                className="xl:text-[1.1rem] lg:text-[1rem] sm:text-[0.8rem] font-thin hidden xl:block 2xl:block lg:block"
                href={e.url}
              >
                {e.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BottomNav;
