import React from "react";
import { View, Text } from 'react-native'
import { Portal, Modal } from 'react-native-paper'

const containerStyle = {backgroundColor: 'white', padding: 20};

const BellDropdown = ({ notifiedVisible, handleNotifiedModal }) => {

    return (
        <View>
            <Portal>
                <Modal visible={notifiedVisible} onDismiss={handleNotifiedModal} contentContainerStyle={containerStyle}>
                    <Text> DROPDOWN TEST </Text>
                </Modal>
            </Portal>
        </View>
    );
}

export default BellDropdown;