import { RawgCore, RawgQueryParams } from './base.types'
import { Genre } from './genres.type'
import { Platform } from './platform.type'
import { Prettify } from './prettify.type'

export type Game = Prettify<RawgCore> & {
  description: string
  background_image: string | null
  parent_platforms?: { platform: Platform }[]
  metacritic: number
}

export type GamesQueryParams = Prettify<RawgQueryParams> & {
  search?: string | null
  parent_platforms?: string
  genres?: string
  ordering: TwoWayGameSortOrder | null
}

export type GameQuery = {
  platform?: Platform
  genre?: Genre
}

type GameSortOrder = 'name' | 'released' | 'added' | 'created' | 'updated' | 'rating' | 'metacritic'

export type TwoWayGameSortOrder = `${GameSortOrder}` | `-${GameSortOrder}`
