import React,{ useState } from 'react';
import { Button, Portal, Provider, IconButton } from 'react-native-paper';
import { View, Text, Modal } from 'react-native'
import UpdateField from './UpdateField'
import { SignUpModalStyles } from '../../../../Styles/LandingPageStyles';
import { SIGNUP } from '../../../../GraphQL/operations';
import { useMutation } from '@apollo/client';



const SignUpModal = ({ modalVisible, userData, handleInput, setModalVisible }) => {
    const [signup, { loading: loading, error: error, data: data }] =
		useMutation(SIGNUP);

    return(
        <View>
            <Modal animationType='slide' transparent={true} visible={modalVisible} /* style={SignUpModal.modal} */>

                <View style={SignUpModalStyles.centeredView}>
                    <View style={SignUpModalStyles.modalView}>

                        <View style={SignUpModalStyles.insideModalView}>
                            <IconButton 
                                onPress={() => setModalVisible(!modalVisible)}
                            />
                            <Text style={SignUpModalStyles.modalTitle}> Tom App Sign Up! </Text>
                            <Text style={SignUpModalStyles.modalSubTitle}> Please enter the proper information below! </Text>

                            <UpdateField field="firstname" handleInput={handleInput} />
                            <UpdateField field="lastname" handleInput={handleInput} />
                            <UpdateField field="email" handleInput={handleInput} />
                            <UpdateField field="phoneNumber" handleInput={handleInput} />
                            <UpdateField field="adminEmail" handleInput={handleInput} />
                            <UpdateField field="password" handleInput={handleInput} />
                            <UpdateField field="confirmPassword" handleInput={handleInput} />

                            <View style={SignUpModalStyles.submitbutton}>
                                <Button
                                    title='Submit!'
                                    accessibilityLabel='Submit!'
                                    // loading={buttonLoading}
                                    titleStyle={{
                                         fontWeight: '700',
                                         color: "white" 
                                    }}
                                    buttonStyle={{
                                        backgroundColor: 'white',
                                        borderColor: 'white',
                                        borderWidth: 0,
                                        borderRadius: 5,
                                        paddingVertical: 5,
                                        color: "white"
                                    }}
                                    onPress={ async () => {
                                        // handleButtonLoading()
                                        signup({
                                            variables: {
                                                signupInput: {
                                                    email: userData.email,
                                                    username: userData.username,
                                                    password: userData.password,
                                                    firstname: userData.firstname,
                                                    lastname: userData.lastname,
                                                    phoneNumber: userData.phoneNumber,
                                                    adminEmail: userData.adminEmail
                                                },
                                            },
                                        });
                                        // setModalVisible(!modalVisible);
                                    }}
                                > Sign up </Button>
                            </View>

                        </View>

                    </View>
                </View>
            </Modal>
		</View>
    )
}

export default SignUpModal