import Image from "next/image";
import Button from "@/components/Button";
import CompanyTagline from "@/components/CompanyTagline";
import { featuresData } from "@/helper/data";
import { IFeatureData } from "@/helper/interface";
import FeatureCard from "@/components/FeatureCard";

export default function Home() {
  return (
    <main>
      {/* top-most section */}
      <section className="bg-mainSectionBg bg-cover px-20 py-10">
        {/* for logo */}
        <Image width={250} height={50} src="/assets/logo.png" alt="logo" />

        {/* main content */}
        <section className="flex justify-between pb-32 gap-10">
          {/* left content */}
          <div className="w-1/2 text-white space-y-8 self-end">
            <h1 className="font-semibold text-6xl">
              Automate Your Finance Function
            </h1>
            <p className="text-3xl font-semibold">WITHOUT Reworking Your ERP</p>
            <Button content="Learn more" />
          </div>

          {/* right content */}
          <div className="w-1/2">
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
      <section className="flex flex-col items-center gap-28 bg-featureSectionBg">
        <h1 className="text-center font-semibold text-5xl w-[40rem] text-custom-gradient">
          KredX AP Automation Capabilities
        </h1>

        {/* for features card collection */}
        <div className="grid grid-cols-4 px-24 gap-10">
          {featuresData &&
            featuresData.map((feature: IFeatureData, index: number) => {
              return <FeatureCard key={index} feature={feature} />;
            })}
        </div>
      </section>
    </main>
  );
}
