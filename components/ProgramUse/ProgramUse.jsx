import Image from "next/image";
import discord from "assets/images/discord_logo.webp";
import vscode from "assets/images/vscode_logo.webp";
import discord_link from "assets/images/discord_link.webp";
import download_link from "assets/images/download_link.webp";
import vscode_link from "assets/images/vscode_link.webp";
import python_link from "assets/images/python_link.webp";
import paper from "assets/images/paper.webp";
import LineCard from "assets/images/LineCard_h.webp";

function ProgramUse() {
  return (
    <>
      <div
        id="programUse"
        className="relative  xs:pt-[95px] md:pt-[97px] 2xl:pt-[204px] mb-64 md:mb-32 2xl:mb-56 text-white text-center z-10"
      >
        <div className="text-3xl md:text-4xl xl:text-[3vw] 2xl:text-[4.2vw] text-[#F2F2F2] font-bold">
          โปรแกรมที่ใช้ในกิจกรรม
        </div>
        <div className="relative w-[293px] md:w-auto m-auto md:flex  justify-center xs:mt-[75px] md:mt-[80px] 2xl:mt-[128px] md:space-x-[64px] 2xl:space-x-[56px]">
          <div>
            <Image
              src={paper}
              className="m-auto absolute md:relative w-[293px] 2xl:w-[427px]"
              alt="paper"
            />
            <div className="relative md:absolute w-auto h-auto top-[-50px] 2xl:top-[-75px]   px-[30px] md:px-[7px] 2xl:px-[30px]">
              <Image
                src={discord}
                className="relative w-[75px] 2xl:w-[150px] m-auto dropShadow"
                alt="discord"
              />
              <div>
                <div className=" md:text-[32px] 2xl:text-[48px] 2xl:leading-[76px] text-tiber-900 md:mt-[15px] mt-[20px]">
                  Discord
                </div>
                <div>
                  <Image
                    src={LineCard}
                    className="md:w-[241px] 2xl:w-[360px] m-auto"
                    alt="LineCard"
                  />
                </div>
                <div className=" md:text-[20px] 2xl:text-[24px] text-tundora-700 whitespace-normal mt-[18px] mx-auto">
                  <div>เราจะใช้ Discord </div>
                  <div>ในการสื่อสารกันเป็นหลัก</div>
                  <div>รวมไปถึงใช้ในการเรียนการสอนด้วย</div>
                </div>
              </div>
              <div className="relative flex space-x-[32px]   justify-center mt-[92px] md:mt-[100px] 2xl:mt-[135px]">
                <a href="https://discord.com" target="_blank" rel="noreferrer">
                  <Image
                    src={discord_link}
                    className="w-[101px]  2xl:w-[150px]  rounded-[10px] dropShadow"
                    alt="discord_link"
                  />
                </a>
                <a
                  href="https://discord.com/download"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={download_link}
                    className="w-[101px] 2xl:w-[150px] rounded-[10px] dropShadow"
                    alt="download_link"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-[97px] md:mt-0">
            <Image
              src={paper}
              className="m-auto absolute md:relative w-[293px] 2xl:w-[427px] "
              alt="paper"
            />
            <div className="relative md:absolute w-auto h-auto top-[-50px] 2xl:top-[-75px]   px-[30px] md:px-[19px] 2xl:px-[30px]">
              <Image
                src={vscode}
                className="relative w-[75px] 2xl:w-[150px] m-auto dropShadow"
                alt="vscode"
              />
              <div>
                <div className=" md:text-[32px] 2xl:text-[36px] 2xl:leading-[76px] text-tiber-900 md:mt-[15px] mt-[20px]">
                  Visual Studio Code
                </div>
                <div>
                  <Image
                    src={LineCard}
                    className="md:w-[241px] 2xl:w-[360px] m-auto"
                    alt="LineCard"
                  />
                </div>
                <div className="md:text-[20px] 2xl:text-[24px] text-tundora-700 whitespace-normal mt-[18px]">
                  <div>
                    ใช้ Visual Studio Code เป็น
                    <span className="hidden 2xl:inline"> editor</span>
                  </div>
                  <div>
                    <span className="inline 2xl:hidden">editor </span>
                    ในการเขียนโค้ด
                    <span className="hidden 2xl:inline">ภาษาไพทอน</span>
                  </div>
                  <div>ซึ่งถ้าน้อง ๆ ถนัดใช้ตัวอื่น ๆ </div>
                  ก็สามารถใช้ได้เช่นกัน
                </div>
              </div>
              <div className="absolute hidden 2xl:flex md:w-auto bottom-[64px] left-1/3">
                <a
                  href="https://www.python.org/downloads/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={python_link}
                    className="w-[101px]  2xl:w-[150px]  rounded-[10px] dropShadow"
                    alt="python_link"
                  />
                </a>
              </div>
              <div className="relative flex space-x-[32px]  2xl:space-x-[64px] justify-center  mt-[65px] md:mt-[67px] 2xl:mt-[100px]">
                <a
                  href="https://code.visualstudio.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={vscode_link}
                    className="w-[101px]  2xl:w-[150px]  rounded-[10px] dropShadow"
                    alt="vscode_link"
                  />
                </a>
                <a
                  href="https://code.visualstudio.com/download"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={download_link}
                    className="w-[101px] 2xl:w-[150px] rounded-[10px] dropShadow"
                    alt="download_link"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProgramUse;
