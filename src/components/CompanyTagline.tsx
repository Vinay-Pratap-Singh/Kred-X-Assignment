import Image from "next/image";
import React from "react";
import tagLineImg from "@/assets/taglineSecImg.png";

const CompanyTagline = () => {
  return (
    <section className="py-20 px-32 flex items-center gap-10">
      <Image className="h-28" src={tagLineImg} alt="tagline section symbol" />

      <p className="font-medium text-2xl text-center">
         Only KredX’s AP Solution lets you automate and streamline your entire
        PO-to-Pay process without messing up your existing processes. That’s
        because we support all native functionality for 40+ ERPs
      </p>

      <Image
        className="h-28 transform rotate-180"
        src={tagLineImg}
        alt="tagline section symbol"
      />
    </section>
  );
};

export default CompanyTagline;
