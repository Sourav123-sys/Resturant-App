"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import toast from "react-hot-toast";
const UserLinks = () => {
  const { status } = useSession();
  const handleLogout = () => {
    signOut()
    toast.success('Successfully Logout')
  }
  return (
    <div>
      {status === "authenticated" ? (
        <div>
          <Link href="/orders">Orders</Link>
          <span className="ml-4 cursor-pointer" onClick={ handleLogout }>Logout</span>
        </div>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
};

export default UserLinks;
