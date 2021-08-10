import { useState, useEffect } from 'react';

const useStateWithAutoSave = ({storage, storageName}) => {
    // custom hook for creating a stateful element and auto saving it into local storage
    // uses getItemFromStorageWithDefaultFallback from the storage class for preventing undefined values

    const [item, setItem] = useState(storage.getItemFromStorageWithDefaultFallback(storageName));

    useEffect(() => {
		storage.setToStorage({ [storageName]: item });
	}, [item])

    return [item, setItem];
}

export default useStateWithAutoSave;