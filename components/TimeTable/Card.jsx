import Image from "next/image";
import islandDraft from "@/assets/images/islandDraft.png";
import paper from "@/assets/images/Paper2.png";

function Card({ data, selectedIsland }) {
  return (
    <div className="relative h-fit grid grid-cols-3 md:grid-cols-5 w-full text-[#313131] rounded-[20px]">
      <div className="absolute w-full h-[300px] z-0">
        <Image src={paper} alt="paper" fill className="" />
      </div>
      <div className="mb-4 md:mb-12 h-[80%] w-[90%] m-auto z-10 flex flex-col justify-end items-center col-span-1 md:col-span-2">
        <div className="relative w-[97px] md:w-[180px] 2xl:w-[324px] h-[73px] md:h-[135px] 2xl:h-[243px]">
          <Image
            src={islandDraft}
            alt="island"
            fill
            className="object-contain"
          />
        </div>
        <p className="font-bold text-base md:text-lg 2xl:text-3xl">
          {data[selectedIsland].title}
        </p>
      </div>
      <div className="my-4 md:my-12 z-10 text-left px-4 col-span-2 md:col-span-3 border-l-[4px] rounded-sm border-black border-opacity-[29%]">
        {data[selectedIsland].time.map((text, idx) => {
          return <p key={idx}>{text}</p>;
        })}
      </div>
    </div>
  );
}

export default Card;
