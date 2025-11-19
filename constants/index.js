import { SlScreenSmartphone } from "react-icons/sl";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { SiYoutubegaming } from "react-icons/si";

const navMenu = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/",
  },
  {
    title: "Contact Us",
    link: "/",
  },
  {
    title: "Blog",
    link: "/",
  },
];

const catagoryItems = [
  {
    icon: <SlScreenSmartphone />,
    text: "Phones",
  },
  {
    icon: <BsSmartwatch />,
    text: "Smart Watches",
  },
  {
    icon: <CiCamera />,
    text: "Cameras",
  },
  {
    icon: <CiHeadphones />,
    text: "Headphones",
  },
  {
    icon: <HiOutlineComputerDesktop />,
    text: "Computers",
  },
  {
    icon: <SiYoutubegaming />,
    text: "Gaming",
  },
];

const showCaseData = [
  {
    image: "/images/popular.png",
    title: "Popular Products",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    bgColor: "bg-[#ffffff]",
    textColor: "black",
  },
  {
    image: "/images/ipad.png",
    title: "Ipad Pro",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    bgColor: "bg-[#F9F9F9]",
    textColor: "black",
  },
  {
    image: "/images/galaxy.png",
    title: "Samsung Galaxy",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    bgColor: "bg-[#EAEAEA]",
    textColor: "black",
  },
  {
    image: "/images/macbook.png",
    title: "Macbook Pro",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    bgColor: "bg-[#2C2C2C]",
    textColor: "white",
  },
];

export { navMenu, catagoryItems, showCaseData };
