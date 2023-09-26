import Link from "next/link";
import React from "react";
import MovieCard from "./MovieCard";

const PopularMovies = ({ popularMovies }: any) => {
  return (
    <>
      <div className="flex flex-col mb-6">
        <div className="flex justify-between items-center my-4">
          <h1 className="text-2xl font-medium">Самые популярные</h1>
          <Link
            href="movies/popular"
            className="py-2 px-5 bg-slate-800 text-md text-white"
          >
            Просмотреть все
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {popularMovies?.results.slice(0, 4).map((movie: any) => {
            return <MovieCard key={movie?.id} movie={movie} />;
          })}
        </div>
      </div>
    </>
  );
};

export default PopularMovies;
