import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../Components/Banner";
import Header from "../Components/Header";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
    </div>
  );
};

export default Home;
