import Head from "next/head";
import Image from "next/image";
import Banner from "@/components/Banner/Banner";
import Shedule from "@/components/Schedule/shedule";

import { ScrollContainer, ScrollPage } from "react-scroll-motion";

export default function Home() {
  return (
    <>
          <Banner />
          <Shedule />
    </>
  );
}
