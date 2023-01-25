import React from "react";
import { useCountdown } from "@/hooks/useCountdown";

const ExpiredNotice = () => {
  return (
    <div className="text-center">
      <span>Expired!!!</span>
      <p>หมดเวลาแล้ว ช้าไปไอน้อง</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="flex w-full justify-between ">
      <div className="flex flex-col items-center">
        <p className=" text-3xl 2xl:text-7xl font-normal text-white">{days}</p>
        <p className=" text-xs 2xl:text-sm font-normal">DAYS</p>
      </div>
      <p className="text-3xl 2xl:text-5xl font-normal text-white 2xl:mt-2">
        {" "}
        :{" "}
      </p>
      <div className="flex flex-col items-center">
        <p className=" text-3xl 2xl:text-7xl font-normal text-white">{hours}</p>
        <p className=" text-xs 2xl:text-sm font-normal">HOURS</p>
      </div>
      <p className="text-3xl 2xl:text-5xl font-normal text-white 2xl:mt-2">
        {" "}
        :{" "}
      </p>
      <div className="flex flex-col items-center">
        <p className=" text-3xl 2xl:text-7xl font-normal text-white">
          {minutes}
        </p>
        <p className=" text-xs 2xl:text-sm font-normal">MINUTES</p>
      </div>
      <p className="text-3xl 2xl:text-5xl font-normal text-white 2xl:mt-2">
        {" "}
        :{" "}
      </p>
      <div className="flex flex-col items-center">
        <p className=" text-3xl 2xl:text-7xl font-normal text-white">
          {seconds}
        </p>
        <p className=" text-xs 2xl:text-sm font-normal">SECONDS</p>
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
