import { Text, View } from "react-native";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { useAtom } from "jotai";
import { sharersAtom } from "../utils/atom";

export default function FormPeople() {
    const [sharers, setSharers] = useAtom(sharersAtom)

    let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <>
        <View className="flex flex-row ml-8">
        <Text className="font-roboto text-xl text-darknavy">Who's sharing?</Text>
        <View className="flex flex-1 items-end mr-8 justify-center">
        <FontAwesomeIcon icon={ faPlus } />
        </View>
        </View>
        <View className="ml-8 mt-2">
            <Text className="text-midgray">No names added</Text>
        </View>
        </>
    )
}