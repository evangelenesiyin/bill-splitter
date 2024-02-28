import { View, SafeAreaView } from "react-native";
import Header from "../components/Header";
import FormPeople from "../components/FormPeople";
import FormReceipt from "../components/FormReceipt";

export default function FormScreen() {
  return (
      <>
      <View className="flex-row items-center justify-center">
        <Header />
      </View>
      <SafeAreaView className="bg-gray">
        <FormPeople />
        <View style={{ width: "90%", height: 1, backgroundColor: "#939393", marginTop: 20, marginBottom: 20 }}></View>
        <FormReceipt />
        </SafeAreaView>
      </>
  );
}
