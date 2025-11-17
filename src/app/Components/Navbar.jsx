import Image from "next/image";
import React from "react";
import { CiSearch, CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { navMenu } from "../../../constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="hidden lg:block">
        <div className="container flex items-center justify-center gap-14 py-4">
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
            <button className="wishlist">
              <CiHeart />
            </button>
            <button className="wishlist">
              <IoCartOutline />
            </button>
            <Link href={"/"} className="wishlist">
              <LuUser />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
