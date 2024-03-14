import { Text, View, SafeAreaView } from "react-native";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import { Trirong_400Regular } from "@expo-google-fonts/trirong";
import { Trispace_100Thin } from "@expo-google-fonts/trispace";
import { RobotoCondensed_400Regular } from "@expo-google-fonts/roboto-condensed";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons/faCamera";

export default function Header() {
  let [fontsLoaded] = useFonts({
    Trirong_400Regular,
    Trispace_100Thin,
    RobotoCondensed_400Regular,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1 bg-gray items-center">
      <View
        className="flex-row justify-between items-center w-full px-30"
        style={{ paddingHorizontal: 30 }}
      >
        {/* <FontAwesomeIcon icon={ faCamera } /> */}
        <Text className="text-xl text-darkgray">Cam</Text>
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
        <Text className="text-xl text-darkgray font-roboto">Reset</Text>
      </View>
    </SafeAreaView>
  );
}
