import axios from "axios";
import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import CatRow from "../components/CatRow";
import Header from "../components/Header";
import { Movie } from "../typing";
import requests from "../utils/requests";

type propType = {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
};

const index = (props: propType) => {
  if (!props) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="relative bg-gradient-to-b from-gray-900/10 to-[#010511]">
      <Header />
      <main className=" lg:px-[70px] px-[20px]">
        {/* <Banner netflixOriginals={props.netflixOriginals} /> */}
        <div>
          <CatRow categoryTitle="Top Rated" movies={props.topRated} />
          <CatRow categoryTitle="Trending Now" movies={props.trendingNow} />
          <CatRow categoryTitle="Actions" movies={props.actionMovies} />
          <CatRow categoryTitle="Comedy" movies={props.comedyMovies} />
          <CatRow categoryTitle="Horror" movies={props.horrorMovies} />
          <CatRow categoryTitle="Romance" movies={props.romanceMovies} />
          <CatRow categoryTitle="Documentries" movies={props.documentaries} />
        </div>
      </main>
    </div>
  );
};

export default index;

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  };
};
