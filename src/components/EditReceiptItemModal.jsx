import { useEffect, useState } from "react";
import { useAtomValue, useAtom } from "jotai";
import { Pressable, Text, TextInput, View } from "react-native";
import Dialog, { DialogContent } from "react-native-popup-dialog";
import { indexToEditAtom, receiptItemsAtom, sharersAtom } from "../utils/atom";
import { receiptItemTemplate } from "../data/template";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function EditReceiptItemModal({
  editReceiptItemModalVisible,
  setEditReceiptItemModalVisible,
}) {
  const [receiptItem, setReceiptItem] = useState({});
  const [indexToEdit, setIndexToEdit] = useAtom(indexToEditAtom);
  const sharers = useAtomValue(sharersAtom);
  const [receipt, setReceipt] = useAtom(receiptItemsAtom);
  const [isNew, setIsNew] = useState(true);
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

  const handleAdd = () => {
    setReceipt([...receipt, receiptItem]);
    setReceiptItem({
      ...receiptItemTemplate,
    });
  };

  const handleEdit = () => {
    const currentArray = [...receipt];
    currentArray[indexToEdit] = receiptItem;
    setReceipt(currentArray);
    handleCloseModal();
  };

  const handleDelete = () => {
    const currentArray = [...receipt];
    currentArray.splice(indexToEdit, 1);
    setReceipt(currentArray);
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setIndexToEdit(-1);
    setEditReceiptItemModalVisible(false);
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
      setIsNew(true);
      setReceiptItem({
        ...receiptItemTemplate,
      });
    } else {
      setIsNew(false);
      setReceiptItem({
        ...receipt[indexToEdit],
      });
    }
  }, [editReceiptItemModalVisible]);

  return (
    <Dialog
      visible={editReceiptItemModalVisible}
      onRequestClose={handleCloseModal}
      onTouchOutside={handleCloseModal}
    >
      <DialogContent className="bg-beige w-80">
    <View className="flex-row items-center justify-between">
      <Text className="font-robotomedium pt-5 pb-2 px-1 text-base">
        {isNew ? "Enter details" : "Edit details"}
      </Text>
      <Pressable onPressOut={handleCloseModal}>
        <FontAwesomeIcon icon={faXmark} />
      </Pressable>
    </View>

      <Text className="font-roboto pb-2 px-1 text-sm">Description (optional)</Text>
      <TextInput
        value={receiptItem.item_name}
        onChangeText={(text) => handleChangeItemName(text)}
        className="bg-gray border border-midgray rounded mb-2 mx-1 py-2 px-3"
      />

      <Text className="font-roboto pb-2 px-1 text-sm">Total item amount</Text>
      <TextInput
        value={String(receiptItem.item_price)}
        onChangeText={(text) => handleChangeItemPrice(text)}
        keyboardType="numeric"
        inputType="decimal"
        className="bg-gray border border-midgray rounded mb-2 mx-1 py-2 px-3"
      />

      <Text className="font-roboto mt-1 mx-1 text-sm">Allocate portion(s)</Text>
      <Text className="font-roboto mb-2 mx-1 text-xs">Select multiple names if shared by a few people</Text>
      <View className="flex flex-row flex-wrap mb-3">
      {sharers.length === 0 && (
        <Text className="font-roboto text-xs text-midgray ml-1 mb-1">No names added</Text>
      )}
      {sharers.map((sharer, index) => {
        const isSelected = receiptItem.item_sharers?.includes(sharer);
        return (
          <Pressable
          key={index}
          onPressOut={() => handleAddRemoveSharer(sharer)}
          style={{
            borderWidth: 1,
            borderRadius: 999,
            borderColor: isSelected ? '#161A30' : '#939393',
            paddingVertical: 5,
            paddingHorizontal: 15,
            margin: 5,
            backgroundColor: isSelected ? '#161A30' : '#F0ECE5',
          }}
        >
          <Text style={{ color: isSelected ? '#F0ECE5' : '#161A30', textAlign: 'center' }}>
            {sharer}
          </Text>
        </Pressable>

        );
      })}
    </View>

      {isNew ? (
        <Pressable>
        <Text disabled={!isComplete} onPress={handleAdd} className="font-robotocondensed py-1 px-3 mx-16 text-lg text-center bg-darknavy text-beige"
        style={{ borderRadius: 15, overflow: 'hidden' }}>ADD</Text>
        </Pressable>
      ) : (
        <View className="flex-row justify-center">
          <Pressable>
          <Text 
          title="DELETE" onPress={handleDelete} className="font-robotocondensed py-1 px-10 m-1 text-lg text-center bg-red text-beige rounded-full" 
          style={{ borderRadius: 15, overflow: 'hidden' }}>DELETE</Text>
          </Pressable>
        <Pressable>
          <Text 
          disabled={!isComplete} onPress={handleEdit} className="font-robotocondensed py-1 px-12 m-1 text-lg text-center bg-darknavy text-beige rounded-full" 
          style={{ borderRadius: 15, overflow: 'hidden' }}>SAVE</Text>
          </Pressable>
          </View>
      )}
      </DialogContent>
    </Dialog>
  );
}
