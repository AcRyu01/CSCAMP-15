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
      staggerChildren: 0.4,
      delay: 0.4,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

function Introduce() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const control = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      control.start("visible");
    } else {
      control.set("hidden");
    }
  }, [isInView]);

  return (
    <motion.div
      id="intro"
      className="flex flex-col items-center mt-8 pt-4 md:pt-10 2xl:pt-20 mx-11 md:mx-24 2xl:mx-36 mb-64 md:mb-32 2xl:mb-56 text-center text-[#F2F2F2] "
      variants={containerVariants}
      initial={"hidden"}
      animate={control}
    >
      <h2 className="topic mb-2 md:mb-12 2xl:mb-10" ref={ref}>
        CS CAMP 15
      </h2>
      <motion.p
        className="text-base tracking-wide leading-7 md:leading-9 2xl:leading-[50px] md:text-xl 2xl:text-4xl font-extralight md:max-w-[700px] 2xl:max-w-[1000px]"
        variants={childVariants}
      >
        ค่ายที่เปิดโอกาสให้โจรสลัดผู้กล้าทั้งหลายที่สนใจในด้านวิทยาการคอมพิวเตอร์
        ที่พร้อมจะออกไปตามล่าหาขุมทรัพย์ที่ซ่อนอยู่ตามเกาะต่าง ๆ
        โดยต้องการผู้กล้าที่พร้อมจะเผชิญหน้ากับความอันตรายในการเดินเรือครั้งนี้!
        แม้ว่าจะมีปลาหมึกยักษ์น่าสะพรึงกลัว
        ที่พร้อมจะคร่าชีวิตเหล่าโจรสลัดได้ทุกเมื่อ และคลื่นลมกำลังแรง
        ที่ทำให้เรือโคลงเคลงขนาดไหน เราก็จะใช้อัลกอริทึมอันชาญฉลาด
        เพื่อเอาชีวิตรอดกลับมาให้ได้!!
      </motion.p>
      <br />
      <br />
      <div>
        <motion.p
          className="text-base tracking-wide leading-7 md:leading-9 2xl:leading-[50px] md:text-xl 2xl:text-4xl font-normal md:max-w-[700px] 2xl:max-w-[1000px]"
          variants={childVariants}
        >
          พร้อมที่จะออกไปตามล่าหาสมบัติกับเราหรือยัง
        </motion.p>
        <motion.p
          className="text-base tracking-wide leading-7 md:leading-9 2xl:leading-[50px] md:text-xl 2xl:text-4xl font-normal md:max-w-[700px] 2xl:max-w-[1000px]"
          variants={childVariants}
        >
          เหล่าโจรสลัดหน้าใหม่ทั้งหลาย...
        </motion.p>
      </div>
    </motion.div>
  );
}

export default Introduce;
