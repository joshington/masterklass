import React from "react";
import styled from "styled-components";
import { VscDebugStart} from 'react-icons/vsc';





const CardComponent = ({content}) => {
    return (
        <Container>
            <div>
                <Icon>
                    <VscDebugStart />
                </Icon>
                <h3>{content}</h3>
            </div>
        </Container>
    )
}

const Icon = styled.div`
    height:1.7rem;
    width: 1.7rem;
    background-color: red;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:3rem ;
    //border-top-left-radius:0.5rem;
    //border-bottom-left-radius: 0.5rem;
    svg{
        color:#555555;
    }
`;

const Container  = styled.div`
    width: 300px;
    height:50px;
    background-color:gray;
    //text-align: left;
    border-radius: 10px;
    justify-content: center;
    color: white;
    font-size: 15px;
    margin-bottom: 7px;
    margin-right: 100px;
    & > div {
        display: flex;
        flex-direction:row;
        align-items: center;
        margin-left: 10px;
        /* justify-content: space-between; */
        
        h3{
            text-align: left;
            align-self: center;
            justify-self: center;
            margin-top: 10px;
            padding-top:10px;
            padding-left: 10px;
        }
    }
    
    &:hover {
        background-color: transparent;
        cursor: pointer;
    }
`;

export default CardComponent;