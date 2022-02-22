import React, { useState } from "react";
import { View, Text, Modal, Button } from 'react-native'
import { Linking } from "react-native";

const NoButton = () => {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <View>
            <Modal animationType='slide' transparent={true} visible={modalVisible}>
				<View>
					<View>

						<Text> Please call the police </Text>

                        <Button 
                            onPress={() => Linking.openURL('tel://+1911')}
                            title="Call 911"
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