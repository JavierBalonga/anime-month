import { useMemo } from 'react';
import { Anime } from '@/services/jikan-api/types';

import useFavorites from '../contexts/favorites';
import { cn } from '../lib/utils';
import StarIcon from './icons/star';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

export type AnimeCardProps = {
  loading?: boolean;
  anime?: Anime;
};

export default function AnimeCard({ loading, anime }: AnimeCardProps) {
  const favorites = useFavorites((s) => s.favorites);
  const addFavorite = useFavorites((s) => s.addFavorite);
  const removeFavorite = useFavorites((s) => s.removeFavorite);
  const isFavorite = useMemo(() => {
    if (!anime || !anime.mal_id) return false;
    return favorites.includes(anime.mal_id);
  }, [favorites, anime]);
  const handleToggleFavorite = () => {
    if (!anime || !anime.mal_id) return;
    if (isFavorite) {
      removeFavorite(anime.mal_id);
    } else {
      addFavorite(anime.mal_id);
    }
  };
  return (
    <div className="relative flex flex-col gap-2">
      <Button
        size="icon"
        className="absolute right-2 top-2 z-10 rounded-full text-yellow-500 hover:bg-neutral-100/10 hover:text-yellow-300"
        variant="ghost"
        onClick={handleToggleFavorite}
      >
        <StarIcon fill={isFavorite ? 'currentColor' : 'none'} />
      </Button>
      {loading || !anime ? (
        <div className="aspect-[3/4] w-full animate-pulse rounded-sm bg-gray-300"></div>
      ) : (
        <img
          src={anime.images.jpg.image_url}
          alt={anime.title}
          width={500}
          height={670}
          className={cn(
            'aspect-[3/4] w-full rounded-sm object-cover outline outline-transparent brightness-75 transition-all',
            isFavorite && 'outline-yellow-300',
          )}
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
