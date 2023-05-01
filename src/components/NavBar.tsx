import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/gamevar.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="50px" borderRadius="10px" margin="5px" />
      <Text>Hey</Text>
    </HStack>
  );
};

export default NavBar;
