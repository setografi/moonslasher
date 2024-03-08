import React from "react";
import LeftTextOne from "../assets/Left_TextOne.png";
import LeftTextTwo from "../assets/Left_TextTwo.png";

export default function RotateText() {
  return (
    <>
      <div className="absolute top-[83px] left-[35px]">
        <div className="flex flex-col justify-center items-center gap-16">
          <div>
            <img src={LeftTextOne} alt="" />
          </div>
          <div>
            <img src={LeftTextTwo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
