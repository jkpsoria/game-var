import { Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <>
      <Skeleton boxSize="32px" borderRadius={8}></Skeleton>{" "}
      <SkeletonText></SkeletonText>
    </>
  );
};

export default GenreListSkeleton;
