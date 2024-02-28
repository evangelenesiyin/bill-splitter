import { Text, View, SafeAreaView } from "react-native";

export default function Header() {
    return (
        <SafeAreaView
        style={{ flex: 1, backgroundColor: "#F4F4F4", alignItems: "center" }}
        >
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", paddingHorizontal: 30 }}>
            <Text style={{ fontSize: 20, color: "#595c6c" }}>Cam</Text>
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
            <Text style={{ fontFamily: "Roboto_400Regular", fontSize: 20, color: "#595c6c" }}>Reset</Text>
        </View>
        </SafeAreaView>
    );
}
