import React, { useState } from "react"
import { View, TouchableOpacity, Text, Dimensions } from "react-native"
import { useNavigation } from "@react-navigation/native";

import Gradient from "../../../Components/Gradient"
import Banner from "../../../Global/Banner";

import { useRecoilState } from "recoil";
import { websiteState } from "../../../Recoil/atoms";


import Template from "../../../Styles/RAA/RAATemplateStyles"



let maxWidth = Dimensions.get('window').width


const SelfOrOther = () => {
    const navigation = useNavigation()
    const [website, setWebsite] = useRecoilState(websiteState)


    const handleSelfDamage = () => {
        setWebsite({current: "Create Self Accident", previous: website.current, saved: "Create Self Accident"})
        navigation.navigate('create-an-accident2')
    }

    const handleThirdParty = () => {
        setWebsite({current: "Create Accident", previous: website.current, saved: "Create Accident"})
        navigation.navigate('management_notified')
    }
    // 
    return(
        <View>
            <Banner />
            <Text style={Template.title}>
                Choose a type of Incident
            </Text>
            <View style={{marginLeft: 30, marginTop: 50}}>
                <TouchableOpacity onPress={() => handleSelfDamage()}>
                    <Gradient
                        colorOne="#534FFF"
                        colorTwo="#15A1F1"
                        style={{
                            height: 220,
                            width: maxWidth - 60,
                            borderRadius: 30,
                            paddingTop: 8
                                                
                        }}
                        // hollow={true}
                        // hollowBorderSize="small"
                        // hollowColor="#f9f9f9"
                    >
                    <View style={{paddingLeft: 10, width: maxWidth - 80}}>
                        <Text style={{
                            marginLeft: 10,
                            marginTop: 20,
                            // width: maxWidth - 80,

                            textAlign: 'center',
                            fontFamily: "GilroyBold",
                            fontSize: 24,
                            color: "white"
                        }}
                        >I hurt myself or damaged my vehicle</Text>

                        <Text style={{...Template.subTitle, fontSize: 10,  marginLeft: 0, marginBottom: 10, marginTop: 15, color: 'white', textAlign: 'center', }}>
                            SELECT THIS IF
                        </Text>

                        <Text style={{...Template.body, textAlign: 'center', color: 'white'}}>
                            You injured yourself
                        </Text>
                        <Text style={{...Template.body, textAlign: 'center', color: 'white'}}>
                            You did not hit another car or property
                        </Text>
                        <Text style={{...Template.body, textAlign: 'center', color: 'white'}}>
                            You hit a pothole or an animal
                        </Text>
                    </View>
                    </Gradient>
                </TouchableOpacity>
            </View>
            <View style={{marginLeft: 30, marginTop: 30}}>
                <TouchableOpacity onPress={() => handleThirdParty()}>
                    <Gradient
                        colorOne="#FD0000"
                        colorTwo="#FD0000"
                        style={{
                            height: 220,
                            width: maxWidth - 60,
                            borderRadius: 30,   
                            paddingTop: 8,           
                        }}
                        // hollow={true}
                        // hollowBorderSize="small"
                        // hollowColor="#f9f9f9"
                    >
                    <View style={{paddingLeft: 10, width: maxWidth - 80}}>
                        <Text style={{
                                marginLeft: 10,
                                marginTop: 28,
                                // width: maxWidth - 80,

                                textAlign: 'center',
                                fontFamily: "GilroyBold",
                                fontSize: 24,
                                color: "white"
                            }}
                            >An Incident occured with a third party</Text>

                            <Text style={{...Template.subTitle, fontSize: 10,  marginLeft: 0, marginBottom: 10, marginTop: 15, color: 'white', textAlign: 'center', }}>
                                SELECT THIS IF
                            </Text>

                            <Text style={{...Template.body, textAlign: 'center', color: 'white'}}>
                                You damaged someone's property
                            </Text>
                            <Text style={{...Template.body, textAlign: 'center', color: 'white'}}>
                                You damaged someone's package
                            </Text>
                            <Text style={{...Template.body, textAlign: 'center', color: 'white'}}>
                                You hit a car or pedestrian
                            </Text>
                        </View>
                       

                        


                    </Gradient>
                </TouchableOpacity>
            </View>


        </View>
    )
}

export default SelfOrOther

