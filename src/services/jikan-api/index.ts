import {
  GetAnimeByIdOptions,
  GetAnimeByIdResponse,
  GetAnimeGenresResponse,
  GetAnimesOptions,
  GetAnimesResponse,
  JikanError,
} from './types';

const BASE_URL = 'https://api.jikan.moe';

export function getAnimeGenres(): Promise<GetAnimeGenresResponse> {
  const url = new URL('/v4/genres/anime', BASE_URL);
  return fetchJikanApi(url);
}

export function getAnimes(options: GetAnimesOptions): Promise<GetAnimesResponse> {
  const url = new URL('/v4/anime', BASE_URL);
  for (const key in options) {
    const value = options[key as keyof GetAnimesOptions];
    if (value) {
      url.searchParams.set(key, String(value));
    }
  }
  return fetchJikanApi(url);
}
export function getAnimeById({ id }: GetAnimeByIdOptions): Promise<GetAnimeByIdResponse> {
  const url = new URL(`/v4/anime/${id}`, BASE_URL);
  return fetchJikanApi(url);
}

const TIME_BETWEEN_CALLS = 1000;
let lastCallDate = 0;
let promise: Promise<any> = Promise.resolve();

function fetchJikanApi(url: URL): Promise<any> {
  promise = promise
    .then(() => {
      const now = Date.now();
      const nextCallDate = lastCallDate + TIME_BETWEEN_CALLS;
      if (now < nextCallDate) {
        return new Promise((resolve) => {
          setTimeout(resolve, nextCallDate - now);
        });
      }
    })
    .then(() => {
      const startDate = Date.now();
      return fetch(url)
        .then((res) => {
          // Check if the response was cached
          const endDate = Date.now();
          const time = endDate - startDate;
          const wasCached = time < 20;
          if (!wasCached) {
            lastCallDate = endDate;
          }

          if (res.status >= 400) {
            throw new Error(res.statusText);
          }
          return res.json();
        })
        .then((res) => {
          if (isJikanError(res)) {
            throw new Error(res.error);
          }
          return res;
        });
    });
  return promise;
}

function isJikanError(res: any): res is JikanError {
  return (
    typeof res === 'object' &&
    typeof res.status === 'number' &&
    typeof res.type === 'string' &&
    typeof res.error === 'string' &&
    typeof res.messages === 'object'
  );
}
