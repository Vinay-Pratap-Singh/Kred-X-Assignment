"use client";

import Image from "next/image";
import React, { useState } from "react";

const Resources = () => {
  const resourceData = [
    {
      image: "/assets/resource/resource1.png",
      title:
        "01 Accounts Payable Automation and Payment Optimization: Improving Business Efficiency",
      date: "18/12/2023",
    },
    {
      image: "/assets/resource/resource1.png",
      title:
        "02 Accounts Payable Automation and Payment Optimization: Improving Business Efficiency",
      date: "18/12/2023",
    },
    {
      image: "/assets/resource/resource1.png",
      title:
        "03 Accounts Payable Automation and Payment Optimization: Improving Business Efficiency",
      date: "18/12/2023",
    },
    {
      image: "/assets/resource/resource1.png",
      title:
        "04 Accounts Payable Automation and Payment Optimization: Improving Business Efficiency",
      date: "18/12/2023",
    },
    {
      image: "/assets/resource/resource1.png",
      title:
        "05 Accounts Payable Automation and Payment Optimization: Improving Business Efficiency",
      date: "18/12/2023",
    },
    {
      image: "/assets/resource/resource1.png",
      title:
        "06 Accounts Payable Automation and Payment Optimization: Improving Business Efficiency",
      date: "18/12/2023",
    },
  ];

  const [perPage, setPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * perPage;
  const currentPageData = resourceData.slice(startIndex, startIndex + perPage);
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    // container for resources
    <div className="flex flex-col gap-10 items-center">
      <div className="flex items-center gap-10">
        {currentPageData.map((resource, index) => {
          return (
            <div key={index} className="w-80 space-y-3">
              <Image
                className="w-full rounded-md"
                width={300}
                height={150}
                src={resource?.image}
                alt={`Resource ${index + 1}`}
              />

              <h5 className="font-semibold text-lg leading-5">
                {resource?.title}
              </h5>
              <p className="text-[#909090] font-medium">{resource?.date}</p>
            </div>
          );
        })}
      </div>

      {/* for dots */}
      <div className="flex items-center gap-2">
        {Array.from(
          { length: Math.ceil(resourceData.length / perPage) },
          (_, index) => (
            <div key={index} onClick={() => handlePageChange(index + 1)}>
              <div
                className={`h-4 w-4 rounded-full ${
                  currentPage === index + 1
                    ? "bg-black"
                    : "bg-gray-500 cursor-pointer"
                }`}
              ></div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Resources;
