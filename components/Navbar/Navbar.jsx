import React, { useState } from "react";
import Button from "./Button";
import Image from "next/image";
import kmitl_logo from "@/assets/images/kmitl_logo.jpg";
import camp_logo from "@/assets/images/camp_logo.jpg";

function Navbar() {
  let Links = [
    { name: "แนะนำค่าย", href: "#intro" },
    { name: "เงื่อนไขการสมัคร", href: "#condition" },
    { name: "กำหนดการ", href: "#schedule" },
    { name: "ตารางเวลา", href: "#timetable" },
    { name: "โปรแกรมที่ใช้", href: "#programUse" },
    { name: "ช่องทางการติดต่อ", href: "#contact" },
  ];
  return (
    <div className=" hidden md:block border-b fixed z-50 border-white w-full h-auto top-0 left-0 ">
      <div className="flex items-center justify-between bg-jungle-mist-300 py-[5px] px-[8px] md:py-[4px] md:px-[13px] 2xl:py-[10px] 2xl:px-[30px]">
        <div className="flex">
          <Image
            className="w-[55px] h-[26px] md:h-[27px] md:w-[53px] 2xl:h-[48px] 2xl:w-[100px] rounded-md mr-[4px] md:mr-[13px] 2xl:mr-[50px]"
            src={kmitl_logo}
            alt="kmitl_logo"
          />
          <Image
            className="w-[26px] h-[26px] 2xl:h-[49px] 2xl:w-[50px] rounded-full"
            src={camp_logo}
            alt="camp_logo"
          />
        </div>
        <ul className="flex items-center text-[14px] 2xl:text-[24px] 2xl:leading-[27px]   left-0 md:w-auto md:pl-0 transition-all duration-500 ease-in">
          {Links.map((link) => (
            <li key={link.name} className="md:ml-7  md:z-auto z-[-1]">
              <a
                href={link.href}
                className="text-white hover:text-jungle-mist-600 hover:border-b-2 hover:border-jungle-mist-600 duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button>เข้าร่วม</Button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
