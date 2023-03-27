import { AnimatePresence } from "framer-motion";
import { SearchNormal1 } from "iconsax-react";
import dynamic from "next/dynamic";
import React, { ChangeEvent, useState } from "react";
import { IoClose } from "react-icons/io5";
import IconsList from "../components/IconsList";
import Installation from "../components/Installation";
import Navbar from "../components/Navbar";
import TabBar, { Variant } from "../components/TabBar";
import { IconType } from "../data/icons";
import { useLockBodyScroll } from "../hooks/useLockBodyScroll";

const IconDetails = dynamic(() => import("../components/IconDetails"), {
  ssr: false,
});

export interface SearchbarProps {
  value: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  onClear(): void;
}

function Searchbar(props: SearchbarProps) {
  const { onChange, value, onClear } = props;
  return (
    <div className="w-[90%] lg:w-[40%] shadow-md h-[50px] rounded-xl my-5 flex items-center px-2 border-[1px] border-gray-200">
      <SearchNormal1 className="text-gray-600" />
      <input
        type="text"
        placeholder="Search icons.."
        className="ml-2 flex-1 text-lg border-0 outline-0"
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
}

const Home = () => {
  const [input, setInput] = useState("");
  const [active, setActive] = useState<Variant>("Outline");
  const [details, setDetails] = useState<IconType | null>(null);
  const [toggle, setToggle] = useState(false);

  useLockBodyScroll(toggle);

  return (
    <div>
      <Navbar
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onClear={() => setInput("")}
        onInstallClick={() => setToggle(true)}
      />

      <div className="grid place-items-center">
        <div className="lg:w-[60%] w-full">
          <p className="text-[32px] lg:text-[46px] text-center">
            Hello welcome to icon<strong>sax</strong> the official icons of the{" "}
            <strong>Vuesax</strong> framework
          </p>
        </div>
        <Searchbar
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onClear={() => setInput("")}
        />

        <TabBar active={active} onClick={(value) => setActive(value)} />

        <IconsList
          query={input}
          variant={active}
          onIconClick={(icon: IconType) => setDetails(icon)}
        />
      </div>

      <AnimatePresence>
        {details && (
          <IconDetails
            {...details}
            variant={active}
            onClear={() => setDetails(null)}
          />
        )}

        {toggle && <Installation onClose={() => setToggle(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default Home;
