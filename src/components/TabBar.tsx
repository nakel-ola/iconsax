import clsx from "clsx";
import React, { Fragment } from "react";
import useScroll from "../hooks/useScroll";

export type Variant =
  | "Linear"
  | "Outline"
  | "Broken"
  | "Bold"
  | "Bulk"
  | "TwoTone";

interface TabBarProps {
  active: Variant;
  onClick(value: Variant): void;
}
const TabBar = (props: TabBarProps) => {
  const { active = "Outline", onClick } = props;
  const scroll = useScroll(200);

  return (
    <div className={clsx("w-[100%] lg:w-[50%] flex items-center justify-between px-8 py-2 sticky top-[59px] bg-white z-50 ", scroll ? "border-b lg:border-0" : "")}>
      <div className="w-full flex rounded-xl overflow-hidden border-[1px] ">
        {["Outline", "Bold", "Bulk", "Linear", "TwoTone", "Broken"].map(
          (item, index) => (
            <Fragment key={index}>
              <button
                className={clsx(
                  "h-[42px]  px-2 flex-1 text-center font-medium transition-all duration-300 hover:bg-slate-100 hover:scale-105 active:scale-95",
                  item === active ? "bg-slate-100" : ""
                )}
                onClick={() => onClick(item as Variant)}
              >
                {item}
              </button>
            </Fragment>
          )
        )}
      </div>
    </div>
  );
};

export default TabBar;
