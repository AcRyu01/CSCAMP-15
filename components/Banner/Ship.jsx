import Image from "next/image";
import ship1 from "@/assets/images/Ship1.png";
import ship2 from "@/assets/images/Ship2.png";
import wave0 from "@/assets/images/wave0.png";
import wave1 from "@/assets/images/wave1.png";
import wave2 from "@/assets/images/wave2.png";
import wave3 from "@/assets/images/wave3.png";
import wave4 from "@/assets/images/wave4.png";
import { motion } from "framer-motion";

const shipVaraiants1 = {
  visible: {
    y: [5, -10, 15, -10, 5],
    x: [-50, -50, -40, -60, -50],
    transition: {
      repeat: Infinity,
      duration: 10,
      type: "tween",
    },
  },
};

const shipVaraiants2 = {
  visible: {
    y: [0, -5, 20, -5, 0],
    x: [5, 0, -10, 10, 5],
    transition: {
      repeat: Infinity,
      duration: 10,
      type: "tween",
    },
  },
};

const wave4Variants = {
  visible: {
    y: [0, 5, -5, 5, 0],
    x: [0, 1, 0, -1, 0],
    scale: [1.05, 1.01, 1.05, 1.02, 1.05],
    transition: {
      repeat: Infinity,
      duration: 10,
      type: "tween",
    },
  },
};
const wave23Variants = {
  visible: {
    y: [-15, -10, 0, -10, -15],
    x: [0, -2, 0, -1, 0],
    scale: [1, 1.005, 1, 1.005, 1],
    transition: {
      repeat: Infinity,
      duration: 8,
      type: "tween",
    },
  },
};
const wave01Variants = {
  visible: {
    y: [5, -6, 7, -2, 5],
    scale: [1, 1.02, 1, 1.02, 1],
    transition: {
      repeat: Infinity,
      duration: 6,
      type: "tween",
    },
  },
};

function Ship() {
  return (
    <>
      {/* ship left */}
      <motion.div
        className="hidden md:block relative z-10 w-[272px] 2xl:w-[448px] h-[229px] 2xl:h-[376px] rotate-[9.11deg] -mt-36 2xl:-mt-56 -left-64 2xl:-left-[450px]"
        variants={shipVaraiants1}
        animate={"visible"}
      >
        <Image
          src={ship1}
          alt="ship1"
          fill
          className="object-contain"
          sizes="(min-width: 0) 100vw"
        />
      </motion.div>
      {/* ship right */}
      <motion.div
        className="relative z-30 w-[446px] md:w-[381px] 2xl:w-[626px] h-[378px] md:h-[328px] 2xl:h-[531px] -right-40 md:-right-60 2xl:-right-[420px] -mt-24 md:-mt-52 2xl:-mt-[350px] -rotate-[1.55deg]"
        variants={shipVaraiants2}
        animate="visible"
      >
        <Image
          src={ship2}
          alt="ship2"
          fill
          className="object-contain"
          sizes="(min-width: 0) 100vw"
        />
      </motion.div>
      {/* All wave */}
      <div className="relative h-[35px] md:h-[50px] w-full -top-72 md:-top-64">
        {/* wave 4 */}
        <motion.div
          className="banner-wave hidden md:block h-[200px] 2xl:h-[300px] top-12 2xl:-top-20  z-0"
          variants={wave4Variants}
          animate={"visible"}
        >
          <Image src={wave4} alt="wave4" fill />
        </motion.div>
        {/* wave 2-3 */}
        <motion.div
          className="banner-wave -top-56 lg:-top-64 xl:-top-72 2xl:-top-[430px] z-20 "
          variants={wave23Variants}
          animate={"visible"}
        >
          <Image src={wave3} alt="wave3" fill priority />
          <Image src={wave2} alt="wave2" fill />
        </motion.div>
        {/* wave 0-1 */}
        <motion.div
          className="banner-wave md:h-[550px] 2xl:h-[700px] -top-44 md:-top-60 2xl:-top-96 z-40"
          variants={wave01Variants}
          animate={"visible"}
        >
          <Image src={wave1} alt="wave1" fill />
          <Image src={wave0} alt="wave0" fill />
        </motion.div>
      </div>
    </>
  );
}

export default Ship;
