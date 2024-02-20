import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/gamevar.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import "../App.css"; // Import CSS file


interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const handleClick = () => {
    window.location.href = "/";
  };
  return (
    <HStack padding="20px">
      {/* Wrap Image with a Link or a div/button */}
      <div onClick={handleClick} className="pointerImage">
        <Image src={logo} boxSize="50px" borderRadius="10px" margin="" />
      </div>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
