"use client";
import React, { useState } from "react";
import logo from "../../../public/images/Logo.png";
import { GiHamburgerMenu, GiTireIronCross } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";
import { navMenu } from "../../../constants";
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";

const ResNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="lg:hidden w-full">
        <div>
          <div className="main flex items-center justify-between px-6 py-6">
            <div className="logo w-16">
              <Image src={logo} alt="logo" />
            </div>

            <div className="search flex items-center w-[120px] h-8 px-4 py-4 gap-2 bg-[#F5F5F5] rounded-lg">
              <CiSearch className="text-2xl text-secText" />
              <input
                className="w-full outline-none border-none text-sm text-black placeholder:text-secText font-medium"
                type="text"
                placeholder="Search..."
              />
            </div>

            <div
              onClick={() => setShowMenu(true)}
              className="menu cursor-pointer text-black text-2xl"
            >
              <GiHamburgerMenu />
            </div>
          </div>
        </div>

        {showMenu && (
          <div className="menu w-full h-screen bg-white absolute left-0 top-0 z-50">
            <div className="main flex items-center justify-between px-6 py-6">
              <div className="logo w-16">
                <Image src={logo} alt="logo" />
              </div>

              <div
                onClick={() => setShowMenu(!showMenu)}
                className="menu cursor-pointer text-cofee text-2xl"
              >
                <GiTireIronCross />
              </div>
            </div>

            <div className="flex flex-col items-center gap-10 mt-15">
              {navMenu.map((item, id) => (
                <Link
                  className="text-sm text-secText hover:text-black font-medium"
                  key={id}
                  href={item.link}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {/* --------reg and login button---- */}
            <div className="buttons text-2xl text-black flex items-center justify-center gap-6 mt-10">
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
        )}
      </div>
    </>
  );
};

export default ResNav;
