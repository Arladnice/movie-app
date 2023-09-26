import Link from "next/link";
import React from "react";
import MovieCard from "./MovieCard";

const UpcomingMovies = ({ upcomingMovies }: any) => {
  // console.log(upcomingMovies);
  console.log(
    upcomingMovies?.results.sort(
      (a: any, b: any) => a.vote_average - b.vote_average
    )
  );

  return (
    <>
      <div className="flex flex-col mb-6">
        <div className="flex justify-between items-center my-4">
          <h1 className="text-2xl font-medium">Худшие</h1>
          <Link
            href="movies/upcoming"
            className="py-2 px-5 bg-slate-800 text-md text-white"
          >
            Просмотреть все
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {upcomingMovies?.results
            .sort((a: any, b: any) => a.vote_average - b.vote_average)
            .slice(0, 4)
            .map((movie: any) => {
              return <MovieCard key={movie?.id} movie={movie} />;
            })}
        </div>
        <div className="grid grid-cols-4 gap-4"></div>
      </div>
    </>
  );
};

export default UpcomingMovies;
