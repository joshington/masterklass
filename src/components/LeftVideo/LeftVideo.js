//import { Container } from "postcss";
import React from "react";
import styled from 'styled-components';

const TextValue = ({text1, text2}) => {
    return (
        <TextContainer>
            <h4 style={{color:"gray"}}>{text1}:</h4>
            <h3 style={{color:"white"}}>{text2}</h3>
        </TextContainer>
    )
}

const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    /* & > h4{
        color:"gray"
    } */

`;

const LeftVideo = () => {
    return (
        <Container>
            <h2 style={{color:"white"}}>About this class</h2>
            <img  src="/images/class_descr.jpeg" alt="" style={{borderRadius:10,
                height:"50%",width:"80%"
            }} />
            <h4 style={{color:"gray",marginBottom:"10px"}}>As founders of fashion line MONSE and creative directors at Oscar de la Renta, Laura Kim and Fernando Garcia have transcended their industry with a partnership that’s more than the sum of its parts. Now they’re teaching you their secrets to creative collaboration. Learn to cultivate strong business relationships, 
                navigate the creative process, and join forces with others to improve the workplace—and the work.
            </h4>
            <TextValue text1="Instructors" text2="Laura Kim & Fernando Garcia" />
            <TextValue text1="Class Length" text2="13 video lessons (1 hrs 57 min)" />
            <TextValue text1="Category" text2=" Design & Style" />
        </Container>
    )
}

const Container = styled.div`
    //margin-left: 30px;
    grid-area: leftside;
    cursor: pointer;
    & > h2 {
        color: white;
        font-weight: bold;
        font-size: 30px;
    }
    & > h4 {
        width: 800px;
        word-spacing: 2px;
        font-size: 14px;
        /* line-height: 18px; */
    }
 
`;

export default LeftVideo;