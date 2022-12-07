import React from 'react'
import styled from 'styled-components';

const Container = styled.div
`
`;

const Wrapper = styled.div
`
justify-content: space-between;
display: flex;
gap: 20px;
flex: 1;
`;

const Text = styled.p
`
margin: 10px;
`;

const NavBar = () => {
  return (
    <Container>
    <Wrapper>

       <Text>
        project
       </Text>
        <Text>
        program
        </Text>
        <Text>
        language
        </Text>
    </Wrapper>
    </Container>
  )
}

export default NavBar