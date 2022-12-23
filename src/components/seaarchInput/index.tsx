import Image from "next/image";
import { useRef, useState } from "react";

function Search() {
  const [show, setShow] = useState(false);
  const inpRef = useRef<any>(null);
  function handleCancel(e: any) {
    if (e.target.value) {
      setShow(true);
    } else if ((e.target.value = '')) {
      setShow(false);
    }
  }
  return (
    <div className="search relative w-full lg:w-[30rem] h-10">
      <select className="absolute h-8 top-1 left-1 bg-[#F7F7F7] outline-[#F7F7F7] hidden lg:block">
        <option value="hey">Hey</option>
        <option value="yo">Heydasdas</option>
      </select>
      <input
        onChange={handleCancel}
        type="text"
        className="border-primary border-2 rounded-md w-full h-full lg:pl-[7rem] tel:pr-16 focus:border-primary active:border-primary enabled:border-primary outline-primary"
        ref={inpRef}
      />
      {show && (
        <Image
          src="/assets/svg/cancel.png"
          width={15}
          height={15}
          alt="cancel"
          className="absolute top-3 right-12 cursor-pointer"
          onClick={() => {
            inpRef.current.value = null;
            setShow(false);
          }}
        />
      )}

      <div className="absolute top-0 right-0 bg-primary h-10 rounded-md w-10 flex justify-center items-center">
        <Image
          src="/assets/svg/search.png"
          alt="search"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
}

export default Search;
