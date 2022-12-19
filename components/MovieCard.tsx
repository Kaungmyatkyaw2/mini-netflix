import Image from "next/image";
import React from "react";
import { BsStarFill } from "react-icons/bs";
import { Movie } from "../typing";

type CardProp = {
  movie: Movie;
};

const MovieCard = ({ movie }: CardProp) => {
  return (
    <div className="min-w-[300px] min-h-[500px] bg-black rounded-md cursor-pointer relative group overflow-hidden z-[998]">
      <div className="w-full h-[400px] overflow-hidden">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
             movie.poster_path
          }`}
          alt="movie"
          property="blur"
          width={300}
          height={100}
          className="object-cover  duration-300 hover:scale-[1.1]"
        />
      </div>
      <div className="h-[100px] flex flex-col justify-center px-[10px] font-outfit tracking-wider font-light">
        <h1>{movie.title || movie.original_name || movie.name}</h1>
        <p className="flex items-center space-x-[5px] pt-[5px]">
          <BsStarFill className="text-yellow-500" />
          <span>{movie.vote_average.toFixed(1)}</span>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
