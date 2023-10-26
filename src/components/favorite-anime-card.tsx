import { AlertCircle } from 'lucide-react';
import { useQuery } from 'react-query';

import { getAnimeById } from '../services/jikan-api';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

export interface FavoriteAnimeCardProps {
  id: number;
  onDragStart: (id: number) => void;
  onDragOver: (id: number) => void;
}

export default function FavoriteAnimeCard({ id, onDragStart, onDragOver }: FavoriteAnimeCardProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['/anime', id],
    queryFn: () => getAnimeById({ id }),
  });

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    if (!card) return;
    card.style.setProperty('opacity', '0.5');
    onDragStart(id);
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    if (!card) return;
    card.style.removeProperty('opacity');
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    onDragOver(id);
  };

  return (
    <Card
      className="flex h-32 cursor-grab flex-row gap-3 rounded-xl p-3 lg:h-52 lg:gap-6 lg:p-6"
      draggable
      onDrag={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
    >
      {error ? (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {error instanceof Error ? error.message : 'Something went wrong!'}
          </AlertDescription>
        </Alert>
      ) : (
        <>
          <div className="aspect-[3/4] h-full flex-shrink-0 overflow-hidden rounded-sm">
            {isLoading || !data?.data ? (
              <div className="h-full animate-pulse bg-neutral-500 dark:bg-neutral-300"></div>
            ) : (
              <img
                src={data.data.images.jpg.image_url}
                alt={data.data.title}
                width={120}
                height={160}
                className="object-cover brightness-75"
              />
            )}
          </div>
          <div className="flex grow flex-col gap-2">
            <div className="flex flex-col justify-between gap-2 lg:flex-row lg:gap-4">
              {isLoading || !data?.data ? (
                <div className="h-9 w-full animate-pulse rounded-sm bg-neutral-500 dark:bg-neutral-300"></div>
              ) : (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <h4 className="line-clamp-1 text-xl font-medium tracking-tight lg:text-3xl">
                      {data.data.title}
                    </h4>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{data.data.title}</p>
                  </TooltipContent>
                </Tooltip>
              )}
              <div className="flex flex-row flex-wrap items-center gap-2 lg:flex-nowrap">
                {isLoading || !data?.data
                  ? Array.from({ length: 3 }, (_, i) => (
                      <Badge
                        key={i}
                        className="animate-pulse bg-neutral-500 text-transparent dark:bg-neutral-300"
                      >
                        XXX
                      </Badge>
                    ))
                  : data?.data.genres.map((genre) => (
                      <Badge key={genre.mal_id}>{genre.name}</Badge>
                    ))}
              </div>
            </div>
            {isLoading || !data?.data ? (
              <div className="hidden flex-col gap-2 lg:flex">
                {Array.from({ length: 5 }, (_, i) => (
                  <div
                    key={i}
                    className="h-4 w-full animate-pulse rounded-sm bg-neutral-500 dark:bg-neutral-300"
                  ></div>
                ))}
              </div>
            ) : (
              <p className="line-clamp-5 hidden text-neutral-500 dark:text-neutral-300 lg:block">
                {data.data.synopsis}
              </p>
            )}
          </div>
        </>
      )}
    </Card>
  );
}
