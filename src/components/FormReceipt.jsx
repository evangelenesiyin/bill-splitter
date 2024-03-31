import { useState } from "react";
import { useAtom } from "jotai";
import { Pressable, Text, TextInput, View } from "react-native";
import EditReceiptItemModal from "./EditReceiptItemModal";
import FormReceiptItem from "./FormReceiptItem";
import { receiptItemsAtom } from "../utils/atom";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Dialog, { DialogContent } from "react-native-popup-dialog";

export default function FormReceipt() {
  const [editReceiptItemModalVisible, setEditReceiptItemModalVisible] =
    useState(false);
  const [receipt, setReceipt] = useAtom(receiptItemsAtom);
  const [dialogVisible, setDialogVisible] = useState(false);

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
        <Text className="font-roboto text-2xl text-darknavy">
          Bill breakdown
        </Text>
        <Pressable
          onPress={() => setDialogVisible(true)}
          accessibilityLabel="Open Dialog"
        >
          <FontAwesomeIcon
            icon={faCircleInfo}
            style={{ color: "#595C6C", marginTop: 6, marginLeft: 5 }}
          />
        </Pressable>

        <Dialog
          visible={dialogVisible}
          onTouchOutside={() => setDialogVisible(false)}
        >
          <DialogContent className="bg-beige">
            <Text className="font-robotomedium pt-7 pb-5 px-3 text-xl">
              Tap on individual bill item to edit/delete
            </Text>
            <Pressable onPress={() => setDialogVisible(false)}>
              <Text className="font-robotocondensed py-2 px-3 mx-20 text-2xl text-center bg-darknavy text-beige" style={{ borderRadius: 20, overflow: 'hidden' }}>
                CLOSE
              </Text>
            </Pressable>
          </DialogContent>
        </Dialog>
        <View className="flex flex-1 items-end mr-8 justify-center">
          <Pressable onPress={() => setEditReceiptItemModalVisible(true)}>
            <FontAwesomeIcon icon={faPlus} size="20x" />
          </Pressable>
        </View>
      </View>
      <View className="ml-8 mt-2">
        {receipt && receipt.length > 0 ? (
          <>
            <View className="flex flex-row mt-2">
              <Text className="font-robotomedium text-lg text-darkgray pr-2">
                Description
              </Text>

              <View className="flex flex-1 items-end mr-8">
                <Text className="font-robotomedium text-lg text-darkgray">
                  Amount
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5 }}>
            {[...Array(58)].map((_, index) => (
              <View key={index} style={{ width: 4, height: 1, backgroundColor: 'gray', marginHorizontal: 1 }} />
            ))}
          </View>
            {receipt.map((receiptItem, index) => (
              <FormReceiptItem
                key={index}
                index={index}
                receiptItem={receiptItem}
                setEditReceiptItemModalVisible={setEditReceiptItemModalVisible}
              />
            ))}
          <View style={{ flexDirection: 'row' }}>
          {[...Array(58)].map((_, index) => (
            <View key={index} style={{ width: 4, height: 1, backgroundColor: 'gray', marginHorizontal: 1 }} />
          ))}
        </View>
        <View className="flex flex-row justify-between items-center">
        <Text className="font-robotomedium text-lg text-darkgray mt-2">Grand Total</Text>
        <Text className="font-robotomedium text-lg text-darkgray mr-8">$100.00</Text>
          {/* <TextInput className="bg-gray border border-midgray rounded py-2 px-2 w-20"/> */}
        </View>
            
          </>
        ) : (
          <Pressable onPress={() => setEditReceiptItemModalVisible(true)}>
            <Text className="text-midgray text-lg">No details added</Text>
          </Pressable>
        )}
      </View>
      <EditReceiptItemModal
        editReceiptItemModalVisible={editReceiptItemModalVisible}
        setEditReceiptItemModalVisible={setEditReceiptItemModalVisible}
      />
    </>
  );
}
