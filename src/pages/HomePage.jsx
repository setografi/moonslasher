import React from "react";
import HeaderEvent from "../components/HeaderEvent";
import RotateText from "../components/RotateText";

import BackgroundImage from "../assets/Background_Image.png";
import TitleEvent from "../components/TitleEvent";
import ToolBarEvent from "../components/ToolBarEvent";

function HomePage() {
  return (
    <>
      <div className="absolute top-0 lg:left-36 z-10">
        <img
          className="w-[30rem] md:w-[54rem] h-screen md:h-full object-cover md:object-none"
          src={BackgroundImage}
          alt=""
        />
      </div>
      <ToolBarEvent />
      <HeaderEvent />
      <RotateText />
      <TitleEvent />
    </>
  );
}

export default HomePage;
