import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/img-url";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <Text color="red.500">Something went wrong.</Text>;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            ></Image>
            <Text fontSize="md">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
      {isLoading &&
        skeletons.map((skeleton) => (
          <ListItem key={skeleton} paddingY="5px">
            <GenreListSkeleton />
          </ListItem>
        ))}
    </List>
  );
};

export default GenreList;
