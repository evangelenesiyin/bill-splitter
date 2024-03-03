import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { Pressable, Text } from "react-native";
import EditReceiptItemModal from "./EditReceiptItemModal";
import FormReceiptItem from "./FormReceiptItem";
import { receiptItemsAtom } from "../utils/atom";

export default function FormReceipt() {
  const [editReceiptItemModalVisible, setEditReceiptItemModalVisible] =
    useState(false);
  const [receipt, setReceipt] = useAtom(receiptItemsAtom);

  return (
    <>
      <Text>Bill breakdown</Text>
      <Pressable onPress={() => setEditReceiptItemModalVisible(true)}>
        <Text>+</Text>
      </Pressable>

      {receipt?.map((receiptItem, index) => {
        return (
          <FormReceiptItem
            key={index}
            index={index}
            receiptItem={receiptItem}
            setEditReceiptItemModalVisible={setEditReceiptItemModalVisible}
          />
        );
      })}

      <EditReceiptItemModal
        editReceiptItemModalVisible={editReceiptItemModalVisible}
        setEditReceiptItemModalVisible={setEditReceiptItemModalVisible}
      />
    </>
  );
}
