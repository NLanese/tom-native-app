import React from "react";
import { useEffect } from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";

const defaultActiveTab = StyleSheet.create({
    borderBottomWidth: 4,
    borderBottomColor: 'white'
})
const defaultInactiveTab = StyleSheet.create({
    borderBottomWidth: 4,
    borderBottomColor: 'grey'
})
const defaultActiveText = StyleSheet.create({
    fontSize: 12,
    color: 'white'
})
const defaultInactiveText = StyleSheet.create({
    fontSize: 12,
    color: 'white'
})


const TabBar = ({
    tabsArray, // An array of all the tab titles (strings)

    styleActive = defaultActiveTab, // What style each tab bar will have when it is active
    styleInactive = defaultInactiveTab, // What style each tab bar will have when it is inactive

    tabTextStyleActive = defaultActiveText, // What style each tab bar's title will have when it is active
    tabTextStyleInactive = defaultInactiveText, // What style each tab bar's title will have when it is inactive

    height = 75, // Determines the height of the tab bar
    width = 300, // Determines width of the tab bar
    borderRadius = 0, // Determines Border Radius

    onChangeIndex = function(index){ return null }, // Method to run whenever a different tab is selected. TAKES THE INDEX SELECTED AS A PARAMETER
    startIndex = 0, // Determines which index starts off selected. Defaults to 0 (first tab)
}) => {

    const tabContainer = StyleSheet.create({
        height: height,
        width: width,
        borderRadius: borderRadius,
        flex: 1, 
        flexDirection: 'row'
    })

    const [selectedIndex, setSelectedIndex] = useEffect(startIndex)

    handleSelection = () => {
        index = parseInt(index, 10)
        setSelectedIndex(index)
        onChangeIndex(index)
    }

    determineTabStyles = (index, tabCount) => {
        if (parseInt(index, 10) == selectedIndex){
            return {...styleActive, flex: 1, flexDirection: 'row'}
        }
        else{
            return {...styleInactive, flex: 1, flexDirection: 'row'}
        }
    }

    determineTextStyles = (index) => {
        if (parseInt(index, 10) == selectedIndex){
            return tabTextStyleActive
        }
        else{
            return tabTextStyleInactive
        }
    }

    renderTabs = () => {
        length = tabsArray.length
        return tabsArray.map( (tab, index = 0) => {

            return(
                <Pressable onPress={(index) => handleSelection(index)}>
                    <View key={index} style={determineTabStyles(index, tabCount)}>
                        <Text style={determineTextStyles(index)}>{tab}</Text>
                    </View>
                </Pressable>
            )
        } )
    }
    return(
        <View style={tabContainer}>
            {renderTabs}
        </View>
    )
}

export default TabBar