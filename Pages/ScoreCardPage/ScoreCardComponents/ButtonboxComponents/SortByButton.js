import React, { useState, useEffect } from "react";
import { QualityStyles } from "../../../../Styles/ScoreCardStyles"
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { ActivityIndicator, Icon, Button, Modal} from "react-native-paper";


const SortbyButton = ({dropVisibility, handleDropDownClick, sortBy, setSortBy}) => {



    return(
        <View>
            <Text style={QualityStyles.sortText}>Sort By</Text>
            <TouchableWithoutFeedback onPress={() => handleDropDownClick()}>
                <View style={QualityStyles.sortByButton}>
                    <Text style={{fontSize: 16}}>{sortBy}</Text>
                    <Button style={QualityStyles.dropArrowBox} icon='arrow-down-bold-box-outline' color='black' size={50}/>
                </View>
            </TouchableWithoutFeedback>
            <View>
                <Modal visible={dropVisibility} onDismiss={handleDropDownClick} >
                    
                </Modal>
            </View>
        </View>
    )
}

export default SortbyButton

                   