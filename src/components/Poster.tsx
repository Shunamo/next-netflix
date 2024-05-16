import { PosterProps } from '@/lib/types';
import Image from 'next/image';

export default function Poster({ fetchData, title }: PosterProps) {
  return (
    <>
      <div className="w-full px-4 pt-8">
        <div className="text-[20.9px] font-bold text-white">{title}</div>

        <div className="flex overflow-x-auto pt-1 gap-x-2 scrollbar-hide">
          {fetchData.results?.map((movie, index) => (
            <div key={index} className="inline-block">
              <div className="w-[103px] h-[161px] relative overflow-hidden bg-white rounded cursor-pointer">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  fill
                  alt={movie.title}
                  objectFit="cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
