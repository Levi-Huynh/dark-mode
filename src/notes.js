import { useState } from "react";

export default function useLocalStorage(key, initialValue) {


    if (typeof key !== "string") {
        let errorMessage = "Invalid Params: useLocalStorage(key, initialValue)\n"
        errorMessage += `expected 'key' to be type 'string'; received '${typeof key}'.`
        throw new Error(errorMessage)
    }


    const [storedValue, setStoredValue] = useState(() => {
        const value = window.localStorage.getItem(key);
        if (value) {
            return JSON.parse(value);
        } else {
            localStorage.setItem(key, JSON.parse(initialValue));
            return initialValue;
        }
    });


    const saveToStorage = value => {
        window.localStorage.setItem(key, JSON.stringify(value));
        setStoredValue(value);
    };

    return [storedValue, saveToStorage];
}

// export default function useLocalStorage(key, initialValue) {
//     console.log("intialValue:", initialValue);
//     console.log("key:", key);
//     const valueCheck1 = window.localStorage.getItem(key);
//     const checkCheck = window.localStorage.getItem("first");
//     console.log("getItem(key), valueCheck1:", valueCheck1);
//     console.log("getItem('first'), checkChekc:", checkCheck);
//     const parsed = JSON.parse(valueCheck1);
//     console.log("getItem parsed:", parsed);

    // Error handling: if key is not a string we will throw an error
    // if (typeof key !== "string") {
    //     let errorMessage = "Invalid Params: useLocalStorage(key, initialValue)\n"
    //     errorMessage += `expected 'key' to be type 'string'; received '${typeof key}'.`
    //     throw new Error(errorMessage)
    // }

    // using state to set our initial value IF local storage has it
    // const [storedValue, setStoredValue] = useState(() => {
    //     const valueCheck = window.localStorage.getItem(key);
    //     console.log("valueCheck:", valueCheck);
    //     console.log("intial storedValue state:", storedValue);

    //     if (valueCheck) {
    //         //if getItem(dark-mode) has a value, parse the value
    //         //returns valueCheck parse => boolean true? //MAKE THIS storeValue state
    //         return JSON.parse(valueCheck);
    //     } else {
    //         //if getItem(dark-mode) has no value, set the key, & parse & set whatever
    //         //was in intial value 
    //         localStorage.setItem(key, JSON.parse(initialValue));
    //         console.log("here", initialValue);
    //         //else  json.parse the intial value as value to the "darkmode" key
    //         //MAKE THIS storeValue state
    //         return initialValue;
    //     }
    // });

    // Creating a function that uses our state above to save to localStorage 
    //     AND update our current value
//     const saveToStorage = value => {
//         window.localStorage.setItem(key, JSON.stringify(value));
//         // sets useState above to whatever the 
//         setStoredValue(value);




//     };

//     console.log("storedValue from useLocalS:", storedValue);
//     // return our variable, 
//     //     and the function to properly update our variable with localStorage
//     return [storedValue, saveToStorage];
// }

//if getItem(key) exists will be received as stringed object. Turn value into object & 
            //use as initialValue for the useState
            //when pass in arrays or objects to localStorage
            //will need to parse it into JSON
            //then when retrieve it, will need to parse it back into JS

              //what is nitialValue if wasn't passed into argument intially??
            //if value =getItem(key) DNE,  setItem using key & JSON.parse whatever inital Value is ??

// JSON is a format for storing and transporting data.

// JSON is often used when data is sent from a server to a web page.
// JSON stands for JavaScript Object Notation
// JSON is a lightweight data interchange format
// JSON is language independent *
// JSON is "self-describing" and easy to understand
// * The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.

   // const Navbar = () => {
        //takes useDarkMode, set its to be used as UseEffect hook
        //takes setter setDarkMode & makes the opposite of useDarkMode(opposite of darkMode)
        //     const [darkMode, setDarkMode] = useDarkMode();

        //     const toggleMode = e => {
        //       e.preventDefault();
        //       setDarkMode(!darkMode); //whatever the result was set it the opposite of that
        //darMode = the result of useDarMode used on it.. 
        //     };

        //     return (
        //       <nav className="navbar">
        //         <h1>Crypto Tracker</h1>
        //         <div className="dark-mode__toggle">
        //           <div
        //             onClick={toggleMode}
        //@@@ if darkMode in above setState is something, set it to oppsoite
        //@@@ use 'toggle toggled' class else use 'toggle' class
        //             className={darkMode ? 'toggle toggled' : 'toggle'}
        //           />
        //         </div>
        //       </nav>
        //     );
        //   };