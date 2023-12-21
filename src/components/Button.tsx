import React from "react";

type IProps = {
  content: string;
};

const Button = ({ content }: IProps) => {
  return (
    <button className="text-white bg-primaryColor rounded-md font-semibold sm:text-2xl px-5 sm:px-10 py-3">
      {content}
    </button>
  );
};

export default Button;
