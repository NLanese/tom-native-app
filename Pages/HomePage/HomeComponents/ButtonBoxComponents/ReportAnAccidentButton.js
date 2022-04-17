import React from "react"
import { View, TouchableOpacity, Image, Text, Dimensions } from 'react-native'

import determinePage from "./helpers/determineSavedPage";

import { useRecoilState } from "recoil";
import { websiteState } from "../../../../Recoil/atoms";

import { useNavigation } from "@react-navigation/native";

import { ButtonBoxStyles } from "../../../../Styles/HomeStyles"



const ReportAnAccidentButton = () => {

    let maxWidth = Dimensions.get('window').width
    let maxHeight = Dimensions.get('window').height

    const navigation = useNavigation()

    const [website, setWebsite] = useRecoilState(websiteState)

    const handleClick = () => {
        console.log(website)
        if (website.saved != null){
            setWebsite({current: website.saved, previous: "Home", saved: website.saved})
            if (website.saved == "Report Accident"){
                navigation.navigate('raa_landing')
            }
            if (website.saved == "Police Notified"){
                navigation.navigate('police_notified')
            }
        
        
            if (website.saved == "Create An Accident"){
                navigation.navigate('create-an-accident')
            }
            if (website.saved == "Create Self Accident"){
                navigation.navigate('create-an-accident2')
            }
        
        
        
            if (website.saved == "Vehicle Collision Check"){
                navigation.navigate('check-collision-accident')
            }
            if (website.saved == "Create Collision Accident"){
                navigation.navigate('create-collision-accident')
            }
            if (website.saved == "Collision Specific"){
                navigation.navigate('collision-specific-pictures')
            }
            if (website.saved == "Collision Information"){
                navigation.navigate('collision-accident-information')
            }
            if (website.saved == "Create An Accident"){
                navigation.navigate('police_notified')
            }
            if (website.saved == "Collision Extra Information" || website.saved == "Collsion Extra Information"){
                navigation.navigate('collision-extra-info')
            }
        
        
        
            if (website.saved == "Collision Injury Check"){
                navigation.navigate('collision-injury-check')
            }
            if (website.saved == "Create Collision Injury Report"){
                navigation.navigate('create-collision-injury-report')
            }
            if (website.saved == "Collision Injury Pictures"){
                navigation.navigate('collision-injury-specific-pictures')
            }
            if (website.saved == "Collision Injury Info"){
                navigation.navigate('collision-injury-report-information')
            }
            if (website.saved == "Collision Injury Extra Information"){
                navigation.navigate('collision-extra-info')
            }
        
        
        
            if (website.saved == "Check Property Accident"){
                navigation.navigate('check-property-accident')
            }
            if (website.saved == "Create Property Report"){
                navigation.navigate('create-property-accident')
            }
            if (website.saved == "Property Damage Pictures"){
                navigation.navigate('property-specific-pictures')
            }
            if (website.saved == "Property Damage Information"){
                navigation.navigate('property-accident-information')
            }
            if (website.saved == "Property Accident Contact Info"){
                navigation.navigate('property-accident-contact-information')
            }
            if(website.saved == "Package Damage Information"){
                navigation.navigate('property-package-info')
            }
            if (website.saved == "Safety Equipment"){
                navigation.navigate('property-accident-safety-equipment')
            }
            if (website.saved == "Property Damage Extra Information"){
                navigation.navigate('property-accident-extra-info')
            }
            if (website.saved == "Post Property Damage Instructions"){
                navigation.navigate('post-property-instructions')
            }
        
        
        
            if (website.saved == "Check Injury"){
                navigation.navigate('check-injury-accident')
            }
            if (website.saved == "Create Injury Report"){
                navigation.navigate('create-injury-report')
            }
            if (website.saved == "Injury Pictures"){
                navigation.navigate('injury-specific-pictures')
            }
            if (website.saved == "Injury Information"){
                navigation.navigate('injury-report-information')
            }
            if (website.saved == "Injury Extra Information"){
                navigation.navigate('injury-report-extra-info')
            }
        
        
        
            if (website.saved == "Check Self Injury"){
                navigation.navigate('check-user-injury')
            }
            if (website.saved == "Create User Injury"){
                navigation.navigate('create-user-injury')
            }
            if (website.saved == "Your Own Injury Pictures"){
                navigation.navigate('user-injury-specific-pictures')
            }
            if (website.saved == "Self Injury Details"){
                navigation.navigate('user-injury-information')
            }
            if (website.saved == "Self Injury Extra Information"){
                navigation.navigate('user-injury-information')
            }
        
        
            if (website.saved == "Check Own Car Damage"){
                navigation.navigate('check-self-car-damage')
            }
            if (website.saved == "Own Car Damage Information"){
                navigation.navigate('self-car-damage-information')
            }
            if (website.saved == "Check Own Car Accident Damage"){
                navigation.navigate('check-self-car-accident-damage')
            }
            if (website.saved == "Own Car Damage Information"){
                navigation.navigate('self-car-accident-damage-information')
            }
        }
        else{
            setWebsite({current: "Report Accident", previous: website.current, saved: "Report Accident"})
            navigation.navigate("raa_landing")
        }
        
    }


    return (
    <View style={ButtonBoxStyles.clickable}>
        <TouchableOpacity onPress={() => handleClick()}>
            <View style={ButtonBoxStyles.buttonCard}>
                <Image 
                    style={{
                        alignContent: 'center',
                        top: '30%',
                        height: 40,
                        width: 39,
                        marginLeft: 58
                    }}
                    source={require('../../../../assets/reporting-icon.png')}/>
            </View> 
            <View style={{ marginTop: '-33%', alignItems: 'center'}}>
                <Text style={ButtonBoxStyles.label}>REPORT AN ACCIDENT</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

export default ReportAnAccidentButton