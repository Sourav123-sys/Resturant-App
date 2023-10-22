import { MenuType } from "@/types/types";
import Link from "next/link";
import React from "react";

const getData = async ()=>{
  const res = await fetch("http://localhost:3000/api/categories",{
    cache:"no-store"
  })

  if(!res.ok){
    throw new Error("Failed!");
    
  }

  return res.json()
}

const Menu = async () => {

    const menu: MenuType = await getData()
    //console.log(menu,"menu");
  return (
  
<div className="p-4 lg:px-20 xl:px-40 h-full w-full flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-1/3 bg-cover py-4 px-8  md:h-1/2"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} `}>
            <h1 className="uppercase font-bold text-xl">{category.title}</h1>
            <p className="text-sm my-8">{category.description}</p>
            <button className={`bg-${category.color} text-${category.color === "text-black" ? "text-white" : "text-red-500"} py-2 px-4 rounded-md`}>Explore</button>
          </div>
        </Link>
      ))}
    </div>
 
    
  );
};

export default Menu;
