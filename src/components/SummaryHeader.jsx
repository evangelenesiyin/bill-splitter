import { Text, View, SafeAreaView, Pressable } from "react-native";

export default function SummaryHeader({ goToForm }) {
  // yeepers sorry why nativewind no grid???!?!?
  return (
    <SafeAreaView className="bg-gray items-center">
      <View
        className="grid grid-rows-3 items-center w-full px-30"
        style={{ paddingHorizontal: 30 }}
      >
        <Pressable onPress={goToForm}>
          <Text className="text-xl text-darkgray">Back</Text>
        </Pressable>
        <View>
          <Text
            style={{
              fontFamily: "Trirong_400Regular",
              fontSize: 45,
              color: "#112240",
            }}
          >
            BI
            <Text style={{ fontFamily: "Trispace_100Thin", fontSize: 55 }}>
              /
            </Text>
            LL
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
