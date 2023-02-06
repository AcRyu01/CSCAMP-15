import Image from "next/image";
import island1 from "@/assets/images/island1.png";
import island2 from "@/assets/images/island2.png";
import island3 from "@/assets/images/island3.png";
import island4 from "@/assets/images/island4.png";
import island5 from "@/assets/images/island5.png";
import islandShip from "@/assets/images/islandShip.png";

function Island({ selectedIsland, setSelectedIsland, data }) {
  const shipAnimation = `${
    selectedIsland === 4
      ? "w-[102%]"
      : selectedIsland === 3
      ? "w-[82%]"
      : selectedIsland === 2
      ? "w-[60%]"
      : selectedIsland === 1
      ? "w-[38%]"
      : "w-[16%]"
  }`;

  return (
    <>
      {/* tablet , pc */}
      <div className="hidden sm:block">
        <div className="relative flex justify-between items-center w-full mb-7 text-black">
          {/* Island Ship */}
          <div
            key={selectedIsland}
            className={`absolute -mt-8 h-fit flex ${shipAnimation}`}
          >
            <div
              className={`relative moveShip w-[28px] lg:w-[42px] h-[28px] lg:h-[42px]`}
            >
              <Image
                src={islandShip}
                alt="Island Ship"
                fill
                className="object-contain"
              />
            </div>
          </div>
          {/* Island */}
          <div>
            <div
              className={`island ${selectedIsland == 0 && "animate-bounce"}`}
              onClick={() => setSelectedIsland(0)}
            >
              <Image
                src={island1}
                alt="island"
                fill
                className="object-contain"
                sizes="(min-width: 0) 100vw"
              />
            </div>
            <p className="font-medium text-base md:text-xl 2xl:text-3xl text-white">
              {data[0].date} เม.ย.
            </p>
          </div>
          <hr className="border -mt-5 flex-grow  border-dashed border-white"></hr>
          <div>
            <div
              className={`island ${selectedIsland == 1 && "animate-bounce"}`}
              onClick={() => setSelectedIsland(1)}
            >
              <Image
                src={island2}
                alt="island"
                fill
                className="object-contain"
                sizes="(min-width: 0) 100vw"
              />
            </div>
            <p className="font-medium text-base md:text-xl 2xl:text-3xl text-white">
              {data[1].date} เม.ย.
            </p>
          </div>
          <hr className="border -mt-5 flex-grow border-dashed border-white"></hr>
          <div>
            <div
              className={`island ${selectedIsland == 2 && "animate-bounce"}`}
              onClick={() => setSelectedIsland(2)}
            >
              <Image
                src={island3}
                alt="island"
                fill
                className="object-contain"
                sizes="(min-width: 0) 100vw"
              />
            </div>
            <p className="font-medium text-base md:text-xl 2xl:text-3xl text-white">
              {data[2].date} เม.ย.
            </p>
          </div>
          <hr className="border -mt-5 flex-grow border-dashed border-white"></hr>
          <div>
            <div
              className={`island ${selectedIsland == 3 && "animate-bounce"}`}
              onClick={() => setSelectedIsland(3)}
            >
              <Image
                src={island4}
                alt="island"
                fill
                className="object-contain"
                sizes="(min-width: 0) 100vw"
              />
            </div>
            <p className="font-medium text-base md:text-xl 2xl:text-3xl text-white">
              {data[3].date} เม.ย.
            </p>
          </div>
          <hr className="border -mt-5 flex-grow border-dashed border-white"></hr>
          <div>
            <div
              className={`island ${selectedIsland == 4 && "animate-bounce"}`}
              onClick={() => setSelectedIsland(4)}
            >
              <Image
                src={island5}
                alt="island"
                fill
                className="object-contain"
                sizes="(min-width: 0) 100vw"
              />
            </div>
            <p className="font-medium text-base md:text-xl 2xl:text-3xl text-white">
              {data[4].date} เม.ย.
            </p>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="sm:hidden block">
        <div className="relative w-full mb-7 text-black">
          {/* Island 1*/}
          <div className="flex justify-start items-center pl-8 pr-16">
            <div>
              <div
                className={`island ${selectedIsland == 0 && "animate-bounce"}`}
                onClick={() => setSelectedIsland(0)}
              >
                <Image
                  src={island1}
                  alt="island"
                  fill
                  className="object-contain"
                  sizes="(min-width: 0) 100vw"
                />
              </div>
              <p className="font-medium text-base md:text-xl 2xl:text-3xl text-white">
                {data[0].date} เม.ย.
              </p>
            </div>
            <hr className="border flex-grow skew-y-12 ss:skew-y-3 mt-4 ss:mt-18  border-dashed border-white"></hr>
          </div>
          {/* Island 2*/}
          <div className="flex justify-end items-center -mt-16 pl-16">
            <hr className="border mt-16 -skew-y-12 flex-grow border-dashed border-white"></hr>
            <div>
              <div
                className={`island ${selectedIsland == 1 && "animate-bounce"}`}
                onClick={() => setSelectedIsland(1)}
              >
                <Image
                  src={island2}
                  alt="island"
                  fill
                  className="object-contain"
                  sizes="(min-width: 0) 100vw"
                />
              </div>
              <p className="font-medium text-base md:text-xl 2xl:text-3xl text-white">
                {data[1].date} เม.ย.
              </p>
            </div>
          </div>
          {/* Island 3*/}
          <div className="flex justify-end items-center -mt-8 pr-16">
            <div>
              <div
                className={`island ${selectedIsland == 2 && "animate-bounce"}`}
                onClick={() => setSelectedIsland(2)}
              >
                <Image
                  src={island3}
                  alt="island"
                  fill
                  className="object-contain"
                  sizes="(min-width: 0) 100vw"
                />
              </div>
              <p className="font-medium text-base md:text-xl 2xl:text-3xl text-white">
                {data[2].date} เม.ย.
              </p>
            </div>
            <hr className="border flex-grow skew-y-12 ss:skew-y-3 mt-10 border-dashed border-white"></hr>
          </div>
          {/* Island 4*/}
          <div className="flex justify-end items-center -mt-16 pl-28">
            <hr className="border mt-20 -skew-y-12 flex-grow border-dashed border-white"></hr>
            <div>
              <div
                className={`island ${selectedIsland == 3 && "animate-bounce"}`}
                onClick={() => setSelectedIsland(3)}
              >
                <Image
                  src={island4}
                  alt="island"
                  fill
                  className="object-contain"
                  sizes="(min-width: 0) 100vw"
                />
              </div>
              <p className="font-medium text-base md:text-xl 2xl:text-3xl text-white">
                {data[3].date} เม.ย.
              </p>
            </div>
          </div>
          {/* Island 5*/}
          <div className="flex flex-col items-start -mt-8 pl-10">
            <div
              className={`island ${selectedIsland == 4 && "animate-bounce"}`}
              // className={`island ${selectedIsland == 4 && "animate-bounce"}`}
              onClick={() => setSelectedIsland(4)}
            >
              <Image
                src={island5}
                alt="island"
                fill
                className="object-contain"
                sizes="(min-width: 0) 100vw"
              />
            </div>
            <p className="font-medium text-base md:text-xl 2xl:text-3xl text-white">
              {data[4].date} เม.ย.
            </p>
          </div>
        </div>
      </div>
      <style>{`
        .moveShip {
          bottom: 15%;
          position: absolute;
          animation: run 5s forwards;
        }

        @keyframes run {
          0% {
            left: 0;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </>
  );
}

export default Island;
