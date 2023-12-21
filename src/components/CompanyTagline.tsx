import Image from "next/image";
import React from "react";

const CompanyTagline = () => {
  return (
    <section className="py-5 sm:py-10 md:py-20 px-5 sm:px-10 md:px-32 flex flex-col sm:flex-row items-center gap-2 sm:gap-5 md:gap-10">
      <Image
        className="w-8 h-14 sm:w-20 sm:h-20 transform rotate-90 sm:rotate-0"
        width={110}
        height={57}
        src="/assets/taglineSecImg.png"
        alt="tagline section symbol"
      />

      <p className="font-medium text-lg sm:text-2xl text-center">
         Only KredX’s AP Solution lets you automate and streamline your entire
        PO-to-Pay process without messing up your existing processes. That’s
        because we support all native functionality for 40+ ERPs
      </p>

      <Image
        className="w-8 h-14 sm:w-20 sm:h-20 transform sm:rotate-180 -rotate-90"
        width={110}
        height={57}
        src="/assets/taglineSecImg.png"
        alt="tagline section symbol"
      />
    </section>
  );
};

export default CompanyTagline;
