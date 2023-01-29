import Image from "next/image";
import discord from "assets/images/discord_logo.png";
import vscode from "assets/images/vscode_logo.png";
import discord_link from "assets/images/discord_link.png";
import download_link from "assets/images/download_link.png";
import vscode_link from "assets/images/vscode_link.png";
import paper from "assets/images/paper.png";

function ProgramUse() {
  return (
    <>
      <div className=" xs:pt-[95px] md:pt-[97px] 2xl:pt-[204px] text-white text-center ">
        <div className="text-[48px] 2xl:text-[96px] ">
          โปรแกรมที่ใช้ในกิจกรรม
        </div>
        <div className="relative w-[293px] md:w-auto m-auto md:flex  justify-center xs:mt-[75px] md:mt-[60px] 2xl:mt-[188px] md:space-x-[64px] 2xl:space-x-[56px]">
          <div>
            <Image
              src={paper}
              className="m-auto absolute md:relative w-[293px] 2xl:w-[570px]"
            />
            <div className="relative md:absolute w-auto h-auto top-[-50px] 2xl:top-[-100px]  px-[30px] 2xl:px-[56px]">
              <Image
                src={discord}
                className="relative w-[100px] 2xl:w-[200px] m-auto"
              />
              <div>
                <div className=" md:text-[32px] 2xl:text-[48px] 2xl:leading-[76px] text-tiber-900  ">
                  Discord
                </div>
                <div className="border-[4px] border-black  opacity-50 rounded   mt-[22px] mb-[41px]"></div>
                <div className="md:w-[241.81px] 2xl:w-[471px] md:text-[20px] 2xl:text-[32px] text-tundora-700 whitespace-normal">
                  <div>เราจะใช้ Discord </div>
                  <div>ในการสื่อสารกันเป็นหลัก</div>
                  <div>รวมไปถึงใช้ในการเรียนการสอนด้วย</div>
                </div>
              </div>
              <div className="relative flex space-x-[32px]  2xl:space-x-[64px] justify-center mt-[92px] md:mt-[10.5px] 2xl:mt-[185px]">
                <a href="https://discord.com/download">
                  <Image
                    src={discord_link}
                    className="w-[101px]  2xl:w-[197px]  rounded-[10px]"
                  />
                </a>
                <a href="https://discord.com/download">
                  <Image
                    src={download_link}
                    className="w-[101px] 2xl:w-[197px] rounded-[10px]"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-[97px] md:mt-0">
            <Image
              src={paper}
              className="m-auto absolute md:relative w-[293px] 2xl:w-[570px] "
            />
            <div className="relative md:absolute w-auto h-auto top-[-50px] 2xl:top-[-100px]  px-[30px] md:px-[15px] 2xl:px-[56px]">
              <Image
                src={vscode}
                className="relative w-[100px] 2xl:w-[200px] m-auto"
              />
              <div>
                <div className=" md:text-[32px] 2xl:text-[48px] 2xl:leading-[76px] text-tiber-900  ">
                  Visual Studio Code
                </div>
                <div className="border-[4px] border-black  opacity-50 rounded   mt-[22px] mb-[41px]"></div>
                <div className="md:w-auto 2xl:w-[471px] md:text-[20px] 2xl:text-[32px] text-tundora-700 whitespace-normal">
                  <div> ใช้ Visual Studio Code เป็น editor</div>
                  <div>ในการเขียนโค้ดภาษาไพทอน</div>
                  <div>ซึ่งถ้าน้อง ๆ ถนัดใช้ตัวอื่น ๆ </div>
                  ก็สามารถใช้ได้เช่นกัน
                </div>
              </div>
              <div className="relative flex space-x-[32px]  2xl:space-x-[64px] justify-center mt-[65px] md:mt-[10.5px] 2xl:mt-[130px]">
                <a href="https://code.visualstudio.com/">
                  <Image
                    src={vscode_link}
                    className="w-[101px]  2xl:w-[197px]  rounded-[10px]"
                  />
                </a>
                <a href="https://code.visualstudio.com/download">
                  <Image
                    src={download_link}
                    className="w-[101px] 2xl:w-[197px] rounded-[10px]"
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
{
  /* */
}
export default ProgramUse;
