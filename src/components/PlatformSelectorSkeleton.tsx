import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
} from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelectorSkeleton = () => {
  return (
    <Skeleton
      as={Button}
      rightIcon={<BsChevronDown />}
      marginBottom={5}
      borderRadius={5}
    >
      <Menu>
        <MenuButton>Platforms</MenuButton>
      </Menu>
    </Skeleton>
  );
};

export default PlatformSelectorSkeleton;
