const numberToDay = (num) => {
    if(num == 0){
        return "SUNDAY"
    }
    if(num == 1){
        return "MONDAY"
    }
    if(num == 2){
        return "TUESDAY"
    }
    if(num == 3){
        return "WEDNESDAY"
    }
    if(num == 4){
        return "THURSDAY"
    }
    if(num == 5){
        return "FRIDAY"
    }
    if(num == 6){
        return "SATURDAY"
    }
    else{
        "Dude what happened?"
    }
}

export default numberToDay