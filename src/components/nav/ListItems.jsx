import {useContext} from "react";
import {NavLink} from "react-router-dom";
import {ThemeContext} from "../header/ThemeContextProvider.jsx";
import styled, {ThemeProvider} from "styled-components";

const StyledListItem = styled.li`
    background-color: ${props => props.theme.backgroundColor};
    border: ${props => props.theme.border};
    padding: ${props => props.theme.padding};
    margin: ${props => props.theme.margin};
`;

const StyledNavLink = styled(NavLink)`
    color: ${props => props.theme.color};
    text-decoration: ${props => props.theme.textDecoration};
`;

export default function ListItems() {
    const themeContext = useContext(ThemeContext);

    const buttons = {"/": "Home", "/sales": "Sales", "/services": "Services"};

    return (
        <>
            <ThemeProvider theme={themeContext}>
                {
                    Object.entries(buttons).map(([key, value]) =>
                        (
                            <StyledListItem key={key}>
                                <StyledNavLink to={key}>
                                    {value}
                                </StyledNavLink>
                            </StyledListItem>
                        )
                    )
                }
            </ThemeProvider>
        </>
    );
}
