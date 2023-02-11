import Image from "next/image";
import { motion } from "framer-motion";
import islandDraft1 from "@/assets/images/islandDraft1.png";
import islandDraft2 from "@/assets/images/islandDraft2.png";
import islandDraft3 from "@/assets/images/islandDraft3.png";
import islandDraft4 from "@/assets/images/islandDraft4.png";
import islandDraft5 from "@/assets/images/islandDraft5.png";
import paperMobile from "@/assets/images/paper.png";
import paperWeb from "@/assets/images/Paper2.png";
import LineCard_h from "@/assets/images/LineCard_h.png";
import LineCard_v from "@/assets/images/LineCard_v.png";

const islandDraft = [
  islandDraft1,
  islandDraft2,
  islandDraft3,
  islandDraft4,
  islandDraft5,
];

function Card({ data, selectedIsland }) {
  return (
    <div className="relative h-fit md:h-[300px] 2xl:h-[360px] flex flex-col md:grid md:grid-cols-5 text-[#74503c] rounded-[20px]  ">
      <div className="absolute w-full h-[520px] xs:h-[400px] md:h-[350px] 2xl:h-[400px] z-0">
        <Image
          src={paperWeb}
          alt="paper"
          fill
          className="dropShadow hidden md:block"
          priority
          sizes="(min-width: 0) 100vw"
        />
        <Image
          src={paperMobile}
          alt="paper"
          fill
          className="dropShadow block md:hidden"
          priority
          sizes="(min-width: 0) 100vw"
        />
      </div>
      <motion.div
        key={selectedIsland}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-12 md:mb-12 md:pt-4 w-[70%] mx-auto z-10 flex flex-col justify-start items-center md:row-auto md:col-span-2 "
      >
        <div className="relative w-[114px] md:w-[180px] 2xl:w-[270px] h-[86px] md:h-[135px] 2xl:h-[202px]">
          <Image
            src={islandDraft[selectedIsland]}
            alt="island"
            fill
            className="object-contain"
            sizes="(min-width: 0) 100vw"
          />
        </div>
        <p className="font-bold text-sm md:text-lg 2xl:text-2xl">
          {data[selectedIsland].title}
        </p>
      </motion.div>
      {/* line mobile*/}
      <div className="w-[100%] h-[16px] mx-auto relative md:hidden">
        <Image
          src={LineCard_h}
          alt="LineCard_h"
          fill
          className="object-contain"
          sizes="(min-width: 0) 100vw"
        />
      </div>
      <motion.div
        key={data[selectedIsland].title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex my-2 md:my-5 md:mt-12 2xl:mt-16 2xl:my-8 mx-auto md:mx-0 z-10 text-left font-normal text-sm md:text-lg 2xl:text-2xl md:row-auto md:col-span-3 rounded-sm"
      >
        {/* line */}
        <div className="w-[16px] h-[120%] -mt-6 -ml-4 mr-4 relative hidden md:block">
          <Image
            src={LineCard_v}
            alt="LineCard_h"
            fill
            className="object-cover"
            sizes="(min-width: 0) 100vw"
          />
        </div>
        <div>
          {data[selectedIsland].time.map((text, idx) => {
            return <p key={idx}>{text}</p>;
          })}
        </div>
      </motion.div>
    </div>
  );
}

export default Card;
