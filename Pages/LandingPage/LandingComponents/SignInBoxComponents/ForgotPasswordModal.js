import React, { useState } from 'react'

import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Button, Card, Modal, Text, Input } from '@ui-kitten/components';

import Template from '../../../../Styles/RAA/RAATemplateStyles';

import Gradient from '../../../../Components/Gradient';

import { useMutation } from '@apollo/client';
import { FORGOT_PASSWORD } from '../../../../GraphQL/operations';


const ForgotPasswordModal = ({ visible, setVisible }) => {
///////////////////////////
///                     ///
///     Preliminary     ///
////                    ///
///////////////////////////
    // Tracks Email
    const [email, setEmail] = useState()
    // Tracks whether or not the process is complete
    const [completed, setCompleted] = useState(false)

    // Mutation
    const [forgotPassword, { loading: loading, error: error, data: data }] = useMutation(FORGOT_PASSWORD);

///////////////////////////
///                     ///
///       Handlers      ///
////                    ///
///////////////////////////

    const handleMutation = () => {
        console.log("Inside mutation const")
        return forgotPassword({
            variables: {
                email: email
            }
        })
    }

    const handleSubmitEmail = async () => {
        console.log(email)
        handleMutation()
    }


///////////////////////////
///                     ///
///      Main Render    ///
////                    ///
///////////////////////////
    return (
        <View style={styles.container}>

            <Modal
                visible={visible}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setVisible(false)}>
                <Card disabled={true}>
                <Text style={{...Template.title, marginTop: 10, marginBottom: 20, fontSize: 20}}>Please enter email your address</Text>

                <Input
                    placeholder='Place your Text'
                    onChangeText={email => setEmail(email)}
                />

                <View style={{height: 30}} />


                <TouchableOpacity onPress={() => handleSubmitEmail()}>
                    <Gradient
                        colorOne={"#534FFF"}
                        colorTwo={"#15A1F1"}
                        style={{
                            height: 50,
                            justifyContent: 'center'
                        }}
                    >
                        <Text style={{
                            color: "white",
                            fontFamily: "GilroySemiBold",
                            fontSize: 13,
                            textAlign: 'center'}}
                        >
                                SUBMIT
                        </Text>
                    </Gradient>
                </TouchableOpacity>

                <View style={{height: 30}} />

                <TouchableOpacity onPress={() => setVisible(false)}>
                    <Gradient
                        colorOne={"#534FFF"}
                        colorTwo={"#15A1F1"}
                        style={{
                            height: 50,
                            justifyContent: 'center'
                        }}
                    >
                        <Text style={{
                            color: "white",
                            fontFamily: "GilroySemiBold",
                            fontSize: 13,
                            textAlign: 'center'}}
                        >
                                DISMISS
                        </Text>
                    </Gradient>
                </TouchableOpacity>
                </Card>
            </Modal>

        </View>
    )
}

export default ForgotPasswordModal

const styles = StyleSheet.create({
    container: {
      minHeight: 192,
    },
    backdrop: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  });