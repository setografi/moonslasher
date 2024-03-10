import React from "react";
import LeftTextOne from "../assets/Left_TextOne.png";
import LeftTextTwo from "../assets/Left_TextTwo.png";

export default function RotateText() {
  return (
    <>
      <div className="absolute top-3 md:top-8 lg:top-[83px] left-3 md:left-9">
        <div className="flex flex-col justify-center items-center gap-8 md:gap-14 lg:gap-16">
          <div>
            <img
              className="w-full h-10 md:h-16 lg:h-20"
              src={LeftTextOne}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-72 md:h-[26rem] lg:h-[36rem]"
              src={LeftTextTwo}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
