import React from "react"
import { useNavigation } from "@react-navigation/native"
import { View, Button } from 'react-native'

const ViewNotificationsButton = ({ handleNotifiedModal }) => {
    const navigation = useNavigation()

    return (
        <View>
            <Button 
                onPress={() => {
                    handleNotifiedModal()
                    navigation.navigate("view_notifications")
                }}
				title='View Notifications'
				color='black'
				accessibilityLabel='ViewNotifications'
            />
        </View>
    )
}

export default ViewNotificationsButton
