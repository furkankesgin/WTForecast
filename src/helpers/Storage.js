class Storage{

    constructor(saveName){
        this.saveName = saveName;
    }

    setToStorage(newItems){
        let items = this.getFromStorage();
        localStorage.setItem(this.saveName, JSON.stringify({...items, ...newItems}));
    }

    getFromStorage(){
        let items = JSON.parse(localStorage.getItem(this.saveName));
        return items
    }

    isTherePreviousSave(){
        if(localStorage.getItem(this.saveName) === null){
            return false
        }
        else{
            return true
        }
    }

    clearStorage(){
        localStorage.removeItem(this.saveName);
    }

}

export default Storage;
