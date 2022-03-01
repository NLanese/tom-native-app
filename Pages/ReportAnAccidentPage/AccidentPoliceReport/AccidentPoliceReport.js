import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'
import { Input } from "@ui-kitten/components";
import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";
import { DRIVERCREATECOLLISIONACCIDENT } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";
import { collisionDataState, collisionIdState, injuryDataState, accidentDataState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";

const AccidentPoliceReport = () => {
    const [accidentData, setAccidentData] = useRecoilState(accidentDataState)

    console.log(accidentData.policeReportInformation)

    return (
        <View>
            <Banner />
            <Text>TEST FROM ACCIDENT POLICE REPORT</Text>

            <View style={{ marginTop: "0%" }}>
                    <Text>What is the police report ID number?</Text>
                        <Input
                            size={'large'}
                            placeholder={`Police Report ID`}
                            onChangeText={policeReportId => {
                                setAccidentData({
                                    ...accidentData,
                                    policeReportInformation: {
                                        ...accidentData.policeReportInformation,
                                        policeReportID: policeReportId
                                    },
                                    generalPictures: {
                                        ...accidentData.generalPictures
                                    },
                                    actionsBeforeAccidents: {
                                        ...accidentData.actionsBeforeAccidents
                                    },
                                    unsafeConditions: {
                                        ...accidentData.unsafeConditions
                                    }
                                })
                              }}
                        />
                </View>

                <View style={{ marginTop: "0%" }}>
                    <Text>What is the police officers name?</Text>
                        <Input
                            size={'large'}
                            placeholder={`Police Officers Name`}
                            onChangeText={policeName => {
                                setAccidentData({
                                    ...accidentData,
                                    policeReportInformation: {
                                        ...accidentData.policeReportInformation,
                                        policeName: policeName
                                    },
                                    generalPictures: {
                                        ...accidentData.generalPictures
                                    },
                                    actionsBeforeAccidents: {
                                        ...accidentData.actionsBeforeAccidents
                                    },
                                    unsafeConditions: {
                                        ...accidentData.unsafeConditions
                                    }
                                })
                              }}
                        />
                </View>

                <View style={{ marginTop: "0%" }}>
                    <Text>What town was the police department in?</Text>
                        <Input
                            size={'large'}
                            placeholder={`Police Department Location`}
                            onChangeText={policeDepartment => {
                                setAccidentData({
                                    ...accidentData,
                                    policeReportInformation: {
                                        ...accidentData.policeReportInformation,
                                        policeDepartment: policeDepartment
                                    },
                                    generalPictures: {
                                        ...accidentData.generalPictures
                                    },
                                    actionsBeforeAccidents: {
                                        ...accidentData.actionsBeforeAccidents
                                    },
                                    unsafeConditions: {
                                        ...accidentData.unsafeConditions
                                    }
                                })
                              }}
                        />
                </View>

                <View>
                    {Object.keys(accidentData.policeReportInformation).length >= 3 ? (<ContinueButton nextPage={'accident-extra-information'} buttonText={'Continue'} />) : null}
                </View>
        </View>
    )
}

export default AccidentPoliceReport