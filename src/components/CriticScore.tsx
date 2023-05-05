import { Badge } from "@chakra-ui/react";
import React from "react";

interface CriticProps {
  score: number;
}
const CriticScore = ({ score }: CriticProps) => {
  let color =
    score > 75 ? "green" : score > 60 ? "yellow" : score > 50 ? "red" : "";

  return (
    <Badge colorScheme={color} fontSize="15px" borderRadius="4px ">
      {score}
    </Badge>
  );
};

export default CriticScore;
