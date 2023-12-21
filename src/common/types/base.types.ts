export type RawgRes<T> = {
  count: number
  next: string | null
  previous?: string | null
  results: T[]
}

export type RawgCore = {
  id: number
  slug: string
  name: string
}

export type RawgQueryParams = {
  page?: number
  page_size?: number
}
