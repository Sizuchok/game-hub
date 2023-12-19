export type Game = {
  id: number
  slug: string
  name: string
  description: string
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic: number
}

export type Platform = {
  id: number
  name: string
  slug: string
}
