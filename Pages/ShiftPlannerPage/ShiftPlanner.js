import react, {useState} from "react";
import { useRecoilState } from "recoil";
import { View, Text } from 'react-native'
import { useQuery } from "@apollo/client";
import Banner from '../../Global/Banner'
import { ShiftPlannerStyles } from "../../Styles/ShiftPlannerStyles";
import dateObj from "../../Hooks/handleDateTime";
import { userState } from "../../Recoil/atoms";

const ShiftPlanner = () => {

    const user = useRecoilState(userState)

    let today = Date.now()
    today = dateObj(today, user.dsp.timeZone)
    const todaysDate = (today.month + "-" + today.day)

    const [viewType, setViewType] = useState("weekly")
    const [startDate, setStartDate] = useState()



    return (
        <View>
            <Banner />
            <View style={ShiftPlannerStyles.calanderBox}>
                
            </View>
        </View>
    )
}

export default ShiftPlanner