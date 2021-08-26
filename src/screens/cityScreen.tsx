import {
  Box,
  Text,
  Stack,
  HStack,
  VStack,
  Center,
  useBreakpointValue,
  Icon,
} from "native-base";
import React from "react";
import { View } from "react-native";
import { Dropdown } from "../components/dropdown";
import data from "../../data.json";
import { globalStyles } from "../styles/globalStyles";
import { Feather } from "@expo/vector-icons";

export default function cityScreen() {
  const textSize = useBreakpointValue({
    base: 30,
    lg: 40,
    xl: 50,
  });

  const widthCenter = useBreakpointValue({
    base: 400,
    lg: 600,
    xl: 900,
  });
  return (
    <Box>
      <VStack space={10}>
        <Center>
          <Text style={globalStyles.title} fontSize={textSize}>
            Choisissez votre ville
          </Text>
        </Center>
        <Dropdown city={data.dataOne.city} prestation="Coiffeur" />
        <Center>
          <Feather name="arrow-right-circle" size={36} color="white" />
        </Center>
      </VStack>
    </Box>
  );
}
