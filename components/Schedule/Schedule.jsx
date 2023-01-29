import React, { useState } from "react";
import Container from "../Layout/Container";
import Image from "next/image";
import bottles from "./bottles";
import { motion, spring, useAnimationControls } from "framer-motion";

function Schedule() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const MControls = useAnimationControls();
  const LControls = useAnimationControls();
  const RControls = useAnimationControls();

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? bottles.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    RControls.start({
      x: ["-20vw", "0vw"],
      scale: [1.5, 0.9, 1],
      transition: {
        duration: 0.5,
        type: spring,
      },
    });
    MControls.start({
      x: ["-20vw", "0vw"],
      scale: [0.5, 1.1, 1],
      transition: {
        duration: 0.5,
        type: spring,
      },
    });
    LControls.start({
      x: ["-20vw", "0vw"],
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.5,
        type: spring,
      },
    });
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === bottles.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    RControls.start({
      x: ["20vw", "0vw"],
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.5,
        type: spring,
      },
    });
    MControls.start({
      x: ["20vw", "0vw"],
      scale: [0.5, 1.1, 1],
      transition: {
        duration: 0.5,
        type: spring,
      },
    });
    LControls.start({
      x: ["20vw", "0vw"],
      scale: [1.5, 0.9, 1],
      transition: {
        duration: 0.5,
        type: spring,
      },
    });
  };

  return (
    <Container className="flex flex-col items-center my-[100px]">
      <h2 className="text-3xl md:text-4xl 2xl:text-8xl md:mb-12 2xl:mb-10 text-[#F2F2F2] font-bold">
        กำหนดการ
      </h2>
      <div className="w-full h-auto relative group flex flex-col items-center">
        {/* Main */}
        <motion.div
          className="max-h-[70vw] min-h-[70vw]"
          animate={MControls}
          initial={{ opacity: 1, scale: 1 }}
        >
          <Image
            className="w-full h-full"
            src={bottles[currentIndex]}
            alt={`bottles${currentIndex}`}
            width="0"
            height="0"
            sizes="100vw"
          ></Image>
        </motion.div>

        {/* Left */}
        <motion.div
          className="absolute top-[30%] left-5 p-2 h-[30vw]"
          initial={{ opacity: 0.6, scale: 1 }}
          whileHover={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 0.5, type: "spring" }}
          animate={LControls}
        >
          <Image
            className="w-auto h-full"
            alt=""
            src={
              bottles[
                currentIndex - 1 == -1
                  ? bottles.length - 1
                  : currentIndex - (1 % bottles.length)
              ]
            }
            width="0"
            height="0"
            sizes="30vw"
            onClick={prevSlide}
          ></Image>
        </motion.div>

        {/* Right */}
        <motion.div
          className="absolute top-[30%] right-5 p-2 h-[30vw]"
          initial={{ opacity: 0.6, scale: 1 }}
          whileHover={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 0.5, type: "spring" }}
          animate={RControls}
        >
          <Image
            className="w-auto h-full"
            alt=""
            src={bottles[(currentIndex + 1) % bottles.length]}
            width="0"
            height="0"
            sizes="30vw"
            onClick={nextSlide}
          ></Image>
        </motion.div>
      </div>
    </Container>
  );
}

export default Schedule;
