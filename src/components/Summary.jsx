import { Pressable, View, Text, Button } from "react-native";
import { useAtomValue } from "jotai";
import { summaryAtom } from "../utils/atom";
import SummaryBreakdown from "./SummaryBreakdown";

export default function Summary() {
  const summary = useAtomValue(summaryAtom);


  return (
    <>
      {/* this is the header part */}
      <View className="flex-row justify-around">
        <Text>Summary</Text>
        <Pressable>
          {/* idk how to make this work logically */}
          <Text>Expand All</Text>
        </Pressable>
      </View>

      {/* this will be each person's breakdown */}
      {summary?.map((summaryItem) => {
        return <SummaryBreakdown summaryItem={summaryItem} />;
      })}

      {/* and this is button */}
      <Button title="SHARE SUMMARY" onPress={() => console.log("quack")} />
    </>
  );
}
