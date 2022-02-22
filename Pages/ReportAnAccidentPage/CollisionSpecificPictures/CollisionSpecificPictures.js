import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'
import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";
import { DRIVERCREATECOLLISIONACCIDENT } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";
import { collisionDataState, accidentDataState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";

const CollisionSpecificPictures = () => {

    return (
        <View>
            <Text>TEST FROM COLLISION SPECIFIC PICTURE</Text>
        </View>
    )
}