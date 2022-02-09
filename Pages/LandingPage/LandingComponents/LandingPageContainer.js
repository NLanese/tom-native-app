import React, { useState } from 'react';
import { View } from 'react-native';
import { LandingPageStyles } from '../../../Styles/LandingPageStyles';
import { TabBar, Tab, Text } from '@ui-kitten/components';

import LoginScreen from './LoginScreen';
import SignupScreen from './SingupScreen';


const LandingPageContainer = ({handleLoggedIn}) => {

    // Tracks whether signup or login is displayed
    const [selectedIndex, setSelectedIndex] = useState(0)

    // Tracks user input
    const [userData, setUserData] = useState({email: "", password: ""})


    // Sends user input to the use state above
    const handleInput = (id, information) => {
        const input = { ...userData };
		input[id] = information;
		setUserData(input);
    }

    // Based on the tab seletced, will render either login or signup
    const determineRender = () => {
        if (selectedIndex == 0){
            return <LoginScreen 
                    handleInput={handleInput} 
                    handleLoggedIn={handleLoggedIn}
                    userData={userData}
                />
        }
        else if (selectedIndex == 1){
            return <SignupScreen />
        }
    }

    return (
        <View style={LandingPageStyles.container}>
            <View style={LandingPageStyles.tabBarContainer}>
                <TabBar
                    indicatorStyle={{color: '#ffffff !important', borderColor: '#ffffff !important'}}
                    tabBarStyle={LandingPageStyles.loginTab}
                    style={LandingPageStyles.tabBar}
                    selectedIndex={selectedIndex}
                    onSelect={index => setSelectedIndex(index)}
                >
                    <Tab 
                        title="LOGIN" 
                        tabBarStyle={LandingPageStyles.loginTab}
                        indicatorStyle={{color: '#ffffff !important', borderColor: '#ffffff !important'}}
                        tabBarStyle={LandingPageStyles.loginTab}/>
                    <Tab 
                        title='SIGNUP' 
                        tabBarStyle={LandingPageStyles.signUpTab}
                        indicatorStyle={{color: '#ffffff !important', borderColor: '#ffffff !important'}}
                        tabBarStyle={LandingPageStyles.loginTab}/>
                </TabBar>
            </View>
            <View>
                {determineRender()}
            </View>
        </View>
    )
}
export default LandingPageContainer