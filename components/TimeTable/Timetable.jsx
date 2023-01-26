import React from "react";

function Timetable() {
  return (
    <div className="flex flex-col items-center pt-52 md:pt-36 2xl:pt-32 mx-11 md:mx-24 2xl:mx-36 pb-64 md:pb-32 2xl:pb-56 text-center text-[#F2F2F2] ">
      <h2 className="topic mb-7 md:mb-14 2xl:mb-24">ตารางเวลา</h2>
      <div className="h-[560px] w-full mx-4 md:mx-20 2xl:mx-28 bg-sky-200">
        <div className="h-[160px] w-full bg-amber-300 text-black">เกาะ</div>
        <div className="grid grid-cols-3 h-[400px] w-full bg-red-400 rounded-[20px]">
          <div className="h-[80%] w-[80%] m-auto col-span-1 bg-green-400"></div>
          <div className="h-[80%] w-[90%] my-auto col-span-2 bg-blue-300 border-l-[4px] border-black"></div>
        </div>
      </div>
    </div>
  );
}
export default Timetable;
