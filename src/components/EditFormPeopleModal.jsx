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
    tagsArray: [sharers],
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
        <Pressable className="flex-row items-center justify-end mt-3" onPress={() => setDialogVisible(false)}>
        <FontAwesomeIcon icon={faXmark} />
        </Pressable>
        <Text className="font-robotomedium mb-3 mx-2 text-base">
          Separate each name with a space
        </Text>
        <TagInput
          updateState={updateTagState}
          tags={tags}
          onChangeText={handleTagChange}
          style={{
            width: "100%",
            height: "auto",
            padding: 10,
            backgroundColor: "#F4F4F4",
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 8,
          }}
        />
        <Pressable onPress={handleSave} className="mt-5">
          <Text className="font-robotocondensed py-1 px-3 mx-14 text-lg text-center bg-darknavy text-beige rounded-full"
          style={{ borderRadius: 15, overflow: 'hidden' }}
          >
            SAVE
          </Text>
        </Pressable>
      </DialogContent>
    </Dialog>
  );
}
