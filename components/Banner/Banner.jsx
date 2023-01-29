import Image from "next/image";
import dynamic from "next/dynamic";
import logoCamp from "@/assets/images/LogoCamp.png";
import Ship from "./Ship";
import cloud1 from "@/assets/images/Cloud1.png";
import cloud2 from "@/assets/images/Cloud2.png";

function Banner() {
  const countDownDate = "2023-04-25";
  // For avoid React Hydration bug.
  const CountdownTimer = dynamic(() => import("./CountdownTimer"), {
    ssr: false,
  });
  return (
    <>
        <div className="h-fit bg-banner flex flex-col items-center overflow-hidden">
          {/* logo */}
          <div className="relative w-full h-[211px] 2xl:h-[347px] mx-4">
            <Image
              src={logoCamp}
              alt="logo Camp"
              fill
              quality={100}
              className="object-contain"
            />
          </div>
          {/* timer */}
          <div className="relative -mt-4 md:-mt-10 2xl:-mt-20 flex flex-col gap-4 2xl:gap-6 w-[80%] max-w-[300px] 2xl:max-w-[500px] items-center">
            {/* cloud */}
            <div className="banner-cloud w-[312px] 2xl:w-[581px] h-[163px] 2xl:h-[304px] opacity-50 -top-32 2xl:-top-64 -left-96 2xl:-left-[700px]">
              <Image
                src={cloud1}
                alt="cloud1"
                fill
                className="object-contain"
              />
            </div>
            <div className="banner-cloud w-[204px] 2xl:w-[380px] h-[107px] 2xl:h-[199px] opacity-60 -top-20 2xl:-top-60 -right-60 2xl:-right-[430px]">
              <Image
                src={cloud1}
                alt="cloud1"
                fill
                className="object-contain"
              />
            </div>
            <div className="banner-cloud w-[226px] 2xl:w-[421px] h-[114px] 2xl:h-[213px] opacity-20 2xl:-top-16 -right-96 2xl:-right-[650px]">
              <Image
                src={cloud2}
                alt="cloud2"
                fill
                className="object-contain"
              />
            </div>
            <div className="banner-cloud w-[226px] 2xl:w-[421px] h-[113px] 2xl:h-[213px] opacity-50 top-16 2xl:top-20 -left-60 2xl:-left-[430px]">
              <Image
                src={cloud2}
                alt="cloud2"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xl 2xl:text-3xl font-medium text-center">
              นับถอยหลังปิดรับลูกเรือ
            </p>
            <CountdownTimer targetDate={countDownDate} />
            <button className="text-3xl 2xl:text-5xl font-normal text-white hover:text-black border-white border-[5px] md:border-[3px] 2xl:border-[5px] hover:border-transparent hover:bg-white rounded-[10px]  py-2 px-4 w-fit">
              เข้าร่วม
            </button>
          </div>
          <Ship />
        </div>
    </>
  );
}

export default Banner;
