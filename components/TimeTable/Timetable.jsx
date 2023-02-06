import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import island1 from "@/assets/images/island1.png";
import island2 from "@/assets/images/island2.png";
import island3 from "@/assets/images/island3.png";
import island4 from "@/assets/images/island4.png";
import island5 from "@/assets/images/island5.png";
import islandDraft from "@/assets/images/islandDraft.png";
import islandShip from "@/assets/images/islandShip.png";
import Card from "./Card";
import Island from "./Island";

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
    date: "29",
    title: "29 เมษายน (วันที่ 5 ออนไซต์)",
    time: [
      "08.00 - 09.00 เริ่มลงทะเบียน",
      "09.00 - 09.15 เปิดออนไซต์ด้วยความยิ่งใหญ่",
      "09.15 - 09.40 สันทนาการ",
      "09.40 - 09.10 เบรกทานอาหารว่าง ",
      "09.50 - 12.00 กิจกรรมเชิงวิชาการ",
      "12.00 - 13.20 เบรกกลางวัน + สัน",
      "13.20 - 16.00 ทำโปรเจก+พรีเซ็นต์",
      "16.00 - 16.30 สันทนาการ",
      "16.30 - 17.00 ประกาศผล + ปิดงาน",
    ],
  },
];

function Timetable() {
  // const ref1 = useRef();
  // const [x, setX] = useState();
  // const getPosition = () => {
  //   const x = ref1.current.offsetLeft;
  //   setX(x);
  // };
  // useEffect(() => {
  //   getPosition();
  //   window.addEventListener("resize", getPosition);
  //   console.log(x);
  // }, []);

  const [selectedIsland, setSelectedIsland] = useState(0);

  return (
    <div
      id="timetable"
      className="max-w-[1200px] pt-52 md:pt-36 2xl:pt-32 mx-8 md:mx-20 2xl:mx-auto pb-64 md:pb-32 2xl:pb-56 text-center text-[#F2F2F2] "
    >
      {/* <div
      id="timetable"
      className="flex flex-col items-center justify-center max-w-[1200px] pt-52 md:pt-36 2xl:pt-32 mx-8 md:mx-20 2xl:mx-auto pb-64 md:pb-32 2xl:pb-56 text-center text-[#F2F2F2] "
    > */}
      <h2 className="topic mb-7 md:mb-14 2xl:mb-24">ตารางเวลา</h2>
      <div className="max-w-[1200px] w-full">
        <Island
          selectedIsland={selectedIsland}
          setSelectedIsland={setSelectedIsland}
          data={data}
        />
      </div>
      {/* card */}
      <Card data={data} selectedIsland={selectedIsland} />
    </div>
  );
}
export default Timetable;
