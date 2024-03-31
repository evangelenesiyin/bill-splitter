import { Pressable, Text, View } from "react-native";
import { useSetAtom } from "jotai";
import { indexToEditAtom } from "../utils/atom";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

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
    <Pressable onPress={handleReceiptItemPress}>
      <View className="flex flex-row mt-1">
        <Text className="font-roboto text-lg text-darkgray">
          {receiptItem.item_name}
        </Text>
        <View className="flex flex-1 items-end mr-8">
          <Text className="font-roboto text-lg text-darkgray">
            ${parseFloat(receiptItem.item_price).toFixed(2)}
          </Text>
        </View>
      </View>
      <Text className="font-roboto text-lg text-midgray mb-2">
        {receiptItem.item_sharers.join(", ")}
      </Text>
    </Pressable>
  );
}
