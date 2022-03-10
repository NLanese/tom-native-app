import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { Modal } from "@ui-kitten/components";
import { userState } from "../../../../../Recoil/atoms";
import { useRecoilState } from "recoil";
import { Linking } from "react-native";

import Gradient from "../../../../../Components/Gradient";

import Template from "../../../../../Styles/RAA/RAATemplateStyles";
const NoButton = () => {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <View>
            <Modal 
                animationType='slide' 
                transparent={true} 
                visible={modalVisible}
                backdropStyle={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}
                style={{
                    height: 200,
                    width: 300,
                    borderRadius: 10,
                }}
            >
                <View style={{ 
                    backgroundColor: "white", 
                    height: 175,
                    width: 300,
                    borderRadius: 10,
                }}>
                    <Text style={{...Template.questionText, textAlign: 'center', marginLeft: -8, marginBottom: 10, marginLeft: 20, width: 260}}>Call Emergency Services</Text>
                <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 30, width: 240 }}>

                    {/* <TouchableOpacity onPress={() => Linking.openURL('tel://+19732517969')}> */}
                    <Gradient
                        colorOne={"#534FFF"}
                        colorTwo={"#15A1F1"}
                        style={{
                            height: 50,
                            width: 80,
                            borderRadius: 20,
                            justifyContent: 'center'
                        }}
                    >
                        <Text style={{fontSize: 12, textAlign: 'center', color: '#fff'}}>OK</Text>
                    </Gradient>
                    {/* </TouchableOpacity> */}

                    <View style={{marginLeft: 70}}>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Gradient
                        colorOne={"#DE0000"}
                        colorTwo={"#DE0000"}
                        style={{
                            height: 50,
                            width: 80,
                            borderRadius: 20,
                            justifyContent: 'center'
                        }}
                    >
                        <Text style={{fontSize: 12, textAlign: 'center', color: '#fff'}}>Dismiss</Text>
                    </Gradient>
                    </TouchableOpacity>
                    </View>

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
