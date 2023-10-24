import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Favorites {
  favorites: number[];
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
}

const useFavorites = create(
  persist<Favorites>(
    (set) => ({
      favorites: [],
      addFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.concat(id),
        })),
      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((fav) => fav !== id),
        })),
    }),
    { name: 'anime-favorites', version: 1 },
  ),
);

export default useFavorites;
