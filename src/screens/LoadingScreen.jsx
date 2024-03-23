import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView, Pressable } from "react-native";
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
    <SafeAreaView className="flex-1 justify-center items-center bg-gray w-full">
        <View className="items-center">
          <Text className="text-darknavy text-title font-trirong">
            BI
            <Text className="text-titleslash font-trispace">/</Text>
            LL
          </Text>
          <Text className="font-robotocondensed text-xl">
            Dining in a large group?
          </Text>
          <Text className="font-robotocondensed text-xl">
            Split your bills with ease.
          </Text>
          <View className="justify-center align-middle">
          <LottieView
            source={require("../assets/lottie/loading.json")}
            className="w-52 h-28"
            autoPlay
            loop
          />
          </View>
        </View>
        <StatusBar style="auto" />
    </SafeAreaView>
  );
}
