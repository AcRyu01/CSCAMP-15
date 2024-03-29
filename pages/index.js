import Banner from "@/components/Banner/Banner";
import Schedule from "@/components/Schedule/Schedule";
import Introduce from "@/components/Introduce/Introduce";
import Condition from "@/components/Condition/Condition";
import Timetable from "@/components/TimeTable/Timetable";
import ProgramUse from "@/components/ProgramUse/ProgramUse";
import Sponsor from "@/components/Sponsor/Sponsor";
import Photos from "@/components/Photos/Photos";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="bg-content">
        <Photos />
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
