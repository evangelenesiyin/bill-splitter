import React, { useState } from 'react';
import { Text, Pressable } from "react-native";
import { useAtom } from "jotai";
import { sharersAtom } from "../utils/atom";
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import TagInput from 'react-native-tags-input';
import { useFonts, Roboto_100Thin, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function EditPeopleModal({ dialogVisible, setDialogVisible }) {
    const [sharers, setSharers] = useAtom(sharersAtom);

    const [fontsLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold,
    });

    const [tags, setTags] = useState({
        tag: '',
        tagsArray: []
    });

    const updateTagState = (state) => {
        setTags(state);
    };

    const handleTagChange = (text) => {
        setTags(prevState => ({
            ...prevState,
            tag: text
        }));
    };

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Dialog visible={dialogVisible} onTouchOutside={() => setDialogVisible(false)}>
            <DialogContent className="bg-beige w-80">
                <Text className="font-robotomedium pt-7 pb-2 px-3 text-base">Separate each name with a space</Text>
                <TagInput
                updateState={updateTagState}
                tags={tags}
                onChangeText={handleTagChange}
                style={{ width: '100%', height: "auto", padding: 10, backgroundColor: '#F4F4F4', borderWidth: 1, borderColor: 'gray', borderRadius: 8, marginRight: 5 }}
                inputContainerStyle={{ backgroundColor: '#F4F4F4' }}
                tagColor="#F4F4F4"
                tagTextColor='#161A30'
                />
                <Pressable onPress={() => setDialogVisible(false)} className="mt-5">
                    <Text className="font-robotocondensed py-2 px-3 mx-14 text-xl text-center bg-darknavy text-beige rounded-full">SAVE</Text>
                </Pressable>
            </DialogContent>
        </Dialog>
    )
}