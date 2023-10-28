import { useState } from 'react';
import { PlayIcon } from 'lucide-react';

import { Button } from './ui/button';

export interface YoutubeVideoProps {
  previewUrl?: string | null;
  url?: string | null;
}

export default function YoutubeVideo({ previewUrl, url }: YoutubeVideoProps) {
  if (!previewUrl || !url) return null;

  const [play, setPlay] = useState(false);

  return (
    <div className="relative aspect-video h-full w-full overflow-hidden rounded-xl bg-background">
      {play ? (
        <iframe
          src={url}
          title="YouTube video player"
          /* @ts-expect-error frameborder is not defined on props */
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="h-full w-full"
        />
      ) : (
        <>
          <img
            src={previewUrl}
            alt="YouTube video preview"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Button
              variant="outline"
              size="icon"
              className="h-24 w-24 rounded-full pl-2 opacity-80"
              onClick={() => setPlay(true)}
            >
              <PlayIcon className="h-12 w-12 shrink-0" fill="currentColor" />
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
