//import { Container } from "postcss";
import React from "react";
import styled from "styled-components";
import SimilarCard from "../SimilarCard/SimilarCard";

const SimilarClasses = () => {
    return (
        <Container>
            {/* <h3>Other Classes in this Category</h3> */}
            
            <SimilarCard />
            <SimilarCard />
            <SimilarCard />
        </Container>
    )
}

const Container = styled.div`
    margin-top: 60px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: row;
    & > h3{
        color: white;
        font-size: 25px;
        font-weight: bold;
        text-align: center;
    }
`;
export default SimilarClasses;