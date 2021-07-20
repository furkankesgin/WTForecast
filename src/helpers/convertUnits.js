function convertTemp({temp, unit="metric", fractionDigits=1}){
    // converts temp to metric or imperial from kelvin

    // convert to Fahrenheit
    if(unit === "imperial"){
        temp = temp * 9/5 - 459.67;
    }
    // default is Celsius
    else{
        temp = temp - 272.15;
    }
    temp = temp.toLocaleString('en-US', {maximumFractionDigits:fractionDigits});
    return temp
}

function convertSpeed({speed, unit="metric", fractionDigits=1}){
    // converts m/s to mph

    // convert to mph
    if(unit === "imperial"){
        speed = speed * 2.23694;
    }

    speed = speed.toLocaleString('en-US', {maximumFractionDigits:fractionDigits});
    return speed
}


export { convertTemp, convertSpeed };
