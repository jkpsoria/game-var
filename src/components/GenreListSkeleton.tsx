import {
  List,
  ListItem,
  HStack,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreListSkeleton = () => {
  const { data } = useGenres();
  return (
    <>
      <Skeleton boxSize="32px" borderRadius={8}></Skeleton>{" "}
      <SkeletonText></SkeletonText>
    </>
  );
};

export default GenreListSkeleton;
