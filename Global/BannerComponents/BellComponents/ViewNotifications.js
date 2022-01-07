import React from "react"
import { GETNOTIFIEDMESSAGES } from "../../../GraphQL/operations"
import { useQuery } from "@apollo/client"
import { ScrollView, View } from "react-native"
import { ActivityIndicator } from "react-native-paper";



const ViewNotifications = ({}) => {
    let fake_array = [1, 2, 3]

    const renderNotificationMessages = (array) => {
        let loading = true

        if (loading){
            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80%'}}>
              <ActivityIndicator animating={true} size={40} color={'white'} />
          </View>
        }
        else{
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
    }
    return(
        <View>
            {renderNotificationMessages(fake_array)}
        </View>
    )
}

export default ViewNotifications