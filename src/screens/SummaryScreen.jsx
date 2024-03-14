import React from "react";
import { View, Text } from "react-native";
import SummaryHeader from "../components/SummaryHeader";
import Summary from "../components/Summary";

export default function SummaryScreen({ navigation }) {
  const goToForm = () => {
    navigation.navigate('Form')
  }

  return (
    <>
      <View className="flex-row items-center justify-center">
        <SummaryHeader goToForm={goToForm} />
      </View>
      <View>
        <Summary />
      </View>
    </>
  );
}
