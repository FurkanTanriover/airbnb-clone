import Image from "next/image";
import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

function InfoCard({ img, location, distance, star, title, description, total, price }) {
  return (
    <div className="flex py-7 px-3 hover:bg-gray-100 hover:opacity-7 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className=" relative h-20 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image className="rounded-2xl" src={img} layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <h2>{location}</h2>
          <HeartIcon className=" h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-3" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className="text-lg lg:text-2xl pb-2 font-semibold">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
