import Head from "next/head";
import Image from "next/image";
import Banner from "@/components/Banner/Banner";

export default function Home() {
  return (
    <>
      {/* <h1 className="mt-20 text-[48px] font-bold text-red-500 text-center">
        Hello World!
      </h1> */}
      <Banner />
    </>
  );
}
