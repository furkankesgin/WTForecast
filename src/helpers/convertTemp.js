export function convertTemp(temp, tempUnit, fractionDigits=1){
    // convert to Fahrenheit
    if(tempUnit === "F"){
        temp = temp * 9/5 - 459.67;
    }
    // default is Celsius
    else{
        temp = temp - 272.15;
    }
    temp = temp.toLocaleString('en-US', {maximumFractionDigits:fractionDigits});
    return temp
}

export default convertTemp;
