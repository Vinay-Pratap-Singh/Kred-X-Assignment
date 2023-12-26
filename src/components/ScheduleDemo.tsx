import Image from "next/image";
import React from "react";

const ScheduleDemo = () => {
  return (
    <div className="w-full space-y-5">
      <div className="flex items-center gap-10 h-full">
        <Image
          className="rounded-md self-stretch w-1/2"
          width={200}
          height={200}
          src="/assets/scheduleDemo/scheduleDemo.png"
          alt="scheduleDemo"
        />
        <form className="w-1/2 self-stretch">
          <div className="w-full flex flex-col items-center h-full justify-between">
            <h1 className="font-semibold text-2xl sm:text-3xl bg-gradient-to-r from-[#239A99] to-[#4EB7E9] text-transparent bg-clip-text">
              Experience the simplicity and efficiency of KredX today!
            </h1>
            <div className="space-y-4 w-full">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm">
                  Full name*
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter full name"
                  className="px-4 py-2 border-[1px] border-neutral-200 bg-neutral-50 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phoneNumber" className="text-sm">
                  Phone number*
                </label>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  id="phoneNumber"
                  className="px-4 py-2 border-[1px] border-neutral-200 bg-neutral-50 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm">
                  Email ID*
                </label>
                <input
                  type="text"
                  placeholder="Enter email ID"
                  id="email"
                  className="px-4 py-2 border-[1px] border-neutral-200 bg-neutral-50 rounded-md"
                />
              </div>
            </div>
            <button
              type="submit"
              className="rounded-md w-full bg-[#32BFBD] text-white py-2 font-medium self-end"
            >
              Schedule A Demo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleDemo;
