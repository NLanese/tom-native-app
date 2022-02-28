import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, ImageBackground, Image } from 'react-native';
import { LandingStyles } from '../../Styles/LandingPageStyles';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import LandingPageContainer from './LandingComponents/LandingPageContainer';
import Title from './LandingComponents/Title';

import backgroundImage from '../../assets/loginBackground.png'
import gradient from '../../assets/black-to-clear-screen-gradient.png'
import Gradient from '../../Components/Gradient';
import { render } from 'react-dom';


const LandingPage = ({ handleLoggedIn }) => {
    // console.log(AsyncStorage.getItem('@email'))
    // console.log(AsyncStorage.getItem('@password'))

    const [tab, setTab] = useState(0)

    const renderBackground = () => {
        if (tab === 0) {
            return(
                null
            )
        }
        else{
            console.log("hit")
            return (
                <Gradient
                    colorOne="rgba(83, 79, 255, 0.5)"
                    colorTwo="rgba(21, 161, 241, 0.5)"
                    style={{
                        position: "aboslute",
                        height: '60%',
                        width: '100%'
                    }}
                />
            )
        }
    }

    if (tab === 0){
        return (
            <View style={LandingStyles.container}>
             <ImageBackground style={LandingStyles.backdrop} source={backgroundImage} resizeMode="cover">
             <ImageBackground style={LandingStyles.gradient} source={gradient} resizeMode='cover'>
                 <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                     <View style={{backgroundColor: 'rgba(52, 52, 52, 0.4) !important',}}>
                         <View style={LandingStyles.titleIcon}>
                             {/* <Title /> */}
                         </View>
                         <View style={LandingStyles.contents}>
                             <LandingPageContainer handleLoggedIn={handleLoggedIn} setTab={setTab} tab={tab}/>
                         </View>
                     </View>
                 </TouchableWithoutFeedback>
             </ImageBackground>
             </ImageBackground>
         </View>
        );
    }
    else 
    return(
        <View style={LandingStyles.container}>
            <Gradient 
                colorOne="#534FFF"
                colorTwo="#15A1F1"
                style={{display: 'flex'}}
            >
                 <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                     <View style={{backgroundColor: 'rgba(52, 52, 52, 0.4) !important',}}>
                         <View style={LandingStyles.titleIcon}>
                             {/* <Title /> */}
                         </View>
                         <View style={LandingStyles.contents}>
                             <LandingPageContainer handleLoggedIn={handleLoggedIn} setTab={setTab} tab={tab}/>
                         </View>
                     </View>
                 </TouchableWithoutFeedback>
             </Gradient>
         </View>
    )
};

export default LandingPage;