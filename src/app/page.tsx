import Image from "next/image";
import Button from "@/components/Button";
import CompanyTagline from "@/components/CompanyTagline";
import { featuresData } from "@/helper/data";
import { IFeatureData } from "@/helper/interface";
import FeatureCard from "@/components/FeatureCard";
import CmsSection from "@/components/CmsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      {/* top-most section */}
      <section className="bg-mainSectionBg bg-cover px-5 py-5 sm:px-10 md:px-20 sm:py-10">
        {/* for logo */}
        <Image
          className="w-44 sm:w-60 mb-5 md:mb-0"
          width={250}
          height={50}
          src="/assets/logo.png"
          alt="logo"
        />

        {/* main content */}
        <section className="flex flex-col-reverse sm:flex-row justify-between pb-10 md:pb-32 gap-5 md:gap-10">
          {/* left content */}
          <div className="sm:w-1/2 text-white space-y-4 md:space-y-8 self-end">
            <h1 className="font-semibold text-3xl md:text-6xl">
              Automate Your Finance Function
            </h1>
            <p className="text-xl md:text-3xl font-semibold">
              WITHOUT Reworking Your ERP
            </p>
            <Button content="Learn more" />
          </div>

          {/* right content */}
          <div className="sm:w-1/2">
            <Image
              width={480}
              height={450}
              src="/assets/mainImg.png"
              alt="main image"
            />
          </div>
        </section>
      </section>

      {/* company tagline / statement */}
      <CompanyTagline />

      {/* software features section */}
      <section className="flex flex-col items-center gap-10 md:gap-20 bg-featureSectionBg bg-center pt-8 pb-8 sm:pb-16">
        <h1 className="text-center font-semibold text-2xl sm:text-3xl md:text-5xl sm:w-[40rem] bg-gradient-to-r from-[#239A99] to-[#4EB7E9] text-transparent bg-clip-text">
          KredX AP Automation Capabilities
        </h1>

        {/* for features card collection */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 px-5 sm:px-24 gap-5 md:gap-10">
          {featuresData &&
            featuresData.map((feature: IFeatureData, index: number) => {
              return <FeatureCard key={index} feature={feature} />;
            })}
        </div>

        <Button content="Request Demo" />
      </section>

      {/* cms advantages section */}
      <section className="flex flex-col items-center gap-5 sm:gap-10 md:gap-20 bg-center pt-6 sm:pt-14 pb-8 sm:pb-16 px-5 md:px-20 bg-gray-50">
        <h1 className="text-center font-semibold text-2xl sm:text-3xl md:text-5xl sm:w-[40rem] bg-gradient-to-r from-[#239A99] to-[#4EB7E9] text-transparent bg-clip-text">
          The KredX CMS Advantage
        </h1>

        <CmsSection />
      </section>

      {/* footer section */}
      <Footer />
    </main>
  );
}
