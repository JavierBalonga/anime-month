import { AlertCircle } from 'lucide-react';
import { useQuery } from 'react-query';

import { getAnimeById } from '../services/jikan-api';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

export interface FavoriteAnimeCardProps {
  id: number;
}

export default function FavoriteAnimeCard({ id }: FavoriteAnimeCardProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['/anime', id],
    queryFn: () => getAnimeById({ id }),
  });

  return (
    <>
      <Card className="flex h-52 flex-row gap-6 rounded-xl p-6">
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
                  width={500}
                  height={670}
                  className="object-cover brightness-75"
                />
              )}
            </div>
            <div className="flex grow flex-col gap-2">
              <div className="flex flex-row justify-between gap-4">
                {isLoading || !data?.data ? (
                  <div className="h-9 w-full animate-pulse rounded-sm bg-neutral-500 dark:bg-neutral-300"></div>
                ) : (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <h4 className="line-clamp-1 text-3xl font-medium tracking-tight">
                        {data.data.title}
                      </h4>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{data.data.title}</p>
                    </TooltipContent>
                  </Tooltip>
                )}
                <div className="flex flex-row flex-nowrap items-center gap-2">
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
                <div className="flex flex-col gap-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <div
                      key={i}
                      className="h-4 w-full animate-pulse rounded-sm bg-neutral-500 dark:bg-neutral-300"
                    ></div>
                  ))}
                </div>
              ) : (
                <p className="line-clamp-5 text-neutral-500 dark:text-neutral-300">
                  {data.data.synopsis}
                </p>
              )}
            </div>
          </>
        )}
      </Card>
    </>
  );
}
