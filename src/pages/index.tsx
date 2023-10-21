import { useMemo } from "react";
import { Pagination } from "@/components/ui/pagination";
import { getAnimes } from "@/services/jikan-api";
import { useQuery } from "react-query";
import { GenresCombobox } from "@/components/genres-combobox";
import {
  AnimeOrderBy,
  AnimeStatus,
  AnimeType,
  OrderDirection,
} from "@/services/jikan-api/types";
import { useSearchParams } from "react-router-dom";
import AnimeCard from "@/components/anime-card";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { AlertCircle, ChevronDown } from "lucide-react";
import { AnimeOrderSelect } from "../components/anime-order-select";
import { Button } from "../components/ui/button";
import ChevronUpIcon from "../components/icons/chevron-up";

export default function HomePage() {
  let [searchParams, setSearchParams] = useSearchParams();

  const { page, genre, orderBy, orderDirection } = useMemo(() => {
    return {
      page: Number(searchParams.get("page")) || 1,
      genre: Number(searchParams.get("genre")) || ("" as const),
      orderBy:
        (searchParams.get("order_by") as AnimeOrderBy) ||
        AnimeOrderBy.popularity,
      orderDirection:
        (searchParams.get("order_direction") as OrderDirection) ||
        OrderDirection.asc,
    };
  }, [searchParams]);

  const animes = useQuery({
    queryKey: ["/animes", page, orderBy, orderDirection, genre],
    queryFn: () =>
      getAnimes({
        genres: String(genre) || undefined,
        type: AnimeType.Tv,
        status: AnimeStatus.airing,
        limit: 24,
        order_by: orderBy,
        sort: orderDirection,
        page: page,
      }),
  });

  const handlePageChange = (page: number) => {
    setSearchParams((prev) => {
      if (page) {
        prev.set("page", String(page));
      } else {
        prev.delete("page");
      }
      return prev;
    });
  };

  const handleOrderByChange = (orderBy: AnimeOrderBy) => {
    setSearchParams((prev) => {
      if (orderBy) {
        prev.set("order_by", String(orderBy));
      } else {
        prev.delete("order_by");
      }
      return prev;
    });
  };

  const handleOrderDirectionChange = () => {
    setSearchParams((prev) => {
      const orderDirection = prev.get("order_direction") as OrderDirection;
      const newOrderdirection =
        orderDirection === OrderDirection.asc
          ? OrderDirection.desc
          : OrderDirection.asc;
      prev.set("order_direction", newOrderdirection);
      return prev;
    });
  };

  const handleGenreChange = (genre: number | "") => {
    setSearchParams((prev) => {
      if (genre) {
        prev.set("genre", String(genre));
      } else {
        prev.delete("genre");
      }
      prev.set("page", "1");
      return prev;
    });
  };

  return (
    <div className="flex flex-col w-full gap-2 max-w-5xl py-10 grow">
      <div className="flex flex-row gap-2 items-center">
        <GenresCombobox value={genre} onChange={handleGenreChange} />
        <div className="grow" />
        <AnimeOrderSelect value={orderBy} onChange={handleOrderByChange} />
        <Button
          onClick={handleOrderDirectionChange}
          size="sm"
          variant="outline"
          className="w-10 h-10"
        >
          <div
            className="transition-transform"
            style={{
              transform: `rotate(${
                orderDirection === OrderDirection.asc ? 0 : 180
              }deg)`,
            }}
          >
            <ChevronDown />
          </div>
        </Button>
      </div>
      {animes.error ? (
        <div className="flex justify-center items-center grow">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              {animes.error instanceof Error
                ? animes.error.message
                : "Something went wrong!"}
            </AlertDescription>
          </Alert>
        </div>
      ) : animes.isLoading ? (
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(170px,_1fr))] gap-14 py-14">
            {Array.from({ length: 24 }).map((_, index) => (
              <AnimeCard key={index} loading />
            ))}
          </div>
          <Pagination page={1} totalPages={5} />
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(170px,_1fr))] gap-14 py-14">
            {animes.data?.data?.map((anime) => (
              <AnimeCard key={anime.mal_id} anime={anime} />
            ))}
          </div>
          <Pagination
            page={page}
            totalPages={animes.data?.pagination.last_visible_page}
            onChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}
