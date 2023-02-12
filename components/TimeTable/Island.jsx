import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import island1 from "@/assets/images/island1.webp";
import island2 from "@/assets/images/island2.webp";
import island3 from "@/assets/images/island3.webp";
import island4 from "@/assets/images/island4.webp";
import island5 from "@/assets/images/island5.webp";
import islandShip from "@/assets/images/islandShip.webp";

function Island({ selectedIsland, setSelectedIsland, data }) {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);
  const [per, setPer] = useState(0);
  let calc = Math.round((width * per) / 100);

  useEffect(() => {
    setWidth(ref.current.clientWidth);
    function handleWindowResize() {
      setWidth(ref.current.clientWidth);
    }

    switch (selectedIsland) {
      case 0:
        setPer(0);
        break;
      case 1:
        setPer(22);
        break;
      case 2:
        setPer(45);
        break;
      case 3:
        setPer(67);
        break;
      case 4:
        setPer(90);
        break;
    }

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [selectedIsland, width]);

  return (
    <>
      {/* tablet , pc */}
      <div className="hidden sm:block">
        <div
          ref={ref}
          className="relative flex justify-between items-center w-full mb-7 text-black"
        >
          {/* Island Ship */}
          <motion.div
            animate={{ x: calc }}
            transition={{ duration: 1 }}
            className={`absolute z-30 -mt-8 ml-[10%]`}
          >
            <div
              className={`relative moveShip w-[28px] lg:w-[42px] h-[28px] lg:h-[42px]`}
            >
              <Image
                src={islandShip}
                alt="Island Ship"
                fill
                className="object-contain"
                sizes="(min-width: 0) 100vw"
              />
            </div>
          </motion.div>
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
