import Head from "next/head";
import Image from "next/image";
import Banner from "@/components/Banner/Banner";
import Introduce from "@/components/Introduce/Introduce";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="bg-content">
        <Introduce />
        <div className="h-60 text-center text-white">เงื่อนไข dummy</div>
      </div>
    </>
  );
}
