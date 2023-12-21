import Image from "next/image";
import React from "react";

const CompanyTagline = () => {
  return (
    <section className="py-20 px-32 flex items-center gap-10">
      <Image
        width={110}
        height={57}
        src="/assets/taglineSecImg.png"
        alt="tagline section symbol"
      />

      <p className="font-medium text-2xl text-center">
         Only KredX’s AP Solution lets you automate and streamline your entire
        PO-to-Pay process without messing up your existing processes. That’s
        because we support all native functionality for 40+ ERPs
      </p>

      <Image
        className="transform rotate-180"
        width={110}
        height={57}
        src="/assets/taglineSecImg.png"
        alt="tagline section symbol"
      />
    </section>
  );
};

export default CompanyTagline;
