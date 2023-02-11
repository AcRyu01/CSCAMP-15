import Container from "@/components/Layout/Container";
import cards from "./cards";
import FlipCard from "./FlipCard";
import { useEffect, useRef } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      type: "tween",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
    },
  },
};

const Condition = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const headControl = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      headControl.start("visible");
    } else {
      headControl.set("hidden");
    }
  }, [isInView]);

  return (
    <motion.div
      id="condition"
      variants={containerVariants}
      animate={headControl}
      ref={ref}
    >
      <Container className="flex flex-col items-center mb-64 md:mb-32 2xl:mb-56">
        <h2 className="text-3xl md:text-4xl xl:text-6xl 2xl:text-8xl md:mb-12 2xl:mb-10 text-[#F2F2F2] font-bold">
          เงื่อนไขการสมัคร
        </h2>
        <Container className="flex justify-around flex-wrap-reverse mt-10">
          <motion.div
            className="cursor-pointer w-[40vw] h-[65vw] md:w-[200px] md:h-[300px] xl:w-[300px] xl:h-[450px]"
            variants={cardVariants}
          >
            <FlipCard
              imgBack={cards.bCards[0]}
              imgFront={cards.fCards[0]}
              message={"เป็นนักเรียนมัธยมศึกษาปีที่ 4 หรือ 5 ปีการศึกษา 2565"}
            />
          </motion.div>
          <motion.div
            className="cursor-pointer w-[40vw] h-[65vw] md:w-[200px] md:h-[300px] xl:w-[300px] xl:h-[450px]"
            variants={cardVariants}
          >
            <FlipCard
              imgBack={cards.bCards[1]}
              imgFront={cards.fCards[1]}
              message={
                "มีอุปกรณ์สื่อสาร คอมพิวเตอร์ เเละอินเตอร์เน็ต สำหรับเข้าร่วมค่ายทางออนไลน์"
              }
            />
          </motion.div>
          <motion.div
            className="cursor-pointer w-[40vw] h-[65vw] md:w-[200px] md:h-[300px] xl:w-[300px] xl:h-[450px]"
            variants={cardVariants}
          >
            <FlipCard
              imgBack={cards.bCards[2]}
              imgFront={cards.fCards[2]}
              message={"แผนการเรียน"}
              subMessage={[
                "วิทยาศาสตร์ - คณิตศาสตร์",
                "วิทยาศาสตร์ - คณิตศาสตร์ - คอมพิวเตอร์",
                "ศิลป์ - คำนวณ",
              ]}
            />
          </motion.div>
        </Container>
      </Container>
    </motion.div>
  );
};

export default Condition;
