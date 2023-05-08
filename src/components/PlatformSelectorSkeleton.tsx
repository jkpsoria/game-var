import { Button, Menu, MenuButton, Skeleton } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";

const PlatformSelectorSkeleton = () => {
  return (
    <Skeleton
      as={Button}
      rightIcon={<BsChevronDown />}
      marginBottom={5}
      borderRadius={5}
      marginTop={15}
      marginLeft={4}
    >
      <Menu>
        <MenuButton>Platforms</MenuButton>
      </Menu>
    </Skeleton>
  );
};

export default PlatformSelectorSkeleton;
