import { MenuType } from "@/types/types";
import Link from "next/link";
import React from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error("Failed!");

  }

  return res.json()
}

const Menu = async () => {

  const menu: MenuType = await getData()
  //console.log(menu,"menu");


  return (

    <div className="p-8 md:p-36 h-full w-full flex flex-col md:flex-row items-center justify-center ">
  {menu.map((category) => (
    <Link
      href={`/Menu/${category.slug}`}
      key={category.id}
      className="w-full h-1/3 bg-cover pb-24 pt-10 px-8 md:h-1/2"
      style={{ backgroundImage: `url(${category.img})` }}
    >
      <div className={`text-${category.color}`}>
        <h1 className="uppercase font-bold text-2xl">{category.title}</h1>
        <p className="text-xl my-5">{category.description}</p>
        <button
          className={`${category.color === "black" ? "bg-black" : "bg-white"} ${
            category.color === "black" ? "text-white" : "text-red-500"
          } py-2 px-4 rounded-md`}
        >
          Explore
        </button>
      </div>
    </Link>
  ))}
</div>



  );
};

export default Menu;
