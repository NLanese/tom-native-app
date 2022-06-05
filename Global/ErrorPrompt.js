import React, { useState } from "react";
import { View, TouchableOpacity, Button, Text, Dimensions, StyleSheet } from 'react-native'

import { useNavigation } from "@react-navigation/native";


const ErrorPrompt = ({code}) => {
///////////////////////
///                 ///
///   PRELIMINARY   ///
///                 ///
///////////////////////

    const navigation = useNavigation()


//////////////////////
///                ///
///   Renderings   ///
///                ///
//////////////////////

    const renderErrorTitle = () => {
        return(
            <View>
                <Text>ERROR: CODE {code}</Text>
            </View>
        )
    }

    const renderStaticPrompt = () => {
        return(
            <View>
                <Text>
                    It seems something went wrong!
                </Text>
                <Text>
                    We apologize for the inconvienice, and hope the specific error message below will be of assistance. You will be able to return home or send feedback with the buttons at the bottom of the screen.
                </Text>
            </View>
        )
    }

    const renderErrorCauseAndSolutions = () => {
        let prompt = "Eror Cause Unknown, please submit this issue either in the Feedback section of the app of email TOM support and specify what happened prior to this error, so we can better assist you in the future!"

        // Folder for assigning the proper prompt value
        if (true){
            // Camera Error
            if (code[0] === '9'){
                prompt = "This issue was caused due to a Camera Error. These issues are rare, and unfortunate and we at TOM are working diligently to prevent this from happening in the future. You may return home, but to resume reporting your accident you will have to reset your app by fully closing it and reopening it. We sincerely apologize for the inconvienice"
            }
        }

        // Returnn Value
        return(
            <View>
                <Text>
                    {prompt}
                </Text>
            </View>
        )
        
    }

    const renderReturnHomeButton = () => {
        return(
            <Button onPress={() => navigation("home")}>
                Return Home
            </Button>
        )
    }

    


//////////////////////
///                ///
///  Main Return   ///
///                ///
//////////////////////

return(
    <View>
        {renderErrorTitle()}
        {renderStaticPrompt()}
        {renderErrorCauseAndSolutions()}
    </View>
    )

}

export default ErrorPrompt