import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/gamevar.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="50px" borderRadius="10px" margin="" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
