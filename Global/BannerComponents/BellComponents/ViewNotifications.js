import React from "react"
import { ScrollView } from "react-native"


const ViewNotifications = ({notificationMessages}) => {

    const renderNotificationMessages = (array) => {

        let renderedList = array.map( notification => {
            <Text>Notification Data</Text>
        })
        return(
            <View>
                <Text>You have {renderedList.length} Notifications</Text>
                <ScrollView>
                    {renderedList}
                </ScrollView>
            </View>
        )
    }

    return(
        <View>
            {renderNotificationMessages()}
        </View>
    )
}

export default ViewNotifications