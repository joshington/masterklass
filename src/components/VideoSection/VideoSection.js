import React from "react";
import styled from "styled-components";
import LeftVideo from "../LeftVideo/LeftVideo";
//import Rightside from "../Rightside";
import RightSide from "../RightSide/RightSide";


const VideoSection = () => {
    return (
        <VideoSectionContainer>
            <LeftVideo />
            <RightSide />
        </VideoSectionContainer>
    )
}

const VideoSectionContainer = styled.section`
    display: grid;
    grid-template-areas: "leftside rightside";
    grid-template-columns: minimax(90px, 10px) minimax(100px,12px);
    column-gap:25px;
    row-gap: 25px;
    margin:25px 0;
    
`;
export default VideoSection;