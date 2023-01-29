import Head from "next/head";
import Image from "next/image";
import Banner from "@/components/Banner/Banner";
import Schedule from "@/components/Schedule/Schedule";
import Introduce from "@/components/Introduce/Introduce";
import Timetable from "@/components/TimeTable/Timetable";
import ProgramUse from "@/components/ProgramUse/ProgramUse";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="bg-content">
        <Introduce />
        <Timetable />
        {/* <div className="h-60 text-center text-white">เงื่อนไข dummy</div> */}
        <div className="h-60 text-center text-white">เงื่อนไข dummy</div>
        <ProgramUse/>
      </div>
       <Schedule />

    </>
  );
}
