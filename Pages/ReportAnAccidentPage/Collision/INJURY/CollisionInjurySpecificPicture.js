import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'
import Banner from "../../../../Global/Banner"
import ContinueButton from "../../../../Global/Buttons/ContinueButton";
import { DRIVERCREATECOLLISIONACCIDENT } from "../../../../GraphQL/operations";
import { useMutation } from "@apollo/client";
import { collisionDataState, collisionIdState, injuryDataState } from "../../../../Recoil/atoms";
import { useRecoilState } from "recoil";

const CollisionInjurySpecificPictures = ({collision}) => {
    const [collisionData] = useRecoilState(collisionDataState)
    const [injuryData, setInjuryData] = useRecoilState(injuryDataState)

    console.log(collision)


    let site = "Collision Injury Info"
    if (!collision){
        site = "Injury Info"
    }
    const whichContinue = () => {
        if (collision){
            return 'collision-injury-report-information'
        }
        else{
            return 'injury-report-information'
        }
    }

    useEffect(() => {
        setInjuryData({
            ...injuryData,
            specific_pictures: {
                'Pic One': "Test url"
            },
        })
    }, [])

    return (
        <View>
            <Banner />
            <Text>TEST FROM COLLISION INJURY SPECIFIC PICTURE</Text>

            <View>
                <ContinueButton nextPage={whichContinue()} nextSite={site} buttonText={'Done'} pageName={'collision-injury-specific-pictures-continue-button'}/>
            </View>
        </View>
    )
}

export default CollisionInjurySpecificPictures