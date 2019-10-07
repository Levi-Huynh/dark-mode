import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage"

export default function useDarkMode() {
    // Using localStorage so we can save whether the user wanted dark mode or no
    const [dark, setDark] = useLocalStorage("darkmode");
    console.log("const dark in useDarkMode1:", dark);
    // useEffect! Anytime dark mode is updated, we look at it and update the body's class
    useEffect(() => {
        const body = document.querySelector("body");
        //If dark (state on useLocalStorage) is null remove
        //if dark is true, add "dark-mode" to classlist
        if (dark) {
            body.classList.add("dark-mode")
        } else {
            body.classList.remove("dark-mode")
        }
    }, [dark])

    console.log("const dark in useDarkMode:", dark);
    // return the two variables for hook usage
    //AS SOON AS NAV IS TOGGLED, WHATEVER THE RESULT OF USEDARKMODE
    //IS CURRENTLY DARK=NULL TURNS INTO THE OPPOSITE. OPP OF NULL=TRUE!
    return [dark, setDark];
}