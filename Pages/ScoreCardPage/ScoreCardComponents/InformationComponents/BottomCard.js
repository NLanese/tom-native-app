import React from "react";
import { View, Text, ScrollView } from 'react-native'
import { StatStyles } from "../../../../Styles/ScoreCardStyles";



const BottomCard = ({sortBy, rawData}) => {

    let data = {...rawData[0]}

    // 0 - DCR
    let dcr = (<View style={StatStyles.stat}>
        <Text style={StatStyles.statTitle}>DCR</Text>
        <Text style={StatStyles.statValue}>{data.deliveryCompletionRate}%</Text>
    </View>)

    // 1 - DAR
    let dar = (<View style={StatStyles.stat}>
        <Text style={StatStyles.statTitle}>DAR</Text>
        <Text style={StatStyles.statValue}>{data.deliveredAndRecieved}</Text>
    </View>)

    // 2 - POD
    let pod = (<View style={StatStyles.stat}>
        <Text style={StatStyles.statTitle}>POD</Text>
        <Text style={StatStyles.statValue}>{data.photoOnDelivery}%</Text>                
    </View>)

    // 3 - CC
    let cc = (<View style={StatStyles.stat}>
        <Text style={StatStyles.statTitle}>Call Compliance</Text>
        <Text style={StatStyles.statValue}>{data.callCompliance}%</Text>                
    </View>)

    // 4 - SC
    let sc = (<View style={StatStyles.stat}>
        <Text style={StatStyles.statTitle}>Scan Compliance</Text>
        <Text style={StatStyles.statValue}>{data.scanCompliance}%</Text>                
    </View>)

    // 5 - fico
    let fico = (<View style={StatStyles.stat}>
        <Text style={StatStyles.statTitle}>FICO</Text>
        <Text style={StatStyles.statValue}>{data.fico}</Text>
    </View>)

    // 6 - Seatbelt
    let seatbelt = (<View style={StatStyles.stat}>
        <Text style={StatStyles.statTitle}>Seatbelt</Text>
        <Text style={StatStyles.statValue}>{data.seatbeltOffRate}</Text>
    </View>)

    // 7 - Speeding
    let speeding = (<View style={StatStyles.stat}>
        <Text style={StatStyles.statTitle}>Speeding</Text>
        <Text style={StatStyles.statValue}>{data.speedingEventRate}</Text>
    </View>)

    // 8 - Defects
    let defects = (<View style={StatStyles.stat}>
        <Text style={StatStyles.statTitle}>Defects</Text>
        <Text style={StatStyles.statValue}>{data.defects}</Text>
    </View>)

    // 9 - cdf
    let cdf = (<View style={StatStyles.stat}>
        <Text style={StatStyles.statTitle}>Customer Feedback</Text>
        <Text style={StatStyles.statValue}>{data.customerDeliveryFeedback}</Text>
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
        <ScrollView horizontal={true}>
            {renderReturnArray(sortBy)}
        </ScrollView>
    )
}

export default BottomCard