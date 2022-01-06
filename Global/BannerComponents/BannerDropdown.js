import React from "react";
import { View, Text } from 'react-native'
import { Portal, Modal } from 'react-native-paper'

const containerStyle = {backgroundColor: 'white', padding: 20, position: 'absolute', top: 50, right: 0, margin: 0, width: 200};

const BannerDropdown = ({ visible, handleModal }) => {
    return (
        <View>
            <Portal>
                <Modal visible={visible} onDismiss={handleModal} contentContainerStyle={containerStyle}>
                    <Text>Example Dropdown.  Click outside this area to dismiss.</Text>
                </Modal>
            </Portal>
        </View>
    );
}

export default BannerDropdown;