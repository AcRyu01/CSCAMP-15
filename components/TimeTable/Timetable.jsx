import { useState, useEffect, useRef } from "react";
import Card from "./Card";
import Island from "./Island";
import { motion, useInView, useAnimationControls } from "framer-motion";

const data = [
  {
    id: 0,
    date: "25",
    title: "25 เมษายน (วันที่ 1 ออนไลน์)",
    time: [
      "09.30 - 10.00 เริ่มงาน พิธีกรพูดอาจารย์พูด เกริ่นค่าย",
      "10.00 - 10.30 สันทนาการ",
      "10.30 - 12.00 กิจกรรมเชิงวิชาการครั้งที่ 1",
      "12.00 - 13.00 เบรกกลางวัน",
      "13.00 - 13.30 สันทนาการ",
      "13.30 - 15.00 LAB",
    ],
  },
  {
    id: 1,
    date: "26",
    title: "26 เมษายน (วันที่ 2 ออนไลน์)",
    time: [
      "09.30 - 10.00 สันทนาการ",
      "10.00 - 12.00 กิจกรรมเชิงวิชาการครั้งที่ 2",
      "12.00 - 13.00 เบรกกลางวัน",
      "13.00 - 13.30 สันทนาการ",
      "13.30 - 15.00 LAB",
    ],
  },
  {
    id: 2,
    date: "27",
    title: "27 เมษายน (วันที่ 3 ออนไลน์)",
    time: [
      "09.30 - 10.00 สันทนาการ",
      "10.00 - 12.00 กิจกรรมเชิงวิชาการครั้งที่ 3",
      "12.00 - 13.00 เบรกกลางวัน",
      "13.00 - 13.30 สันทนาการ",
      "13.30 - 15.00 LAB",
    ],
  },
  {
    id: 3,
    date: "28",
    title: "28 เมษายน (วันที่ 4 ออนไลน์)",
    time: [
      "09.30 - 10.00 สันทนาการ",
      "10.00 - 12.00 กิจกรรมเชิงวิชาการครั้งที่ 4",
      "12.00 - 13.00 เบรกกลางวัน",
      "13.00 - 13.30 สันทนาการ",
      "13.30 - 15.00 LAB",
    ],
  },
  {
    id: 4,
    date: "30",
    title: "30 เมษายน (วันที่ 5 ออนไซต์)",
    time: [
      "08.00 - 09.00 เริ่มลงทะเบียน",
      "09.00 - 09.15 เปิดออนไซต์ด้วยความยิ่งใหญ่",
      "09.15 - 09.40 สันทนาการ",
      "09.40 - 09.10 เบรกทานอาหารว่าง ",
      "09.50 - 12.00 กิจกรรมเชิงวิชาการ",
      "12.00 - 13.20 เบรกกลางวัน + สันทนาการ",
      "13.20 - 16.00 ทำโปรเจก + พรีเซ็นต์",
      "16.00 - 16.30 สันทนาการ",
      "16.30 - 17.00 ประกาศผล + ปิดงาน",
    ],
  },
];

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      type: "tween",
      when: "beforeChildren",
      staggerChildren: 0.4,
      delay: 0.4,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    // x: "-30vw",
  },
  visible: {
    opacity: 1,
    // x: 0,
    transition: {
      type: "tween",
    },
  },
};

function Timetable() {
  const [selectedIsland, setSelectedIsland] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const control = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      control.start("visible");
    } else {
      control.set("hidden");
    }
  }, [isInView]);

  return (
    <motion.div
      id="timetable"
      className="max-w-[1200px] pt-32 md:pt-36 2xl:pt-56 mx-8 md:mx-20 2xl:mx-auto pb-64 md:pb-32 2xl:pb-56 text-center text-[#F2F2F2]"
      variants={containerVariants}
      animate={control}
      initial={"hidden"}
    >
      <h2 className="topic mb-7 md:mb-14 2xl:mb-20">ตารางเวลา</h2>
      <motion.div
        className="max-w-[1200px] w-full"
        variants={childVariants}
        ref={ref}
      >
        <Island
          selectedIsland={selectedIsland}
          setSelectedIsland={setSelectedIsland}
          data={data}
        />
      </motion.div>
      {/* card */}
      <motion.div variants={childVariants}>
        <Card data={data} selectedIsland={selectedIsland} />
      </motion.div>
    </motion.div>
  );
}
export default Timetable;
