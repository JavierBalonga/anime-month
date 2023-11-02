import { MouseEvent, useMemo } from 'react';
import { getAnimeById } from '@/services/jikan-api';
import { Tooltip, TooltipContent, TooltipTrigger } from '@radix-ui/react-tooltip';
import { AlertCircle, StarIcon } from 'lucide-react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import ScreenIcon from '../components/icons/screen';
import Rating from '../components/rating';
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import YoutubeVideo from '../components/youtube-video';
import useFavorites from '../contexts/favorites';
import round from '../lib/round';
import { cn } from '../lib/utils';
import { Status } from '../services/jikan-api/types';

export default function DetailPage() {
  const { id } = useParams<{ id: string }>();

  const favorites = useFavorites((s) => s.favorites);
  const addFavorite = useFavorites((s) => s.addFavorite);
  const removeFavorite = useFavorites((s) => s.removeFavorite);

  const isFavorite = useMemo(() => {
    if (!id) return false;
    return favorites.includes(Number(id));
  }, [favorites, id]);

  const { data, isLoading, error } = useQuery({
    queryKey: ['/anime', id],
    queryFn: () => getAnimeById({ id: Number(id) }),
  });

  const score = useMemo(() => {
    return round((data?.data.score ?? 0) / 2, 2);
  }, [data?.data.score]);

  const handleToggleFavorite = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!id) return;
    const numberId = Number(id);
    if (isFavorite) {
      removeFavorite(numberId);
    } else {
      addFavorite(numberId);
    }
  };

  if (error) {
    return (
      <div className="flex w-full max-w-7xl grow flex-col gap-24 py-24">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {error instanceof Error ? error.message : 'Something went wrong!'}
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="flex w-full max-w-7xl grow flex-col gap-24 py-24">
      <section className="flex flex-col items-stretch gap-8 md:flex-row">
        <div className="aspect-[3/4] h-full flex-shrink-0 overflow-hidden rounded-sm">
          {isLoading || !data?.data ? (
            <div className="h-full w-[150px] animate-pulse bg-neutral-500 dark:bg-neutral-300 lg:w-[300px]"></div>
          ) : (
            <img
              src={data.data.images.jpg.large_image_url}
              alt={data.data.title}
              width={300}
              className="w-full object-cover brightness-75 md:w-[300px]"
            />
          )}
        </div>
        <div className="flex grow flex-col gap-6">
          <hgroup className="flex flex-col gap-x-2 gap-y-4">
            <div className="flex flex-row flex-wrap items-center justify-between gap-x-6 gap-y-4">
              <div className="flex flex-row flex-wrap items-center gap-x-6 gap-y-4">
                {isLoading || !data?.data ? (
                  <div className="h-9 w-[280px] animate-pulse rounded-sm bg-neutral-500 dark:bg-neutral-300"></div>
                ) : (
                  <h1 className="text-4xl font-medium tracking-tight">{data.data.title}</h1>
                )}
                <Badge variant={isLoading || !data?.data ? 'loading' : 'default'}>
                  {data?.data.type ?? 'XXX'}
                </Badge>
              </div>
              <div className="flex flex-row flex-wrap items-center gap-x-6  gap-y-4">
                {isLoading || !data?.data ? (
                  <div className="h-7 w-[40px] animate-pulse rounded-sm bg-neutral-500 dark:bg-neutral-300"></div>
                ) : (
                  <span className="text-xl font-medium tracking-tight">{score}</span>
                )}
                <Rating loading={isLoading || !data?.data} value={score} />
                <Badge
                  variant={
                    isLoading || !data?.data
                      ? 'loading'
                      : data?.data.status === Status.CurrentlyAiring
                      ? 'green'
                      : 'pink'
                  }
                  className="items-center gap-2 px-6 py-2 text-xl text-white"
                >
                  <ScreenIcon />{' '}
                  <span>
                    {!data?.data.status
                      ? 'XXX'
                      : data?.data.status === Status.CurrentlyAiring
                      ? 'On Air'
                      : 'Finished'}
                  </span>
                </Badge>
              </div>
            </div>
            <div className="flex flex-row flex-wrap items-center justify-between gap-x-6 gap-y-4">
              <div className="flex flex-row items-center gap-2">
                <Badge variant={isLoading || !data?.data ? 'loading' : 'secondary'}>
                  {data?.data.title_english ?? 'XXXXXXXXXXXXXXXXXXXXX'}
                </Badge>
                <Badge variant={isLoading || !data?.data ? 'loading' : 'secondary'}>
                  {data?.data.title_japanese ?? 'XXXXXXXXXXXXXXXXXXXXX'}
                </Badge>
              </div>

              <Tooltip>
                <TooltipTrigger>
                  <Button
                    className="h-fit rounded-full p-0"
                    variant="ghost"
                    onClick={handleToggleFavorite}
                  >
                    <Badge
                      variant="secondary"
                      className={cn(
                        'flex gap-2 px-3 py-1 text-lg font-semibold',
                        isFavorite && 'bg-yellow-500 text-black hover:bg-yellow-300',
                      )}
                    >
                      <span>Favorite</span>
                      <StarIcon />
                    </Badge>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{isFavorite ? 'Remove from favorites' : 'Add to favorites'}</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </hgroup>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row flex-wrap items-center justify-between">
              <h5 className="text-2xl font-medium tracking-tight">Synopsis</h5>
              <div className="flex flex-row items-center gap-2">
                {isLoading || !data?.data
                  ? Array.from({ length: 3 }, (_, i) => (
                      <Badge key={i} variant="loading">
                        XXXXX
                      </Badge>
                    ))
                  : data?.data.genres.map((genre) => (
                      <Badge key={genre.mal_id}>{genre.name}</Badge>
                    ))}
              </div>
            </div>
            {isLoading || !data?.data ? (
              Array.from({ length: 8 }, (_, i) => (
                <div
                  key={i}
                  className="h-4 animate-pulse rounded-sm bg-neutral-500 dark:bg-neutral-300"
                ></div>
              ))
            ) : (
              <p>{data?.data.synopsis}</p>
            )}
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h5 className="text-4xl font-medium tracking-tight">Trailer</h5>
        <YoutubeVideo
          loading={isLoading || !data?.data}
          previewUrl={data?.data.trailer.images.maximum_image_url}
          url={data?.data.trailer.embed_url}
        />
      </section>
    </div>
  );
}
