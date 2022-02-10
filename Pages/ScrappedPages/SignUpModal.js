// // import React,{ useState } from 'react';
// // import { Button, Portal, Provider, IconButton } from 'react-native-paper';
// // import { View, Text, Modal } from 'react-native'
// // import UpdateField from '../LandingPage/LandingComponents/SignInBoxComponents/UpdateField'
// // import { SignUpModalStyles } from '../../Styles/LandingPageStyles';




// const SignUpModal = ({setModalVisible, modalVisible, handleInput, signup, getUserData}) => {

//     return(
//         <View>
//             <Modal animationType='slide' transparent={true} visible={modalVisible} /* style={SignUpModal.modal} */>

//                 <View style={SignUpModalStyles.centeredView}>
//                     <View style={SignUpModalStyles.modalView}>

//                         <View style={SignUpModalStyles.insideModalView}>
//                             <IconButton 
//                                 style={{
//                                     position: 'relative',
//                                     right: 5,
//                                     left: 160
//                                 }}
//                                 onPress={() => {
//                                     setModalVisible(!modalVisible)}
//                                 }
//                                 size={30}
//                                 color={"white"}
//                                 icon="alpha-x-box-outline"
//                             />
//                             <Text style={SignUpModalStyles.modalTitle}> Tom App Sign Up! </Text>
//                             <Text style={SignUpModalStyles.modalSubTitle}> Please enter the proper information below! </Text>

//                             <UpdateField field="firstname" handleInput={handleInput} />
//                             <UpdateField field="lastname" handleInput={handleInput} />
//                             <UpdateField field="email" handleInput={handleInput} />
//                             <UpdateField field="phoneNumber" handleInput={handleInput} />
//                             <UpdateField field="signUpToken" handleInput={handleInput} />
//                             <UpdateField field="password" handleInput={handleInput} />
//                             <UpdateField field="confirmPassword" handleInput={handleInput} />

//                             <View style={SignUpModalStyles.submitbutton}>
//                                 <Button
//                                     title='Submit!'
//                                     accessibilityLabel='Submit!'
//                                     titleStyle={{
//                                          fontWeight: '700',
//                                          color: "white" 
//                                     }}
//                                     buttonStyle={{
//                                         backgroundColor: 'white',
//                                         borderColor: 'white',
//                                         borderWidth: 0,
//                                         borderRadius: 5,
//                                         paddingVertical: 5,
//                                         color: "white"
//                                     }}
//                                     onPress={ async () => {
//                                         let userData = getUserData
//                                         signupCommand({
//                                             variables: {
//                                                 signupInput: {
//                                                     email: userData.email,
//                                                     password: userData.password,
//                                                     firstname: userData.firstname,
//                                                     lastname: userData.lastname,
//                                                     phoneNumber: userData.phoneNumber,
//                                                     adminEmail: userData.adminEmail
//                                                 },
//                                             },
//                                         });
//                                         setModalVisible(!modalVisible);
//                                     }}
//                                 > Sign up </Button>
//                             </View>

//                         </View>

//                     </View>
//                 </View>
//             </Modal>
// 		</View>
//     )
// }

// export default SignUpModal