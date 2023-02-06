import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import bottles from "./bottles";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";

function Schedule() {
  const containerRef = useRef(null);
  const bottleRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const scrollBottle = useTransform(scrollYProgress, [1, 0], [0.1, 4]);

  const [bottle, setbottle] = useState(1);
  const controlsContainer = useAnimation();
  const controls0 = useAnimation();
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  scrollBottle.onChange((x) => {
    setbottle(Math.ceil(x));
  });

  const bottleVaraiants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 0.6,
    },
    selected: {
      opacity: [1, 1, 1],
      scale: [1.5, 1.35, 1.5],
      transition: {
        repeat: Infinity,
        duration: 0.8,
        type: "tween",
      },
    },
  };

  useEffect(() => {
    if (bottle == 1) {
      controlsContainer.start({
        opacity: 1,
        x: bottleRef.current.offsetWidth * 1.5,
        transition: { type: "tween", duration: 0.15 },
      });
      controls0.start("selected");
      controls1.start("visible");
      controls2.start("hidden");
      controls3.start("hidden");
    } else if (bottle == 2) {
      controlsContainer.start({
        opacity: 1,
        x: bottleRef.current.offsetWidth * 0.5,
        transition: { type: "tween", duration: 0.15 },
      });
      controls0.start("visible");
      controls1.start("selected");
      controls2.start("visible");
      controls3.start("hidden");
    } else if (bottle == 3) {
      controlsContainer.start({
        opacity: 1,
        x: -(bottleRef.current.offsetWidth * 0.5),
        transition: { type: "tween", duration: 0.15 },
      });
      controls0.start("hidden");
      controls1.start("visible");
      controls2.start("selected");
      controls3.start("visible");
    } else {
      controlsContainer.start({
        opacity: 1,
        x: -(bottleRef.current.offsetWidth * 1.5),
        transition: { type: "tween", duration: 0.15 },
      });
      controls0.start("hidden");
      controls1.start("hidden");
      controls2.start("visible");
      controls3.start("selected");
    }
  }, [bottle]);

  return (
    <div
      id="schedule"
      className="h-[70vh] md:h-[60vh] lg:h-[85vh] flex flex-col justify-evenly bg-gradient-to-t from-[#00000000] via-[#00000060] to-[#00000000]"
      ref={containerRef}
    >
      <h2 className="text-3xl mb-0 md:text-4xl xl:text-6xl 2xl:text-8xl text-[#F2F2F2] font-bold text-center">
        กำหนดการ
      </h2>
      <motion.div
        className="flex flex-nowrap justify-center shrink-0 "
        animate={controlsContainer}
      >
        <motion.div
          className="w-[200px] h-[300px] md:w-[250px] md:h-[375px] lg:w-[300px] lg:h-[450px] flex items-end justify-center shrink-0"
          variants={bottleVaraiants}
          initial="visible"
          animate={controls0}
          ref={bottleRef}
        >
          <Image
            className="w-[80%] h-[80%]"
            src={bottles[0].src}
            alt={`bottles${bottles[0].index}`}
            width="0"
            height="0"
            sizes="100vw"
          />
        </motion.div>
        <motion.div
          className="w-[200px] h-[300px] md:w-[250px] md:h-[375px] lg:w-[300px] lg:h-[450px] flex items-end justify-center shrink-0"
          variants={bottleVaraiants}
          initial="visible"
          animate={controls1}
        >
          <Image
            className="w-[80%] h-[80%]"
            src={bottles[1].src}
            alt={`bottles${bottles[1].index}`}
            width="0"
            height="0"
            sizes="100vw"
          />
        </motion.div>
        <motion.div
          className="w-[200px] h-[300px] md:w-[250px] md:h-[375px] lg:w-[300px] lg:h-[450px] flex items-end justify-center shrink-0"
          variants={bottleVaraiants}
          initial="visible"
          animate={controls2}
        >
          <Image
            className="w-[80%] h-[80%]"
            src={bottles[2].src}
            alt={`bottles${bottles[2].index}`}
            width="0"
            height="0"
            sizes="100vw"
          />
        </motion.div>
        <motion.div
          className="w-[200px] h-[300px] md:w-[250px] md:h-[375px] lg:w-[300px] lg:h-[450px] flex items-end justify-center shrink-0"
          variants={bottleVaraiants}
          initial="visible"
          animate={controls3}
        >
          <Image
            className="w-[80%] h-[80%]"
            src={bottles[3].src}
            alt={`bottles${bottles[3].index}`}
            width="0"
            height="0"
            sizes="100vw"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Schedule;
