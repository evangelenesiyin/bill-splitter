import { useState } from "react";
import { Text, View, Pressable } from "react-native";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { useAtomValue } from "jotai";
import { sharersAtom } from "../utils/atom";
import EditFormPeopleModal from "./EditFormPeopleModal";

export default function FormPeople() {
  const sharers = useAtomValue(sharersAtom);
  const [dialogVisible, setDialogVisible] = useState(false);

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Pressable
        onPress={() => setDialogVisible(true)}
        accessibilityLabel="Open Dialog"
      >
        <View className="flex flex-row ml-8">
          <Text className="font-roboto text-2xl text-darknavy">
            Who's sharing?
          </Text>
          <View className="flex flex-1 items-end mr-8 justify-center">
            <FontAwesomeIcon icon={faPlus} size="20x" />

            <EditFormPeopleModal
              dialogVisible={dialogVisible}
              setDialogVisible={setDialogVisible}
            />
          </View>
        </View>
        <View className="ml-8 mt-2">
          {sharers.length ? (
            <Text className="text-lg">{sharers.join(", ")}</Text>
          ) : (
            <Text className="text-midgray text-lg">No names added</Text>
          )}
        </View>
      </Pressable>
    </>
  );
}
