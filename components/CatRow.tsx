import Image from "next/image";
import { useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsStarFill } from "react-icons/bs";
import { Movie } from "../typing";
import MovieCard from "./MovieCard";

type CatPropType = {
  categoryTitle: string;
  movies: Movie[];
};

const CatRow = ({ categoryTitle, movies }: CatPropType) => {

  const rowRef = useRef<HTMLDivElement>(null)
  const [isMoved, setIsMoved] = useState(false)

  const handleClick = (direction: string) => {
    setIsMoved(true)
    if (rowRef.current) {
      const { scrollLeft } = rowRef.current

      const scrollTo =
        direction === 'left'
          ? scrollLeft - 300
          : scrollLeft + 300
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <div className="py-[40px]">
      <h1 className="font-bold text-[20px] mb-[20px] tracking-wider">
        {categoryTitle}
      </h1>
      <div className="relative">
          <button onClick={() => handleClick('left')} className="absolute top-[50%] left-[20px] translate-y-[-50%] w-[40px] h-[40px] bg-white text-black bg-opacity-50 flex items-center justify-center rounded-full z-[999]">
            <AiOutlineLeft className="text-[20px]" />
          </button>
          <button onClick={() => handleClick('right')} className="absolute top-[50%] right-[20px] translate-y-[-50%] w-[40px] h-[40px] bg-white text-black bg-opacity-50 flex items-center justify-center rounded-full z-[999]">
            <AiOutlineRight className="text-[20px]" />
          </button>
        <div ref={rowRef} className="carousel flex items-start overflow-x-hidden space-x-[20px] scrollbar-none relative">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatRow;
