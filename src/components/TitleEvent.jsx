import React from "react";
import RightTextOne from "../assets/Right_TextOne.png";
import RightTextTwo from "../assets/Right_TextTwo.png";
import RightTextThree from "../assets/Process_Bullet.png";

export default function TitleEvent() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="relative overflow-hidden top-[85px] -left-10 z-10 flex flex-row justify-end items-center gap-8">
          <div className="w-[233.7px] h-[736.34px]">
            <img src={RightTextOne} alt="" />
          </div>

          <div className="w-[167px] h-[773px]">
            <img src={RightTextTwo} alt="" />
          </div>

          <div className="absolute top-[208px] left-[1160px] w-full ">
            <img src={RightTextThree} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
