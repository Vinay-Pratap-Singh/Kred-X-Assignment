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
      <section className="flex flex-col items-center gap-20 bg-featureSectionBg bg-center pt-8 pb-16">
        <h1 className="text-center font-semibold text-5xl w-[40rem] bg-gradient-to-r from-[#239A99] to-[#4EB7E9] text-transparent bg-clip-text">
          KredX AP Automation Capabilities
        </h1>

        {/* for features card collection */}
        <div className="grid grid-cols-4 px-24 gap-10">
          {featuresData &&
            featuresData.map((feature: IFeatureData, index: number) => {
              return <FeatureCard key={index} feature={feature} />;
            })}
        </div>

        <Button content="Request Demo" />
      </section>

      {/* cms advantages section */}
      <section className="flex flex-col items-center gap-20 bg-center pt-14 pb-16 px-20 bg-gray-50">
        <h1 className="text-center font-semibold text-5xl w-[40rem] bg-gradient-to-r from-[#239A99] to-[#4EB7E9] text-transparent bg-clip-text">
          The KredX CMS Advantage
        </h1>

        <div className="flex items-center">
          {/* left section */}
          <div className="w-[60%] space-y-10">
            <div className="font-semibold text-lg pr-10 rounded-l-md bg-gradient-to-r from-[#239A99] to-primaryColor">
              <div className="p-5 bg-white rounded-l-md flex items-center gap-10 bg-transparent text-white">
                <p>
                  Increase bottom line by reducing costs and increasing
                  efficiency
                </p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="font-semibold text-lg pr-10">
              <div className="p-5 bg-white shadow-md rounded-md flex items-center gap-10 text-[#4A4A4A]">
                <p>
                  A tool for CFOs to analyze the cash flow and simulate what-if
                  scenarios
                </p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="font-semibold text-lg pr-10">
              <div className="p-5 bg-white shadow-md rounded-md flex items-center gap-10 text-[#4A4A4A]">
                <p>
                  Use integrated financing to fulfill cash flow gaps just in
                  time 
                </p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* right section */}
          <ul className="w-[40%] bg-primaryColor p-10 self-stretch rounded-r-md rounded-bl-md flex flex-col justify-between text-white">
            <li className="flex gap-5">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>

              <p className="font-semibold">
                Automations to increase the efficiency in both AP and AR sides.
              </p>
            </li>
            <li className="flex gap-5">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>

              <p className="font-semibold">
                On time follow-ups with customers enables quicker realization of
                revenues
              </p>
            </li>
            <li className="flex gap-5">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>

              <p className="font-semibold">
                Tools like dynamic discounting to increase bottom line
              </p>
            </li>
            <li className="flex gap-5">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>

              <p className="font-semibold">
                Reduced human effort can be utilized to focus on increasing
                revenues
              </p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
