import { getDiscoverMovies } from "@/lib/getMovies";
import CarouselBanner from "../customUI/CarouselBanner";

interface Props {
  id?: string;
  keyword?: string;
}

const CarouselBannerWrapper = async ({ id, keyword }: Props) => {
  const movies = await getDiscoverMovies(id, keyword);

  return <CarouselBanner movies={movies}/>;
};

export default CarouselBannerWrapper;
