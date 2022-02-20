import React from 'react';
import styled from "styled-components";


const NextLesson = () => {
    return (
        <Container>
           
           
            <div>
                <img  src="/images/pr_henry.jpg" alt="" style={{borderRadius:8,
                    height:"90px",width:"90px"
                }} />
                <div>
                    <h3>Up Next</h3>
                    <h3 id="name">Lutalo Bbosa</h3>
                    <h3 style={{color:"white",color:"gray"}}>Teaches Agri-Business </h3>
                    {/* <h4 style={{color:"gray",fontSize:"12px"}}>
                        Teaching the basics of running an agribusiness enterprise    
                    </h4> */}
                </div>
            </div>
        </Container>
    )
}


const Container =  styled.div`
    //display: flex;
    margin-top: 90px;
    & > div {
        display: flex;
        div{
            margin-left: 10px;
            h3{
                &:hover{
                    text-decoration: underline;
                    cursor: pointer;
                }
                color: white;
                font-size: 12px;
            }
        }
        max-width:370px
    }
    /* & > div{
        flex-direction: row;
        justify-content: space-between; */

        /* h3{
            color: white;
        } */
    /* } */
`;


export default NextLesson;