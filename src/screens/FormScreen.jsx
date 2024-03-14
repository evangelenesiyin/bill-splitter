import { View, SafeAreaView, Button } from "react-native";
import Header from "../components/Header";
import FormPeople from "../components/FormPeople";
import FormReceipt from "../components/FormReceipt";
import { useState } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { sharersAtom, receiptItemsAtom, summaryAtom } from "../utils/atom";
import getIndividualPrices from "../utils/calculations";

export default function FormScreen() {
  const sharers = useAtomValue(sharersAtom);
  const receiptItems = useAtomValue(receiptItemsAtom);
  const setSummary = useSetAtom(summaryAtom);
  const grandTotal = 58.39; // todo: figure out where to put this/ where to input this

  const handleSummaryPress = () => {
    setSummary(getIndividualPrices(sharers, receiptItems, grandTotal));
    // console.log(getIndividualPrices(sharers, receiptItems, grandTotal));
    // probably need to route to summary page after
  };

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
        <Button title="Summary" onPress={handleSummaryPress} />
      </SafeAreaView>
    </>
  );
}
