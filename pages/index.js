import React from "react";
import BannerSection from "@/components/BannerSection";
import SecondHeader from "@/components/SecondHeader";
import TopHeader from "@/components/TopHeader";
import Image from "next/image";
import Head from "next/head";
import MiddleSection from "@/components/MiddleSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div>
      <Head>
        <title>OYO</title>
        <link href="/icon.png" rel="icon"></link>
      </Head>
      <TopHeader />
      <SecondHeader />
      <BannerSection />
      <div className="mx-20">
        <div className="my-14">
          <Image
            src={`/banner1.avif`}
            alt="banner1"
            width={200}
            height={200}
            className="h-80 w-full"
          />
        </div>
        <div className="mb-14">
          <Image
            src={`/banner2.avif`}
            alt="banner2"
            width={200}
            height={200}
            className="h-40 w-full"
          />
        </div>
        <MiddleSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
