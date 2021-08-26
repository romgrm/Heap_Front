import React from "react";
import { Text, View } from "react-native";
import { Select } from "native-base";

interface Data {
  city: string[];
  prestation: string;
}

export function Dropdown(props: Data) {
  return (
    <View>
      <Select
        placeholder="Choisissez votre ville"
        minWidth={400}
        backgroundColor="primary.white"
        color="primary.charbon"
      >
        {props.city.map((item, key) => (
          <Select.Item label={item} value={item} key={key} />
        ))}
      </Select>
    </View>
  );
}
