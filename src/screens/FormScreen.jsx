import { View, SafeAreaView } from "react-native";
import Header from "../components/Header";
import FormPeople from "../components/FormPeople";
import FormReceipt from "../components/FormReceipt";
import { useState } from "react";

export default function FormScreen() {
  const [sharers, setSharers] = useState(["tiff", "asc", "ted"])
  const [receipt, setReceipt] = useState([])


  return (
      <>
      <View className="flex-row items-center justify-center">
        <Header />
      </View>
      <SafeAreaView className="bg-gray h-full">
        <FormPeople />
        <View className="flex-row items-center justify-center">
        <View className="w-10/12 h-px bg-midgray my-4"></View>
        </View>
        <FormReceipt sharers={sharers} receipt={receipt} setReceipt={setReceipt} />
        </SafeAreaView>
      </>
  );
}
