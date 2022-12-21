import { DocumentData } from "firebase/firestore";
import Image from "next/image";
import React from "react";
import { BsPlayFill, BsStarFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { settingMovie, showModal } from "../store/ModalSlice";
import { Movie } from "../typing";

type CardProp = {
  movie: Movie | DocumentData;
};

const MovieCard = ({ movie }: CardProp) => {
  const dispatch = useDispatch()
  const handleOpenModal = () => {
    dispatch(showModal())
    dispatch(settingMovie(movie))
  }
  return (
    <div className="min-w-[300px] min-h-[500px] bg-black rounded-md relative group overflow-hidden z-[998]">
      <div className="w-full h-[400px] overflow-hidden">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt="movie"
          property="blur"
          width={300}
          height={100}
          className="object-cover  duration-300 hover:scale-[1.1]"
        />
      </div>
      <div className="h-[100px] flex flex-col justify-center px-[10px] font-outfit tracking-wider font-light">
        <h1>{movie.title || movie.original_name || movie.name}</h1>
        <div className="flex items-center justify-between">
          <p className="flex items-center space-x-[5px] pt-[5px]">
            <BsStarFill className="text-yellow-500" />
            <span>{movie.vote_average.toFixed(1)}</span>
          </p>
          <div onClick={handleOpenModal} className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-white text-black">
            <BsPlayFill className="text-[18px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
