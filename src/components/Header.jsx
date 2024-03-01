import { Text, View, SafeAreaView } from "react-native";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import { Trirong_400Regular } from "@expo-google-fonts/trirong";
import { Trispace_100Thin } from "@expo-google-fonts/trispace";
import { RobotoCondensed_400Regular } from "@expo-google-fonts/roboto-condensed";

export default function Header() {

    let [fontsLoaded] = useFonts({
    Trirong_400Regular,
    Trispace_100Thin,
    RobotoCondensed_400Regular,
    Roboto_400Regular
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView
        style={{ flex: 1, backgroundColor: "#F4F4F4", alignItems: "center" }}
        >
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", paddingHorizontal: 30 }}>
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
            <Text className="text-xl text-darkgray" style={{ fontFamily: "Roboto_400Regular" }}>Reset</Text>
        </View>
        </SafeAreaView>
    );
}
