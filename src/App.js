import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import styled from 'styled-components';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import Class from './components/Class';


//Routes is replacing the Switch
function  App(){
  return (
    <div className="App">
      <Container>
          <Header />
          {/* <Home /> */}
          <Class />
        
          
        </Container>
    </div>
  )
}

const Container = styled.div`
  display: flex;
  height:97vh;
  /* background: linear-gradient(to bottom right,white 0%, #e6e4ff 70%); */
  border-radius: 2rem;
  @media screen and (min-width:320px) and (max-with:1080px){
    flex-direction: column;
  }
`;



export default App;
