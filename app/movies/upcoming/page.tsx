import MovieCard, { IMovieCard } from "@/components/MovieCard";

type Props = {
  searchParams?: {
    page?: number;
  };
};

async function getUpcomingMovies(page: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=ru-RU&page=${page}`
  );
  return res.json();
}

const Page = async ({ searchParams }: Props) => {
  const page = searchParams?.page || 1;

  const upcomingMovies = await getUpcomingMovies(page);

  return (
    <main className="mt-5 flex flex-col">
      <div className="w-[1300px] max-w-full px-4 mx-auto">
        <div className="flex flex-col">
          <h1 className="text-2xl font-medium">Худшие</h1>
        </div>
        <div className="grid grid-cols-4 mt-4 gap-4">
          {upcomingMovies.results
            .sort((a: any, b: any) => a.vote_average - b.vote_average)
            .slice(0,10).map((movie: IMovieCard) => (
              <MovieCard key={movie?.id} movie={movie} />
            ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
