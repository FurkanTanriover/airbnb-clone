import Head from "next/head";
import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import fsPromises from "fs/promises";
import SmallCard from "../components/SmallCard";
import path from "path";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Home = (props) => {
  const exploreData = props.exploreData;

  return (
    <div className="">
      <Head>
        <title>Furki Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className=" pt-6">
          <h2 className="text-4xl font-semibold pb-5"> Explore Nearby</h2>
          {/* Pull some data from a server - API endpoints */}
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard key={img} img={img} location={location} distance={distance} />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8"> Live Anywhere</h2>
        </section>
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "exploreData.json");
  const jsonData = await fsPromises.readFile(filePath);
  const exploreData = JSON.parse(jsonData);

  return {
    props: exploreData,
  };
}
