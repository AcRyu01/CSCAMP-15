import React, { useEffect, useRef } from "react";
import Image from "next/image";
import WebFooter from "@/assets/images/WebFooter.webp";
import samsung from "@/assets/images/samsung.webp";
import borntoDev from "@/assets/images/borntoDev.webp";
import DPTF from "@/assets/images/DPTF.webp";
import FLG from "@/assets/images/FLG.webp";
import lactasoy from "@/assets/images/lactasoy.webp";
import webmaster from "@/assets/images/webmaster.webp";
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
      delay: 0.4,
      duration: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

const sponsor = [
  {
    img: samsung,
    name: "samsung",
  },
  {
    img: borntoDev,
    name: "borntoDev",
  },
  {
    img: FLG,
    name: "FLG",
  },
  {
    img: DPTF,
    name: "DPTF",
  },
  {
    img: lactasoy,
    name: "lactasoy",
  },
  {
    img: webmaster,
    name: "webmaster",
  },
];

function Sponsor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const controlsContainer = useAnimation();

  useEffect(() => {
    if (isInView) {
      controlsContainer.start("visible");
    } else {
      controlsContainer.set("hidden");
    }
  }, [isInView]);

  return (
    <div>
      <div className="absolute w-full bottom-0 z-0">
        <Image src={WebFooter} alt="WebFooter" className="w-full " />
      </div>
      <div className="relative xs:mb-[338px] md:mb-[300px] 2xl:mb-[450px]  bg-black  bg-opacity-40  z-auto">
        <motion.div
          className="  text-white md:text-[24px] 2xl:text-[36px] text-center pt-[24px]"
          ref={ref}
          variants={containerVariants}
          animate={controlsContainer}
          initial={"hidden"}
        >
          <div>สนับสนุนโดย</div>
          <motion.ul className="flex flex-wrap   md:text-[20px] 2xl:text-[36px] justify-center  items-center pt-[24px] ">
            {sponsor.map((logo) => (
              <motion.li
                key={logo.name}
                className="py-[24px] md:py-[12px] "
                variants={childVariants}
              >
                <Image
                  className="w-[75px] md:w-auto max-w-[300px] mx-[45px] 2xl:mx-[90px]"
                  src={logo.img}
                  alt="sponsor"
                />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
}

export default Sponsor;
