import { Button, Menu, MenuButton, Skeleton } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const SortSelectorSkeleton = () => {
  return (
    <Skeleton>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by Relevance
        </MenuButton>
      </Menu>
    </Skeleton>
  );
};

export default SortSelectorSkeleton;
