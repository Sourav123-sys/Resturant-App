"use client"

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const CartIcon = () => {
  const { data: session, status } = useSession();

 

  


  return (
    <Link href={ "/cart"}>
      <div className="flex items-center gap-4">
        <div className="relative w-8 h-8 md:w-5 md:h-5">
          <Image
            src="/cart.png"
            alt=""
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
       
          <button className="p-2 bg-teal-500 text-white rounded-md">Add product</button>
        
      </div>
    </Link>
  );
};

export default CartIcon;
