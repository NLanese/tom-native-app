import React, { useState, useEffect } from "react";
import { SortingStyles } from "../../../Styles/ScoreCardStyles";
import sortByIcon from '../../../assets/sortByIcon.png'
import { Image } from "react-native";
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { Portal, Button, Modal} from "react-native-paper";
import PropSort from "./PropSort";


const SortbyButton = ({dropVisibility, handleDropDownClick, sortBy, setSortBy}) => {

    const [tracker, setTracker] = useState(0) 

    const determineSelected = (num) => {
        if (num == tracker){
            return true
        }
        else{
            return false
        }
    }
    return(
        <View>
        <View style={SortingStyles.sortTitleBox}><Text style={SortingStyles.sortText}>Sort By</Text></View>
            <TouchableWithoutFeedback onPress={() => handleDropDownClick()} >
                <View style={SortingStyles.touchable}>
                    <Image source={sortByIcon} style={SortingStyles.sortIcon}/>
                </View>
            </TouchableWithoutFeedback>
            <View>
                <Portal>
                <Modal visible={dropVisibility} onDismiss={handleDropDownClick} contentContainerStyle={SortingStyles.modal}>
                    <PropSort propName={'Delivery Completion Rate'} index={1} setSortBy={setSortBy} setTracker={setTracker} selected={determineSelected(1)}/>
                    <PropSort propName={'Delivered And Recieved'} index={2} setSortBy={setSortBy} setTracker={setTracker} selected={determineSelected(2)}/>
                    <PropSort propName={'Photo Rate'} index={3} setSortBy={setSortBy} setTracker={setTracker} selected={determineSelected(3)}/>
                    <PropSort propName={'Call Compliance'} index={4} setSortBy={setSortBy} setTracker={setTracker} selected={determineSelected(4)}/>
                    <PropSort propName={'Scan Compliance'} index={5} setSortBy={setSortBy} setTracker={setTracker} selected={determineSelected(5)}/>
                    <PropSort propName={'FICO'} index={6} setSortBy={setSortBy} setTracker={setTracker} selected={determineSelected(6)}/>
                    <PropSort propName={'Seatbelt'} index={7} setSortBy={setSortBy} setTracker={setTracker} selected={determineSelected(7)}/>
                    <PropSort propName={'Speeding'} index={8} setSortBy={setSortBy} setTracker={setTracker} selected={determineSelected(8)}/>
                    <PropSort propName={'Defects'} index={9} setSortBy={setSortBy} setTracker={setTracker} selected={determineSelected(9)}/>
                    <PropSort propName={'Customer Delivery Feedback'} index={10} setSortBy={setSortBy} setTracker={setTracker} selected={determineSelected(10)}/>
                </Modal>
                </Portal>
            </View>
        </View>
    )
}

export default SortbyButton

                   