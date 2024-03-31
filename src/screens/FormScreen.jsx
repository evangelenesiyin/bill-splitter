import { View, SafeAreaView, Pressable, Text } from "react-native";
import Header from "../components/Header";
import FormPeople from "../components/FormPeople";
import FormReceipt from "../components/FormReceipt";
import { useState } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { sharersAtom, receiptItemsAtom, summaryAtom } from "../utils/atom";
import getIndividualPrices from "../utils/calculations";
import EditFormPeopleModal from "../components/EditFormPeopleModal";

export default function FormScreen({ navigation }) {
  const [editFormPeopleModalVisible, setEditFormPeopleModalVisible] =
    useState(false);
  const sharers = useAtomValue(sharersAtom);
  const receiptItems = useAtomValue(receiptItemsAtom);
  const setSummary = useSetAtom(summaryAtom);
  const grandTotal = 58.39; // todo: figure out where to put this/ where to input this

  const handleSummaryPress = () => {
    setSummary(getIndividualPrices(sharers, receiptItems, grandTotal));
    console.log(getIndividualPrices(sharers, receiptItems, grandTotal));
    navigation.navigate("Summary");
  };

  return (
    <>
      <View className="flex-row items-center justify-center">
        <Header />
      </View>
      <SafeAreaView className="bg-gray h-full flex-1 mt-3">
        <Pressable onPress={()=> setEditFormPeopleModalVisible(true)}>
          <FormPeople />
        </Pressable>
        <View className="flex-row items-center justify-center">
          <View className="w-10/12 h-px bg-midgray my-4"></View>
        </View>
        <FormReceipt />

        <View className="flex-1 mt-10">
        <Pressable onPress={handleSummaryPress} className="border border-darknavy bg-darknavy py-3 px-2 mx-24 rounded-full">
        <Text className="font-robotocondensed text-center text-2xl text-beige">VIEW SUMMARY</Text>
        </Pressable>
        </View>

      </SafeAreaView>
      <EditFormPeopleModal editFormPeopleModalVisible={editFormPeopleModalVisible} setEditFormPeopleModalVisible={setEditFormPeopleModalVisible} />
    </>
  );
}
