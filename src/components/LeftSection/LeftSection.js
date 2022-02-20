import React from 'react';
import styled from "styled-components";
import AdjustHeader from './AdjustHeader/AdjustHeader';

//want to make an adjustable header so that i dont repeat miself always.

const AdjustHeader = ({text1,text2,big=false,textColor}) => {
    return (
        <TextContainer textColor={textColor} big={big}>
            <span>{text1}</span>
            <span>{text2}</span>
        </TextContainer>
    )   
}

const TextContainer = styled.div`
    color:${props => props.textColor ? props.textColor : "black"}
    ${
        ({big}) => big && `
            font-size:80px;
        `; 
    }
`;

const TextContainer = styled.div`
    justify-content:center;
    align-items:center;
`;

const LeftSection = () => {
    return (
        <Container>
            
        </Container>
    )
}

const Container = styled.div`
    grid-area: leftside;

`;

export default LeftSection;