import Image from "next/image";
import islandDraft from "@/assets/images/islandDraft.png";

function Card({ data, selectedIsland }) {
  return (
    <div className=" md:h-[300px] grid grid-cols-3 md:grid-cols-5 w-full bg-[#D2C9B0] text-[#313131] rounded-[20px]">
      <div className="mb-4 md:mb-12 h-[80%] w-[90%] m-auto flex flex-col justify-end items-center col-span-1 md:col-span-2">
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
      <div className="mt-2 mb-4 md:mt-8 md:mb-12 text-left pl-4 col-span-2 md:col-span-3 border-l-[4px] rounded-sm border-black border-opacity-[29%]">
        {data[selectedIsland].time.map((text, idx) => {
          return <p key={idx}>{text}</p>;
        })}
      </div>
    </div>
  );
}

export default Card;
