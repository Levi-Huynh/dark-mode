import { useState } from 'react';




export default function useLocalStorage(key, initialValue) {

    console.log("intialValue:", initialValue);
    console.log("hey key is coming thru here! :) :", key);
    const valueCheck1 = window.localStorage.getItem(key);
    const checkCheck = window.localStorage.getItem("first");
    console.log("getItem(key), valueCheck1:", valueCheck1);
    console.log("getItem('first'), checkChekc:", checkCheck);
    const parsed = JSON.parse(valueCheck1);
    console.log("getItem parsed:", parsed);

    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });


    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    console.log("storedValue from useLocalS:", storedValue);

    //storedValue is the actual constant state here
    //setValue is just a method
    return [storedValue, setValue]
};
