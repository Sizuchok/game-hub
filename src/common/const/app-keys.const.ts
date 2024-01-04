export const RAWG_KEYS = {
  KEY: 'a200fe5f809548898491ed1594ba008b',
  URL: 'https://api.rawg.io/api',
} as const

export const RAWG_ENDPOINTS = {
  GAMES: 'games',
  GENRES: 'genres',
  PARENT_PLATFORMS: 'platforms/lists/parents',
} as const

const QUERY_KEYS_GAMES = {
  GET_ALL: 'get-all-games',
  GET_ONE: 'get-one-game',
} as const

const QUERY_KEYS_GENRES = {
  GET_ALL: 'get-all-genres',
} as const

const QUERY_KEYS_PLATFORMS = {
  GET_ALL: 'get-all-platforms',
} as const

export const QUERY_KEYS = {
  GAMES: QUERY_KEYS_GAMES,
  GENRES: QUERY_KEYS_GENRES,
  PLATFORMS: QUERY_KEYS_PLATFORMS,
} as const
