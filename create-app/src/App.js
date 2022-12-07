import logo from './logo.svg';
import './App.css';
import Index from './pages/Index';
import styled from 'styled-components';
import { Route, Routes, Link } from 'react-router-dom';


const Container = styled.div
`
margin: 10px;
`;

const Wrapper = styled.div
`
justify-content: space-between; 
display: flex;
flex: 1;
`;

function App() {
  return (
    <Container className="App">
    
    <Index/>

    
    </Container>
  );
}

export default App;
