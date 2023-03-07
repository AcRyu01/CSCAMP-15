import Image from "next/image";
import dynamic from "next/dynamic";
import logoCamp from "@/assets/images/LogoCamp.webp";
import Ship from "./Ship";
import cloud1 from "@/assets/images/Cloud1.webp";
import cloud2 from "@/assets/images/Cloud2.webp";
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

const date = {
  openReg: {
    day: 13,
    month: 2,
  },
  closeReg: {
    day: 28,
    month: 2,
  },
  announcement: {
    day: 9,
    month: 3,
    hour: 8,
  },
  confirmation: {
    day: 12,
    month: 3,
  },
  startCamp: {
    day: 25,
    month: 4,
  },
  endCamp: {
    day: 29,
    month: 4,
  },
};
function Banner() {
  const thisDay = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Bangkok",
  });
  const currentDate = new Date(thisDay).getDate();
  const currentMonth = new Date(thisDay).getMonth() + 1;
  const currentHour = new Date(thisDay).getHours();
  // For avoid React Hydration bug.

  let countDownDate;
  let word;
  let bottles = [];
  let links = [];

  if (
    currentDate <= date.openReg.day - 1 &&
    currentMonth <= date.openReg.month
  ) {
    countDownDate = `2023/${date.openReg.month}/${date.openReg.day} 00:00:00 +0700`;
    word = "นับถอยหลังเปิดรับสมัครลูกเรือ";
  } else if (
    currentDate <= date.closeReg.day &&
    currentMonth <= date.closeReg.month
  ) {
    countDownDate = `2023/${date.closeReg.month}/${
      date.closeReg.day + 1
    } 00:00:00 +0700`;
    word = "นับถอยหลังปิดรับสมัครลูกเรือ";
    bottles.push(["เข้าร่วม"]);
    links.push([
      "https://docs.google.com/forms/d/e/1FAIpQLScckDyHPRt7XWqhssEaoJa5OWNVxNI-lM2KLRlB-ZYPqci6dA/viewform",
    ]);
  } else if (
    currentDate <= date.announcement.day - 1 &&
    currentMonth <= date.announcement.month
  ) {
    countDownDate = `2023/${date.announcement.month}/${date.announcement.day} ${date.announcement.hour}:00:00 +0700`;
    word = "ประกาศผลผู้ถูกเลือกภายใน";
  } else if (
    currentDate == date.announcement.day &&
    currentMonth == date.announcement.month &&
    currentHour < date.announcement.hour
  ) {
    countDownDate = `2023/${date.announcement.month}/${date.announcement.day} ${date.announcement.hour}:00:00 +0700`;
    word = "ประกาศผลผู้ถูกเลือกภายใน";
  } else if (
    currentDate <= date.confirmation.day &&
    currentMonth <= date.confirmation.month
  ) {
    countDownDate = `2023/${date.confirmation.month}/${
      date.confirmation.day + 1
    } 00:00:00 +0700`;
    word = "นับถอยหลังปิดการยืนยันสิทธิ์";
    bottles.push(["รายชื่อผู้ถูกเลือก"]);
    links.push([""]);
  } else if (
    currentDate <= date.startCamp.day - 1 &&
    currentMonth <= date.startCamp.month
  ) {
    countDownDate = `2023/${date.startCamp.month}/${date.startCamp.day} 00:00:00 +0700`;
    word = "เก็บกระเป๋าเตรียมขึ้นเรือใน";
  } else if (
    currentDate <= date.endCamp.day &&
    currentMonth <= date.endCamp.month
  ) {
    countDownDate = `2023/${date.endCamp.month}/${
      date.endCamp.day + 1
    } 00:00:00 +0700`;
    word = "นับถอยหลังสิ้นสุดการผจญภัย";
  } else {
    countDownDate = 0;
  }

  const CountdownTimer = dynamic(() => import("./CountdownTimer"), {
    ssr: false,
  });
  return (
    <div id="banner">
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
          <p className="text-xl 2xl:text-3xl font-medium text-center">{word}</p>
          <CountdownTimer targetDate={countDownDate} />

          {bottles.map((text, index) => {
            return (
              <>
                <motion.button
                  className="z-50 text-2xl 2xl:text-4xl font-normal text-white border-white border-[5px] md:border-[3px] 2xl:border-[5px] cursor-pointer hover:border-transparent hover:bg-white hover:text-jungle-green-500 rounded-[10px]  py-2 px-4 w-fit"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{
                    duration: 0.35,
                  }}
                  key={index}
                >
                  <a
                    href={links[bottles.indexOf(text)]}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {text}
                  </a>
                </motion.button>
              </>
            );
          })}
        </div>
        <Ship />
      </div>
    </div>
  );
}

export default Banner;
