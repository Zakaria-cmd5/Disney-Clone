"use client";

import getImagePath from "@/lib/getImagePath";
import { Movie } from "@/types";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

Autoplay.globalOptions = {
  delay: 8000,
};

const CarouselBanner = ({ movies }: { movies: Movie[] }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);

  return (
    <div
      className="overflow-hidden lg:-mt-40 relative cursor-pointer"
      ref={emblaRef}
    >
      <div className="flex">
        {movies.map((movie) => (
          <div className="flex-full" key={movie.id}>
            <Image
              key={movie.id}
              src={getImagePath(movie.backdrop_path, true)}
              alt=""
              width={1920}
              height={1080}
            />
            <div className="hidden lg:inline absolute mt-0 top-0 pt-40 xl:pt-52 left-0 lg:mt-40 bg-transparent z-20">
              <h2 className="text-5xl font-bold max-w-xl z-50 h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent">
                {movie.title}
              </h2>
              <p className="max-w-xl line-clamp-3">{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1A1C29]"/>
    </div>
  );
};

export default CarouselBanner;
