import Image from "next/image";
import ship1 from "@/assets/images/Ship1.png";
import ship2 from "@/assets/images/Ship2.png";
import wave0 from "@/assets/images/wave0.png";
import wave1 from "@/assets/images/wave1.png";
import wave2 from "@/assets/images/wave2.png";
import wave3 from "@/assets/images/wave3.png";
import wave4 from "@/assets/images/wave4.png";

function Ship() {
  return (
    <>
      {/* ship left */}
      <div className="hidden md:block relative z-10 w-[272px] 2xl:w-[448px] h-[229px] 2xl:h-[376px] rotate-[9.11deg] -mt-36 2xl:-mt-56 -left-64 2xl:-left-[450px]">
        <Image src={ship1} alt="ship1" fill className="object-contain" />
      </div>
      {/* ship right */}
      <div className="relative z-30 w-[446px] md:w-[381px] 2xl:w-[626px] h-[378px] md:h-[328px] 2xl:h-[531px] -right-40 md:-right-60 2xl:-right-[420px] -mt-20 md:-mt-52 2xl:-mt-[350px] -rotate-[1.55deg]">
        <Image src={ship2} alt="ship2" fill className="object-contain" />
      </div>
      {/* All wave */}
      <div className="relative md:h-[50px] w-full -top-72 md:-top-64">
        {/* wave 4 */}
        <div className="banner-wave hidden md:block h-[200px] 2xl:h-[300px] top-12 2xl:-top-20  z-0">
          <Image src={wave4} alt="wave4" fill />
        </div>
        {/* wave 2-3 */}
        <div className="banner-wave -top-56 lg:-top-64 xl:-top-72 2xl:-top-[430px] z-20 ">
          <Image src={wave3} alt="wave3" fill />
          <Image src={wave2} alt="wave2" fill />
        </div>
        {/* wave 0-1 */}
        <div className="banner-wave md:h-[550px] 2xl:h-[700px] -top-48 md:-top-60 2xl:-top-96 z-40">
          <Image src={wave1} alt="wave1" fill />
          <Image src={wave0} alt="wave0" fill />
        </div>
      </div>
    </>
  );
}

export default Ship;

// {/* ship right */}
// <div className="hidden md:flex w-full md:justify-end ">
//   <div className="relative z-30 w-[381px] 2xl:w-[626px] h-[328px] 2xl:h-[531px] 2xl:-right-7 -mt-52 2xl:-mt-80 -rotate-[1.55deg]">
//     <Image src={ship2} alt="ship2" fill className="object-contain" />
//   </div>
// </div>
// {/* ship right for MOBILE */}
// <div className="md:hidden relative z-30 w-[446px] h-[378px] -right-40 -mt-20 -rotate-[1.55deg]">
//   <Image src={ship2} alt="ship2" fill className="object-contain" />
// </div>
