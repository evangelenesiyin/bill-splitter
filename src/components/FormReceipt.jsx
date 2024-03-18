import { useState } from "react";
import { useAtom } from "jotai";
import { Pressable, Text, View } from "react-native";
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
        <Text className="font-roboto text-xl text-darknavy">
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
            <Text className="font-robotomedium pt-7 pb-2 px-3 text-base">
              Tap on individual item to edit/delete
            </Text>
            <Pressable onPress={() => setDialogVisible(false)}>
              <Text className="font-robotocondensed py-2 px-3 mt-2 mx-14 text-base text-center bg-darknavy text-beige rounded-full">
                CLOSE
              </Text>
            </Pressable>
          </DialogContent>
        </Dialog>
        <View className="flex flex-1 items-end mr-8 justify-center">
          <Pressable onPress={() => setEditReceiptItemModalVisible(true)}>
            <FontAwesomeIcon icon={faPlus} />
          </Pressable>
        </View>
      </View>
      <View className="ml-8 mt-2">
        {receipt && receipt.length > 0 ? (
          <>
            <View className="flex flex-row mt-2">
              <Text className="font-robotomedium text-base text-darkgray pr-2">
                Description
              </Text>

              <View className="flex flex-1 items-end mr-8">
                <Text className="font-robotomedium text-base text-darkgray">
                  Amount
                </Text>
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
          <Pressable onPress={() => setEditReceiptItemModalVisible(true)}>
            <Text className="text-midgray">No details added</Text>
          </Pressable>
        )}
        <Text>This is the grandtotal text</Text>
      </View>
      <EditReceiptItemModal
        editReceiptItemModalVisible={editReceiptItemModalVisible}
        setEditReceiptItemModalVisible={setEditReceiptItemModalVisible}
      />
    </>
  );
}
