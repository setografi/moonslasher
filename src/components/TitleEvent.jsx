import React from "react";
import RightTextOne from "../assets/Right_TextOne.png";
import RightTextTwo from "../assets/Right_TextTwo.png";
import RightTextThree from "../assets/Process_Bullet.png";

export default function TitleEvent() {
  return (
    <>
      <div>
        <div className="relative z-10 flex flex-row justify-end items-center gap-9">
          <div className="relative top-16">
            <img className="w-full h-full" src={RightTextOne} alt="" />
          </div>

          <div className="relative top-20 mr-10">
            <div>
              <img className="w-full h-full" src={RightTextTwo} alt="" />
            </div>

            <div className="absolute top-[208px] -left-4">
              <img className="w-full h-full" src={RightTextThree} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
