import React from "react";
import styled from "styled-components";


const CheckboxCard = ({category}) => {
    return (
        <Container>
            <h3>{category}</h3>            
        </Container>
    )
}

const Container = styled.div`
    border-color: white;
    cursor:pointer;
    margin:20px;
    border-width: 5px;
    height:80px;
    border-radius:4px;
    width:300px;
    background-color: white;
    & > h3{
        text-align: center;
    }
    
`;

export default CheckboxCard;