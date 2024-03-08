import React from "react";

export default function HeaderEvent() {
  return (
    <>
      <nav className="top-[91px]">
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
      </nav>
    </>
  );
}
