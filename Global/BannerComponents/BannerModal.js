import React from "react";
import { View, Text } from 'react-native'
import { Portal, Modal } from 'react-native-paper'

const containerStyle = {backgroundColor: 'white', padding: 20};

const BannerModal = ({ visible, handleModal }) => {
    return (
        <View>
            <Portal>
                <Modal visible={visible} onDismiss={handleModal} contentContainerStyle={containerStyle}>
                    <Text>Example Modal.  Click outside this area to dismiss.</Text>
                </Modal>
            </Portal>
        </View>
    );
}

export default BannerModal;