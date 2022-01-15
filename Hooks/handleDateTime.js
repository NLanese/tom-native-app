const dateObj = (dateSent, timeZone='EST') => {
    let year = dateSent.split("-")[0]
    let month = dateSent.split("-")[1]
    let day = dateSent.split("-")[2].split("T")[0]
    let time = dateSent.split("-")[2].split("T")[1].split(".")[0]
    let hour = time.split(":")[0]
    let min = time.split(":")[1]
    let am_pm = "AM"
    let timeZoneAdjustment = 0
    if (timeZone == 'EST'){
        timeZoneAdjustment = -5
    }
    else if (timeZoneAdjustment == 'PST'){
        timeZoneAdjustment = -8
    }
    else if (timeZoneAdjustment == 'CT'){
        timeZoneAdjustment = -6
    }
    else if (timeZoneAdjustment == 'MT'){
        timeZoneAdjustment = -7
    }
    else {
        throw new Error("Error: Invalid TimeZone Entered!")
    }
    hour = parseInt(hour, 10) - timeZoneAdjustment
    if (hour < 1){
        hour = 24 + hour
    }
    if (hour > 12){
        hour = hour - 12
        am_pm = "PM"
    }
    return {year: year, month: month, day: day, hour: hour, min: min, am_pm: am_pm}
}

export default dateObj