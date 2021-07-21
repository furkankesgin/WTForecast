function prettifyDate(date){
    let d = new Date(date * 1000);
    // return d.toLocaleString("tr");
    return d.toLocaleString();
}

function weekDay(dayInNumber){
    const weekDays = {0: "Sunday", 
                    1: "Monday", 
                    2: "Tuesday",
                    3: "Wednesday", 
                    4: "Thursday", 
                    5: "Friday",
                    6: "Saturday",
                    };
    return weekDays[dayInNumber];
}

export { prettifyDate, weekDay };
