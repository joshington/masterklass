import React from "react";
import styled from 'styled-components';




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

export default AdjustHeader;