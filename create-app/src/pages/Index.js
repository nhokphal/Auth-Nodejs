import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

const Container = styled.div
`
`;

const Wrapper = styled.div
`
flex: 1;
`;


const Index = () => {
  return (
    <Container>
        <Wrapper>

        <NavBar/>   
        <SideBar/>
         </Wrapper>
            
    </Container>
  )
}

export default Index