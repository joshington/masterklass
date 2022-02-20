import React from 'react';
import styled from 'styled-components';
import { AiOutlineArrowRight } from "react-icons/ai";

const ButtonDisabled = ({text,checked=false}) => {
    return (
        <>
            <Container checked={checked}>
                <div>
                    <AiOutlineArrowRight />
                    <span>{text}</span>
                </div>
            </Container>
        </>
    )
}

const Container = styled.div`
    cursor:not-allowed;
    background-color: silver;
    align-self:center;
    width:300px;
    height:50px;
    margin-top:100px;
    margin-bottom: 60px;
    border-radius: 10px;
    justify-content:center;
    & > div{
        color:${props  => props.textColor ? props.textColor : "black" };
        text-align:center;
        font-weight: 400;
        font-size: 20px;
        align-items: center;
        flex-direction:row;
        justify-content:space-between;
        margin-top:50px;
        padding:10px;


    }
    ${
        ({checked}) => checked && `
            background-color:white;
            cursor:pointer
        `
    }
`;


export default ButtonDisabled;