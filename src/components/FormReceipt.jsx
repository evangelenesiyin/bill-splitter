import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { Pressable, Text, View } from "react-native";
import EditReceiptItemModal from "./EditReceiptItemModal";
import FormReceiptItem from "./FormReceiptItem";
import { receiptItemsAtom } from "../utils/atom";
import { useFonts, Roboto_100Thin, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'

export default function FormReceipt() {
  const [editReceiptItemModalVisible, setEditReceiptItemModalVisible] =
    useState(false);
  const [receipt, setReceipt] = useAtom(receiptItemsAtom);

  const [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <View className="flex flex-row ml-8">
        <Text className="font-roboto text-xl text-darknavy">Bill breakdown</Text>
        <View className="flex flex-1 items-end mr-8 justify-center">
        <Pressable onPress={() => setEditReceiptItemModalVisible(true)}>
        <FontAwesomeIcon icon={ faPlus } />
      </Pressable>
        </View>
        </View>
        <View className="ml-8 mt-2">
      {receipt && receipt.length > 0 ? (
  <>
  <View className="flex flex-row mt-2">
    <Text className="font-robotomedium text-base text-darkgray">Description</Text>
    <View className="flex flex-1 items-end mr-8">
    <Text className="font-robotomedium text-base text-darkgray">Amount</Text>
    </View>
    </View>
    <View className="w-11/12 h-px bg-midgray my-2"></View>
    {receipt.map((receiptItem, index) => (
      <FormReceiptItem
        key={index}
        index={index}
        receiptItem={receiptItem}
        setEditReceiptItemModalVisible={setEditReceiptItemModalVisible}
      />
    ))}
  </>
) : (
  <Text className="text-midgray">No details added</Text>
)}

    </View>


      <EditReceiptItemModal
        editReceiptItemModalVisible={editReceiptItemModalVisible}
        setEditReceiptItemModalVisible={setEditReceiptItemModalVisible}
      />
    </>
  );
}
