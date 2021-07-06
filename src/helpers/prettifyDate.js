function prettifyDate(date){
    let d = new Date(date * 1000);
    // return d.toLocaleString("tr");
    return d.toLocaleString();
}

export default prettifyDate;
