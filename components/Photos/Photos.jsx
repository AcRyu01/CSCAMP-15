import { useEffect, useRef } from "react";
import Image from "next/image";
import Img from "./Img";
import { motion, useAnimationControls, useInView } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import paperMobile from "@/assets/images/paper.webp";
import paperWeb from "@/assets/images/Paper2.webp";

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

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

const pictureSet = [
  {
    id: 0,
    fileName: "t1.jpeg",
  },
  {
    id: 1,
    fileName: "t2.jpeg",
  },
  {
    id: 2,
    fileName: "t3.jpeg",
  },
  {
    id: 3,
    fileName: "t4.jpeg",
  },
  {
    id: 4,
    fileName: "t5.jpeg",
  },
  {
    id: 5,
    fileName: "t6.jpeg",
  },
];

function Photos() {
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
    <div className="mt-8 md:mt-16">
      {/* // <motion.div
    //   id="photos"
    //   className="mt-8 md:mt-16"
    //   variants={containerVariants}
    //   initial={"hidden"}
    //   animate={control}
    // > */}
      <div className="absolute mx-4 md:mx-12 2xl:mx-16 w-[90%] h-[200px] xs:h-[300px] md:h-[500px] 2xl:h-[650px] z-0">
        <Image
          src={paperWeb}
          alt="paper"
          fill
          className="dropShadow hidden md:block"
          priority
          sizes="(min-width: 0) 100vw"
        />
        <Image
          src={paperMobile}
          alt="paper"
          fill
          className="dropShadow block md:hidden"
          priority
          sizes="(min-width: 0) 100vw"
        />
      </div>
      <h2 className="relative z-50 pt-6 md:pt-20 2xl:pt-24 topic text-3xl md:text-5xl 2xl:text-6xl text-[#74503c] font-bold text-center">
        ภาพกิจกรรม
      </h2>
      <div className="flex flex-col justify-center items-center h-fit w-[75%] mx-auto pt-4 mb-40 md:mb-32 2xl:mb-56">
        <Carousel
          responsive={responsive}
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3000}
          shouldResetAutoplay
          // centerMode
          className=""
          containerClass="container"
          dotListClass=""
          itemClass=""
          draggable={false}
          swipeable
          focusOnSelect={false}
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          slidesToSlide={1}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside
          showDots
        >
          {pictureSet.map((pic) => (
            <Img key={pic.id} imgSrc={pic.fileName} />
          ))}
        </Carousel>
      </div>
      {/* </motion.div> */}
    </div>
  );
}

export default Photos;
