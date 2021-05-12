import React from 'react'
import styled from "styled-components";

function Detail() {
    return (
        <Container>
            <Background>
                <img src="/images/slam-r.png" />
            </Background>
            <ImageTitle>
                <h1>SLAM DUNK</h1>
            </ImageTitle>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
   
    h1 {
        font-size: 4vw;
        letter-spacing: -2.8px;
    }
`