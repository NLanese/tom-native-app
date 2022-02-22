import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions } from 'react-native'

import { useRecoilState } from 'recoil';

import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton"

import nameObj from "../../../Hooks/handleNameCaseChange";

import Constants from 'expo-constants';
import * as Location from 'expo-location';

import { geoLocation, userState } from "../../../Recoil/atoms"

import { RAALandingStyles } from "../../../Styles/RAA/RAALanding";

// Add vehicle ID confirmation once added
const ReportAnAccidentLanding = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [address, setAddress] = useState(null);
    const [user, setUser] = useRecoilState(userState)

      const name = nameObj(user.firstname, user.lastname)

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

    return (
        <View>

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

                </View>

                <View>
                    <ContinueButton nextPage={'management_notified'} />
                </View>
              </View>
            </View>
        </View>
    )
}

export default ReportAnAccidentLanding