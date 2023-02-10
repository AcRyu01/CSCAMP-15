import React from "react";
import Image from "next/image";
import WebFooter from "@/assets/images/WebFooter.png";
import samsung from "@/assets/images/samsung.png";
import borntoDev from "@/assets/images/borntoDev.png";
import DPTF from "@/assets/images/DPTF.png";
import FLG from "@/assets/images/FLG.png";

function Sponsor() {
  let sponsor = [
    {
      img: samsung,
      name: "samsung",
    },
    {
      img: borntoDev,
      name: "borntoDev",
    },
    {
      img: FLG,
      name: "FLG",
    },
    {
      img: DPTF,
      name: "DPTF",
    },
  ];

  return (
    <div>
      <div className="absolute w-full bottom-0 z-0">
        <Image src={WebFooter} alt="WebFooter" className="w-full " />
      </div>
      <div className="relative xs:mb-[338px] md:mb-[300px] 2xl:mb-[450px]  bg-black  bg-opacity-40  z-auto">
        <div className="  text-white md:text-[24px] 2xl:text-[36px] text-center pt-[24px] ">
          <div className="">สนับสนุนโดย</div>
          <ul className="flex flex-wrap   md:text-[20px] 2xl:text-[36px] justify-center  items-center">
            {sponsor.map((logo) => (
              <li key={logo.name} className="py-[24px] md:py-[12px] ">
                <Image
                  className="w-[75px]  2xl:w-[150px] mx-[45px] 2xl:mx-[90px]"
                  src={logo.img}
                  alt="sponsor"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
