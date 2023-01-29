import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import island1 from "@/assets/images/island1.png";
import island2 from "@/assets/images/island2.png";
import island3 from "@/assets/images/island3.png";
import islandDraft from "@/assets/images/islandDraft.png";
import islandShip from "@/assets/images/islandShip.png";
import Card from "./Card";

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
    title: "29 เมษายน (วันที่ 2 ออนไซต์)",
    time: [
      "08.00 - 09.00 เริ่มลงทะเบียน",
      "09.00 - 09.15 เปิดออนไซต์ เร่งความยิ่งใหญ่555",
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
    <div className="flex flex-col items-center max-w-[1200px] pt-52 md:pt-36 2xl:pt-32 mx-2 md:mx-20 2xl:mx-32 pb-64 md:pb-32 2xl:pb-56 text-center text-[#F2F2F2] ">
      <h2 className="topic mb-7 md:mb-14 2xl:mb-24">ตารางเวลา</h2>
      <div className="h-[560px] max-w-[1200px] w-full mx-4 md:mx-20 2xl:mx-28">
        <div className="relative flex justify-between items-center w-full mb-7 text-black">
          {/* Island Ship */}
          {/* <div className={`absolute -mt-8 left-20 w-[28px] h-[28px]`}>
            <Image
              src={islandShip}
              alt="Island Ship"
              fill
              className="object-contain"
            />
          </div> */}
          {/* Island */}
          <div>
            <div
              className={`island ${selectedIsland == 0 && "animate-bounce"}`}
              onClick={() => setSelectedIsland(0)}
            >
              <Image
                src={island1}
                alt="island"
                fill
                className="object-contain"
              />
            </div>
            <p className="font-medium text-base md:text-xl 2xl:text-3xl text-white">
              {data[0].date} เม.ย.
            </p>
          </div>
          <hr className="border -mt-5 flex-grow  border-dashed border-white"></hr>
          <div>
            <div
              className={`island ${selectedIsland == 1 && "animate-bounce"}`}
              onClick={() => setSelectedIsland(1)}
            >
              <Image
                src={island2}
                alt="island"
                fill
                className="object-contain"
              />
            </div>
            <p className="font-medium text-base md:text-xl 2xl:text-3xl text-white">
              {data[1].date} เม.ย.
            </p>
          </div>
          <hr className="border -mt-5 flex-grow border-dashed border-white"></hr>
          <div>
            <div
              className={`island ${selectedIsland == 2 && "animate-bounce"}`}
              onClick={() => setSelectedIsland(2)}
            >
              <Image
                src={island3}
                alt="island"
                fill
                className="object-contain"
              />
            </div>
            <p className="font-medium text-base md:text-xl 2xl:text-3xl text-white">
              {data[2].date} เม.ย.
            </p>
          </div>
          <hr className="border -mt-5 flex-grow border-dashed border-white"></hr>
          <div>
            <div
              className={`island ${selectedIsland == 3 && "animate-bounce"}`}
              onClick={() => setSelectedIsland(3)}
            >
              <Image
                src={island1}
                alt="island"
                fill
                className="object-contain"
              />
            </div>
            <p className="font-medium text-base md:text-xl 2xl:text-3xl text-white">
              {data[3].date} เม.ย.
            </p>
          </div>
          <hr className="border -mt-5 flex-grow border-dashed border-white"></hr>
          <div>
            <div
              className={`island ${selectedIsland == 4 && "animate-bounce"}`}
              onClick={() => setSelectedIsland(4)}
            >
              <Image
                src={island1}
                alt="island"
                fill
                className="object-contain"
              />
            </div>
            <p className="font-medium text-base md:text-xl 2xl:text-3xl text-white">
              {data[4].date} เม.ย.
            </p>
          </div>
        </div>
        {/* card */}
        <Card data={data} selectedIsland={selectedIsland} />
      </div>
    </div>
  );
}
export default Timetable;
