import styled from 'styled-components';


const Rightside = (props) => {
    return (
        <Container>
            <img  src="/images/masterclass_image.jpeg" alt="" style={{borderRadius:10,height:"80%"}} />
        </Container>
    )
}

const Container = styled.div`
    grid-area: rightside;
`;

export default Rightside;