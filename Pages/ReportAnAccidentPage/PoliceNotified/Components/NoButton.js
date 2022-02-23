import React, { useState } from "react";
import { View, Text, Modal, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { Linking } from "react-native";

const NoButton = () => {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <View>
            <Modal animationType='slide' transparent={true} visible={modalVisible}>
				<View style={{ backgroundColor: "black", margin: "10%"}}>
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

            <TouchableOpacity 
                style={Styles.touchContainer}
                onPress={() => setModalVisible(!modalVisible)}
            >
                <View style={Styles.button}>
                    <Text style={Styles.text}>No</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const Styles = StyleSheet.create({
    touchContainer: {
        width: 100,
        shadowColor: '#000000',
		shadowOffset: {width: -3, height: 25},
		shadowOpacity: 0.14,
		shadowRadius: 13,
    },
    button: {
        height: 100,
        width: 100,
        backgroundColor: "#444444",
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        position: 'absolute',
        color: "white",
        fontFamily: "GilroySemiBold",
        fontSize: 25,
        letterSpacing: -0.5
    }
})

export default NoButton
