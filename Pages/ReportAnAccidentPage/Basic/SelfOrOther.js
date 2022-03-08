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
                        }}
                        hollow={true}
                        hollowBorderSize="small"
                        hollowColor="#f9f9f9"
                    >
                        <Text style={{
                            marginLeft: 10,
                            marginTop: 20,
                            width: maxWidth - 80,

                            fontFamily: "GilroyBold",
                            fontSize: 24,
                            color: "#444"
                        }}
                        >I hurt myself or damaged my own vehicle</Text>

                        <Text style={{
                            marginTop: 20, textAlign: 'center', fontFamily: "GilroySemiBold", color: "#888", fontSize: 16, letterSpacing: 1
                        }}>
                            SELECT THIS IF
                        </Text>

                        <Text style={{
                            marginTop: 10, textAlign: 'center', fontFamily: "GilroySemiBold", color: "#555", letterSpacing: 0.5
                        }}>
                            You injured yourself
                        </Text>
                        <Text style={{
                            marginTop: 5, textAlign: 'center', fontFamily: "GilroySemiBold", color: "#555", letterSpacing: 0.5
                        }}>
                            You did not hit another car or property
                        </Text>
                        <Text style={{
                            marginTop: 5, textAlign: 'center', fontFamily: "GilroySemiBold", color: "#555", letterSpacing: 0.5
                        }}>
                            You hit a pothole or an animal
                        </Text>

                    </Gradient>
                </TouchableOpacity>
            </View>
            <View style={{marginLeft: 30, marginTop: 30}}>
                <TouchableOpacity onPress={() => handleThirdParty()}>
                    <Gradient
                        colorOne="#AF4444"
                        colorTwo="#FD0000"
                        style={{
                            height: 220,
                            width: maxWidth - 60,
                            borderRadius: 30,                    
                        }}
                        hollow={true}
                        hollowBorderSize="small"
                        hollowColor="#f9f9f9"
                    >
                        <Text style={{
                            marginLeft: 10,
                            marginTop: 20,
                            width: maxWidth - 80,

                            fontFamily: "GilroyBold",
                            fontSize: 24,
                            color: "#444"
                        }}
                        >An Incident occured with a third party</Text>

                        <Text style={{
                            marginTop: 20, textAlign: 'center', fontFamily: "GilroySemiBold", color: "#888", fontSize: 16, letterSpacing: 1
                        }}>
                            SELECT THIS IF
                        </Text>

                        <Text style={{
                            marginTop: 10, textAlign: 'center', fontFamily: "GilroySemiBold", color: "#555", letterSpacing: 0.5
                        }}>
                            You damaged someone's property
                        </Text>
                        <Text style={{
                            marginTop: 5, textAlign: 'center', fontFamily: "GilroySemiBold", color: "#555", letterSpacing: 0.5
                        }}>
                            You damaged someone's package
                        </Text>
                        <Text style={{
                            marginTop: 5, textAlign: 'center', fontFamily: "GilroySemiBold", color: "#555", letterSpacing: 0.5
                        }}>
                            You hit a car or pedestrian
                        </Text>

                        


                    </Gradient>
                </TouchableOpacity>
            </View>


        </View>
    )
}

export default SelfOrOther

