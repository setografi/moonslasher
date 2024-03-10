import React from "react";

export default function HeaderEvent() {
  return (
    <>
      <div>
        <div className="hidden lg:block relative z-20">
          <ul className="lg:absolute lg:top-24 lg:left-48 flex flex-row justify-center items-center gap-2">
            <li>
              <a
                className="bg-blackBar text-orangeTextBar text-base font-medium font-samsungSharp leading-5 px-6 py-3 rounded-[123px] cursor-pointer hover:opacity-80"
                href=""
              >
                Collection
              </a>
            </li>
            <li>
              <a
                className="bg-blackBarTwo bg-opacity-[80%] text-whiteTextBar text-base font-medium font-samsungSharp leading-5 px-6 py-3 rounded-[123px] cursor-pointer hover:opacity-80"
                href=""
              >
                Ads
              </a>
            </li>
            <li>
              <a
                className="bg-blackBarTwo bg-opacity-[80%] text-whiteTextBar text-base font-medium font-samsungSharp leading-5 px-6 py-3 rounded-[123px] cursor-pointer hover:opacity-80"
                href=""
              >
                Campaign
              </a>
            </li>
            <li>
              <a
                className="bg-blackBarTwo bg-opacity-[80%] text-whiteTextBar text-base font-medium font-samsungSharp leading-5 px-6 py-3 rounded-[123px] cursor-pointer hover:opacity-80"
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
