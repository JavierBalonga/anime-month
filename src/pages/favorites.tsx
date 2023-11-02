import { useRef } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@radix-ui/react-tooltip';

import Background from '../components/background';
import FavoriteAnimeCard from '../components/favorite-anime-card';
import ClipboardDocumentIcon from '../components/icons/clipboard-document';
import Spinner from '../components/spinner';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { useToast } from '../components/ui/use-toast';
import useFavorites from '../contexts/favorites';
import useCopyElementImage from '../hooks/useCopyElementImage';

interface DragState {
  draggedId: number | null;
  draggedOverId: number | null;
}

export default function FavoritesPage() {
  const favorites = useFavorites((s) => s.favorites);
  const setFavorites = useFavorites((s) => s.setFavorites);
  const ref = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [copyElementImage, copyElementImageState] = useCopyElementImage();

  const dragState = useRef<DragState>({
    draggedId: null,
    draggedOverId: null,
  });

  const handleDragStart = (id: number) => {
    dragState.current.draggedId = id;
  };

  const handleDragOver = (id: number) => {
    dragState.current.draggedOverId = id;
    const draggedIndex = favorites.indexOf(dragState.current.draggedId!);
    const draggedOverIndex = favorites.indexOf(dragState.current.draggedOverId!);

    const newFavorites = [...favorites];
    newFavorites.splice(draggedIndex, 1);
    newFavorites.splice(draggedOverIndex, 0, dragState.current.draggedId!);
    setFavorites(newFavorites);
  };

  const handleCopy = () => {
    copyElementImage(ref.current).then(() => {
      toast({
        title: 'Successfully copied!',
        description:
          'The list was copied as image to your clipboard, You can paste it anywhere now!',
      });
    });
  };

  return (
    <div className="flex w-full max-w-5xl grow flex-col gap-2 py-10">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex justify-end">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  onClick={handleCopy}
                  variant="outline"
                  disabled={copyElementImageState.loading}
                >
                  {copyElementImageState.loading ? <Spinner /> : <ClipboardDocumentIcon />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <Card className="px-3 py-1">Copy as Image</Card>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="relative flex flex-col gap-4 py-7 lg:gap-8 lg:py-14" ref={ref}>
            <div className="absolute inset-0 -z-10 hidden bg-background" data-only-download="true">
              <Background />
            </div>
            {favorites?.map((id) => (
              <FavoriteAnimeCard
                key={id}
                id={id}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
