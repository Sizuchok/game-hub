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

  setSearchText: searchText => {
    const updater = ({ gameQuery }: GameQueryStore) => ({
      gameQuery: {
        ...gameQuery,
        search: searchText,
        ordering: null,
      },
    })

    set(updater)
  },

  setGenreId: id => {
    const updater = ({ gameQuery }: GameQueryStore) => ({
      gameQuery: {
        ...gameQuery,
        genre: id,
      },
    })

    set(updater)
  },

  setPlatformId: id => {
    const updater = ({ gameQuery }: GameQueryStore) => ({
      gameQuery: {
        ...gameQuery,
        platform: id,
      },
    })

    set(updater)
  },

  setSortOder: order => {
    const updater = ({ gameQuery }: GameQueryStore) => ({
      gameQuery: {
        ...gameQuery,
        ordering: order,
        search: null,
      },
    })

    set(updater)
  },
}))
