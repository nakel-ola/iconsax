import { SearchNormal1 } from "iconsax-react";
import React from "react";
import { IoClose } from "react-icons/io5";
import useScroll from "../hooks/useScroll";
import { SearchbarProps } from "../pages";

interface NavbarProps extends SearchbarProps {
  onInstallClick(): void;
}

const Navbar = (props: NavbarProps) => {
  const { onInstallClick, ...rest } = props;
  const scroll = useScroll(200);
  return (
    <div className="flex items-center justify-between py-[10px] px-[20px] sticky top-0 bg-white z-50">
      {/* logo */}

      <span className="flex items-center">
        <p className="text-[26px]">
          Icon<strong className="">sax</strong>
        </p>
      </span>
      {scroll && <SearchBar {...props} />}

      <button
        className="py-2 px-3 hover:scale-105 active:scale-95 hidden lg:flex"
        onClick={onInstallClick}
      >
        Installation
      </button>
    </div>
  );
};

const SearchBar = (props: SearchbarProps) => {
  const { onChange, value, onClear } = props;
  return (
    <div className="flex-[0.8] lg:flex-[0.5] flex bg-slate-100 py-[5px] rounded-xl px-1">
      <SearchNormal1 className="text-gray-600" />

      <input
        type="text"
        className=" flex-1 bg-transparent border-0 outline-none pl-2"
        placeholder="Search all icons..."
        value={value}
        onChange={onChange}
      />
      <button
        className="w-[25px] h-[25px] rounded-full bg-slate-100 flex items-center justify-center"
        onClick={onClear}
      >
        <IoClose />
      </button>
    </div>
  );
};

export default Navbar;
