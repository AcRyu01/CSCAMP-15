import Head from "next/head";
import Image from "next/image";
import Banner from "@/components/Banner/Banner";
import Schedule from "@/components/Schedule/Schedule";
import Introduce from "@/components/Introduce/Introduce";
import Condition from "@/components/Condition/Condition";
import Timetable from "@/components/TimeTable/Timetable";
import ProgramUse from "@/components/ProgramUse/ProgramUse";
import Sponsor from "@/components/Sponsor/Sponsor";


export default function Home() {
  return (
    <>
      <Banner />
      <div className="bg-content">
        <Introduce />
        <Condition />
        <Schedule />
        <Timetable />
        <ProgramUse />
        <Sponsor />

      </div>
    </>
  );
}
