import React, { useState, useEffect } from "react";
import { SortingStyles } from "../../../../Styles/ScoreCardStyles";
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { Portal, Button, Modal} from "react-native-paper";
import PropSort from "./PropSort";


const SortbyButton = ({dropVisibility, handleDropDownClick, sortBy, setSortBy}) => {



    return(
        <View>
            <Text style={SortingStyles.sortText}>Sort By</Text>
            <TouchableWithoutFeedback onPress={() => handleDropDownClick()}>
                <View style={SortingStyles.sortByButton}>
                    <Text style={{fontSize: 16}}>{sortBy}</Text>
                    <Button style={SortingStyles.dropArrowBox} icon='arrow-down-bold-box-outline' color='black' size={50}/>
                </View>
            </TouchableWithoutFeedback>
            <View>
                <Portal>
                <Modal visible={dropVisibility} onDismiss={handleDropDownClick} contentContainerStyle={SortingStyles.modal}>
                    <PropSort propName={'Delivery Completion Rate'} setSortBy={setSortBy} />
                    <PropSort propName={'Delivered And Recieved'} setSortBy={setSortBy} />
                    <PropSort propName={'Photo Rate'} setSortBy={setSortBy} />
                    <PropSort propName={'Call Compliance'} setSortBy={setSortBy} />
                    <PropSort propName={'Scan Compliance'} setSortBy={setSortBy} />
                    <PropSort propName={'FICO'} setSortBy={setSortBy} />
                    <PropSort propName={'Seatbelt'} setSortBy={setSortBy} />
                    <PropSort propName={'Speeding'} setSortBy={setSortBy} />
                    <PropSort propName={'Defects'} setSortBy={setSortBy} />
                    <PropSort propName={'Customer Delivery Feedback'} setSortBy={setSortBy} />
                </Modal>
                </Portal>
            </View>
        </View>
    )
}

export default SortbyButton

                   