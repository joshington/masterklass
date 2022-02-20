import React from "react";
import styled from 'styled-components';
import Button from './Button';
import VideoSection from "./VideoSection/VideoSection";
import SimilarClasses from "./SimilarClasses/SimilarClasses";

const Heading = ({text,big=false}) => {
    return (
        <ContainerText big={big}>
            {text}
        </ContainerText>
    )
}

const ContainerText = styled.div`
    color:white;
    font-weight: bold;
    text-align: center;
    font-size:${props => props.big ? '30px':'15px'};//trying to play around with the props in css.
    padding-bottom:10px;
    max-width: 300px;
    padding-left: 500px;
    padding-top: 20px;
`;

const ButtonContainer = styled.div`
    padding-left:500px;
    padding-bottom: 20px;
`;

const SpanContainer = styled.div`
    padding-left:500px ;
    & > span {
        padding-right: 50px;
        font-size:20px;
        width:120px;
    }
`;

const ColoredLine = () => {
    return (
        <div>
            <hr style={{width:"100px"}} />
        </div>
    )
}

const  Class = () => {
    return (
        <Container>
            <img  src="/images/class_descr.jpeg" alt="" style={{borderRadius:10,
                height:"100%",justifyContent:"center",marginTop:'10px'
            }} />
            <Heading text="LAURA KIM & FERNANDO GARCIA" big={true} />
            <Heading text="Teach Creative Collaboration and Fashion" big={false} />

            <ButtonContainer>
                <Button text="GET STARTED" />
                <h3 style={{color:"gray"}}>Starting at $15/month(billed annually)</h3>
            </ButtonContainer>
            <SpanContainer>
                <span style={{color:"white"}}>Class Info</span>
                <span style={{color:"gray"}}>Related</span>
                <span style={{color:"gray"}}>FAQ</span>
            </SpanContainer>
            <VideoSection />
            <SimilarClasses />
            {/* <SimilarClasses /> */}
            
        
            
        </Container>
    )
}

const Container = styled.div`


`;


export default Class;