import { lazy, Suspense } from 'react';
import Layout from '@/components/layout';
import { Route, Routes } from 'react-router-dom';

import Loading from './pages/loading';

const HomePage = lazy(() => import('./pages'));
const FavoritesPage = lazy(() => import('./pages/favorites'));
const DetailPage = lazy(() => import('./pages/detail'));

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/favorites"
          element={
            <Suspense fallback={<Loading />}>
              <FavoritesPage />
            </Suspense>
          }
        />
        <Route
          path="/:id"
          element={
            <Suspense fallback={<Loading />}>
              <DetailPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
