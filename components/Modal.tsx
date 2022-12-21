import MuiModal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { Genre } from "../typing";
import {
  BsPlayFill,
  BsPlus,
  BsVolumeDown,
  BsVolumeMute,
  BsX,
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../store/ModalSlice";
import { Element } from "../typing";
import { RootState } from "../store/store";
import ReactPlayer from "react-player";
import { AiOutlineLike } from "react-icons/ai";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";

const Modal = () => {
  const modal = useSelector((state: RootState) => state.modal.isModalShow);
  const movie = useSelector((state: RootState) => state.modal.movie);
  const myMovie = useSelector((state: RootState) => state.user.myMovie);
  const user = useSelector((state: RootState) => state.user);
  const [trailer, setTrailer] = useState<string>("" as string);
  const [genres, setGeneres] = useState<Genre[]>([]);
  const [mute, setMute] = useState<boolean>(false);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeModal());
  };
  const toastStyle = {
    background: "white",
    color: "black",
    fontWeight: "bold",
    fontSize: "16px",
    padding: "15px",
    borderRadius: "9999px",
    width: "350px",
  };

  const handleAddList = async () => {
    if (myMovie.findIndex((i) => i.id == movie?.id) == -1) {
      await setDoc(
        doc(db, "customers", user.user!.uid, "myList", movie?.id.toString()!),
        {
          ...movie,
        }
      ).then((_) =>
        toast.success(
          `${
            movie?.name || movie?.original_name || movie?.title
          } has been add to your list`,
          {
            style: toastStyle,
          }
        )
      );
    } else {
      await deleteDoc(
        doc(db, "customers", user.user!.uid, "myList", movie?.id.toString()!)
      ).then((_) =>
        toast.success(
          `${
            movie?.name || movie?.original_name || movie?.title
          } has been add to your list`,
          {
            style: toastStyle,
          }
        )
      );
    }
  };

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === "tv" ? "tv" : "movie"
        }/${movie?.id}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`
      ).then((response) => response.json());

      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (element: Element) => element.type === "Trailer"
        );
        setTrailer(data.videos.results[index]?.key);
        setGeneres(data.genres);
      }
      console.log(data);
    };

    fetchMovie();
  }, [movie]);

  return (
    <MuiModal
      open={modal}
      onClose={handleClose}
      className="mx-auto w-full max-w-3xl fixed top-7 left-0"
    >
      <>
        <button
          onClick={handleClose}
          className="z-[1000] modalButton absolute top-5 right-5 cursor-pointer"
        >
          <BsX className="text-[25px]" />
        </button>
        <div className="pt-[56.25%] relative">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}-U`}
            width="100%"
            height="100%"
            style={{ position: "absolute", top: "0", right: "0" }}
            playing
            muted={mute}
          />
          <div className="absolute flex justify-between items-center w-full bottom-5 left-0 px-[20px]">
            <div className="flex space-x-[20px] items-center">
              <button className="px-[20px] py-[5px] space-x-[5px] rounded text-[15px] bg-white text-black font-bold font-outfit tracking-wide flex items-center">
                <BsPlayFill className="text-[20px]" />
                <span>Play</span>
              </button>
              <button
                onClick={handleAddList}
                className={`${
                  myMovie.findIndex((i) => i.id == movie?.id) == -1
                    ? "rotate-0"
                    : "rotate-45"
                } text-[20px] w-[27px] h-[27px] flex justify-center items-center rounded-full bg-gray-500 bg-opacity-25 border`}
              >
                <BsPlus />
              </button>
              <button className="text-[16px] w-[27px] h-[27px] flex justify-center items-center rounded-full bg-gray-500 bg-opacity-25 border">
                <AiOutlineLike />
              </button>
            </div>
            <button
              onClick={() => setMute((prev) => !prev)}
              className="text-[20px] w-[27px] h-[27px] flex justify-center items-center rounded-full bg-gray-500 bg-opacity-25 border"
            >
              {!mute ? <BsVolumeDown /> : <BsVolumeMute />}
            </button>
          </div>
        </div>
        <div className="w-full bg-[#181818] px-[20px] py-[20px] space-y-[10px]">
          <div className=" text-[14px] font-outfit flex space-x-[20px] items-center">
            {" "}
            <p className="text-green-500 font-semibold">
              {movie!.vote_average * 10}% Match{" "}
            </p>
            <p className="font-light text-white">
              {movie?.release_date || movie?.first_air_date}
            </p>
            <p className="flex h-4 w-fit items-center justify-center rounded border border-white/40 px-1.5 text-xs">
              HD
            </p>
          </div>
          <div className="flex lg:flex-row flex-col lg:items-center lg:space-x-[30px] lg:space-y-0 space-y-[10px]">
            <p className="md:w-[70%] w-[95%] text-[13px] text-justify">
              {movie?.overview}
            </p>
            <div className="lg:space-y-0 space-y-[10px]">
              <div className=" font-outfit">
                <span className="text-[gray]">Genres:</span>{" "}
                {genres.map((genre) => genre?.name).join(", ")}
              </div>
              <div className=" font-outfit">
                <span className="text-[gray] text-[14px]">
                  Original language:
                </span>{" "}
                {movie?.original_language}
              </div>
              <div className=" font-outfit">
                <span className="text-[gray] text-[14px]">Total votes:</span>{" "}
                {movie?.vote_count}
              </div>
            </div>
          </div>
        </div>
      </>
    </MuiModal>
  );
};

export default Modal;
