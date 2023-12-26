import { client } from "@/utils/configSanity";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import React from "react";
type IProps = {
  image: object;
};

const SanityImage = ({ image }: IProps) => {
  const url = useNextSanityImage(client, image);
  return (
    <Image
      src={url}
      className="w-full rounded-md"
      width={300}
      height={150}
      alt="sanity image"
    />
  );
};

export default SanityImage;
