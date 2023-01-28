import Head from "next/head";
import Image from "next/image";
import Banner from "@/components/Banner/Banner";
import Schedule from "@/components/Schedule/Schedule";
export default function Home() {
  return (
    <>
      <Banner />
      <Schedule />
    </>
  );
}
