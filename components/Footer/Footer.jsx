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
      name: "0655523965",
      ref: "tel:0655523965",
    },
  ];
  return (
    <div
      id="contact"
      className="text-concrete-100 overflow-hidden bg-domino-500 w-full h-auto  table-row md:flex md:justify-between"
    >
      <div className="w-[271px] h-[266px] m-auto md:m-0 pt-[12px] md:pl-[10px] 2xl:pt-[11px] 2xl:pl-[30px]">
        <div className="text-center md:text-left text-[24px] 2xl:text-[32px] border-b md:border-0">
          ช่องทางการติดต่อ
        </div>
        <ul className="">
          {contact.map((contact) => (
            <li key={contact.name} className="pt-[12px] pl-[32px] ">
              <a
                href={contact.ref}
                className="flex items-center"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="w-[18.5px] h-[18.5px] 2xl:w-[32px] 2xl:h-[32px] mr-4 rounded-full invert"
                  src={contact.img}
                  alt="contact"
                />
                {contact.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className=" relative  md:mx-[22px] top-[25px] ">
        <div className="relative justify-center md:justify-end flex pb-[33px] 2xl:pb-[56px]">
          <Image
            className=" w-auto h-[58px] 2xl:w-[100px] 2xl:h-[100px] rounded-full mx-[21px] 2xl:mx-[33px]"
            src={camp_logo}
            alt="camp_logo"
          />
          <Image
            className="w-auto h-[58px] 2xl:w-[215px] 2xl:h-[100px] rounded-md "
            src={kmitl_logo}
            alt="kmitl_logo"
          />
        </div>
        <div className=" text-center md:text-right text-[16px] 2xl:text-2xl pb-20">
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
