import { matchSorter } from "match-sorter";
import React from "react";
import icons, { IconType } from "../data/icons";
import { Variant } from "./TabBar";

interface IconsListProps {
  query: string;
  variant: Variant;
  onIconClick(icon: IconType): void;
}
const IconsList = (props: IconsListProps) => {
  const { query, variant, onIconClick } = props;
  let filteredIcons = query
    ? matchSorter(icons, query.replace(/\s+/, "-"), { keys: ["name"] })
    : icons;

  return (
    <div className="w-[95%] lg:w-[50%] flex flex-wrap justify-center">
      {filteredIcons.map((icon, index) => (
        <Card
          key={index}
          {...icon}
          variant={variant}
          onIconClick={onIconClick}
        />
      ))}
    </div>
  );
};

interface CardProps extends IconType {
  variant: Variant;
  onIconClick(icon: IconType): void;
}

const Card = (props: CardProps) => {
  const { icon: Icon, name, variant, onIconClick } = props;
  return (
    <button
      className="h-[70px] w-[70px] hover:shadow-md rounded-lg m-1 flex items-center justify-center hover:scale-105 active:scale-95"
      onClick={() => onIconClick({ icon: Icon, name })}
    >
      <Icon size={30} variant={variant} />
    </button>
  );
};

export default IconsList;
