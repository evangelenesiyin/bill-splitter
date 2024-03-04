import { useEffect, useState } from "react";
import { useAtomValue, useAtom } from "jotai";
import { Button, Modal, Pressable, Text, TextInput, View } from "react-native";
import { indexToEditAtom, receiptItemsAtom, sharersAtom } from "../utils/atom";
import { receiptItemTemplate } from "../data/template";

export default function EditReceiptItemModal({
  existingReceiptItem,
  editReceiptItemModalVisible,
  setEditReceiptItemModalVisible,
}) {
  const [receiptItem, setReceiptItem] = useState({});
  const indexToEdit = useAtomValue(indexToEditAtom);
  const sharers = useAtomValue(sharersAtom);
  const [receipt, setReceipt] = useAtom(receiptItemsAtom);
  const [isComplete, setIsComplete] = useState(false);

  const handleChangeItemName = (text) => {
    setReceiptItem({
      ...receiptItem,
      item_name: text,
    });
  };

  const handleChangeItemPrice = (value) => {
    setReceiptItem({
      ...receiptItem,
      item_price: value.trim(),
    });
  };

  const handleAddRemoveSharer = (sharer) => {
    if (receiptItem.item_sharers.includes(sharer)) {
      const newItemSharers = [...receiptItem.item_sharers];
      newItemSharers.splice(receiptItem.item_sharers.indexOf(sharer), 1);
      setReceiptItem({
        ...receiptItem,
        item_sharers: [...newItemSharers],
      });
    } else {
      setReceiptItem({
        ...receiptItem,
        item_sharers: [...receiptItem.item_sharers, sharer],
      });
    }
  };

  const handleSubmit = () => {
    // different functions depending on whether it's new or an edit
    // for now only new
    setReceipt([...receipt, receiptItem]);
    setReceiptItem({
      ...receiptItemTemplate,
    });
  };

  useEffect(() => {
    if (
      receiptItem.item_name?.length == 0 ||
      receiptItem.item_price <= 0 ||
      receiptItem.item_sharers?.length == 0
    ) {
      setIsComplete(false);
    } else {
      setIsComplete(true);
    }
  }, [receiptItem]);

  useEffect(() => {
    if (indexToEdit == -1) {
      setReceiptItem({
        ...receiptItemTemplate,
      });
    } else {
      setReceiptItem({
        ...receipt[indexToEdit],
      });
    }
  }, [editReceiptItemModalVisible]);

  return (
    <Modal
      visible={editReceiptItemModalVisible}
      onRequestClose={() => setEditReceiptItemModalVisible(false)}
    >
      <View>
        <Text>Enter Details</Text>
        <Pressable onPressOut={() => setEditReceiptItemModalVisible(false)}>
          <Text>x</Text>
        </Pressable>
      </View>

      <Text>{JSON.stringify(receiptItem)}</Text>

      <Text>Description (optional)</Text>
      <TextInput
        value={receiptItem.item_name}
        onChangeText={(text) => handleChangeItemName(text)}
      />

      <Text>Total item amount (SGD)</Text>
      <TextInput
        value={String(receiptItem.item_price)}
        onChangeText={(text) => handleChangeItemPrice(text)}
        keyboardType="numeric"
        inputType="decimal"
      />

      <Text>Allocate portion(s)</Text>
      <Text>Select multiple names if shared by a few people</Text>
      {sharers.map((sharer, index) => {
        return (
          <Pressable
            key={index}
            onPressOut={() => handleAddRemoveSharer(sharer)}
          >
            <Text>
              {sharer} {receiptItem.item_sharers?.includes(sharer) && "o"}
            </Text>
          </Pressable>
        );
      })}

      <Button title="ADD" disabled={!isComplete} onPress={handleSubmit} />
    </Modal>
  );
}