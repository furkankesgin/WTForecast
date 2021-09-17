// react
import { useState, useEffect } from 'react';

// statics
import DEFAULTS from "../statics/DEFAULTS";

// helpers
import Storage from '../helpers/Storage';

const useStateWithAutoSave = (storageName) => {
    // custom hook for creating a stateful element and auto saving it into local storage on change
    // uses storage class

    // init storage object with default values
    const storage = new Storage(DEFAULTS.storageNames.applicationName, DEFAULTS.storageDefaults);

    const [item, setItem] = useState(storage.getItemFromStorageWithDefaultFallback(storageName)); // getItemFromStorageWithDefaultFallback returns something all the time

    useEffect(() => {
		storage.addItemToStorage({ [storageName]: item });
	}, [item])

    return [item, setItem];
}

export default useStateWithAutoSave;