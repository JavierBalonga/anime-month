import { AlertCircle } from 'lucide-react';
import { useQuery } from 'react-query';

import { getAnimeById } from '../services/jikan-api';
import AnimeCard from './anime-card';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

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
      {error ? (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {error instanceof Error ? error.message : 'Something went wrong!'}
          </AlertDescription>
        </Alert>
      ) : (
        <AnimeCard anime={data?.data} loading={isLoading} />
      )}
    </>
  );
}
