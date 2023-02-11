import Image from "next/image";
import dynamic from "next/dynamic";
import logoCamp from "@/assets/images/LogoCamp.png";
import Ship from "./Ship";
import cloud1 from "@/assets/images/Cloud1.png";
import cloud2 from "@/assets/images/Cloud2.png";
import { motion } from "framer-motion";

const cloud1Varaints = {
  visible: {
    x: ["0vw", "20vw", "0vw"],
    transition: {
      duration: 50,
      repeat: Infinity,
      type: "tween",
    },
  },
};
const cloud2Varaints = {
  visible: {
    x: ["0vw", "10vw", "0vw"],
    transition: {
      duration: 40,
      repeat: Infinity,
      type: "tween",
    },
  },
};
const cloud3Varaints = {
  visible: {
    x: ["0vw", "7vw", "0vw"],
    scale: [1, 0.8, 1],
    transition: {
      duration: 50,
      repeat: Infinity,
      type: "tween",
    },
  },
};
const cloud4Varaints = {
  visible: {
    x: ["0vw", "5vw", "0vw"],
    scale: [1, 0.7, 1],
    transition: {
      duration: 50,
      repeat: Infinity,
      type: "tween",
    },
  },
};

function Banner() {
  const countDownDate = "2023/02/13 00:00:00 +0700";
  const thisDay = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Bangkok",
  });
  const currentDate = new Date(thisDay).getDate();
  const currentMonth = new Date(thisDay).getMonth() + 1;
  // For avoid React Hydration bug.
  const CountdownTimer = dynamic(() => import("./CountdownTimer"), {
    ssr: false,
  });
  return (
    <>
      <div className="h-fit bg-banner flex flex-col items-center overflow-hidden md:mt-8 lg:mt-9 2xl:mt-14">
        {/* logo */}
        <div className="relative w-full h-[211px] 2xl:h-[347px] mx-4 z-10">
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
          <motion.div
            className="banner-cloud w-[312px] 2xl:w-[581px] h-[163px] 2xl:h-[304px] opacity-50 -top-32 2xl:-top-64 -left-96 2xl:-left-[700px]"
            variants={cloud1Varaints}
            animate={"visible"}
          >
            <Image
              src={cloud1}
              alt="cloud1"
              fill
              className="object-contain"
              sizes="(min-width: 0) 100vw"
            />
          </motion.div>
          <motion.div
            className="banner-cloud w-[204px] 2xl:w-[380px] h-[107px] 2xl:h-[199px] opacity-60 -top-20 2xl:-top-60 -right-60 2xl:-right-[430px]"
            variants={cloud2Varaints}
            animate={"visible"}
          >
            <Image
              src={cloud1}
              alt="cloud1"
              fill
              className="object-contain"
              sizes="(min-width: 0) 100vw"
            />
          </motion.div>
          <motion.div
            className="banner-cloud w-[226px] 2xl:w-[421px] h-[114px] 2xl:h-[213px] opacity-20 2xl:-top-16 -right-96 2xl:-right-[650px]"
            variants={cloud3Varaints}
            animate={"visible"}
          >
            <Image
              src={cloud2}
              alt="cloud2"
              fill
              className="object-contain"
              sizes="(min-width: 0) 100vw"
            />
          </motion.div>
          <motion.div
            className="banner-cloud w-[226px] 2xl:w-[421px] h-[113px] 2xl:h-[213px] opacity-50 top-16 2xl:top-20 -left-60 2xl:-left-[430px]"
            variants={cloud4Varaints}
            animate={"visible"}
          >
            <Image
              src={cloud2}
              alt="cloud2"
              fill
              className="object-contain"
              sizes="(min-width: 0) 100vw"
            />
          </motion.div>
          <p className="text-xl 2xl:text-3xl font-medium text-center">
            {currentDate >= 13 && currentMonth >= 2
              ? "นับถอยหลังปิดรับลูกเรือ"
              : "นับถอยหลังเปิดรับลูกเรือ"}
          </p>
          <CountdownTimer targetDate={countDownDate} />
          <button className="z-50 text-3xl 2xl:text-5xl font-normal text-white border-white border-[5px] md:border-[3px] 2xl:border-[5px] cursor-pointer hover:border-transparent hover:bg-white hover:text-jungle-green-500 rounded-[10px]  py-2 px-4 w-fit">
            เข้าร่วม
          </button>
        </div>
        <Ship />
      </div>
    </>
  );
}

export default Banner;
