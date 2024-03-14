import ListItems from "./ListItems.jsx";
import styled from "styled-components";
import {useContext} from "react";
import {ThemeContext} from "../header/ThemeContextProvider.jsx";

const StyledUnorderedList=styled.ul`
    padding-left: 0;
    display: ${props=>props.theme.display};
    flex-direction: ${props=>props.theme.flexDirection};
    justify-content: ${props=>props.theme.justifyContent} ;
    list-style: ${props=>props.theme.listStyle};
`;

export default function UnorderedList(){
    const themeContext=useContext(ThemeContext);

    return(
        <StyledUnorderedList theme={themeContext}>
            <ListItems/>
        </StyledUnorderedList>
    );
}