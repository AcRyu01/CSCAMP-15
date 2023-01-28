import React, { Component } from "react";
import Image from "next/image";
import kmitl_logo from "@/assets/images/kmitl_logo.jpg";
import camp_logo from "@/assets/images/camp_logo.jpg";
import facebook from "@/assets/images/facebook.png";
import instagram from "@/assets/images/instagram.png";
import twitter from "@/assets/images/twitter.png";
import mail from "@/assets/images/email.png";
import telephone from "@/assets/images/phone-call.png";

function Footer() {
  let contact = [
    {
      img: facebook,
      name: "CS CAMP KMITL",
      ref: "https://web.facebook.com/cskmitl.camp",
    },
    {
      img: instagram,
      name: "@cskmitl",
      ref: "https://www.instagram.com/cskmitl/",
    },
    {
      img: twitter,
      name: "@cscamp.kmitl",
      ref: "https://twitter.com/cskmitlcamp",
    },
    {
      img: mail,
      name: "kmitlcscamp@gmail.com",
      ref: "mailto:kmitlcscamp@gmail.com",
    },
    {
      img: telephone,
      name: "CS CAMP KMITL",
      ref: "tel:0655523965",
    },
  ];
  return (
    <div className="text-concrete-100 bg-domino-500 w-full h-auto  flex justify-between">
      <div className="w-[271px] h-[266px] pt-[12px] pl-[10px] 2xl:pt-[11px] 2xl:pl-[30px]">
        <div className="text-[24px] 2xl:text-[32px]">ช่องทางการติดต่อ</div>
        <ul className="">
          {contact.map((contact) => (
            <li key={contact.name} className="pt-[12px] pl-[32px] ">
              <a href={contact.ref} className="flex items-center">
                <Image
                  className="w-[18.5px] h-[18.5px] 2xl:w-[32px] 2xl:h-[32px] mr-4 rounded-full invert"
                  src={contact.img}
                />
                {contact.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative right-[22px] top-[25px] ">
        <div className="relative flex left-[270px] 2xl:left-[350px] pb-[33px] 2xl:pb-[56px]">
          <Image
            className=" w-[58px] h-[58px] 2xl:w-[100px] 2xl:h-[100px] rounded-full mx-[21px] 2xl:mx-[33px]"
            src={camp_logo}
          />
          <Image
            className="w-[124px] h-[58px] 2xl:w-[215px] 2xl:h-[100px] rounded-md "
            src={kmitl_logo}
          />
        </div>
        <div className="  text-right text-[16px] 2xl:text-2xl pb-20">
          <div>จัดโดยคณะวิทยาศาสาตร์ สาขาวิทยาการคอมพิวเตอร์</div>
          <div>
            สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง เลขที่ 1 ซอยฉลองกรุง
            1
          </div>
          <div> แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพฯ 10520</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
