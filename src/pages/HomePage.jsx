import React from "react";
import HeaderEvent from "../components/HeaderEvent";
import RotateText from "../components/RotateText";

import BackgroundImage from "../assets/Background_Image.png";
import TitleEvent from "../components/TitleEvent";

function HomePage() {
  return (
    <>
      <div>
        <img
          className="absolute -top-[24px] left-[130px] z-10"
          src={BackgroundImage}
          alt=""
        />
      </div>
      <HeaderEvent />
      <RotateText />
      <TitleEvent />
    </>
  );
}

export default HomePage;
