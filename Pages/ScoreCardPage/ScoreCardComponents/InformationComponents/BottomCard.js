import React from "react";
import removecomingSoon from "./removeComingSoon";
import { View, Text, ScrollView } from 'react-native'
import { StatStyles } from "../../../../Styles/ScoreCardStyles";



const BottomCard = ({sortBy, rawData}) => {

    let data = {...rawData[0]}

    // 0 - DCR
    let dcr = (<View style={StatStyles.stat}>
        <Text style={StatStyles.statValue}>{removecomingSoon(data.deliveryCompletionRate)}%</Text>
        <Text style={StatStyles.statTitle}>Delivery Completion</Text>
        <View style={StatStyles.divider} />
    </View>)

    // 1 - DAR
    let dar = (<View style={StatStyles.stat}>
        <Text style={StatStyles.statValue}>{removecomingSoon(data.deliveredAndRecieved)}</Text>
        <Text style={StatStyles.statTitle}>Dedlivered And Recieved</Text>
        <View style={StatStyles.divider} />
    </View>)

    // 2 - POD
    let pod = (<View style={StatStyles.stat}>
        <Text style={StatStyles.statValue}>{removecomingSoon(data.photoOnDelivery)}%</Text>     
        <Text style={StatStyles.statTitle}>Photo on Delivery Rate</Text> 
        <View style={StatStyles.divider} />          
    </View>)

    // 3 - CC
    let cc = (<View style={StatStyles.stat}>
        <Text style={StatStyles.statValue}>{removecomingSoon(data.callCompliance)}%</Text> 
        <Text style={StatStyles.statTitle}>Call Compliance</Text>   
        <View style={StatStyles.divider} />            
    </View>)

    // 4 - SC
    let sc = (<View style={StatStyles.stat}>
        <Text style={StatStyles.statValue}>{removecomingSoon(data.scanCompliance)}%</Text>
        <Text style={StatStyles.statTitle}>Scan Compliance</Text>   
        <View style={StatStyles.divider} />             
    </View>)

    // 5 - fico
    let fico = (<View style={StatStyles.stat}>
        <Text style={StatStyles.statValue}>{removecomingSoon(data.fico)}</Text>
        <Text style={StatStyles.statTitle}>FICO</Text>
        <View style={StatStyles.divider} />
    </View>)

    // 6 - Seatbelt
    let seatbelt = (<View style={StatStyles.stat}>
        <Text style={StatStyles.statValue}>{removecomingSoon(data.seatbeltOffRate)}</Text>
        <Text style={StatStyles.statTitle}>Seatbelt</Text>
        <View style={StatStyles.divider} />
    </View>)

    // 7 - Speeding
    let speeding = (<View style={StatStyles.stat}>
        <Text style={StatStyles.statValue}>{removecomingSoon(data.speedingEventRate)}</Text>
        <Text style={StatStyles.statTitle}>Speeding</Text>
        <View style={StatStyles.divider} />
    </View>)

    // 8 - Defects
    let defects = (<View style={StatStyles.stat}>
        <Text style={StatStyles.statValue}>{removecomingSoon(data.defects)}</Text>
        <Text style={StatStyles.statTitle}>Defects</Text>
        <View style={StatStyles.divider} />
    </View>)

    // 9 - cdf
    let cdf = (<View style={StatStyles.stat}>
        <Text style={StatStyles.statValue}>{removecomingSoon(data.customerDeliveryFeedback)}</Text>
        <Text style={StatStyles.statTitle}>Customer Feedback</Text>
        <View style={StatStyles.divider} />
    </View>)
    
    let handleSort = (sortBy) => {
        let returnArray = ""
        if (sortBy == "Delivery Completion Rate"){
            returnArray = [dcr, dar, pod, cc, sc, fico, seatbelt, speeding, defects, cdf]
        }
        else if (sortBy == 'Delivered and Recieved'){
            returnArray = [dar, pod, cc, sc, fico, seatbelt, speeding, defects, cdf, dcr]
        }
        else if (sortBy == 'Photo Rate'){
            returnArray = [pod, cc, sc, fico, seatbelt, speeding, defects, cdf, dcr, dar]
        }
        else if (sortBy == 'Call Compliance'){
            returnArray = [cc, sc, fico, seatbelt, speeding, defects, cdf, dcr, dar, pod]
        }
        else if (sortBy == 'Scan Compliance'){
            returnArray = [sc, fico, seatbelt, speeding, defects, cdf, dcr, dar, pod, cc]
        }
        else if (sortBy == 'FICO'){
            returnArray = [fico, seatbelt, speeding, defects, cdf, dcr, dar, pod, cc, sc]
        }
        else if (sortBy == 'Seatbelt'){
            returnArray = [seatbelt, speeding, defects, cdf, dcr, dar, pod, cc, sc, fico]
        }
        else if (sortBy == 'Speeding'){
            returnArray = [speeding, defects, cdf, dcr, dar, pod, cc, sc, fico, seatbelt]
        }
        else if (sortBy == 'Defects'){
            returnArray = [defects, cdf, dcr, dar, pod, cc, sc, fico, seatbelt, speeding]
        }
        else if (sortBy == 'Customer Delivery Feedback'){
            returnArray = [cdf, dcr, dar, pod, cc, sc, fico, seatbelt, speeding, defects]
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