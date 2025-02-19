import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./../assets/Images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiPlus,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

const Header = () => {
  const navigate = useNavigate(); // Initialize navigation
  const menu = [
    { name: "HOME", icon: HiHome, path: "/" },
    { name: "SEARCH", icon: HiMagnifyingGlass, path: "/search" },
    { name: "WATCH LIST", icon: HiPlus, path: "#" },
    { name: "ORIGINALS", icon: HiStar, path: "#" },
    { name: "MOVIES", icon: HiPlayCircle, path: "#" },
    { name: "SERIES", icon: HiTv, path: "#" },
  ];

  const [toggle, setToggle] = useState(false);
  const clicked = () => setToggle(!toggle);

  return (
    <div className="flex gap-2 items-center justify-between ml-2 mr-5 p-5">
      <div className="flex gap-8 items-center">
        <img src={logo} alt="Logo" className="w-[80px] md:w-[120px] object-cover" />

        <div className="hidden md:flex gap-6">
          {menu.map((item, index) => (
            <div key={index} onClick={() => navigate(item.path)} className="cursor-pointer">
              <HeaderItem name={item.name} Icon={item.icon} />
            </div>
          ))}
        </div>

        <div className="flex md:hidden gap-5">
          {menu.slice(0, 3).map((item, index) => (
            <div key={index} onClick={() => navigate(item.path)} className="cursor-pointer">
              <HeaderItem name={""} Icon={item.icon} />
            </div>
          ))}
          <div className="md:hidden" onClick={clicked}>
            <HeaderItem key="menu-toggle" name={""} Icon={HiDotsVertical} />
            {toggle && (
              <div className="absolute bg-[#111115] mt-3 px-5 p-4 rounded-sm border-[1px] border-gray-600">
                {menu.slice(3).map((item, index) => (
                  <div key={index + 3} onClick={() => navigate(item.path)} className="cursor-pointer">
                    <HeaderItem name={item.name} Icon={item.icon} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" className="w-[40px] rounded-full" />
    </div>
  );
};

export default Header;
