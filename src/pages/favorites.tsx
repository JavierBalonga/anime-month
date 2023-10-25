import FavoriteAnimeCard from '../components/favorite-anime-card';
import useFavorites from '../contexts/favorites';

export default function FavoritesPage() {
  const favorites = useFavorites((s) => s.favorites);

  return (
    <div className="flex w-full max-w-5xl grow flex-col gap-2 py-10">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-8 py-14">
            {favorites?.map((id) => <FavoriteAnimeCard key={id} id={id} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
