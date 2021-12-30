import react from "react";
import { View, Text, ScrollView } from 'react-native'
import { settingsAccidents } from "../../../Styles/SettingStyles";
import { Link } from "react-router-dom";
// props.acc will have all of the acciden
const AccidentPreview = (props) => {
    console.log(props)
    function renderAccidentStatus(deletedStatus){
        if (deletedStatus){
            return "Deleted"
        }
        else{
            return "Active"
        }
    }
    function determineAccidentTypes(accident){
        let returnString = ""
        if (accident.hitPerson != null){
            returnString += "Injury Occured. "
        }
        if (accident.thirdParty != null){
            returnString += "Third Party Involvement. "
        }
        if (accident.propertyAccident != null){
            returnString += "Property Damaged."
        }
    }
    function generateViewPath(accident){
        return /accidents/${accident.id}/view
    }
    return(
        <View style={settingsAccidents.preview}>
            <View style={settingsAccidents.accidentDetails}>
                <Text style={settingsAccidents.text}>Accident Number: {${props.accidentData.id}}</Text>
                <Text style={settingsAccidents.text}>Accident Title: {${props.accidentData.name}}</Text>
                <Text style={settingsAccidents.text}>Accident Record Status: {renderAccidentStatus(props.accidentData.deleted)}</Text>
                <Text style={settingsAccidents.text}>{determineAccidentTypes(props.accidentData)} </Text>
            </View>
            {/* <Link to={generateViewPath(props.accidentData)}> View/Edit </Link> */}
        </View>
    )
}
export default AccidentPreview
