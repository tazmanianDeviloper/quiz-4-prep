import UnorderedList from "./UnorderedList.jsx";
import {useContext} from "react";
import styled from "styled-components";
import {ThemeContext} from "../header/ThemeContextProvider.jsx";

const StyledNav=styled.nav`
    background-color: ${props=>props.theme.navBackgroundColor};
    width: ${props=>props.theme.width};
    margin: ${props=>props.theme.navMargin};
    height: ${props=>props.theme.navHeight};
`;
export default function Navigation() {
    const themeContext = useContext(ThemeContext);

    return (
        <StyledNav theme={themeContext}>
            <UnorderedList />
        </StyledNav>
    );
}
