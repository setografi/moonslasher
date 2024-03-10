import React from "react";
import RightTextOne from "../assets/Right_TextOne.png";
import RightTextTwo from "../assets/Right_TextTwo.png";
import RightTextThree from "../assets/Process_Bullet.png";

export default function TitleEvent() {
  return (
    <>
      <div>
        <div className="relative left-0 z-10 flex flex-row justify-end items-center gap-2 md:gap-4 lg:gap-9">
          <div className="relative top-96 md:top-[19rem] lg:top-16">
            <img
              className="w-auto h-64 md:h-[26rem] lg:h-[46rem]"
              src={RightTextOne}
              alt=""
            />
          </div>

          <div className="relative top-80 md:top-5 lg:top-20 mr-3 md:mr-9 lg:mr-10">
            <div>
              <img
                className="w-auto h-72 md:h-[28rem] lg:h-[48rem]"
                src={RightTextTwo}
                alt=""
              />
            </div>

            <div className="absolute top-[80px] md:top-[125px] lg:top-[208px] -left-2 md:-left-4">
              <img
                className="w-auto h-28 md:h-44 lg:h-[19.4rem]"
                src={RightTextThree}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
