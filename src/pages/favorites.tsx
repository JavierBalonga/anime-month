import { useRef } from 'react';

import FavoriteAnimeCard from '../components/favorite-anime-card';
import useFavorites from '../contexts/favorites';

interface DragState {
  draggedId: number | null;
  draggedOverId: number | null;
}

export default function FavoritesPage() {
  const favorites = useFavorites((s) => s.favorites);
  const setFavorites = useFavorites((s) => s.setFavorites);

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

  return (
    <div className="flex w-full max-w-5xl grow flex-col gap-2 py-10">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-4 py-7 lg:gap-8 lg:py-14">
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
