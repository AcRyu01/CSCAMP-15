import Image from "next/image";
import ship1 from "@/assets/images/Ship1.png";
import ship2 from "@/assets/images/Ship2.png";
import wave0 from "@/assets/images/Wave0.png";
import wave1 from "@/assets/images/Wave1.png";
import wave2 from "@/assets/images/Wave2.png";
import wave3 from "@/assets/images/Wave3.png";
import wave4 from "@/assets/images/Wave4.png";

function Ship() {
  return (
    <>
      {/* ship & wave MOBILE */}
      <div className="relative z-10 w-[446px] h-[378px] -right-40 -mt-24 -rotate-[1.55deg]">
        <Image src={ship2} alt="ship2" fill className="object-contain" />
      </div>
      <div className="relative w-full -top-72">
        <div className="absolute w-[832px] h-[500px] -top-56">
          <Image src={wave3} alt="wave3" fill />
          <Image src={wave2} alt="wave2" fill />
        </div>
        <div className="absolute w-[832px] h-[500px] -top-48 z-20">
          <Image src={wave1} alt="wave1" fill />
          <Image src={wave0} alt="wave0" fill />
        </div>
      </div>
    </>
  );
}

export default Ship;
