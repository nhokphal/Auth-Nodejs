import React from 'react'
import styled from 'styled-components'


const Container = styled.div
`
margin: 10px;
`;

const Wrapper = styled.div
`
justify-content: start;
display: flex;
flex: 1;
`;
const SideBar = () => {
  return (
    <Container>
    <Wrapper>
    SideBar
    </Wrapper>
    </Container>
  )
}

export default SideBar