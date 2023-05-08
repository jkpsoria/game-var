import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/gamevar.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="20px">
      <Image src={logo} boxSize="50px" borderRadius="10px" margin="" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
