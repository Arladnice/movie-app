import MovieCard, { IMovieCard } from "@/components/MovieCard";

type Props = {
  searchParams?: {
    page?: number;
  };
};

async function getTopRatedMovies(page: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=ru-RU&page=${page}`
  );
  return res.json();
}

const Page = async ({ searchParams }: Props) => {
  const page = searchParams?.page || 1;

  const topRatedMovies = await getTopRatedMovies(page);

  return (
    <main className="mt-5 flex flex-col">
      <div className="w-[1300px] max-w-full px-4 mx-auto">
        <div className="flex flex-col">
          <h1 className="text-2xl font-medium">Самые высокая оценка</h1>
        </div>
        <div className="grid grid-cols-4 mt-4 gap-4">
          {topRatedMovies.results.map((movie: IMovieCard) => (
            <MovieCard key={movie?.id} movie={movie} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
