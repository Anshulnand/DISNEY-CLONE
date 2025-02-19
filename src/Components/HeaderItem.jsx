import React from "react";

const HeaderItem = ({ name, Icon }) => {
  return (
    <div className="group text-white flex items-center gap-1 text-[18px] font-semibold cursor-pointer relative">
      <Icon className="text-white w-4 h-4" />
      <h2 className="relative ">
        {name}
        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>

      </h2>
    </div>
  );
};

export default HeaderItem;
