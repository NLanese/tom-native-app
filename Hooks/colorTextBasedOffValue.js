const colorTextBasedOnValue = (value, name, startAtTop, dspPreferences, colorPallete) => {
    if (startAtTop){
        if (value >= dspPreferences[name].fantastic){
            return colorPallete.fantastic
        }
        else if (value >= dspPreferences[name].good){
            return colorPallete.good
        }
        else if (value >= dspPreferences[name].fair){
            return colorPallete.fair
        }
        else{
            return colorPallete.subpar
        }
    }
    else{
        if (value >= dspPreferences[name].fair){
            return colorPallete.subpar
        }
        else if (value >= dspPreferences[name].good){
            return colorPallete.fair
        }
        else if (value >= dspPreferences[name].fantastic){
            return colorPallete.good
        }
        else{
            return colorPallete.fantastic
        }
    }
}

export default colorTextBasedOnValue
