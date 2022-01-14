import React, { useEffect } from "react";
import { View, Text } from 'react-native'
import { Portal, Modal } from 'react-native-paper'
import { DropdownStyles } from "../../../Styles/GlobalStyles";
import ViewNotificationsButtom from "../ButtonBox/ViewNotificationsButton";

/* JUST SHOWS THE LATEST 3 */
/* JUST NEED TO UPDATE WHEN topThree.length > 0 */
/* onPress for mutation to change message.read to true */
const BellDropdown = ({ notifiedVisible, handleNotifiedModal, notifiedMessages }) => {

    const renderNotifications = (messages) => {
        if (!messages[0]) {
            return(<Text>No new notifications!</Text>)
        } else {
            let topThree = []

            if (messages) {
                messages.forEach((message) => {
                    if (topThree.length <= 2 && message.read === false) {
                        topThree.push(message)
                    }
                })
            }

            return (
                <View>
                    {topThree.map((message) => {
                        if (message.type === 'message') {
                            let preview = message.content

                            return (
                                <View key={message.id} style={DropdownStyles.notificationBox}>
                                    <Text>Message from: {message.from}</Text>
                                    <View style={DropdownStyles.smallDivider} />
                                    <Text>{preview}</Text>
                                </View>
                            )
                        }

                        if (message.type === 'filed') {
                            return (
                                <View></View>
                            )
                        }
                    })}
                </View>
            )
        }
    }

    return (
        <View style={{width: '110%', alignItems: 'center'}}>
            <Portal>
                <Modal visible={notifiedVisible} onDismiss={handleNotifiedModal} contentContainerStyle={DropdownStyles.container}>
                    <View >
                        <Text style={{textAlign: 'center'}}>Notifications</Text>
                        <View style={DropdownStyles.divider}/>
                        {notifiedMessages ? renderNotifications(notifiedMessages) : null }
                    </View>
                    <View>
                        <ViewNotificationsButtom  handleNotifiedModal={handleNotifiedModal}/>
                    </View>
                </Modal>
            </Portal>
        </View>
    );
}

export default BellDropdown;