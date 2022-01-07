import React from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'

const ViewNotificationsButton = () => {
    let history = useHistory()

    return (
        <View>
            <Button 
                onPress={() => {history.push("/view_notifications")}}
				title='View Notifications'
				color='#ffffff'
				accessibilityLabel='ViewNotifications'
            />
        </View>
    )
}

export default ViewNotificationsButton
