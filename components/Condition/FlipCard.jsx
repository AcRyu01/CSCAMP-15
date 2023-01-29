import { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";

const FlipCard = ({ imgBack, imgFront }) => {
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
        whileHover={{ scale: 1.1 }}
        transition={{type: "spring"}}
      >
        <motion.div
          key={imgFront}
          className="flip-card w-full h-auto backface-visibility-hidden absolute"
          initial={{ rotateY: 180 }}
          animate={fControls}
          onClick={handleClick}
        >
          <Image src={imgFront} alt="" width="0" height="0" sizes="100vw" />
        </motion.div>
        <motion.div
          key={imgBack}
          className="flip-card w-full h-auto backface-visibility-hidden absolute"
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
