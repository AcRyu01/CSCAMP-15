import { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";

const FlipCard = ({ imgBack, imgFront, message = "", subMessage = [] }) => {
  const [flipped, setFlipped] = useState(false);
  const bControls = useAnimationControls();
  const fControls = useAnimationControls();

  const handleClick = () => {
    setFlipped(!flipped);
    bControls.start({
      rotateY: flipped ? 0 : 180,
      transition: { duration: 0.5 },
    });
    fControls.start({
      rotateY: flipped ? 180 : 0,
      transition: { duration: 0.5 },
    });
  };

  return (
    <>
      <motion.div
        className="relative"
        initial={{}}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring" }}
      >
        <motion.div
          className="flip-card w-full h-auto backface-visibility-hidden absolute flex justify-center drop-shadow-lg"
          initial={{ rotateY: 180 }}
          animate={fControls}
          onClick={handleClick}
        >
          <Image src={imgFront} alt="" width="0" height="0" sizes="100vw" />
          <div className="absolute top-[60%] px-[15px] w-[90%] text-[#F2F2F2] text-center">
            <p className="text-xs font-thin md:text-sm md:font-normal 2xl:font-semibold 2xl:text-lg">{message} </p>
            {subMessage.map((text, i) => (
              <p key={i} className="text-[9px] font-[50] md:text-xs md:font-extralight 2xl:font-light 2xl:text-sm">{text}</p>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="flip-card w-full h-auto backface-visibility-hidden absolute drop-shadow-lg"
          animate={bControls}
          onClick={handleClick}
        >
          <Image src={imgBack} alt="" width="0" height="0" sizes="100vw" />
        </motion.div>
      </motion.div>
    </>
  );
};

export default FlipCard;
