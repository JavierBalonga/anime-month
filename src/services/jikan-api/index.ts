import { GetAinmesOptions, GetAnimeGenresResponse, GetAnimesResponse, JikanError } from './types';

const BASE_URL = 'https://api.jikan.moe';

export function getAnimes(options: GetAinmesOptions): Promise<GetAnimesResponse> {
  const url = new URL('/v4/anime', BASE_URL);
  for (const key in options) {
    const value = options[key as keyof GetAinmesOptions];
    if (value) {
      url.searchParams.set(key, String(value));
    }
  }
  return fetch(url)
    .then((res) => {
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
}

export function getAnimeGenres(): Promise<GetAnimeGenresResponse> {
  const url = new URL('/v4/genres/anime', BASE_URL);
  return fetch(url)
    .then((res) => {
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
