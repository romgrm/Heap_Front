import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { theme } from "./src/styles/theme";
import { NativeBaseProvider } from "native-base";
import CityScreen from "./src/screens/cityScreen";

export default function App() {
  let [fontsLoaded] = useFonts({
    'Regular': require("./assets/fonts/NeueHaasGroteskTextPro.ttf"),
    'Medium': require("./assets/fonts/NeueHaasGroteskTextProMedium.ttf"),
    'Bold': require("./assets/fonts/NeueHaasGroteskTextProBold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        <View style={styles.container}>
          <CityScreen />
        </View>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0000ff",
    alignItems: "center",
    justifyContent: "center",
  },
});
