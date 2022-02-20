import { props } from 'bluebird';
import React from 'react';
import styled, {css} from 'styled-components';




const Button = ({text,onPress}) => {
    return (
        <CustomButton 
            onClick={() => console.log('hi there')}
        >
            <span>{text}</span>
        </CustomButton>
    )
}


const CustomButton = styled.button`
    ${
        props => props.backgroundColor 
        ? css`
            background-color: props.backgroundColor;
        `: '',
        props => props.fontSize  ? css`
            font-size: props.fontSize;
        `: ''
    }
    width:280px;
    height:40px;
    font-weight: bold;
    color: white;
    background-color: #EC2A47;
    border-radius: 10px;
    border-color: #EC2A47;
    margin-top: 20px;

`;

export default Button;