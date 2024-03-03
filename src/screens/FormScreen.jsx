import { View, SafeAreaView } from "react-native";
import Header from "../components/Header";
import FormPeople from "../components/FormPeople";
import FormReceipt from "../components/FormReceipt";
import { useState } from "react";

export default function FormScreen() {
  return (
    <>
      <View className="flex-row items-center justify-center">
        <Header />
      </View>
      <SafeAreaView className="bg-gray h-full">
        <FormPeople />
        <View className="flex-row items-center justify-center">
          <View className="w-10/12 h-px bg-midgray my-4"></View>
        </View>
        <FormReceipt />
      </SafeAreaView>
    </>
  );
}
