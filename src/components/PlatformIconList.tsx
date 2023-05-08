import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface IconProps {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: IconProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
    nintendo: SiNintendo,
  };

  return (
    <>
      <HStack marginY={4}>
        {platforms.map((platform) => (
          <Icon as={iconMap[platform.slug]} color="gray.500" key={platform.id}>
            {platform.name}
          </Icon>
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
