import { Text, View } from "react-native";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";

export default function FormPeople() {

    let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View className="ml-8">
        <Text className="font-roboto text-xl">Who's sharing?</Text>
        
        </View>
    )
}