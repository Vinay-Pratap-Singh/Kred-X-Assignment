"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Thanks = () => {
  const router = useRouter();
  const [data, setData] = useState({ name: "", email: "", phoneNumber: "" });
  useEffect(() => {
    const newData = JSON.parse(localStorage.getItem("data") || "{}");
    setData({ ...newData });
    localStorage.clear();

    const redirectTimer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(redirectTimer);
  }, [router]);
  return (
    <div className="h-screen flex items-center justify-center">
      {/* thanks you card */}
      <div className="w-96 rounded-md shadow-md p-5 flex flex-col gap-3">
        <h1 className="text-2xl font-semibold text-center bg-gradient-to-r from-[#239A99] to-[#4EB7E9] text-transparent bg-clip-text">
          Thanks for contacting
        </h1>
        <p className="font-medium">
          Your details have been saved, and our team will contact you shortly,
          you will be automatically redirected to homepage after 5 second
        </p>
        <div className="grid grid-cols-2 font-medium">
          <p>Name</p>
          <p>{data?.name}</p>
          <p>Email</p>
          <p>{data?.email}</p>
          <p>Phone number</p>
          <p>{data?.phoneNumber}</p>
        </div>
        <Link href={"/"}>
          <button className="rounded-md w-full bg-[#32BFBD] text-white py-2 font-medium flex items-center justify-center gap-5">
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
                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
              </svg>
            </div>
            <p>Back to homepage</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Thanks;
