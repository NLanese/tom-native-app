import React, { useState } from "react";
import { View, Text, Modal, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { userState } from "../../../../../Recoil/atoms";
import { useRecoilState } from "recoil";
import { Linking } from "react-native";

const NoButton = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [user, setUser] = useRecoilState(userState)

    return (
        <View>

            <Modal animationType='slide' transparent={true} visible={modalVisible}>
                <View>
                    <View style={{ backgroundColor: "black", margin: "10%"}}>

                        <Text> Please call your manager </Text>

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

            <TouchableOpacity 
                style={Styles.touchContainer}
                onPress={() => setModalVisible(!modalVisible)}
            >
                <View style={Styles.button}>
                    <Text style={Styles.text}>No</Text>
                </View>
            </TouchableOpacity>

            {/* <Button 
                style={Styles.button}
                onPress={() => setModalVisible(!modalVisible)}
                title='No'
            /> */}
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
        backgroundColor: "#DE0000",
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