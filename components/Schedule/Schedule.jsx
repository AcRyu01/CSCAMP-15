import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import bottles from "./bottles";
import { motion, useAnimation, useInView } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "tween",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

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
    scale: [1.7, 1.5, 1.7],
    transition: {
      repeat: Infinity,
      duration: 1.2,
      type: "tween",
    },
  },
};

function Schedule() {
  const bottleRef = useRef(null);

  const [bottle, setbottle] = useState(0);
  const [currentBottle, setCurrentBottle] = useState(0);
  const isInView = useInView(bottleRef, { once: true });

  const controlsContainer = useAnimation();
  const controls0 = useAnimation();
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  useEffect(() => {
    if (isInView) {
      controlsContainer.start("visible");
    } else {
      controlsContainer.set("hidden");
    }
  }, [isInView]);

  useEffect(() => {
    if (bottle == 0) {
      if (currentBottle == 3) {
        controls1.set({
          x: bottleRef.current.offsetWidth * 2,
          transition: {
            type: false,
          },
        });

        controls2.start("hidden");
        controls2.start({
          x: -bottleRef.current.offsetWidth * 2,
        });

        controls3.start("visible");
        controls3.start({
          x: -bottleRef.current.offsetWidth,
        });

        controls0.start("selected");
        controls0.start({
          x: 0,
        });

        controls1.start("visible");
        controls1.start({
          x: bottleRef.current.offsetWidth,
        });
      } else {
        controls3.set({
          x: -bottleRef.current.offsetWidth * 2,
          transition: {
            type: false,
          },
        });

        controls2.start("hidden");
        controls2.start({
          x: bottleRef.current.offsetWidth * 2,
        });

        controls1.start("visible");
        controls1.start({
          x: bottleRef.current.offsetWidth,
        });

        controls0.start("selected");
        controls0.start({
          x: 0,
        });

        controls3.start("visible");
        controls3.start({
          x: -bottleRef.current.offsetWidth,
        });
      }
      setCurrentBottle(0);
    } else if (bottle == 1) {
      if (currentBottle == 0) {
        controls2.set({
          x: bottleRef.current.offsetWidth * 2,
          transition: {
            type: false,
          },
        });

        controls3.start("hidden");
        controls3.start({
          x: -bottleRef.current.offsetWidth * 2,
        });

        controls0.start("visible");
        controls0.start({
          x: -bottleRef.current.offsetWidth,
        });

        controls1.start("selected");
        controls1.start({
          x: 0,
        });

        controls2.start("visible");
        controls2.start({
          x: bottleRef.current.offsetWidth,
        });
      } else {
        controls0.set({
          x: -bottleRef.current.offsetWidth * 2,
          transition: {
            type: false,
          },
        });

        controls3.start("hidden");
        controls3.start({
          x: bottleRef.current.offsetWidth * 2,
        });

        controls2.start("visible");
        controls2.start({
          x: bottleRef.current.offsetWidth,
        });

        controls1.start("selected");
        controls1.start({
          x: 0,
        });

        controls0.start("visible");
        controls0.start({
          x: -bottleRef.current.offsetWidth,
        });
      }
      setCurrentBottle(1);
    } else if (bottle == 2) {
      if (currentBottle == 1) {
        controls3.set({
          x: bottleRef.current.offsetWidth * 2,
        });

        controls0.start("hidden");
        controls0.start({
          x: -bottleRef.current.offsetWidth * 2,
        });

        controls1.start("visible");
        controls1.start({
          x: -bottleRef.current.offsetWidth,
        });

        controls2.start("selected");
        controls2.start({
          x: 0,
        });

        controls3.start("visible");
        controls3.start({
          x: bottleRef.current.offsetWidth,
        });
      } else {
        controls1.set({
          x: -bottleRef.current.offsetWidth * 2,
          transition: {
            type: false,
          },
        });

        controls0.start("hidden");
        controls0.start({
          x: bottleRef.current.offsetWidth * 2,
        });

        controls3.start("visible");
        controls3.start({
          x: bottleRef.current.offsetWidth,
        });

        controls2.start("selected");
        controls2.start({
          x: 0,
        });

        controls1.start("visible");
        controls1.start({
          x: -bottleRef.current.offsetWidth,
        });
      }
      setCurrentBottle(2);
    } else {
      if (currentBottle == 2) {
        controls0.set({
          x: bottleRef.current.offsetWidth * 2,
          transition: {
            type: false,
          },
        });

        controls1.start("hidden");
        controls1.start({
          x: -bottleRef.current.offsetWidth * 2,
        });

        controls2.start("visible");
        controls2.start({
          x: -bottleRef.current.offsetWidth,
        });

        controls3.start("selected");
        controls3.start({
          x: 0,
        });

        controls0.start("visible");
        controls0.start({
          x: bottleRef.current.offsetWidth,
        });
      } else {
        controls2.set({
          x: -bottleRef.current.offsetWidth * 2,
          transition: {
            type: false,
          },
        });

        controls1.start("hidden");
        controls1.start({
          x: bottleRef.current.offsetWidth * 2,
        });

        controls0.start("visible");
        controls0.start({
          x: bottleRef.current.offsetWidth,
        });

        controls3.start("selected");
        controls3.start({
          x: 0,
        });

        controls2.start("visible");
        controls2.start({
          x: -bottleRef.current.offsetWidth,
        });
      }
      setCurrentBottle(3);
    }
  }, [bottle]);

  return (
    <div
      id="schedule"
      className="h-[350px] md:h-[500px] lg:h-[600px]  bg-gradient-to-t from-[#00000000] via-[#00000060] to-[#00000000] my-[60px]"
    >
      <motion.div
        className="flex flex-col w-full h-full"
        variants={containerVariants}
        animate={controlsContainer}
      >
        <h2 className="text-3xl md:text-5xl 2xl:text-6xl text-[#F2F2F2] font-bold text-center">
          กำหนดการ
        </h2>
        <motion.div
          className="flex justify-center shrink-0 mt-10"
          variants={childVariants}
        >
          <motion.div
            className="w-[120px] h-[180px] md:w-[200px] md:h-[300px] lg:w-[250px] lg:h-[375px] flex items-end justify-center shrink-0 cursor-pointer absolute"
            variants={bottleVaraiants}
            animate={controls0}
            onClick={() => setbottle(0)}
            ref={bottleRef}
            transition={{
              type: "tween",
            }}
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
            className="w-[120px] h-[180px] md:w-[200px] md:h-[300px] lg:w-[250px] lg:h-[375px] flex items-end justify-center shrink-0 cursor-pointer absolute"
            variants={bottleVaraiants}
            animate={controls1}
            onClick={() => setbottle(1)}
            transition={{
              type: "tween",
            }}
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
            className="w-[120px] h-[180px] md:w-[200px] md:h-[300px] lg:w-[250px] lg:h-[375px] flex items-end justify-center shrink-0 cursor-pointer absolute"
            variants={bottleVaraiants}
            animate={controls2}
            onClick={() => setbottle(2)}
            transition={{
              type: "tween",
            }}
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
            className="w-[120px] h-[180px] md:w-[200px] md:h-[300px] lg:w-[250px] lg:h-[375px] flex items-end justify-center shrink-0 cursor-pointer absolute"
            variants={bottleVaraiants}
            animate={controls3}
            onClick={() => setbottle(3)}
            transition={{
              type: "tween",
            }}
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
      </motion.div>
    </div>
  );
}

export default Schedule;
