import React from "react";
import WindowsControlImage from "../assets/Window_Controls.png";

export default function ToolBarEvent() {
  return (
    <>
      <div className="relative top-[91px] overflow-hidden z-50">
        <div className="fixed top-0 left-0 bg-toolbarBlack w-full h-[56px] flex items-center justify-center">
          <div className="absolute top-[20px] left-[35px]">
            <img
              className="w-full h-full"
              src={WindowsControlImage}
              alt="Windows Controls"
            />
          </div>

          <h1 className="text-whiteTextBar text-[13px] font-sfPro font-bold leading-[15.51px] text-center">
            Mysterious Creatues
          </h1>
        </div>
      </div>
    </>
  );
}
