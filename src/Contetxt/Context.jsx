import { createContext , useState } from "react";

export const ThemeContext = createContext();


const ContextProvider  = (props) => {
    const [MyTheme ,setMyTheme] = useState(false);
const ChangeTheme = () => {
    setMyTheme((OldState)=> !OldState)
};

return(
    <ThemeContext.Provider value = {{MyTheme ,ChangeTheme }}>
        {props.children}
    </ThemeContext.Provider>
)
};


export default ContextProvider;