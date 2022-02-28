import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { LandingPageStyles } from '../../../Styles/LandingPageStyles';
// import { TabBar, Tab, Text } from '@ui-kitten/components';
import TabBar from '../../../Components/TabBar';

import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';


const LandingPageContainer = ({handleLoggedIn, setTab, tab}) => {

    let initTab = 0
    if (tab == 1){
        console.log("should be sign in")
        initTab = 1
    }

    // Tracks whether signup or login is displayed
    const [selectedIndex, setSelectedIndex] = useState(initTab)

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
            return(
                <SignupScreen 
                    handleInput={handleInput} 
                    handleLoggedIn={handleLoggedIn}
                    userData={userData}
                />
            )
        }
    }

    return (
        <View style={LandingPageStyles.container}>
            <View style={LandingPageStyles.tabBarContainer}>
                <TabBar 
                    tabsArray={["LOGIN", "SIGN UP"]}
                    styleInactive={LandingPageStyles.inactiveTab}
                    styleActive={LandingPageStyles.activeTab}
                    tabTextStyleActive={LandingPageStyles.activeText}
                    tabTextStyleInactive={LandingPageStyles.inactiveText}
                    startIndex={selectedIndex}
                    onChangeIndex={async (index) => {
                        await setSelectedIndex(index)
                        await setTab(index)
                    }}
                />

            </View>
            <View>
                {determineRender()}
            </View>
        </View>
    )
}
export default LandingPageContainer