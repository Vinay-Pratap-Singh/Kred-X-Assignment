import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#001932] px-5 sm:px-20 flex items-center justify-between py-5 sm:py-8">
      <Image
        width={80}
        height={40}
        src="/assets/footerLogo.png"
        alt="footer logo"
      />

      <div className="flex items-center gap-3 sm:gap-5">
        <Image
          width={20}
          height={20}
          src="/assets/social/insta.png"
          alt="instagram"
        />
        <Image
          width={20}
          height={20}
          src="/assets/social/linkedin.png"
          alt="linkedin"
        />
        <Image
          width={20}
          height={20}
          src="/assets/social/facebook.png"
          alt="facebook"
        />
        <Image
          width={20}
          height={20}
          src="/assets/social/twitter.png"
          alt="twitter"
        />
        <Image
          width={20}
          height={20}
          src="/assets/social/youtube.png"
          alt="youtube"
        />
      </div>
    </footer>
  );
};

export default Footer;
