import React from "react";
import Image from "next/image";
import Container from "@/components/Layout/Container";
import WebFooter from "@/assets/images/WebFooter.png";

function Sponsor() {
  return (
    <div>
      <div className="absolute w-full bottom-0">
        <Image src={WebFooter} alt="WebFooter" className="w-full " />
      </div>
      <div className="relative h-[272px] md:mb-[300px] 2xl:mb-[450px]  bg-black  bg-opacity-40  z-auto">
        <div className="  text-white md:text-[24px] 2xl:text-[36px] text-center space-y-[55px] pt-[24px]">
          <div className="">สนับสนุนโดย</div>
          <div className="flex space-x-[67px] md:text-[20px] 2xl:text-[36px] justify-around flex-warp">
            <div>sponsor</div>
            <span>sponsor</span>
            <div>sponsor</div>
            <div>sponsor</div>
            <span>sponsor</span>
            <div>sponsor</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
