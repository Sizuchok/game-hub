import { create } from 'zustand'
import { GameQuery, TwoWayGameSortOrder } from '../common/types/games.types'

export type GameQueryStore = {
  gameQuery: GameQuery
  setSearchText: (searchText: string | undefined) => void
  setPlatformId: (id: number) => void
  setGenreId: (id: number) => void
  setSortOder: (order: TwoWayGameSortOrder) => void
}

export const useGameQuery = create<GameQueryStore>(set => ({
  gameQuery: {
    ordering: '-added',
  },

  setSearchText: searchText =>
    set(({ gameQuery }) => ({ gameQuery: { ...gameQuery, search: searchText, ordering: null } })),

  setGenreId: id => set(({ gameQuery }) => ({ gameQuery: { ...gameQuery, genre: id } })),

  setPlatformId: id => set(({ gameQuery }) => ({ gameQuery: { ...gameQuery, platform: id } })),

  setSortOder: order =>
    set(({ gameQuery }) => ({ gameQuery: { ...gameQuery, ordering: order, search: null } })),
}))
