import { Anime } from '@/services/jikan-api/types';

import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

export type AnimeCardProps = {
  loading?: boolean;
  anime?: Anime;
};

export default function AnimeCard({ loading, anime }: AnimeCardProps) {
  return (
    <div className="flex flex-col gap-2">
      {loading || !anime ? (
        <div className="aspect-[3/4] w-full animate-pulse rounded-sm bg-gray-300"></div>
      ) : (
        <img
          src={anime.images.jpg.image_url}
          alt={anime.title}
          width={500}
          height={670}
          className="aspect-[3/4] w-full rounded-sm object-cover"
        />
      )}

      {loading || !anime ? (
        <div className="h-4 w-full animate-pulse rounded-sm bg-gray-300"></div>
      ) : (
        <Tooltip>
          <TooltipTrigger asChild>
            <h4 className="line-clamp-2 text-center text-lg font-medium tracking-tight">
              {anime.title}
            </h4>
          </TooltipTrigger>
          <TooltipContent>
            <p>{anime.title}</p>
          </TooltipContent>
        </Tooltip>
      )}
    </div>
  );
}
