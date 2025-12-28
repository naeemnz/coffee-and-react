import { createContext, useContext } from "react";
//pehle hum ye context khali de rahe the lekin is dafa hum default value denge 
//is k ander ek object he jisme hum ek variable aur sath me do methods pass karrhe hain
//pehle humne jo const [user,setUser] = .... use kiya the pichle wale project men wo bhi yehi kam karrha tha ek varibale tha aur dosra method tha

//context jub pehli bar bane to hume already us men values milen, is men ek obj ho aur men hamare pas already ek theme ki value ho y phir set ho, yani naho to bhi kuch ho khali na rahe
export const ThemeContext = createContext({
    themeMode: 'light',
    darkTheme: () => {},
    lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
}