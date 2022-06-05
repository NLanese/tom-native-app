import React from "react";
import { View, Text, ScrollView } from 'react-native'
import { StatStyles } from "../../../Styles/ScoreCardStyles";


const WeeklyBottomCard = ({data}) => {

    data = data.weeklyReport[data.weeklyReport.length - 1]

    const removecomingSoon = ( value ) => {
        if (value == "Coming Soon" || value == ""){
            return "N/A"
        }
        else{
            return value
        }
    }

    let divider = (
        <View style={StatStyles.divider} />
    )
    // 0 - DCR
    let dcr = (<View style={StatStyles.stat}>
        <Text style={StatStyles.statValue}>{removecomingSoon(data.deliveryCompletionRate)}%</Text>
        <Text style={StatStyles.statTitle}>Delivery Completion</Text>
    </View>)

    // 1 - DAR
    let dar = (<View style={StatStyles.stat}>
        <Text style={StatStyles.statValue}>{removecomingSoon(data.deliveredAndRecieved)}</Text>
        <Text style={StatStyles.statTitle}>Dedlivered And Recieved</Text>
    </View>)

    // 2 - POD
    let pod = (<View style={StatStyles.stat}>
        <Text style={StatStyles.statValue}>{removecomingSoon(data.photoOnDelivery)}%</Text>     
        <Text style={StatStyles.statTitle}>Photo on Delivery Rate</Text> 
    </View>)

    // 5 - fico
    let fico = (<View style={StatStyles.stat}>
        <Text style={StatStyles.statValue}>{removecomingSoon(data.fico)}</Text>
        <Text style={StatStyles.statTitle}>FICO</Text>
    </View>)

    // 6 - Seatbelt
    let seatbelt = (<View style={StatStyles.stat}>
        <Text style={StatStyles.statValue}>{removecomingSoon(data.seatbeltOffRate)}</Text>
        <Text style={StatStyles.statTitle}>Seatbelt</Text>
    </View>)

    // 7 - Speeding
    let speeding = (<View style={StatStyles.stat}>
        <Text style={StatStyles.statValue}>{removecomingSoon(data.speedingEventRate)}</Text>
        <Text style={StatStyles.statTitle}>Speeding</Text>
    </View>)

    // 8 - Defects
    let defects = (<View style={StatStyles.stat}>
        <Text style={StatStyles.statValue}>{removecomingSoon(data.defects)}</Text>
        <Text style={StatStyles.statTitle}>Defects</Text>
    </View>)

    // 9 - cdf
    let cdf = (<View style={StatStyles.stat}>
        <Text style={StatStyles.statValue}>{removecomingSoon(data.customerDeliveryFeedback)}</Text>
        <Text style={StatStyles.statTitle}>Customer Feedback</Text>
    </View>)
    
    let handleSort = () => {
        let returnArray = [fico, divider, seatbelt, divider, speeding, divider, defects, divider, cdf, divider, dcr, divider, dar, divider, pod, ]
        return returnArray
    }

    const renderReturnArray = () => {
        let returnArray = handleSort()
        let i = 0
        return returnArray.map( (stat) => {
            i++
            return(
                <View key={i}>
                    {stat}
                </View>
            )
        })
    }

    return(
        <ScrollView style={{width: 250}} horizontal={true} persistentScrollbar={true}>
            {renderReturnArray()}
        </ScrollView>
    )
}

export default WeeklyBottomCard