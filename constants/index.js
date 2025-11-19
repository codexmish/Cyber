import { SlScreenSmartphone } from "react-icons/sl";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { SiYoutubegaming } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

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

const footerServices = [
  {
    title: "Bonus program",
    link: "/",
  },
  {
    title: "Gift cards",
    link: "/",
  },
  {
    title: "Credit and payment",
    link: "/",
  },
  {
    title: "Service contracts",
    link: "/",
  },
  {
    title: "Non-cash account",
    link: "/",
  },
  {
    title: "Payment",
    link: "/",
  },
];

const footerAssistance = [
  {
    title: "Find an order",
    link: "/",
  },
  {
    title: "Terms of delivery",
    link: "/",
  },
  {
    title: "Exchange and return of goods",
    link: "/",
  },
  {
    title: "Guarantee",
    link: "/",
  },
  {
    title: "Frequently asked questions",
    link: "/",
  },
  {
    title: "Terms of use of the site",
    link: "/",
  },
];

const footerIcons = [
  {
    icons: <FaTwitter />,
    link: "/",
  },
  {
    icons: <FaFacebookF />,
    link: "/",
  },
  {
    icons: <FaTiktok />,
    link: "/",
  },
  {
    icons: <AiFillInstagram />,
    link: "/",
  }
];

export {
  navMenu,
  catagoryItems,
  showCaseData,
  footerServices,
  footerAssistance,
  footerIcons
};
