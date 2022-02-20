//import { Container } from "postcss";
import React from "react";
import styled from "styled-components";



const SimilarCard = () => {
    return (
        <Container>
            <img  src="/images/pr_henry.jpg" alt="" style={{borderRadius:8,
                height:"300px",width:"200px"
            }} />
            <h3 style={{color:"white"}}>Pr.  Henry</h3>
            <h3 style={{color:"white",fontSize:"15px",color:"gray"}}>Teaches the  Gospel</h3>
        </Container>
    )
}


const Container = styled.div`
    /*  */
    position: relative;
    margin-right: 10px;
    & >h3{
        margin-top: 5px;
    }
`;

export default SimilarCard;