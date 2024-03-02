import { useState } from "react";
import { Pressable, Text } from "react-native";
import EditReceiptItemModal from "./EditReceiptItemModal";
import FormReceiptItem from "./FormReceiptItem";

export default function FormReceipt({ sharers, receipt, setReceipt }) {
  const [editReceiptItemModalVisible, setEditReceiptItemModalVisible] =
    useState(false);

  return (
    <>
      <Text>Bill breakdown</Text>
      <Pressable onPress={() => setEditReceiptItemModalVisible(true)}>
        <Text>a</Text>
      </Pressable>

      { receipt.map((receiptItem)=> {
        <FormReceiptItem receiptItem={receiptItem} />
      })}

      {editReceiptItemModalVisible && (
        <EditReceiptItemModal
          sharers={sharers}
          editReceiptItemModalVisible={editReceiptItemModalVisible}
          setEditReceiptItemModalVisible={setEditReceiptItemModalVisible}
        />
      )}
    </>
  );
}
