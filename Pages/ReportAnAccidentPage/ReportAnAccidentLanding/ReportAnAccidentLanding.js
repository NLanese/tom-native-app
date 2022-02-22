import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions } from 'react-native'
import Banner from "../../../Global/Banner"
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import { useRecoilState } from 'recoil';
import { geoLocation, userState } from "../../../Recoil/atoms"
import ContinueButton from "../../../Global/Buttons/ContinueButton"

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

// Add vehicle ID confirmation once added
const ReportAnAccidentLanding = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [address, setAddress] = useState(null);
    const [user, setUser] = useRecoilState(userState)
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
            <Text>Hello From REPORT LANDING</Text>
            
            <View>
              <Text> Please Verify The Information Below</Text>

              <View>
                <Text>User Information: {user.firstname} {user.lastname}</Text>
                <Text>Vehicle Information: Vehicle Id</Text>  
              </View>

              <View>
                  <Text> Is this information correct? </Text>
                  <ContinueButton nextPage={'management_notified'} pageName={"report-an-accident-landing-yes-button"} buttonText={"Yes"}/>
              </View>
            </View>
        </View>
    )
}

export default ReportAnAccidentLanding