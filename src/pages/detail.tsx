import { getAnimeById } from '@/services/jikan-api';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import ScreenIcon from '../components/icons/screen';
import Rating from '../components/rating';
import { Badge } from '../components/ui/badge';
import YoutubeVideo from '../components/youtube-video';
import { Status } from '../services/jikan-api/types';

export default function DetailPage() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading /* error */ } = useQuery({
    queryKey: ['/anime', id],
    queryFn: () => getAnimeById({ id: Number(id) }),
  });

  console.log(data?.data);

  const score = (data?.data.score ?? 0) / 2;

  //   const isLoading = true;

  return (
    <div className="flex w-full max-w-7xl grow flex-col gap-24 py-24">
      <section className="flex flex-row items-stretch gap-8">
        <div className="aspect-[3/4] h-full flex-shrink-0 overflow-hidden rounded-sm">
          {isLoading || !data?.data ? (
            <div className="h-full animate-pulse bg-neutral-500 dark:bg-neutral-300"></div>
          ) : (
            <img
              src={data.data.images.jpg.large_image_url}
              alt={data.data.title}
              width={300}
              className="object-cover brightness-75"
            />
          )}
        </div>
        <div className="flex grow flex-col gap-6">
          <hgroup className="flex flex-col gap-2">
            <div className="flex flex-row items-center justify-between gap-6">
              <div className="flex flex-row items-center gap-6">
                {isLoading || !data?.data ? (
                  <div className="h-9 w-full animate-pulse rounded-sm bg-neutral-500 dark:bg-neutral-300"></div>
                ) : (
                  <h1 className="text-4xl font-medium tracking-tight">{data.data.title}</h1>
                )}
                {isLoading || !data?.data ? (
                  <div className="h-9 w-full animate-pulse rounded-sm bg-neutral-500 dark:bg-neutral-300"></div>
                ) : (
                  <Badge>{data.data.type}</Badge>
                )}
              </div>
              <div className="flex flex-row items-center gap-6">
                <span className="text-xl font-medium tracking-tight">{score}</span>
                <Rating loading={isLoading} value={score} />
                <Badge
                  variant={data?.data.status === Status.CurrentlyAiring ? 'green' : 'pink'}
                  className="items-center gap-2 px-6 py-2 text-xl text-white"
                >
                  <ScreenIcon />{' '}
                  <span>
                    {data?.data.status === Status.CurrentlyAiring ? 'On Air' : 'Finished'}
                  </span>
                </Badge>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Badge variant="secondary">{data?.data.title_english}</Badge>
              <Badge variant="secondary">{data?.data.title_japanese}</Badge>
            </div>
          </hgroup>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center justify-between">
              <h5 className="text-2xl font-medium tracking-tight">Synopsis</h5>
              <div className="flex flex-row items-center gap-2">
                {data?.data.genres.map((genre) => <Badge key={genre.mal_id}>{genre.name}</Badge>)}
              </div>
            </div>
            <p>{data?.data.synopsis}</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h5 className="text-4xl font-medium tracking-tight">Trailer</h5>
        <YoutubeVideo
          previewUrl={data?.data.trailer.images.maximum_image_url}
          url={data?.data.trailer.embed_url}
        />
      </section>
    </div>
  );
}
