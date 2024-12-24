import MoviesCarousel from "@/components/homePage/MoviesCarousel";
import { getDiscoverMovies } from "@/lib/getMovies";

type Params = Promise<{ id: string }>;
type SearchParams = Promise<{ genre: string }>;

interface Props {
  params: Params;
  searchParams: SearchParams;
}

const GenrePage = async ({ params, searchParams }: Props) => {
  const param = await params;
  const id = param.id;

  const searchParam = await searchParams;
  const genre = searchParam.genre;

  const movies = await getDiscoverMovies(id);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">Result for {genre}</h1>
        <MoviesCarousel title="Genre" movies={movies} isVertical />
      </div>
    </div>
  );
};

export default GenrePage;
