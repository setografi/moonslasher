import React from "react";

export default function HeaderEvent() {
  return (
    <>
      <div>
        <div className="relative z-10">
          <ul className="absolute top-24 left-48 flex flex-row justify-center items-center gap-2">
            <li>
              <a
                className="bg-blackBar text-orangeTextBar text-base font-medium font-samsungSharp leading-5 px-6 py-3 rounded-[123px] cursor-pointer hover:bg-orangeTextBar hover:text-blackBar"
                href=""
              >
                Collection
              </a>
            </li>
            <li>
              <a
                className="bg-blackBarTwo bg-opacity-[80%] text-whiteTextBar text-base font-medium font-samsungSharp leading-5 px-6 py-3 rounded-[123px]"
                href=""
              >
                Ads
              </a>
            </li>
            <li>
              <a
                className="bg-blackBarTwo bg-opacity-[80%] text-whiteTextBar text-base font-medium font-samsungSharp leading-5 px-6 py-3 rounded-[123px]"
                href=""
              >
                Campaign
              </a>
            </li>
            <li>
              <a
                className="bg-blackBarTwo bg-opacity-[80%] text-whiteTextBar text-base font-medium font-samsungSharp leading-5 px-6 py-3 rounded-[123px]"
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
