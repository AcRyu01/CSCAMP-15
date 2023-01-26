import dynamic from "next/dynamic";
import Image from "next/image";
import Bottle1 from "assets/images/shedule/Bottle1.png";
import Bottle2 from "assets/images/shedule/Bottle2.png";
import Bottle3 from "assets/images/shedule/Bottle3.png";
import Bottle4 from "assets/images/shedule/Bottle4.png";

const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);

import {
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

function Shedule() {
  const bottleSlide = batch(
    Sticky(),
    MoveIn(700, 0),
    MoveOut(-700, 0),
    Fade(),
    Zoom(0.5, 1.2)
  );
  return (
    <>
        <ScrollContainer>
          <ScrollPage>
            <Animator animation={bottleSlide}>
              <Image
                src={Bottle1}
                alt="วันรับสมัคร"
                width={400}
                height={600}
              ></Image>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={bottleSlide}>
              <Image
                src={Bottle2}
                alt="วันรับสมัคร"
                width={400}
                height={600}
              ></Image>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={bottleSlide}>
              <Image
                src={Bottle3}
                alt="วันรับสมัคร"
                width={400}
                height={600}
              ></Image>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={bottleSlide}>
              <Image
                src={Bottle4}
                alt="วันรับสมัคร"
                width={400}
                height={600}
              ></Image>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
    </>
  );
}

export default Shedule;
