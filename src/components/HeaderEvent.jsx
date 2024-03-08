import React from "react";
import ControlImage from "../assets/Window_Controls.png";

export default function HeaderEvent() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="top-[91px] overflow-hidden z-50 relative">
          <div className="fixed top-0 left-0 bg-toolbarBlack w-full h-[56px] flex items-center justify-center">
            <img
              className="absolute top-[20px] left-[35px]"
              src={ControlImage}
              alt="Windows Controls"
            />

            <h1 className="text-[13px] leading-[15.51px] text-center font-bold text-whiteTextBar">
              Mysterious Creatues
            </h1>
          </div>
          <ul className="top-[91px] left-[202px] fixed flex flex-row justify-start items-center gap-2">
            <li>
              <a
                className="bg-blackBar text-orangeTextBar px-6 py-3 w-32 h-11 rounded-[123px] text-base font-bold leading-[20.13px]"
                href=""
              >
                Collection
              </a>
            </li>
            <li>
              <a
                className="bg-blackBarTwo opacity-[80%] text-whiteTextBar px-6 py-3 w-32 h-11 rounded-[123px] text-base font-bold leading-[20.13px]"
                href=""
              >
                Ads
              </a>
            </li>
            <li>
              <a
                className="bg-blackBarTwo opacity-[80%] text-whiteTextBar px-6 py-3 w-32 h-11 rounded-[123px] text-base font-bold leading-[20.13px]"
                href=""
              >
                Campaign
              </a>
            </li>
            <li>
              <a
                className="bg-blackBarTwo opacity-[80%] text-whiteTextBar px-6 py-3 w-32 h-11 rounded-[123px] text-base font-bold leading-[20.13px]"
                href=""
              >
                Promo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
