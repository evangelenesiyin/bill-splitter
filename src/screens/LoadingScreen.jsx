import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView } from "react-native";
import { useFonts, Trirong_400Regular } from "@expo-google-fonts/trirong";
import { Trispace_100Thin } from "@expo-google-fonts/trispace";
import { RobotoCondensed_400Regular } from "@expo-google-fonts/roboto-condensed";
import LottieView from "lottie-react-native";

export default function LoadingScreen() {

  let [fontsLoaded] = useFonts({
    Trirong_400Regular,
    Trispace_100Thin,
    RobotoCondensed_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F4F4F4",
        width: "100%",
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            fontFamily: "Trirong_400Regular",
            fontSize: 90,
            color: "#112240",
          }}
        >
          BI
          <Text style={{ fontFamily: "Trispace_100Thin", fontSize: 110 }}>
            /
          </Text>
          LL
        </Text>
        <Text
          style={{
            fontFamily: "RobotoCondensed_400Regular",
            fontSize: 20,
            marginBottom: 5,
          }}
        >
          Dining in a large group?
        </Text>
        <Text
          style={{ fontFamily: "RobotoCondensed_400Regular", fontSize: 20 }}
        >
          Split your bills with ease.
        </Text>
        <LottieView
          source={require("../assets/lottie/loading.json")}
          style={{ width: 200, height: 100 }}
          autoPlay
          loop
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
