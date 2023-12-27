"use client";

import { IResourceData } from "@/helper/interface";
import { client } from "@/utils/configSanity";
import React, { useEffect, useRef, useState } from "react";
import SanityImage from "./SanityImage";
import Shimmer from "./Shimmer";
import toast from "react-hot-toast";

const Resources = () => {
  const isLoading = useRef(true);
  const [resourceData, setResourceData] = useState<IResourceData[]>([]);
  const perPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * perPage;
  const currentPageData = resourceData.slice(startIndex, startIndex + perPage);
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  // function to fetch data from sanity
  useEffect(() => {
    const getResourceData = async () => {
      try {
        isLoading.current = true;
        const query = `*[_type == "resource"]`;
        const data = (await client.fetch(query)) as IResourceData[];
        setResourceData(data);
        isLoading.current = false;
      } catch (error) {
        isLoading.current = false;
        toast.error("Failed to get resource data");
      }
    };
    getResourceData();
  }, []);

  return (
    <div className="flex flex-col gap-10 items-center w-full">
      <div className="flex items-center gap-10">
        {isLoading.current ? (
          <div className="flex items-center gap-10">
            {Array.from({ length: 3 }).map((_, index) => {
              return <Shimmer key={index} />;
            })}
          </div>
        ) : !currentPageData.length ? (
          <p className="text-lg font-semibold">Oops! there is no resources</p>
        ) : (
          currentPageData.map((resource: IResourceData) => {
            return (
              <div
                key={resource?._id}
                className="w-80 space-y-3 cursor-pointer hover:shadow-md hover:p-2 hover:rounded-md transition-all ease-in-out duration-300"
              >
                <SanityImage image={resource?.image} />
                <h5 className="font-semibold text-lg leading-5 line-clamp-2">
                  {resource?.title}
                </h5>
                <p className="text-[#909090] font-medium">{resource?.date}</p>
              </div>
            );
          })
        )}
      </div>

      {/* for dots */}
      {!isLoading.current && Boolean(currentPageData.length) && (
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
      )}
    </div>
  );
};

export default Resources;
