// // import React, { useState } from 'react';
// // import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
// // import { SignInBoxStyles } from '../../Styles/LandingPageStyles'
// // import Email from '../LandingPage/LandingComponents/SignInBoxComponents/Email'
// // import Password from '../LandingPage/LandingComponents/SignInBoxComponents/Password'
// // import LoginButton from './SignInBoxComponents/LoginButton'
// // import SignUpButton from './SignInBoxComponents/SignUpButton'



// const SignInBox = ({ handleLoggedIn }) => {
//     const [userData, setUserData] = useState({})

//     const handleInput = (id, information) => {
//         const input = { ...userData };
// 		input[id] = information;
// 		setUserData(input);
//     }

//     return (
//         <View style={SignInBoxStyles.container}>
//         <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{borderColor: 'red', borderWidth: 2}}>
//             <View>
//                 <View style={SignInBoxStyles.loginContents}><Email handleInput={handleInput} /></View>
//                 <View style={SignInBoxStyles.loginContents}><Password handleInput={handleInput} /></View>
//                 <View style={SignInBoxStyles.loginContents}><LoginButton userData={userData} handleLoggedIn={handleLoggedIn}/></View>
//                 <View style={SignInBoxStyles.signUpContents}><SignUpButton /></View>
//             </View>
//         </TouchableWithoutFeedback>  
//         </View>
//     );
// };

// export default SignInBox;