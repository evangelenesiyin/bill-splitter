import { useState } from "react";
import { View, Text, Pressable } from "react-native";

export default function SummaryBreakdown({ summaryItem }) {
  const [showBreakdown, setShowBreakdown] = useState(false);

  return (
    <View>
      {/* This is human total */}
      <View className="flex-row justify-around">
        <Text>{summaryItem.name}</Text>
        <Text>{summaryItem.total.toFixed(2)}</Text>
        {/* this will be your button hehe */}
        <Pressable onPress={()=> setShowBreakdown(!showBreakdown)}><Text>v</Text></Pressable>
      </View>

      {/* And this is breakdown that you can click to show/ hide */}
      {showBreakdown && (
        <View>
          {summaryItem.items?.map((item) => {
            return (
              <View className="flex-row justify-around">
                <Text>{item.item_name}</Text>
                <Text>{item.item_split_price.toFixed(2)}</Text>
              </View>
            );
          })}
          <View className="flex-row justify-around">
            <Text>Tax</Text>
            <Text>{summaryItem.tax.toFixed(2)}</Text>
          </View>
        </View>
      )}
    </View>
  );
}
