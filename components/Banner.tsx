import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Movie } from "../typing";
import { FaInfo, FaPlay } from "react-icons/fa";
import { BsInfoCircleFill, BsPlayFill } from "react-icons/bs";

type BannerType = {
  netflixOriginals: Movie[];
};

const Banner = ({ netflixOriginals }: BannerType) => {
  const [movie, setMovie] = useState<Movie>({} as Movie);


 

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals?.length)]
    );
  }, []);

  console.log('hi')
  

  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-[100vh] z-[-1]">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt="movie random"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="w-full h-[100vh] flex flex-col justify-center space-y-[10px]">
        <h1 className="md:text-[40px] text-[30px] font-bold">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <p className="lg:w-[50%] md:w-[80%] w-full text-[14px] text-justify">
          {movie.overview}
        </p>
        <div className="flex space-x-[30px] items-center pt-[12px]">
          <button className="px-[20px] py-[7px] space-x-[5px] rounded text-[14px] bg-white text-black flex items-center">
            <BsPlayFill className="text-[18px]" />
            <span className="font-medium">Play</span>
          </button>
          <button className="px-[20px] py-[7px] space-x-[5px] rounded text-[14px] bg-gray-500 bg-opacity-50 flex items-center">
            <span className="font-medium">More Info</span>
            <BsInfoCircleFill className="text-[15px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
