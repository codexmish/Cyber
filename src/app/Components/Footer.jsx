import Image from "next/image";
import React from "react";
import {
  footerAssistance,
  footerIcons,
  footerServices,
} from "../../../constants";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="bg-black py-26">
        <div className="container">
          <div className="flex items-start justify-between">
            {/* ----------dentity part---- */}
            <div className="iden">
              <div className="logo">
                <Image
                  width={65}
                  height={22}
                  src="/images/LogoFooter.png"
                  alt="logo"
                />
              </div>
              <p className="text-sm text-[#CFCFCF] font-medium mt-6 max-w-[384px]">
                We are a residential interior design firm located in Portland.
                Our boutique-studio offers more than
              </p>
            </div>

            {/* -------services-------- */}

            <div className="servises">
              <h2 className="text-base text-white font-semibold">Services</h2>

              <div className="flex flex-col gap-3 mt-3">
                {footerServices.map((item, id) => (
                  <Link
                    className="text-sm text-[#CFCFCF] hover:text-white font-normal"
                    key={id}
                    href={item.link}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* -------assistance-------- */}

            <div className="servises">
              <h2 className="text-base text-white font-semibold">
                Assistance to the buyer
              </h2>

              <div className="flex flex-col gap-3 mt-3">
                {footerAssistance.map((item, id) => (
                  <Link
                    className="text-sm text-[#CFCFCF] hover:text-white font-normal"
                    key={id}
                    href={item.link}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ----social icons----- */}
          <div className="social flex items-center gap-9 mt-6">
            {footerIcons.map((item, id) => (
              <Link
                className="text-base text-white font-normal"
                key={id}
                href={item.link}
              >
                {item.icons}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
