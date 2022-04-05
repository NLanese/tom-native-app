import React from "react";
import removecomingSoon from "./removeComingSoon";
import { View, Text, ScrollView } from 'react-native'
import { StatStyles } from "../../../../Styles/ScoreCardStyles";



const BottomCard = ({sortBy, rawData}) => {

    let data 
    // if (rawData.isArray){
        data = rawData[0]
    // }
    // else{
        // data = {...rawData}
        // console.log(data)
    // }
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
    
    let handleSort = (sortBy) => {
        let returnArray = ""
        if (sortBy == "Delivery Completion Rate"){
            returnArray = [dcr, divider, dar, divider, pod, divider, fico, divider, seatbelt, divider, speeding, divider, defects, divider, cdf]
        }
        else if (sortBy == 'Delivered and Recieved'){
            returnArray = [dar, divider, pod, divider, fico, divider, seatbelt, divider, speeding, divider, defects, divider, cdf, divider, dcr]
        }
        else if (sortBy == 'Photo Rate'){
            returnArray = [pod, divider, fico, divider, seatbelt, divider, speeding, divider, defects, divider, cdf, divider, dcr, divider, dar]
        }
        else if (sortBy == 'Call Compliance'){
            returnArray = [ divider,fico, divider, seatbelt, divider, speeding, divider, defects, divider, cdf, divider, dcr, divider, dar, divider, pod]
        }
        else if (sortBy == 'Scan Compliance'){
            returnArray = [ divider, fico, divider, seatbelt, divider, speeding, divider, defects, divider, cdf, divider, dcr, divider, dar, divider, pod]
        }
        else if (sortBy == 'FICO'){
            returnArray = [fico, divider, seatbelt, divider, speeding, divider, defects, divider, cdf, divider, dcr, divider, dar, divider, pod, divider,]
        }
        else if (sortBy == 'Seatbelt'){
            returnArray = [seatbelt, divider, speeding, divider, defects, divider, cdf, divider, dcr, divider, dar, divider, pod,  divider,fico]
        }
        else if (sortBy == 'Speeding'){
            returnArray = [speeding, divider, defects, divider, cdf, divider, dcr, divider, dar, divider, pod,  divider,fico, divider, seatbelt]
        }
        else if (sortBy == 'Defects'){
            returnArray = [defects, divider, cdf, divider, dcr, divider, dar, divider, pod,  divider,fico, divider, seatbelt, divider, speeding]
        }
        else if (sortBy == 'Customer Delivery Feedback'){
            returnArray = [cdf, divider, dcr, divider, dar, divider, pod,  divider,fico, divider, seatbelt, divider, speeding, divider, defects]
        }
        else {
            returnArray = null
        }
        return returnArray
    }

    const renderReturnArray = (sortBy) => {
        let returnArray = handleSort(sortBy)
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
        <ScrollView horizontal={true} persistentScrollbar={true}>
            {renderReturnArray(sortBy)}
        </ScrollView>
    )
}

export default BottomCard