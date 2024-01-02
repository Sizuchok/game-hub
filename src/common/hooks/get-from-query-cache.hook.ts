import { useQueryClient } from '@tanstack/react-query'
import { RawgCore, RawgRes } from '../types/base.types'

export const useGetFromQueryCache = <TData extends RawgCore>(
  queryKey: string,
  id: number | undefined,
) => {
  const queryClient = useQueryClient()

  if (!id) return undefined

  const data = queryClient.getQueryData<RawgRes<TData>>([queryKey])
  return data?.results.find(entry => entry.id === id)
}

export type GetFromQueryCacheArgs = Parameters<typeof useGetFromQueryCache>
