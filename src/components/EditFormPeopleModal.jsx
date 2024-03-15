import { Modal, View, Text, Pressable } from "react-native";
import { useAtom } from "jotai";
import { sharersAtom } from "../utils/atom";

export default function EditFormPeopleModal({
  editFormPeopleModalVisible,
  setEditFormPeopleModalVisible,
}) {
  const [sharers, setSharers] = useAtom(sharersAtom);

  const handleCloseModal = () => {
    setEditFormPeopleModalVisible(false);
  };

  return (
    <Modal
      visible={editFormPeopleModalVisible}
      onRequestClose={handleCloseModal}
    >
      <Pressable onPressOut={handleCloseModal}>
        <View>
          <Text>x</Text>
        </View>
      </Pressable>
      <View>
        <Text>Separate each name with a comma</Text>
        {/* You can try the tag things :) */}
      </View>
    </Modal>
  );
}
