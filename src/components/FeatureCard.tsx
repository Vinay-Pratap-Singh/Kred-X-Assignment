import { IFeatureData } from "@/helper/interface";
import Image from "next/image";
import React from "react";

type IProps = {
  feature: IFeatureData;
};

const FeatureCard = ({ feature }: IProps) => {
  return (
    <div className="space-y-2 sm:space-y-3 flex flex-col items-center">
      <div className="flex w-10 h-10">
        <Image
          width={50}
          height={50}
          src={feature?.imgSrc}
          alt="feature card"
        />
      </div>
      <h3 className="font-semibold text-lg text-center">{feature?.title}</h3>
      <p className="text-sm text-center">{feature?.description}</p>
    </div>
  );
};

export default FeatureCard;
