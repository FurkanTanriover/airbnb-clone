import { format } from "date-fns";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import path from "path";
import fsPromises from "fs/promises";

function Search(props) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  const searchData = props.searchData;
  //   const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  //   const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${startDate} - ${endDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
          <div className=" hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className=" btn btn-primary">Cancellation Flexibility</p>
            <p className=" btn">Type of Place</p>
            <p className=" btn">Price</p>
            <p className=" btn">Rooms and Beds</p>
            <p className=" btn">More Filters</p>
          </div>
          <div className="flex flex-col">
            {searchData.map(({ img, location, title, description, star, total, price }) => {
              return (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const data = JSON.parse(jsonData);
  return {
    props: data,
  };
}
