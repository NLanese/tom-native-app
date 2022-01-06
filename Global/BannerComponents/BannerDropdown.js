import React from "react";
import { userState } from '../../Recoil/atoms'
import { useRecoilState } from "recoil";
import { View, Text } from 'react-native'
import { DropdownStyles } from '../../Styles/GlobalStyles'
import { Portal, Modal } from 'react-native-paper'
import AccountInformationButton from "./BannerDropdownComponents/AccountInformationButton";
import MessageWithAdminButton from "./BannerDropdownComponents/MessageWithAdminButton";
import EmployeeChatroomButton from "./BannerDropdownComponents/EmployeeChatroomButton";
import SignOutButton from "./BannerDropdownComponents/SignOutButton";

const BannerDropdown = ({ visible, handleModal, handleLoggedIn }) => {
    const [userData] = useRecoilState(userState)

    return (
        <View>
            <Portal>
                <Modal visible={visible} onDismiss={handleModal} contentContainerStyle={DropdownStyles.container}>
                    
                    <View>
                        <Text style={DropdownStyles.titleText}>Signed in as:</Text>
                        <Text style={DropdownStyles.titleName}>{userData.firstname} {userData.lastname}</Text>
                    </View>
                    
                    <View style={DropdownStyles.divider}/>

                    <View>
                        <AccountInformationButton handleModal={handleModal}/>
                        <MessageWithAdminButton handleModal={handleModal} />
                        <EmployeeChatroomButton handleModal={handleModal} />
                    </View>

                    <View style={DropdownStyles.divider}/>

                    <View>
                        <SignOutButton handleModal={handleModal} handleLoggedIn={handleLoggedIn}/>
                    </View>

                </Modal>
            </Portal>
        </View>
    );
}

export default BannerDropdown;