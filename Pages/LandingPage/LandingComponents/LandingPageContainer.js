import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LandingPageStyles } from '../../../Styles/LandingPageStyles';
// import { TabBar, Tab, Text } from '@ui-kitten/components';
import TabBar from '../../../Components/TabBar';

import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';


const LandingPageContainer = ({handleLoggedIn, setTab, tab, rememberMe, setRememberMe}) => {

    let initTab = 0
    if (tab == 1){
        initTab = 1
    }

    // Tracks whether signup or login is displayed
    const [selectedIndex, setSelectedIndex] = useState(initTab)

    // Tracks user input
    const [userData, setUserData] = useState({
        email: "", 
        password: "",
        firstname: "",
        lastname: "",
        confirmPassword: "",
        phoneNumber: "",
        signUpToken: ""
    })

    const getData = async () => {
        try {
            const email = await AsyncStorage.getItem('@email')
            const password = await AsyncStorage.getItem('@password')
            const data = {
                email: userData.email,
                password: userData.password
            }
            return data
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(async () => {
        // Look at local storage for username and password
        const data = await getData()
        // console.log(`email, useEffect: ${data.email}`)
        // console.log(`password, useEffect: ${data.password}`)
        // Fill in the fields with the data in local storage if it's there
        if (data) {
            setUserData({
                ...userData,
                email: data.email,
                password: data.password
            })
            // console.log(JSON.stringify(userData))
        }
    }, [])


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
                    rememberMe={rememberMe}
                    setRememberMe={setRememberMe}
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