import React from "react"
import { TouchableHighlight } from "react-native-gesture-handler"
import { Text, View } from "react-native"
import { SortingStyles } from "../../../../Styles/ScoreCardStyles"



const PropSort = ({index, propName, setSortBy, setTracker, selected}) => {

    const handleSortPress = () => {
        setSortBy(propName)
        setTracker(index)
    }

    const renderStyle = () => {
        if (selected){
            return SortingStyles.activePropDrop
        }
        else{
            return SortingStyles.propDrop
        }
    }

    return(
        <TouchableHighlight onPress={() => handleSortPress(propName, setSortBy) }>
            <View style={renderStyle()}>
                <Text>{propName}</Text>
            </View>
        </TouchableHighlight>
    )
}

export default PropSort
