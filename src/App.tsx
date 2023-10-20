import { useState } from "react";
import { Pagination } from "./components/ui/pagination";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./components/ui/tooltip";
import { getAnimes } from "./services/jikan-api";
import { useQuery } from "react-query";
import { GenresCombobox } from "./components/genres-combobox";
import { TypeSelect } from "./components/type-select";
import { AnimeStatus, AnimeType } from "./services/jikan-api/types";
import { StatusSelect } from "./components/status-select";

export default function App() {
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState<number | "">("");
  const [type, setType] = useState<AnimeType | "">("");
  const [status, setStatus] = useState<AnimeStatus | "">("");

  const animes = useQuery({
    queryKey: ["/animes", page, genre, type, status],
    queryFn: () =>
      getAnimes({
        genres: String(genre) || undefined,
        type: type || undefined,
        status: status || undefined,
        limit: 24,
        order_by: "popularity",
        page: page,
      }),
    retry: false,
    keepPreviousData: true,
  });

  return (
    <div className="flex flex-col w-full gap-2 max-w-5xl py-10">
      <div className="flex flex-row gap-2">
        <GenresCombobox value={genre} onChange={setGenre} />
        <TypeSelect value={type} onChange={setType} />
        <StatusSelect value={status} onChange={setStatus} />
      </div>
      {animes.error ? (
        <>
          {animes.error instanceof Error
            ? animes.error.message
            : "Something went wrong!"}
        </>
      ) : // TODO improve loading with skeleton
      animes.isLoading ? (
        <>Loading...</>
      ) : (
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(170px,_1fr))] gap-14 py-14">
            {animes.data?.data?.map((anime) => (
              <div key={anime.mal_id} className="flex flex-col gap-2">
                <img
                  src={anime.images.jpg.image_url}
                  alt={anime.title}
                  width={150}
                  height={225}
                  className="rounded-sm w-full h-[225px] object-cover"
                />

                <Tooltip>
                  <TooltipTrigger asChild>
                    <h4 className="text-center whitespace-nowrap truncate text-lg tracking-tight">
                      {anime.title}
                    </h4>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{anime.title}</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            ))}
          </div>
          <Pagination
            page={page}
            totalPages={animes.data?.pagination.last_visible_page}
            onChange={(page) => setPage(page)}
          />
        </div>
      )}
    </div>
  );
}
