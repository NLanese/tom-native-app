import React, { useState } from 'react';
import { View } from 'react-native';
import { LandingPageStyles } from '../../../Styles/LandingPageStyles';
import { TabBar, Tab, Layout, Text } from '@ui-kitten/components';

import LoginScreen from './LoginScreen';

const LandingPageContainer = ({handleLoggedIn}) => {

    // Tracks whether signup or login is displayed
    const [selectedIndex, setSelectedIndex] = useState(0)

    // Tracks user input
    const [userData, setUserData] = useState({})


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
            console.log("herro!")
        }
    }

    return (
        <View style={LandingPageStyles.container}>
            <View style={LandingPageStyles.tabBarContainer}>
                <TabBar
                    style={LandingPageStyles.tabBar}
                    selectedIndex={selectedIndex}
                    onSelect={index => setSelectedIndex(index)}
                >
                    <Tab title="Login" />
                    <Tab title='Sign Up' />
                </TabBar>
            </View>
            <View>
                {determineRender()}
            </View>
        </View>
    )
}
export default LandingPageContainer