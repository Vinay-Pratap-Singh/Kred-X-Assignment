import React from "react";

const Shimmer = () => {
  return (
    <div className="relative w-80 h-48 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 opacity-0 animate-shimmer-delayed"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 opacity-0 animate-shimmer-delayed"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 opacity-0 animate-shimmer-delayed"></div>
    </div>
  );
};

export default Shimmer;
