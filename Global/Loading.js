import React from "react";
import { View } from 'react-native'
import { ActivityIndicator } from "react-native-paper";
import Banner from "./Banner";

const Loading = () => {

    return(
        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80%'}}>
            <Banner />
            <ActivityIndicator animating={true} size='large' color={'#570de4'} />
        </View>
    )
}
export default Loading