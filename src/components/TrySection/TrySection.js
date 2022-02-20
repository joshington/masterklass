import { Container } from "postcss";
import React from "react"
import styled from 'styled-components';


const TrySection = () => {
    return(
        <Container>

        </Container>
    )
}

const Container = styled.section`
    display: grid;
    grid-template-areas: "leftside rightside";
    column-gap:25px;
    row-gap: 25px;
    margin:25px 0;
`;

export default TrySection;