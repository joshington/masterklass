// import { white } from 'jest-matcher-utils/node_modules/chalk';
import React from 'react'
import styled from 'styled-components';
import Button from './Button';
import Input from './Input';


const Leftside = (props) => {
    return (
        <Container>
            <TextHeader>
                <h1>THEY CHANGED THE WORLD</h1>
            </TextHeader>
            <TextHeader primary>
                <h1>NOW YOU</h1>
            </TextHeader>
            <TextHeader>
                Learn from the most inspiring  artists, leaders, and icons in the world.
            </TextHeader>
            <Input />
            <Button text="SIGN UP" />
            <SmallText>
                <span>Starting at <strong style={{color:"red"}}>UGX.50,000/month</strong> (billed annually)</span>
            </SmallText>
            
        </Container>
    )
}

const Container = styled.div`
    grid-area: leftside;
    align-items: center;
    justify-content: center;
    margin: 50px;
`;

const TextHeader = styled.div`
    /* justify-content: center; */
    word-wrap: break-word;
    word-break: break-word;
    color: ${props => props.primary ? "red":"white"};
`
const SmallText = styled.div`
    color:white;
    margin-top: 10px;
`;

export default Leftside;