import React from 'react'
import styled from "styled-components";

function Movies() {
    return (
        <Container>
            <h4>당신을 위한 추천 명작</h4>
            <Content>
              <Wrap>
                <img src="/images/slam-r.png"/>
              </Wrap>
              <Wrap>
                <img src="/images/gi-r.jpeg"/>
              </Wrap>
              <Wrap>
                <img src="/images/ppo-r.jpeg"/>
              </Wrap>
              <Wrap>
                <img src="/images/simson-r.jpeg"/>
              </Wrap>
              <Wrap>
                <img src="/images/da-r.jpeg"/>
              </Wrap>
              <Wrap>
                <img src="/images/di-r.jpeg"/>
              </Wrap>
              <Wrap>
                <img src="/images/poket-r.jpeg"/>
              </Wrap>
              <Wrap>
                <img src="/images/slayer-r.jpeg"/>
              </Wrap>
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div `
    
`
const Content = styled.div `
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4 ,minmax(0,1fr));

`
const Wrap = styled.div `
    border-radius: 10px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px, rgba(0 0 0 / 73%) 0px 16px 10px -10px;
    overflow: hidden;
    transition: all 0.2s;
    cursor: pointer;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &:hover {
        transform: scale(1.05);
        border-color:rgba(249, 249, 249, 0.8);
        box-shadow: rgba(0 0 0 / 80%) 0px 40px 58px -16px, rgba(0 0 0 / 72%) 0px 30px 22px -10px;
    }
`