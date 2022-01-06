import React from "react";
import { userState } from '../../Recoil/atoms'
import { useRecoilState } from "recoil";
import { View, Text } from 'react-native'
import { DropdownStyles } from '../../Styles/GlobalStyles'
import { Portal, Modal } from 'react-native-paper'
import AccountInformationButton from "./BannerDropdownComponents/AccountInformationButton";

const BannerDropdown = ({ visible, handleModal }) => {
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
                    </View>

                </Modal>
            </Portal>
        </View>
    );
}

export default BannerDropdown;