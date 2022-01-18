import React from "react";
import { View, Text, ScrollView } from 'react-native'
import { QualityStyles } from "../../../../Styles/ScoreCardStyles"
import { SafetyAndComplianceStyles } from "../../../../Styles/ScoreCardStyles"
import { TeamStyles } from "../../../../Styles/ScoreCardStyles"


const BottomCard = ({sortBy, data}) => {

    // 0 - DCR
    let dcr = (<View style={QualityStyles.dcr}>
        <Text style={QualityStyles.statTitle}>DCR</Text>
        <Text style={QualityStyles.statValue}>{data.deliveryCompletionRate}%</Text>
    </View>)

    // 1 - DAR
    let dar = (<View style={QualityStyles.dar}>
        <Text style={QualityStyles.statTitle}>DAR</Text>
        <Text style={QualityStyles.statValue}>{data.deliveredAndRecieved}</Text>
    </View>)

    // 2 - POD
    let pod = (<View style={QualityStyles.pod}>
        <Text style={QualityStyles.statTitle}>POD</Text>
        <Text style={QualityStyles.statValue}>{data.photoOnDelivery}%</Text>                
    </View>)

    // 3 - CC
    let cc = (<View style={QualityStyles.callCompliance}>
        <Text style={QualityStyles.statTitle}>Call Compliance</Text>
        <Text style={QualityStyles.statValue}>{data.callCompliance}%</Text>                
    </View>)

    // 4 - SC
    let sc = (<View style={QualityStyles.scanCompliance}>
        <Text style={QualityStyles.statTitle}>Scan Compliance</Text>
        <Text style={QualityStyles.statValue}>{data.scanCompliance}%</Text>                
    </View>)

    // 5 - fico
    let fico = (<View style={SafetyAndComplianceStyles.fico}>
        <Text style={SafetyAndComplianceStyles.statTitle}>FICO</Text>
        <Text style={SafetyAndComplianceStyles.statValue}>{data.fico}</Text>
    </View>)

    // 6 - Seatbelt
    let seatbelt = (<View style={SafetyAndComplianceStyles.seatbeltOffRate}>
        <Text style={SafetyAndComplianceStyles.statTitle}>Seatbelt</Text>
        <Text style={SafetyAndComplianceStyles.statValue}>{data.seatbeltOffRate}</Text>
    </View>)

    // 7 - Speeding
    let speeding = (<View style={SafetyAndComplianceStyles.speedingEvent}>
        <Text style={SafetyAndComplianceStyles.statTitle}>Speeding</Text>
        <Text style={SafetyAndComplianceStyles.statValue}>{data.speedingEvent}</Text>
    </View>)

    // 8 - Defects
    let defects = (<View style={TeamStyles.defect}>
        <Text style={TeamStyles.statTitle}>Defects</Text>
        <Text style={TeamStyles.statValue}>{data.defects}</Text>
    </View>)

    // 9 - cdf
    let cdf = (<View style={TeamStyles.customerFeedback}>
        <Text style={TeamStyles.statTitle}>Customer Feedback</Text>
        <Text style={TeamStyles.statValue}>{data.customerDeliveryFeedback}</Text>
    </View>)
    
    let handleSort = (sortBy) => {
        let returnArray = ""
        if (sortBy == "dcr"){
            returnArray = [dcr, dar, pod, cc, sc, fico, seatbelt, speeding, defects, cdf]
        }
        else if (sortBy == 'dar'){
            returnArray = [dar, pod, cc, sc, fico, seatbelt, speeding, defects, cdf, dcr]
        }
        else if (sortBy == 'pod'){
            returnArray = [pod, cc, sc, fico, seatbelt, speeding, defects, cdf, dcr, dar]
        }
        else if (sortBy == 'cc'){
            returnArray = [cc, sc, fico, seatbelt, speeding, defects, cdf, dcr, dar, pod]
        }
        else if (sortBy == 'sc'){
            returnArray = [sc, fico, seatbelt, speeding, defects, cdf, dcr, dar, pod, cc]
        }
        else if (sortBy == 'fico'){
            returnArray = [fico, seatbelt, speeding, defects, cdf, dcr, dar, pod, cc, sc]
        }
        else if (sortBy == 'seatbelt'){
            returnArray = [seatbelt, speeding, defects, cdf, dcr, dar, pod, cc, sc, fico]
        }
        else if (sortBy == 'speeding'){
            returnArray = [speeding, defects, cdf, dcr, dar, pod, cc, sc, fico, seatbelt]
        }
        else if (sortBy == 'defects'){
            returnArray = [defects, cdf, dcr, dar, pod, cc, sc, fico, seatbelt, speeding]
        }
        else if (sortBy == 'cdf'){
            returnArray = [cdf, dcr, dar, pod, cc, sc, fico, seatbelt, speeding, defects]
        }
        else {
            returnArray = defaultDriversSort
        }
        return returnArray
    }

    const renderReturnArray = (sortBy) => {
        let returnArray = handleSort(sortBy)
        return returnArray.map( (stat) => {
            return(
                <View>
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