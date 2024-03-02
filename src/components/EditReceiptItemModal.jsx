import { useEffect, useState } from "react";
import { Button, Modal, Pressable, Text, TextInput, View } from "react-native";

export default function EditReceiptItemModal({
  sharers,
  existingReceiptItem,
  EditReceiptItemModalVisible,
  setEditReceiptItemModalVisible,
}) {
  const [receiptItem, setReceiptItem] = useState({
    item_name: existingReceiptItem?.item_name || "", // string
    item_price: existingReceiptItem?.item_price || 0.0, // float
    item_sharers: existingReceiptItem?.item_sharers || [], // array of string names
  });

  const [isComplete, setIsComplete] = useState(false);

  const handleChangeItemName = (text) => {
    setReceiptItem({
      ...receiptItem,
      item_name: text.trim(),
    });
  };

  const handleChangeItemPrice = (value) => {
    setReceiptItem({
      ...receiptItem,
      item_price: value,
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
  };

  useEffect(() => {
    if (
      receiptItem.item_name.length == 0 ||
      receiptItem.item_price <= 0 ||
      receiptItem.item_sharers.length < 0
    ) {
      setIsComplete(false);
    } else {
      setIsComplete(true);
    }
  }, [receiptItem]);

  return (
    <Modal
      visible={EditReceiptItemModalVisible}
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
              {sharer} {receiptItem.item_sharers.includes(sharer) && "o"}
            </Text>
          </Pressable>
        );
      })}

      <Button title="ADD" disabled={!isComplete} />
    </Modal>
  );
}
