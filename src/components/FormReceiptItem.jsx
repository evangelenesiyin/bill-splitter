import { Pressable, Text, View } from "react-native";
import { useSetAtom } from "jotai";
import { indexToEditAtom } from "../utils/atom";

export default function FormReceiptItem({
  index,
  receiptItem,
  setEditReceiptItemModalVisible,
}) {
  const setIndexToEdit = useSetAtom(indexToEditAtom);

  const handleReceiptItemPress = () => {
    setIndexToEdit(index);
    setEditReceiptItemModalVisible(true);
  };

  return (
    <Pressable onPress={handleReceiptItemPress}>
      <Text>{receiptItem.item_name}</Text>
      <Text>{parseFloat(receiptItem.item_price).toFixed(2)}</Text>
      <Text>{receiptItem.item_sharers.join(", ")}</Text>
    </Pressable>
  );
}
