import React, { useState } from "react";
import { View, Text, Modal, Button } from 'react-native'
import { signUpModal } from "../../../Styles/LandingPageStyles";
import { Linking } from "react-native";

const NoButton = () => {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <View>

                <Modal animationType='slide' transparent={true} visible={modalVisible}>
					<View style={signUpModal.centeredView}>
						<View style={signUpModal.modalView}>

							<Text style={signUpModal.modalText}> Please call the police </Text>

                            <Button 
                                onPress={() => Linking.openURL('tel://+1911')}
                                title="Call 911"
                            />

							<Button
								onPress={() => {
									setModalVisible(!modalVisible);
								}}
								title='Ok'
								color='#F6AE2D'
								accessibilityLabel='Ok'
							/>
						</View>
					</View>
				</Modal>

            <Button 
                onPress={() => setModalVisible(!modalVisible)}
                title='No'
            />
        </View>
    )
}

export default NoButton