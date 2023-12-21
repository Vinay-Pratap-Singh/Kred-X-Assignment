"use client";
import { cmsData } from "@/helper/data";
import React, { useState } from "react";

const CmsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="flex flex-col sm:flex-row gap-5 sm:gap-0 items-center">
      {/* left section */}
      <div className="sm:w-[60%] space-y-5 sm:space-y-10">
        {cmsData &&
          cmsData.map((data, index) => {
            return (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`font-semibold text-base sm:text-lg pr-5 sm:pr-10 cursor-pointer ${
                  currentIndex === index &&
                  "rounded-l-md bg-gradient-to-r from-[#093A71] to-[#1F9EA6]"
                }`}
              >
                <div
                  className={`p-5 flex items-center gap-2 sm:gap-10  ${
                    currentIndex === index
                      ? "rounded-l-md bg-transparent text-white"
                      : "text-[#4A4A4A] rounded-md bg-white shadow-md"
                  }`}
                >
                  <p>{data?.feature}</p>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      {/* right section */}
      <ul
        className={`sm:w-[40%] bg-[#1F9EA6] p-5 sm:p-10 self-stretch rounded-r-md flex flex-col gap-2 sm:gap-0 justify-between text-white ${
          currentIndex !== 0 && "rounded-tl-md"
        } ${currentIndex !== cmsData.length - 1 && "rounded-bl-md"}`}
      >
        {cmsData[currentIndex].data.map((list, index) => {
          return (
            <li
              key={index}
              className="flex gap-3 sm:gap-5 text-sm sm:text-base"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>

              <p className="font-semibold">{list}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CmsSection;
