"use client";

import { client } from "@/utils/configSanity";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type IFormData = {
  name: string;
  phoneNumber: string;
  email: string;
};

const ScheduleDemo = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<IFormData>();

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    try {
      await client.create({
        _type: "user",
        name: data?.name,
        email: data?.email,
        phoneNumber: data?.phoneNumber,
      });
      toast.success("Data submitted successfully");
      localStorage.setItem("data", JSON.stringify(data));
      reset();
      router.push("/thanks");
    } catch (error) {
      toast.error("Failed to save the data");
    }
  };

  return (
    <div className="w-full space-y-5">
      <div className="flex flex-col sm:flex-row items-center gap-5 lg:gap-10 h-full">
        <Image
          className="rounded-md self-stretch w-full sm:w-1/2"
          width={200}
          height={200}
          src="/assets/scheduleDemo/scheduleDemo.png"
          alt="scheduleDemo"
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full sm:w-1/2 self-stretch"
        >
          <div className="w-full flex flex-col gap-5 lg:gap-0 items-center h-full justify-between">
            <h1 className="font-semibold text-2xl sm:text-3xl bg-gradient-to-r from-[#239A99] to-[#4EB7E9] text-transparent bg-clip-text">
              Experience the simplicity and efficiency of KredX today!
            </h1>
            <div className="space-y-4 w-full">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm">
                  Full name*
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter full name"
                  className="px-4 py-2 border-[1px] border-neutral-200 bg-neutral-50 rounded-md"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Please enter your name",
                    },
                    minLength: {
                      value: 4,
                      message: "Please enter a valid name",
                    },
                  })}
                />
                {errors?.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="phoneNumber" className="text-sm">
                  Phone number*
                </label>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  id="phoneNumber"
                  className="px-4 py-2 border-[1px] border-neutral-200 bg-neutral-50 rounded-md"
                  {...register("phoneNumber", {
                    required: {
                      value: true,
                      message: "Please enter your phone number",
                    },
                    pattern: {
                      value: /^\+\d{1,4}\s?\d{6,14}$/,
                      message: "Please enter a valid number with country code",
                    },
                  })}
                />
                {errors?.phoneNumber && (
                  <p className="text-red-500 text-sm">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm">
                  Email ID*
                </label>
                <input
                  type="text"
                  placeholder="Enter email ID"
                  id="email"
                  className="px-4 py-2 border-[1px] border-neutral-200 bg-neutral-50 rounded-md"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Please enter your email id",
                    },
                    pattern: {
                      value: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
                      message: "Please enter a valid email id",
                    },
                  })}
                />
                {errors?.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="rounded-md w-full bg-[#32BFBD] text-white py-2 font-medium self-end"
            >
              {isSubmitting ? "Submitting the data ..." : "Schedule A Demo"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleDemo;
