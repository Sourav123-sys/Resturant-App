import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" p-4 lg:px-20 xl:px-40 text-teal-600 flex items-center justify-between">
      <Link href="/" className="font-bold text-xl">FOOD HOUSE</Link>
      <p>© ALL RIGHTS RESERVED.</p>
    </div>
  );
};

export default Footer;
