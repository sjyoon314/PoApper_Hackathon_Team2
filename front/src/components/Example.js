import React from 'react';
import styled from 'styled-components';

function Example(){

    const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    `
    const Box = styled.div`
    backgroundColor: lightgrey;

    `

    const Title = styled.div`
    fontSize: '24px';
    `

    const Body = styled.div`
    fontSize: '12px';
    `
    return(
        <Container>
            <Box>
                <Title>Title1</Title>
                <Body>This section is for introducing the proejct ...</Body>
            </Box>
            <Box>
                <Title>Title2</Title>
                <Body>This section is for introducing the proejct ...</Body>
            </Box>
            <Box>
                <Title>Title3</Title>
                <Body>This section is for introducing the proejct ...</Body>
            </Box>
            <Box>
                <Title>Title4</Title>
                <Body>This section is for introducing the proejct ...</Body>
            </Box>
        </Container>
    )
}

export default Example();







