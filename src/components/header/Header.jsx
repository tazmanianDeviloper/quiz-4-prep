import {useContext} from "react";
import ThemeToggle from "./ThemeToggle.jsx";
import {ThemeContext} from "./ThemeContextProvider.jsx";

export default function Header() {
    const themeContext = useContext(ThemeContext);

    return (
        <header>
            <h1>Quiz-4-Preparation</h1>
            <p><strong>A small project showcasing how Context works.</strong></p>
            <ThemeToggle toggleTheme={themeContext.toggleTheme} />
        </header>
    );
}
