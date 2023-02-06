import Image from "next/image";
import islandDraft from "@/assets/images/islandDraft.png";
import paper from "@/assets/images/Paper2.png";

function Card({ data, selectedIsland }) {
  return (
    <div className="relative h-fit md:h-[300px] 2xl:h-[360px] flex flex-col md:grid md:grid-cols-5 text-[#313131] rounded-[20px]  ">
      <div className="absolute w-full h-[520px] xs:h-[400px] md:h-[350px] 2xl:h-[400px] z-0">
        <Image src={paper} alt="paper" fill className="dropShadow" priority />
      </div>
      <div className="mt-12 md:mb-12 w-[70%] mx-auto z-10 flex flex-col justify-end items-center md:row-auto md:col-span-2 ">
        <div className="relative w-[114px] md:w-[180px] 2xl:w-[270px] h-[86px] md:h-[135px] 2xl:h-[202px]">
          <Image
            src={islandDraft}
            alt="island"
            fill
            className="object-contain"
            sizes="(min-width: 0) 100vw"
          />
        </div>
        <p className="font-bold text-sm md:text-lg 2xl:text-2xl">
          {data[selectedIsland].title}
        </p>
        <hr className="md:hidden mt-2 w-full border-b-[4px]  border-black border-opacity-[29%] rounded" />
      </div>
      <div className="my-2 md:my-5 md:mt-12 2xl:mt-16 2xl:my-8 mx-auto md:mx-0 z-10 text-left font-normal text-sm md:text-lg 2xl:text-2xl px-4 md:row-auto md:col-span-3 md:border-l-[4px] rounded-sm border-black border-opacity-[29%]">
        {data[selectedIsland].time.map((text, idx) => {
          return <p key={idx}>{text}</p>;
        })}
      </div>
    </div>
  );
}

export default Card;
