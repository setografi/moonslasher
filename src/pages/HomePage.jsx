import React from "react";
import HeaderEvent from "../components/HeaderEvent";
import RotateText from "../components/RotateText";

import BackgroundImage from "../assets/Background_Image.png";
import TitleEvent from "../components/TitleEvent";
import ToolBarEvent from "../components/ToolBarEvent";

function HomePage() {
  return (
    <>
      <div className="absolute left-[130px] z-10">
        <img className="w-full h-auto" src={BackgroundImage} alt="" />
      </div>
      <ToolBarEvent />
      <HeaderEvent />
      <RotateText />
      <TitleEvent />
    </>
  );
}

export default HomePage;
