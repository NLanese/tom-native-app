import React from "react";
import { View, Text } from 'react-native'
import { Portal, Modal } from 'react-native-paper'
import { DropdownStyles } from "../../../Styles/GlobalStyles";
import ViewNotificationsButtom from "../ButtonBox/ViewNotificationsButton";


const BellDropdown = ({ notifiedVisible, handleNotifiedModal, notifiedMessages }) => {

    const renderNotifications = (data) => {
        if (data == "None" || data === 'undefined' || data == null){
            return(<Text>No new notifications!</Text>)
        }
        else{
            if (notifiedMessages.length > 3){
                const topThree = () => {
                    return notifiedMessages.splice(0, 3).map( (notification) => {
                        return <Notification notification={notification} />
                    })
                }
                return (
                    <View>
                        <View>
                            {topThree()}
                        </View>
                        <View>
                            <ViewNotificationsButtom />
                        </View>
                    </View>
                )
            }
            else {
                return notifiedMessages.splice(0, 3).map( (notification) => {
                    <Notification notification={notification} />
                })
            }
        } 
    } 

    return (
        <View>
            <Portal>
            <Modal visible={notifiedVisible} onDismiss={handleNotifiedModal} contentContainerStyle={DropdownStyles.container}>
                    <View>
                        {renderNotifications(notifiedMessages)}
                    </View>
                </Modal>
            </Portal>
        </View>
    );
}

export default BellDropdown;