import React from "react";
import disney from "./../assets/Images/disney.png";
import marvel from "./../assets/Images/marvel.png";
import nationalG from "./../assets/Images/nationalG.png";
import pixar from "./../assets/Images/pixar.png";
import starwar from "./../assets/Images/starwar.png";

import starwarV from "./../assets/Videos/star-wars.mp4";
import disneyV from "./../assets/Videos/disney.mp4";
import marvelV from "./../assets/Videos/marvel.mp4";
import nationalGeographicV from "./../assets/Videos/national-geographic.mp4";
import pixarV from "./../assets/Videos/pixar.mp4";
const ProducitonHouse = () => {
  const productionHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: pixar,
      video: pixarV,
    },
    {
      id: 3,
      image: marvel,
      video: marvelV,
    },
    {
      id: 4,
      image: starwar,
      video: starwarV,
    },
    {
      id: 5,
      image: nationalG,
      video: nationalGeographicV,
    },
  ];
  return(
        <div className="flex gap-2 md:gap-4 p-2 px-5 md:px-16 ">
        {productionHouseList.map((item)=>(
            <div key={item.id}  className="border-[2px] rounded-md hover:scale-110 shadow-xl relative shadow-gray-950 transition-all  ease-in-out cursor-pointer ">
              
                <img src={item.image} alt=""  className="z-[1] w-full"/>
                <video src={item.video}   muted  playsInline loop autoPlay className="absolute z-0 top-0 opacity-0 hover:opacity-75 rounded-md"></video>
                

            </div>
        ))}
        </div>
  )
  
};

export default ProducitonHouse;
