import Image from "next/image";
import logoCamp from "@/assets/images/LogoCamp.png";
import Ship from "./Ship";

function Banner() {
  return (
    <>
      <div className="h-fit xl:h-[867px] bg-banner flex flex-col items-center overflow-hidden">
        {/* logo */}
        <div className="relative w-full h-[201px] mx-4">
          <Image
            src={logoCamp}
            alt="logo Camp"
            fill
            quality={100}
            className="object-contain"
          />
        </div>
        {/* timer */}
        <div className="flex flex-col gap-4 w-[80%] max-w-[300px] items-center">
          <p className="text-lg font-medium text-center">
            นับถอยหลังปิดรับลูกเรือ
          </p>
          <div className="flex w-full justify-between">
            <div className="flex flex-col items-center">
              <p className=" text-3xl font-normal text-white">5</p>
              <p className=" text-xs font-normal">DAYS</p>
            </div>
            <p className="text-3xl font-normal text-white"> : </p>
            <div className="flex flex-col items-center">
              <p className=" text-3xl font-normal text-white">20</p>
              <p className=" text-xs font-normal">HOURS</p>
            </div>
            <p className="text-3xl font-normal text-white"> : </p>
            <div className="flex flex-col items-center">
              <p className=" text-3xl font-normal text-white">12</p>
              <p className=" text-xs font-normal">MINUTES</p>
            </div>
            <p className="text-3xl font-normal text-white"> : </p>
            <div className="flex flex-col items-center">
              <p className=" text-3xl font-normal text-white">39</p>
              <p className=" text-xs font-normal">SECONDS</p>
            </div>
          </div>
          <button className="text-3xl font-normal text-white hover:text-black border-white border-[5px] hover:border-transparent hover:bg-white rounded-[10px] py-2 px-4 w-fit">
            เข้าร่วม
          </button>
        </div>
        <Ship />
      </div>
    </>
  );
}

export default Banner;
