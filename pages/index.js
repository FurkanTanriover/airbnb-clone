import Head from "next/head";
import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import fsPromises from "fs/promises";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
import path from "path";

const Home = (props) => {
  const exploreData = props.exploreData;
  const cardsData = props.cardsData;
  console.log(exploreData);
  console.log(cardsData);
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
          <div className="flex overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData.map((item) => {
              return <MediumCard key={item.img} img={item.img} title={item.title} />;
            })}
          </div>
        </section>
        <LargeCard img={"https://links.papareact.com/4cj"} title={"The Greatest Outdoors"} description={"Wishlists curated by Airbnb"} buttonText={"Get Inspired"}/>
        <Footer/>
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const data = JSON.parse(jsonData);
  return {
    props: data,
  };
}
