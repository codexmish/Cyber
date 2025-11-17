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
    text: 'Phones'
  },
  {
    icon: <BsSmartwatch />,
    text: 'Smart Watches'
  },
  {
    icon: <CiCamera />,
    text: 'Cameras'
  },
  {
    icon: <CiHeadphones />,
    text: 'Headphones'
  },
  {
    icon: <HiOutlineComputerDesktop />,
    text: 'Computers'
  },
  {
    icon: <SiYoutubegaming />,
    text: 'Gaming'
  },
]

export { navMenu, catagoryItems };
