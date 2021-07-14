export const splitByHour = (weather, stringHour) => {
    if(weather.dt_txt.split(" ")[1].split(":")[0] === stringHour){
        return true;
    }
    else{
        return false;
    }
}