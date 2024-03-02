import { Text, View } from "react-native";

export default function FormReceiptItem({ receiptItem }) {

  return (
      <>
        <Text>{receiptItem.item_name}</Text>
        <Text>{receiptItem.item_price}</Text>
        <Text>{receiptItem.item_sharers.join(", ")}</Text>
      </>
  )
}