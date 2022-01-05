import React,{ useState } from 'react';
import { Button, Portal, Provider, IconButton } from 'react-native-paper';
import { View, Text, Modal } from 'react-native'
import UpdateField from './UpdateField'
import { SignUpModalStyles } from '../../../../Styles/LandingPageStyles';




const SignUpModal = (props) => {

    return(
        <View>
            <Modal animationType='slide' transparent={true} visible={modalVisible} /* style={SignUpModal.modal} */>

                <View style={SignUpModalStyles.centeredView}>
                    <View style={SignUpModalStyles.modalView}>

                        <View style={SignUpModalStyles.insideModalView}>
                            <IconButton 
                                style={{
                                    position: 'relative',
                                    right: 5,
                                    left: 160
                                }}
                                onPress={() => {
                                    props.setModalVisible(!props.modalVisible)}
                                }
                                size={30}
                                color={"white"}
                                icon="alpha-x-box-outline"
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
                                        let userData = props.getUserData
                                        console.log(userData)
                                        props.signupCommand({
                                            variables: {
                                                signupInput: {
                                                    email: userData.email,
                                                    // username: "BanjawanjaweenaWannies",
                                                    password: userData.password,
                                                    firstname: userData.firstname,
                                                    lastname: userData.lastname,
                                                    phoneNumber: userData.phoneNumber,
                                                    adminEmail: userData.adminEmail
                                                    // email: "user4",
                                                    // username: "name3000",
                                                    // password: "123Wer!",
                                                    // firstname: "LeBurrn",
                                                    // lastname: "Jummz",
                                                    // phoneNumber: "123-456-7899",
                                                    // adminEmail: "admin1"
                                                },
                                            },
                                        });
                                        setModalVisible(!modalVisible);
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