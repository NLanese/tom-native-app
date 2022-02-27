import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, ScrollView } from 'react-native'
import { CheckBox } from '@ui-kitten/components';

import { useRecoilState } from 'recoil';

import { useNavigation } from "@react-navigation/native";

import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton"

import nameObj from "../../../Hooks/handleNameCaseChange";

import Constants from 'expo-constants';
import * as Location from 'expo-location';

import { geoLocation, userState } from "../../../Recoil/atoms"

import { RAALandingStyles } from "../../../Styles/RAA/RAALanding";
import { render } from "react-dom";



const ReportAnAccidentLanding = () => {
  const navigation = useNavigation()

  let maxWidth = Dimensions.get('window').width
  let maxHeight = Dimensions.get('window').height


  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);
  const [user, setUser] = useRecoilState(userState)

    const name = nameObj(user.firstname, user.lastname)




//----------------------------------------------------//
//                                                    //
//                       Location                     //
//                                                    //
//----------------------------------------------------//



const [gLocation, setGeoLocation] = useRecoilState(geoLocation)

useEffect(() => {
  (async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    const { coords } = await Location.getCurrentPositionAsync()

    setLocation(coords)

    if (coords) {
      const { longitude, latitude } = coords

      const regionName = await Location.reverseGeocodeAsync({
          longitude,
          latitude,
        });
    
        setAddress(regionName[0]);
        setGeoLocation(regionName[0])
    }
  })();
}, []);


//----------------------------------------------------//
//                                                    //
//           Button Handlers and State Values         //
//                                                    //
//----------------------------------------------------//

  // Button Oriented States
  const [confirmed, setConfirmed] = useState(false)
  const [buttonLoading, setButtonLoading] = useState(false)
  const [buttonLoaded, setButtonLoaded] = useState(false)
  const [buttonHeight, setButtonHeight] = useState(0)


// Renders the Button with the Overlay with Dynamic Height
const renderButton = () => {
  if (confirmed){
    if (!buttonLoading && !buttonLoaded){
      setButtonLoading(true)
    }
    return(
      <View>
        <View style={{position: 'absolute', height: (50 - buttonHeight), zIndex: 20, overflow: 'hidden',}}>
          <Image source={require("../../../assets/check-button-inactive.png")} style={{height: 50, width: 50}}/>
        </View>
        <Image source={require("../../../assets/check-button.png")} style={{height: 50, width: 50}}/>
      </View>
    )
  }
  else{
    if (buttonLoaded){
      setButtonLoaded(false)
      setButtonHeight(0)
    }
    return(<Image source={require("../../../assets/check-button-inactive.png")} style={{height: 50, width: 50}}/>)
  }
}


// Starts and stops rendering process
if (buttonLoading){
  setTimeout(() => {
      if (buttonHeight < 50){
          setButtonHeight(buttonHeight + 5)
      }
      else{
  setButtonLoaded(true)
          setButtonLoading(false)
      }
  }, 0.5)
}


//Checks to see button is loaded and allows continue
const handleContinue = () => {
  if (confirmed){
    navigation.navigate('management_notified')
  }
}






//----------------------------------------------------//
//                                                    //
//                    Main Render                     //
//                                                    //
//----------------------------------------------------//


return (
    <ScrollView>

        <Banner />

        <View style={RAALandingStyles.container}>

          <Text style={RAALandingStyles.titleText}>Confirm Your Info</Text>
          <Text style={RAALandingStyles.subtitleText}>YOUR INFORMATION</Text>

          <View style={RAALandingStyles.card}>
          
            <View style={{alignItems: 'center', marginTop: 31}}>
              <View style={{height: 86, width: 86, borderRadius: 100, backgroundColor: 'blue'}}/>
            </View>

            <View style={RAALandingStyles.namePlate}>
              <Text style={RAALandingStyles.nameText}>{name.first} {name.last}</Text>
            </View>

            <View style={RAALandingStyles.cardBottom}>

              <View style={RAALandingStyles.idContainers}>

                <View style={RAALandingStyles.idBox}>
                  <Text style={RAALandingStyles.idVal}>1234567</Text>
                  <Text style={RAALandingStyles.idTitle}>Driver ID</Text>
                </View>

                <View style={RAALandingStyles.divider}/>

                <View style={RAALandingStyles.idBox}>
                  <Text style={RAALandingStyles.idVal}>1234567</Text>
                  <Text style={RAALandingStyles.idTitle}>Vehicle ID</Text>
                </View>

              </View>

              <View style={RAALandingStyles.confirmationPlate}>
                <View style={RAALandingStyles.checkAndTitle}>
                  <CheckBox
                    checked={confirmed}
                    onChange={() => setConfirmed(!confirmed)}
                  />
                  <Text style={RAALandingStyles.confirmText}>CONFIRM THIS IS ME</Text>
                </View>
                <View style={RAALandingStyles.button}>
                  <TouchableOpacity onPress={() => handleContinue()}>
                    {renderButton()}
                  </TouchableOpacity>
                </View>
              </View>

            </View>
          </View>
          
          
        </View>

        <TouchableOpacity > 
            <View style={RAALandingStyles.emergencyButton}>
              <Text style={RAALandingStyles.emergencyText}>EMERGENCY CALL 911</Text>
            </View>
          </TouchableOpacity>

    </ScrollView>
  )
}

export default ReportAnAccidentLanding