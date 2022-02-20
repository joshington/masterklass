import React from 'react';
import styled from 'styled-components';


const Card = ({text1,text2}) => {
    return (
        <CardHolder>
           <h3 style={{fontSize:30,color:"white"}}>{text1}</h3>
           <h5 style={{fontSize:20,color:"white"}}>{text2}</h5>
        </CardHolder>
    )
}

const CardHolder = styled.div`
    width: 370px;
    line-height: 20px;
    height: 120px;
    background-color: #353839;
    text-align: center;
    color:"white";
    border-radius: 10px;
    
`;



export default Card;