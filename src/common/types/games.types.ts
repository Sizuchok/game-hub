import { RawgCore, RawgQueryParams } from './base.types'
import { Genre } from './genres.type'
import { Platform } from './platform.type'
import { Prettify } from './prettify.type'
import { Publisher } from './publisher.types'

export type Game = Prettify<RawgCore> & {
  description: string
  description_raw: string
  background_image: string | null
  genres: Genre[]
  parent_platforms?: { platform: Platform }[]
  metacritic: number
  rating_top: number | null | 3 | 4 | 1 | 5
  publishers: Publisher[]
}

export type GamesQueryParams = Prettify<RawgQueryParams> & {
  search?: string | null
  parent_platforms?: string | number
  genres?: string | number
  ordering: TwoWayGameSortOrder | null
}

export type GameQuery = Prettify<
  Pick<GamesQueryParams, 'ordering' | 'search'> & {
    genre?: number
    platform?: number
  }
>

type GameSortOrder = 'name' | 'released' | 'added' | 'created' | 'updated' | 'rating' | 'metacritic'

export type TwoWayGameSortOrder = `${GameSortOrder}` | `-${GameSortOrder}`
