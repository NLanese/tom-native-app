const colorTextBasedOnValue = (value, name, startAtTop, dspPreferences, colorPallete) => {
    console.log(name)
    console.log(value)
    console.log(dspPreferences[name])
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
            console.log('subpar\n\n\n')
            return colorPallete.subpar
        }
        else if (value >= dspPreferences[name].good){
            console.log('fair\n\n\n')
            return colorPallete.fair
        }
        else if (value >= dspPreferences[name].fantastic){
            console.log('good\n\n\n')
            return colorPallete.good
        }
        else{
            console.log('fantastic\n\n\n')
            return colorPallete.fantastic
        }
    }
}

export default colorTextBasedOnValue
