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
      name: "@cscamp.kmitl",
      ref: "https://www.instagram.com/cscamp.kmitl",
    },
    {
      img: twitter,
      name: "@cscamp.kmitl",
      ref: "https://twitter.com/cskmitlcamp",
    },
    {
      img: mail,
      name: "kmitlcscamp15@gmail.com",
      ref: "mailto:kmitlcscamp15@gmail.com",
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
      className="text-concrete-100 overflow-hidden bg-[#927B59] w-full h-[275px] md:h-auto "
    >
      <div className="flex justify-between">
        <div className="w-[271px] h-[266px]  m-0 pt-[18px] md:pl-[30px] 2xl:pt-[11px] ml-[21px]">
          <div className="text-left text-[16px] md:text-[24px] 2xl:text-[32px] ">
            ช่องทางการติดต่อ
          </div>
          <ul className="">
            {contact.map((contact) => (
              <li
                key={contact.ref}
                className="pt-[3px] md:pt-[12px] pl-[17px] md:pl-[32px] text-[13px] md:text-[16px] 2xl:text-[18px] "
              >
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
        <div className=" relative md:mx-[22px] top-[25px] ">
          <div className="relative md:justify-end flex flex-col md:flex-row pr-[13px] pb-[33px] 2xl:pb-[56px]">
            <Image
              className="ml-12 w-[45px] md:w-auto h-[43px] md:h-[58px]  2xl:h-[100px] rounded-full mb-[11px] md:mx-[21px] 2xl:mx-[33px]"
              src={camp_logo}
              alt="camp_logo"
            />
            <Image
              className="w-[91px] md:w-auto h-[43px] md:h-[58px]  2xl:h-[100px] rounded-[10px] "
              src={kmitl_logo}
              alt="kmitl_logo"
            />
          </div>
          <div className="hidden md:inline text-right md:text-[16px] 2xl:text-2xl pb-20 px-[24px]">
            <div>จัดโดยคณะวิทยาศาสาตร์ สาขาวิทยาการคอมพิวเตอร์</div>
            <div>
              สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง เลขที่ 1
              <span className="hidden 2xl:inline"> ซอยฉลองกรุง 1</span>
            </div>

            <div>
              <span className="inline 2xl:hidden">ซอยฉลองกรุง 1 </span>
              แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพฯ 10520
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden relative md:hidden text-left md:text-[16px] 2xl:text-2xl px-[24px] top-[-80px]">
        <div>จัดโดยคณะวิทยาศาสาตร์ สาขาวิทยาการคอมพิวเตอร์</div>
        <div>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง เลขที่ 1</div>
        <div>ซอยฉลองกรุง 1 แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพฯ 10520</div>
      </div>
    </div>
  );
}

export default Footer;
