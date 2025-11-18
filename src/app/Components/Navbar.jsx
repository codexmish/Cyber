"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CiSearch, CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { navMenu } from "../../../constants";
import Link from "next/link";
import Cart from "./Cart";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <nav className="hidden lg:block">
        <div className="container flex items-center justify-between gap-14 py-4">
          {/* --------logo----- */}
          <div className="logo">
            <Image width={65} height={22} src="/images/Logo.png" alt="logo" />
          </div>

          {/* -------search------ */}
          <div className="search flex items-center w-[372px] h-14 px-4 py-4 gap-2 bg-[#F5F5F5] rounded-lg">
            <CiSearch className="text-2xl text-secText" />
            <input
              className="w-full outline-none border-none text-sm text-black placeholder:text-secText font-medium"
              type="text"
              placeholder="Search..."
            />
          </div>

          {/* ------menu----- */}
          <div className="flex items-center gap-13">
            {navMenu.map((item, key) => (
              <Link
                className="text-base text-secText hover:text-black font-medium"
                key={key}
                href={item.link}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* ......icons------- */}
          <div className="text-3xl flex items-center gap-6">
            <button className="wishlist cursor-pointer">
              <CiHeart />
            </button>
            <button className="cart cursor-pointer" onClick={()=>setShowCart(true)}>
              <IoCartOutline />
            </button>
            <Link href={"/"} className="user cursor-pointer">
              <LuUser />
            </Link>
          </div>
        </div>
        {showCart && <Cart cartok={setShowCart} isopen={showCart} />}

      </nav>
    </>
  );
};

export default Navbar;
