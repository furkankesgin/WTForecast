class Storage{

    constructor(saveName, defaults){
        // saveName = name for local storage
        // defaults = all defaults as json object

        this.saveName = saveName;
        this.defaults = defaults;
    }

    // ---------- set ---------- //

    setToStorage(newItems){
        // adds new items to local storage

        let items = this.getFromStorage();
        localStorage.setItem(this.saveName, JSON.stringify({...items, ...newItems}));
    }

    // ---------- ---------- ---------- //



    // ---------- get ---------- //

    getFromStorage(){
        // returns all values from the storage

        let items = JSON.parse(localStorage.getItem(this.saveName));
        return items;
    }

    getFromStorageWithDefaultFallback(){
        // returns all values from storage, if not exists returns all defaults

        const items = JSON.parse(localStorage.getItem(this.saveName));
        if(items === null){
            return this.defaults;
        }
        else{
            return items;
        }
    }   

    getItemFromStorageWithDefaultFallback(item){
        // returns the value for an item from storage, if not exists returns default value for that item

        return this.getFromStorageWithDefaultFallback()[item];
    }   

    // ---------- ---------- ---------- //



    // ---------- delete ---------- //

    deleteItemFromStorage(item){
        // deletes an item from storage

        const items = this.getFromStorage();
        if(item in items){
            delete items[item];
            localStorage.setItem(this.saveName, JSON.stringify(items));
        }
    }

    clearStorage(){
        // deletes all items from local storage 

        localStorage.removeItem(this.saveName);
    }

    // ---------- ---------- ---------- //



    // ---------- utilities ---------- //

    isTherePreviousSave(){
        // checks if any item exists on local storage

        if(localStorage.getItem(this.saveName) === null){
            return false;
        }
        else{
            return true;
        }
    }

    isTherePreviousSavedItem(item){
        // checks if 'item' exists on local storage

        const items = localStorage.getItem(this.saveName);
        if(items === null){
            return false;
        }
        else{
            if(item in items){
                return true;
            }
            else{
                return false;
            }
        }
    }

    // ---------- ---------- ---------- //


}


export default Storage;
