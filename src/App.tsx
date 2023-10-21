import { Route, Routes } from "react-router-dom";
import Layout from "@/components/layout";
import { Suspense, lazy } from "react";
import Loading from "./pages/loading";

const HomePage = lazy(() => import("./pages"));

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
      </Route>
    </Routes>
  );
}
