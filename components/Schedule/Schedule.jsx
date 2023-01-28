import React, { useState } from "react";
import Container from "../Layout/Container";
import Image from "next/image";
import bottles from "./bottles";

function Schedule() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? bottles.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === bottles.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <Container className="flex flex-col items-center">
      <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group flex flex-col items-center">
        <Image
          className="w-auto h-full rounded-2xl bg-center bg-cover duration-500"
          src={bottles[currentIndex]}
          alt={`bottles${currentIndex}`}
          width="0"
          height="0"
          sizes="100vw"
        ></Image>

        {/* Left Arrow */}
        <div className="group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 p-2 h-[30vw]">
          <Image
            className="w-auto h-full rounded-2xl bg-center bg-cover duration-500"
            alt=""
            src={
              bottles[
                currentIndex - 1 == -1
                  ? bottles.length - 1
                  : currentIndex - (1 % bottles.length)
              ]
            }
            width="0"
            height="0"
            sizes="30vw"
            onClick={prevSlide}
          ></Image>
        </div>

        {/* Right Arrow */}
        <div className="group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 p-2 h-[30vw]">
          <Image
            className="w-auto h-full rounded-2xl bg-center bg-cover duration-500"
            alt=""
            src={bottles[(currentIndex + 1) % bottles.length]}
            width="0"
            height="0"
            sizes="30vw"
            onClick={nextSlide}
          ></Image>
        </div>

        <div className="flex top-4 justify-center py-2">
          {bottles.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            ></div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Schedule;
