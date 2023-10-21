import { Anime } from "@/services/jikan-api/types";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export type AnimeCardProps = {
  loading?: boolean;
  anime?: Anime;
};

export default function AnimeCard({ loading, anime }: AnimeCardProps) {
  return (
    <div className="flex flex-col gap-2">
      {loading || !anime ? (
        <div className="animate-pulse bg-gray-300 rounded-sm w-full h-[225px]"></div>
      ) : (
        <img
          src={anime.images.jpg.image_url}
          alt={anime.title}
          width={150}
          height={225}
          className="rounded-sm w-full h-[225px] object-cover"
        />
      )}

      {loading || !anime ? (
        <div className="animate-pulse bg-gray-300 rounded-sm w-full h-4"></div>
      ) : (
        <Tooltip>
          <TooltipTrigger asChild>
            <h4 className="text-center whitespace-nowrap truncate text-lg tracking-tight">
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
