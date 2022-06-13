import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, ScrollView } from 'react-native'
import { CheckBox } from '@ui-kitten/components';

import { useRecoilState } from 'recoil';

import { useNavigation } from "@react-navigation/native";

import Banner from "../../../Global/Banner"

import nameObj from "../../../Hooks/handleNameCaseChange";
import handlePicture from "../../../Hooks/handlePicture"
import getTodaysDate from "../../../Hooks/getTodaysDate";


import * as Location from 'expo-location';

import { geoLocation, userState } from "../../../Recoil/atoms"

import { RAALandingStyles } from "../../../Styles/RAA/RAALanding";


const ReportAnAccidentLanding = () => {
///////////////////////////
///                     ///
///     Preliminary     ///
///                     ///
///////////////////////////
    const navigation = useNavigation()

    // With Location Enabled, accesses your geolocation
    const [gLocation, setGeoLocation] = useRecoilState(geoLocation)

    // Location. Either Attached to geoLocation or manually entered
    const [location, setLocation] = useState(false);

    // Error Message 
    const [errorMsg, setErrorMsg] = useState(false);

    // Address. Also assisted with geolocation
    const [address, setAddress] = useState(false);

    // User Info
    const [user, setUser] = useRecoilState(userState)
      // User Name-- not username
      const name = nameObj(user.firstname, user.lastname)

    // Shift / Device Info
      // Get's today's date to find today's shift
      const [currentDate, setCurrentDate] = useState(getTodaysDate(0))

      // Finds the Initial Shift
      const [currentShift, setCurrentShift] = useState(shift => shift.date === currentDate.date)

      console.log(currentShift)



    // UseEffect to append Geolocation to individual states
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

    ////////////////////////////
    // Button Oriented States //
    ////////////////////////////

        // Triggers whether ot not button loading started
        const [confirmed, setConfirmed] = useState(false)

        // True when starting, false when finished / before starting
        const [buttonLoading, setButtonLoading] = useState(false)

        // True when finished
        const [buttonLoaded, setButtonLoaded] = useState(false)

        // Tracks the height for the button to be rendered
        const [buttonHeight, setButtonHeight] = useState(0)


///////////////////////////
///                     ///
///      Renderings     ///
///                     ///
///////////////////////////

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

  // Checks to see button is loaded and allows continue
  const handleContinue = () => {
    if (confirmed){
      navigation.navigate('self-or-other')
    }
  }

  // Renders the primary display of the page
  const renderMainCard = () => {
    return(
      <View style={RAALandingStyles.container}>
      <View style={RAALandingStyles.card}>
          
        <View style={{alignItems: 'center', marginTop: 31}}>
          {handlePicture(user.profilePick, 75)}
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

          {renderConfirmation()}

        </View>
      </View>
      </View>
    )
  }

  // Renders the check region and button rendering for confirmation
  const renderConfirmation = () => {
    return(
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
    )
  }

  // Renders the title
  const renderTitle = () => {
    return(
      <View style={{marginLeft: 30}}>
        <Text style={RAALandingStyles.titleText}>Confirm Your Info</Text>
        <Text style={RAALandingStyles.subtitleText}>YOUR INFORMATION</Text>
      </View>
    )
  }

///////////////////////
///   Main Render   ///
///////////////////////
  return (
    <View>
      <Banner />
      <ScrollView contentContainerStyle={{height: 'auto'}}>
        {renderTitle()}
        {renderMainCard()}
      </ScrollView>
      <TouchableOpacity > 
            <View style={RAALandingStyles.emergencyButton}>
              <Text style={RAALandingStyles.emergencyText}>EMERGENCY CALL 911</Text>
            </View>
      </TouchableOpacity>
    </View>
  )
}

export default ReportAnAccidentLanding