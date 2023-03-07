const storageAvailable = (type) => {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    console.log(`Error testing for storage availability: ${e}`);
    return false;
  }
};

const loadLocalStorage = (key) => {
  if (storageAvailable('localStorage')) {
    try {
      const serializedData = localStorage.getItem(key);
      if (serializedData === null) {
        return undefined;
      }
      const parsedData = JSON.parse(serializedData);
      return parsedData;
    } catch (err) {
      console.log(`Error loading from local storage: ${err}`);
      return undefined;
    }
  } else {
    console.log('Local storage not available');
  }
};

const saveLocalStorage = (key, data) => {
  if (storageAvailable('localStorage')) {
    try {
      //   console.log('original data', data);
      const serializedData = JSON.stringify(data);
      //   console.log('serializedData', serializedData);
      localStorage.setItem(key, serializedData);
    } catch (err) {
      console.log(`Error saving to local storage: ${err}`);
    }
  } else {
    console.log('Local storage not available');
  }
};

const clearLocalStorage = (key) => {
  if (storageAvailable('localStorage')) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error(`error clearing local storage: ${e.message}`);
    }
  } else {
    console.log('Local storage not available');
  }
};

export { loadLocalStorage, saveLocalStorage, clearLocalStorage };
