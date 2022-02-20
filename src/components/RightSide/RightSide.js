import React from "react";
import styled from "styled-components";
import CardComponent from "../CardComponent/CardComponent";
import NextLesson from "../NextLesson/NextLesson";

const RightSide = () => {
    return (
        <Container>
            {/* <h3 style={{color:"white"}}>Class Details</h3> */}
            <CardComponent content="Class Trailer" />
            <CardComponent content="Class Sample" />
            <h4 style={{color:"white"}}>Browse Lesson Plan</h4>
            <NextLesson />
        </Container>
    )
}

const Container = styled.div`
    grid-area: rightside;
    width: 500px;
    margin-top: 80px;
    margin-right: 10px;
`;

export default RightSide;