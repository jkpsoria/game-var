import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/img-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface GenreListProp {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProp) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <Text color="red.500">Something went wrong.</Text>;

  return (
    <>
      <Heading marginBottom={7} fontSize={"2xl"}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              ></Image>
              <Button
                onClick={() => onSelectGenre(genre)}
                variant="link"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
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
    </>
  );
};

export default GenreList;
