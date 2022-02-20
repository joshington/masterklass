import styled from 'styled-components';
import Card from './Card';
import Leftside from './Leftside';
import Rightside from './Rightside';
import LogoCard from './LogoCard'
import CheckboxCard from './CheckboxCard/CheckboxCard';
import ButtonDisabled from './ButtonDisabled/ButtonDisabled';

const Home = (props) => {
    return (
        <Container>
            <Layout>
                <Leftside />
                <Rightside />
            </Layout>
            <LogoHolder>
                <div>
                    <img src="/images/espn_logo.svg" alt="" />
                </div>
                <div>
                    <img src="/images/billboard.svg" alt="" />
                </div>
                <div>
                    <img src="/images/new_york_times.svg" alt="" />
                </div>
                
            </LogoHolder>
            <BigHeader>
                <span>
                    Unlimited access to 150+ instructors. New classes added every month.
                </span>
            </BigHeader>
            <ImageHolder>
                <img src="/images/alla_actors.jpeg" alt="" />
            </ImageHolder>
            <CardHolder>
                <Card text1="150+ classes" text2="From the world's best" />
                <Card text1="20 lessons" text2="Average per class" />
                <Card text1="10 minutes" text2="Average per lesson" />                
            </CardHolder>
            <AdjHeader fontSize="29px" fontWeight="bold">
                <span>Explore our library of classes.</span>
            </AdjHeader>
            <AdjHeader fontSize="18px" color="gray">
                <span>Choose categories that interest you to learn more.</span>
            </AdjHeader>
            <CardContainer>
                <CheckboxCard category="Food" />
                <CheckboxCard category="Writing" />
                <CheckboxCard category="Business" />
                <CheckboxCard category="Acting" />
                <CheckboxCard category="Education" />
                <CheckboxCard category="Technology" />
                {/* <CheckboxCard category="Acting" />
                <CheckboxCard category="Business" />
                <CheckboxCard category="Acting" />  */}
            </CardContainer>
            <ButtonDisabledContainer>
                <ButtonDisabled  text="NEXT" />
            </ButtonDisabledContainer>
            <hr style={{color:"gray",height:0.1,borderColor:'gray'}} />
            <div>
                <span>Hello how are you</span>
            </div>
            
            {/* <CardContainer>
                <LogoCard 
                    cardText="Food"
                    customIcon={
                        <img src="/images/icons_svg/food.png" alt="" 
                            style={{
                                // height:"40px",
                                // width:"40px",
                                // color: "white",
                                
                            
                            }} 
                        />
                    }
                />
            </CardContainer> */}
        </Container>
    )
}

const ButtonDisabledContainer = styled.div`
    align-content: center;
    padding-left:500px;
    padding-bottom:2px;
`;
//extra header component=====
const CardContainer = styled.section`
    margin-top: 40px;
    margin-left:70px;
    margin-right: 80px;
    /* height:40%; */
    //align-items: center;
    align-content: center;
    justify-content: space-around;
    flex-wrap: wrap;
    display: flex;
    align-self: center;
    flex-direction: row;
    /* justify-content: space-between; */
`

const AdjHeader =styled.div`
    text-align:center;
    font-size:${props => props.fontSize ? props.fontSize : "10px"};
    font-weight: ${props => props.fontWeight ? props.fontWeight : ""};
    margin-top:60px;
    color:${props => props.color ? props.color : "white"}; 
   
`;

const Container = styled.div`
    padding-top: 82px;
    max-width: 100%;
`;

const Layout = styled.div`
    display:grid;
    grid-template-areas: "leftside rightside";
    grid-template-columns: minimax(0,50%) minimax(100px, 80%);
    column-gap: 50px;
    row-gap:60px;
    @media(max-width:768px){
        display:flex;
        flex-direction: column;
    }
`;

const LogoHolder = styled.div`
    display:flex;
    justify-content: space-between;
    padding-top: 0px;
    align-items: center;
    margin-left: 100px;
    margin-right: 100px;
`;

const BigHeader = styled.div`
    font-size: 28px;
    font-weight: bold;
    margin-top: 30px;
    color:white;
    text-align:center;
`;

const ImageHolder = styled.div`
    /* justify-content: center; */
    justify-content: center;
    margin-left:50px;
    img{
        width:90%;
        height: 60%;
        align-self: center;
    }
`;

const CardHolder = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-left: 30px;
`;

export default Home