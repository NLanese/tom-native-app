import React from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'

const ViewNotificationsButton = ({ handleNotifiedModal }) => {
    let history = useHistory()

    return (
        <View>
            <Button 
                onPress={() => {
                    handleNotifiedModal()
                    history.push("/view_notifications")
                }}
				title='View Notifications'
				color='black'
				accessibilityLabel='ViewNotifications'
            />
        </View>
    )
}

export default ViewNotificationsButton
