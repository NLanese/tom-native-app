import React, { useState } from "react";
import { View, Text, Modal, Button } from 'react-native'
import { SignUpModalStyles } from "../../../Styles/LandingPageStyles";
import { userState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";
import { Linking } from "react-native";

const NoButton = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [userData, setUserData] = useRecoilState(userState)

    return (
        <View>

                <Modal animationType='slide' transparent={true} visible={modalVisible}>
					<View style={SignUpModalStyles.centeredView}>
						<View style={SignUpModalStyles.modalView}>

							<Text style={SignUpModalStyles.modalText}> Please call your manager </Text>

                            <Button 
                                onPress={() => Linking.openURL('tel://+19732517969')}
                                title="Call Manager"
                            />

							<Button
								onPress={() => {
									setModalVisible(!modalVisible);
								}}
								title='Ok'
								color='#ffffff'
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