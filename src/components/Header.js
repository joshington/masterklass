import styled from 'styled-components';


const Header = (props) => {
    return (
        <Container>
            <Content>
                <Logo>
                    <img  src="/images/master.svg" alt="" />
                </Logo>
                <Nav>
                    <NavListWrap>
                        <NavList>
                            <a>
                                <span>All Categories</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a>
                                <span>Search</span>
                            </a>
                            {/* <Search>
                                <div>
                                    <h3>Search</h3>
                                </div>
                                <SearchIcon>
                                    <img src="/images/search-icon.svg" alt="" />
                                </SearchIcon>
                            </Search> */}
                        </NavList>
                        <NavList>
                            <a>
                                <span>View Plans</span> 
                            </a>
                        </NavList>
                        <NavList>
                            <a>
                                <span>LOGIN</span> 
                            </a>
                        </NavList>
                       
                        {/* <NavList>
                            <a>
                                <span>Search</span>
                            </a>
                        </NavList> */}
                    </NavListWrap>
                </Nav>
            </Content>
        </Container>
    )
}

export default Header;


const Container = styled.div`
    background-color: black;
    border-bottom: 1px solid rgba(0,0,0,0.08);
    left:0;
    padding: 0 24px;
    position: fixed;
    top:0;
    width:100vw;
    z-index:100;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-height: 100%;
    max-width:1128px;
`;

const Logo= styled.span`
    margin-right: 0px;
    
`;

const Nav = styled.nav`
    margin-left: auto;
    display: block;
    @media (max-width:768px){
        position: fixed;
        left:0;
        bottom: 0px;
        background: black;
        width:100%;
    }
`;

const NavListWrap = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    list-style-type: none;
    justify-content: space-between;
`;

const NavList = styled.li`
    display: flex;
    align-items: center;
    a{
        align-items: center;
        /* background: transparent; */
        display: flex;
        flex-direction: column;
        font-size:15px;
        font-weight: 800;
        justify-content: center;
        line-height: 1.5;
        min-height: 52px;
        min-width:80px;
        position: relative;
        text-decoration: none;
        span{
            color: white;
            display:flex;
            align-items: center;
        }
        @media (max-width: 768px){
            min-width: 70px;

        }
    }
    &:hover{
        a{
            span{
                //color:rgba(245, 40, 145, 0.04)
                color:gray
            };
            cursor: pointer;
        }
    }
`

const Search =styled.div`
    opacity:1;
    flex-grow: 1;
    position: relative;
    & > div {
        max-width: 280px;
        h3{
            border: none;
            color:white;
            font-weight: bold;
            
        }
    }
`;

const SearchIcon = styled.div`
    width: 40px;
    position: absolute;
    z-index: 1;
    top: 10px;
    left: 2px;
    border-radius: 0 2px 2px 0;
    margin: 0;
    pointer-events:none;
    display:flex;
    justify-content: center;
    align-items: center;
    color: white;
`;