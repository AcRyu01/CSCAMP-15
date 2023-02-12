import React from "react";

const Button = (props) => {
  return (
    <a href="#banner">
      <button
        className="bg-white text-jungle-green-500 py-1 px-3 md:py-1 md:px-[11px] 2xl:py-[5px] 2xl:px-5 rounded-[10px] md:ml-8  hover:bg-jungle-green-500 hover:text-white
      duration-500"
      >
        {props.children}
      </button>
    </a>
  );
};

export default Button;
