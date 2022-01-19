import React from "react"
import { TouchableHighlight } from "react-native-gesture-handler"
import { Text, View } from "react-native"
import { SortingStyles } from "../../../../Styles/ScoreCardStyles"


const handleSortPress = (propName, setSortBy) => {
    console.log("You have clicked")
    console.log(propName)
    setSortBy(propName)
}


const PropSort = ({propName, setSortBy}) => {

    return(
        <TouchableHighlight onPress={() => handleSortPress(propName, setSortBy) }>
            <View style={SortingStyles.propDrop}>
                <Text>{propName}</Text>
            </View>
        </TouchableHighlight>
    )
}

export default PropSort
