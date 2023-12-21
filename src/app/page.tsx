import Image from "next/image";
import logo from "@/assets/logo.png";
import mainImg from "@/assets/mainImg.png";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main>
      <section className="bg-mainSectionBg bg-cover px-20 py-10">
        {/* for logo */}
        <nav className="w-64">
          <Image src={logo} alt="logo" />
        </nav>

        {/* main content */}
        <section className="flex justify-between pb-20">
          {/* left content */}
          <div className="w-1/2 text-white space-y-8 self-end">
            <h1 className="font-semibold text-6xl">
              Automate Your Finance Function
            </h1>
            <p className="text-3xl font-semibold">WITHOUT Reworking Your ERP</p>
            <Button content="Learn more" />
          </div>

          {/* right content */}
          <div className="w-[45%]">
            <Image src={mainImg} alt="main image" />
          </div>
        </section>
      </section>
    </main>
  );
}
