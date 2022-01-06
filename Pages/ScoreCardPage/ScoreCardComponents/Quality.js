import React from "react";
import { View, Text, ScrollView } from 'react-native'
 


const Quality = () => {

    const { loading, error, data, refetch } = useQuery(GETDRIVERSFORDPSFORSAFETYANDCOMPLIANCE)
    const [queryData, setQueryData] = useState({})

    useEffect( async () => {
        if (!loading && data) {
            await setQueryData(data.getDriversForDspForSafetyAndCompliance)
        }
    }, [data])

    function renderTopThree(topThreeQualityDrivers){
        let i = 0
        return topThreeQualityDrivers.map( (driverData) => {
            i++
            return <EmployeeSafetyAndCompliance driverData={driverData} rank={i} />
        })
    }

    if (!queryData[0]) {
        return (
            <View>
                <Text>Loading</Text>
            </View>
        )
    } else {
        let topThree = [queryData[0], queryData[1], queryData[2]]
        console.log(topThree)

        return(
            <View style={SafetyAndComplianceStyles.container}>
                <Text>Top Three Leaders</Text> 
                <View style={SafetyAndComplianceStyles.topThree}>
                    {renderTopThree(topThree)}
                </View>
                <View style={SafetyAndComplianceStyles.remainders}>
                </View>

            </View>
        )
    }
}

export default Quality