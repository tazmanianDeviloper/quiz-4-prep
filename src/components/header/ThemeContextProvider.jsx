import {createContext, useState} from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState(false);

    const toggleTheme = () => {
        setTheme(prevTheme => !prevTheme);
    };

    const themeValues = {

        // These 2 props are sent to nav >> Navigation.jsx >> UnorderedList.jsx >> ListItems.jsx >> StyledListItem.
        backgroundColor: theme ? "" : "darkorange",
        border: theme ? "" : "pink solid 5px",
        padding: theme ? "" : "1%",
        margin: theme ? "" : "1% 5%",

        // These 2 props are sent to nav >> Navigation.jsx >> UnorderedList.jsx >> ListItems.jsx >> StyledNavLink.
        color: theme ? "" : "brown",
        textDecoration: theme ? "" : "none",

        // These 4 props are sent to nav >> Navigation.jsx >> UnorderedList.jsx >> StyledUnorderedList.
        display: theme ? "" : "flex",
        flexDirection: theme ? "" : "row",
        justifyContent: theme ? "" : "space-evenly",
        listStyle: theme ? "" : "none",

        // These 4 props are sent to nav >> Navigation.jsx >> StyledNav.
        navBackgroundColor: theme ? "" : "chocolate",
        width: theme ? "" : "30vw",
        navMargin: theme ? "" : "auto",
        navHeight: theme ? "" : "10%",

        // This prop is sent to header >> Header.jsx >> ThemeToggle.jsx >> <button onClick={props.toggleTheme}>
        toggleTheme: toggleTheme,
    };

    return (
        <ThemeContext.Provider value={themeValues}>
            {children}
        </ThemeContext.Provider>
    );
}

ThemeContextProvider.propTypes = {
    children: PropTypes.node
};
