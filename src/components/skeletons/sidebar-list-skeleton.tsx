import { HStack, Skeleton, SkeletonText } from '@chakra-ui/react'

const SidebarListSkeleton = () => {
  return (
    <HStack>
      <Skeleton boxSize={8} borderRadius="md" />
      <SkeletonText flexGrow={1} noOfLines={2} />
    </HStack>
  )
}
export default SidebarListSkeleton
