import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, ScrollView } from 'react-native'

import EditAccountInformationButton from "./ButtonBoxComponents/EditAccountInformationButton";
import ViewAccidentsButton from "./ButtonBoxComponents/ViewAccidentsButton";
import Banner from "../../../Global/Banner";
import ProfilePictureButton from "./ButtonBoxComponents/ProfilePictureButton";
import DynamicInput from "../../../Components/DynamicInput";

import nameObj from "../../../Hooks/handleNameCaseChange"

import { useRecoilState } from 'recoil'
import { userState } from '../../../Recoil/atoms'

import { AccountInformationStyles } from "../../../Styles/SettingStyles";
import Template from "../../../Styles/RAA/RAATemplateStyles";


let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height


const AccountInformation = () => {

    const [user, setUser] = useRecoilState(userState)

    const [edit, setEdit] = useState(false)

    const [currentSettings, setCurrentSettings] = useState({
        email: user.email,
        phoneNumber: user.phoneNumber,
        firstname: user.firstname,
        lastname: user.lastname
    })

    let name = nameObj(user.firstname, user.lastname)
    let ownerName = nameObj(user.owner.firstname, user.owner.lastname)

    const renderValuesOrEdit = () => {
        if (!edit){
            return (
                <View>
                    {/* Information Container */}
                    <View style={{marginLeft: 30}}>
                        <View>
                            <Text style={AccountInformationStyles.valName}>Vehicle ID</Text>
                            <Text style={AccountInformationStyles.val}>COMING SOON</Text>
                        </View>
                        <View>
                            <Text style={AccountInformationStyles.valName}>Email</Text>
                            <Text style={AccountInformationStyles.val}>{user.email}</Text>
                        </View>
                        <View>
                            <Text style={AccountInformationStyles.valName}>Phone Number</Text>
                            <Text style={AccountInformationStyles.val}>{user.phoneNumber}</Text>
                        </View>
                        <View>
                            <Text style={AccountInformationStyles.valName}>DSP Name</Text>
                            <Text style={AccountInformationStyles.val}>{user.dsp.name}</Text>
                        </View>
                        <View>
                            <Text style={AccountInformationStyles.valName}>DSP Status</Text>
                            <Text style={AccountInformationStyles.val}>{user.dsp.accountStanding}</Text>
                        </View>
                        <View>
                            <Text style={AccountInformationStyles.valName}>Owner Name</Text>
                            <Text style={AccountInformationStyles.val}>{ownerName.first} {ownerName.last}</Text>
                        </View>
                        <View>
                            <Text style={AccountInformationStyles.valName}>VTO Recieved This Month</Text>
                            <Text style={AccountInformationStyles.val}>COMING SOON</Text>
                        </View>
                    </View>
                </View>
            )
        }
        if (edit){
            return(
                <View style={{marginLeft: 30}}>
                        <View>
                            <Text style={AccountInformationStyles.valName}>Vehicle ID</Text>
                            <Text style={AccountInformationStyles.val}>COMING SOON</Text>
                        </View>
                        <View>
                            <Text style={AccountInformationStyles.valName}>Email</Text>
                            <DynamicInput 
                                activeColorOne="#534FFF" 
                                activeColorTwo="#15A1F1"
                                activeTextStyle={Template.activeTextStyle}

                                height={50}
                                width={maxWidth - 60}

                                borderLeftRightWidth={6}
                                borderTopBottomWidth={6}
                                borderRadius={20}

                                inactiveColor="#ddd" 
                                inactiveTextStyle={Template.inactiveTextStyle}

                                placeholder={user.email}
                                onChange={(content) => {
                                    setCurrentSettings({
                                        ...currentSettings, email: content
                                    })
                                }}
                            />
                        </View>
                        <View>
                            <Text style={AccountInformationStyles.valName}>New Password</Text>
                            <DynamicInput 
                                activeColorOne="#534FFF" 
                                activeColorTwo="#15A1F1"
                                activeTextStyle={Template.activeTextStyle}

                                height={50}
                                width={maxWidth - 60}

                                borderLeftRightWidth={6}
                                borderTopBottomWidth={6}
                                borderRadius={20}

                                inactiveColor="#ddd" 
                                inactiveTextStyle={Template.inactiveTextStyle}

                                placeholder={"Only Enter To Change Password"}
                                onChange={(content) => {
                                    setCurrentSettings({
                                        ...currentSettings, password: content
                                    })
                                }}
                            />
                        </View>
                        <View>
                            <Text style={AccountInformationStyles.valName}>Phone Number</Text>
                            <DynamicInput 
                                activeColorOne="#534FFF" 
                                activeColorTwo="#15A1F1"
                                activeTextStyle={Template.activeTextStyle}

                                height={50}
                                width={maxWidth - 60}

                                borderLeftRightWidth={6}
                                borderTopBottomWidth={6}
                                borderRadius={20}

                                inactiveColor="#ddd" 
                                inactiveTextStyle={Template.inactiveTextStyle}

                                placeholder={user.phoneNumber}
                                onChange={(content) => {
                                    setCurrentSettings({
                                        ...currentSettings, phoneNumber: content
                                    })
                                }}
                            />
                        </View>
                        <View>
                            <Text style={AccountInformationStyles.valName}>DSP Name</Text>
                            <Text style={AccountInformationStyles.val}>{user.dsp.name}</Text>
                        </View>
                        <View>
                            <Text style={AccountInformationStyles.valName}>DSP Status</Text>
                            <Text style={AccountInformationStyles.val}>{user.dsp.accountStanding}</Text>
                        </View>
                        <View>
                            <Text style={AccountInformationStyles.valName}>Owner Name</Text>
                            <Text style={AccountInformationStyles.val}>{ownerName.first} {ownerName.last}</Text>
                        </View>
                        <View>
                            <Text style={AccountInformationStyles.valName}>VTO Recieved This Month</Text>
                            <Text style={AccountInformationStyles.val}>COMING SOON</Text>
                        </View>
                    </View>
            )
        }
    }


    return (
        <View>
            <Banner />
            <ScrollView contentContainerStyle={{height: '130%'}}>
                {/* Name Plate */}
                <View style={{paddingLeft: 30, marginTop: 30, paddingBottom: 20, borderBottomColor: "#DDD", borderBottomWidth: 1}}>
                    <Text style={AccountInformationStyles.title}>{name.first} {name.last}</Text>
                    <Text style={AccountInformationStyles.subtitle}>YOUR PERSONAL INFORMATION</Text>
                </View>

                {/* Information Container */}
                {renderValuesOrEdit()}

                <View style={AccountInformationStyles.buttonBox}>
                    <EditAccountInformationButton edit={edit} setEdit={setEdit} currentSettings={currentSettings}/>
                    <ViewAccidentsButton />
                    <ProfilePictureButton />
                </View>
            </ScrollView>
        </View>
    )
}

export default AccountInformation