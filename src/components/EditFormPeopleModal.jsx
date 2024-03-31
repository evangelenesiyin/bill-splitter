import React, { useState } from "react";
import { Text, Pressable, View } from "react-native";
import { useAtom } from "jotai";
import { sharersAtom } from "../utils/atom";
import Dialog, { DialogContent } from "react-native-popup-dialog";
import TagInput from "react-native-tags-input";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function EditPeopleModal({ dialogVisible, setDialogVisible }) {
  const [sharers, setSharers] = useAtom(sharersAtom);

  const [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  const [tags, setTags] = useState({
    tag: "",
    tagsArray: [],
  });

  const updateTagState = (state) => {
    console.log(state);
    setTags(state);
  };

  const handleTagChange = (text) => {
    setTags((prevState) => ({
      ...prevState,
      tag: text,
    }));
  };

  if (!fontsLoaded) {
    return null;
  }

  const handleSave = () => {
    setSharers(tags.tagsArray);
    setDialogVisible(false);
  };

  return (
    <Dialog
      visible={dialogVisible}
      onTouchOutside={() => setDialogVisible(false)}
    >
      <DialogContent className="bg-beige w-80">
        <View className="flex-row items-center justify-between">
        <Text className="font-robotomedium mt-6 mb-2 mx-2 text-xl">
          Enter name(s)
        </Text>
        <Pressable className="mt-3" onPress={() => setDialogVisible(false)}>
        <FontAwesomeIcon icon={faXmark} size="20x" />
        </Pressable>
        </View>
        <Text className="font-roboto mb-2 mx-2 text-lg">Separate each name with a comma</Text>
        <TagInput
          updateState={updateTagState}
          tags={tags}
          onChangeText={handleTagChange}
          className="text-xl"
          tagStyle={{ backgroundColor: 'white', height: 30 }}
          tagTextStyle={{ fontSize: 18, color: 'black' }}
          style={{
            width: "100%",
            height: "auto",
            padding: 10,
            backgroundColor: "#F4F4F4",
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 8,
          }}
          autoCorrect={false}
          keysForTag={','}
        />
        <Pressable onPress={handleSave} className="mt-3">
          <Text className="font-robotocondensed py-2 px-3 mx-14 text-2xl text-center bg-darknavy text-beige"
          style={{ borderRadius: 20, overflow: 'hidden' }}
          >
            SAVE
          </Text>
        </Pressable>
      </DialogContent>
    </Dialog>
  );
}
