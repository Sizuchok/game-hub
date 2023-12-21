import { RawgCore, RawgQueryParams } from './base.types'
import { Platform } from './platform.type'
import { Prettify } from './prettify.type'

export type Game = Prettify<RawgCore> & {
  description: string
  background_image: string | null
  parent_platforms: { platform: Platform }[]
  metacritic: number
}

export type GamesQueryParams = Prettify<RawgQueryParams> & {
  search?: string
  parent_platforms?: string
  genres?: string
}
