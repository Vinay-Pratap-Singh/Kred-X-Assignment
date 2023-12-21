import React from "react";

type IProps = {
  content: string;
};

const Button = ({ content }: IProps) => {
  return (
    <button className="text-white bg-primaryColor rounded-md font-semibold text-2xl px-10 py-3">
      {content}
    </button>
  );
};

export default Button;
