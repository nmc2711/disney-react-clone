import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img src="/images/bg-slam.jpeg" />
      </Background>
      <ImageTitle>
        <h1>SLAM DUNK</h1>
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>
        주간 소년 점프에 연재되었던 이노우에 다케히코의 농구 만화. 1990년 주간
        소년점프 42호로 연재 시작, 1996년 27호로 연재가 종료되었다.
      </SubTitle>
      <Description>
        본 만화에서는 올바른 사상이나 교화는 강요되지 않지만, 감독과
        스포츠맨으로서 지향하는 기본적인 자세는 다루고 있다. 먼저 포기하는
        순간이 끝이다라는 점은 감독과 선수를 포함해 작중 내내 중요한 사상으로
        등장하고 있다. 여기에 완전체로 묘사된 안선생님을 보면 선수의 개성과
        성격은 존중해주되 잘못된 이탈은 손수 경계하고 처벌을 내리며 ...
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;
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
`;

const ImageTitle = styled.div`
  min-width: 200px;
  width: 42vw;
  min-height: 170px;
  height: 30vh;
  margin-top: 60px;
  h1 {
    font-size: 7.5vw;
    letter-spacing: -2.8px;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  display: flex;
  align-items: center;
  height: 56px;
  margin-right: 22px;
  padding: 0 24px;
  background-color: rgb(249, 249, 249);
  border: none;
  border-radius: 4px;
  font-size: 15px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;
const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin-right: 16px;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  span {
    font-size: 30px;
    color: #fff;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;
const SubTitle = styled.div`
  min-height: 20px;
  margin-top: 20px;
  color: rgb(249, 249, 249);
  font-size: 15px;
`;
const Description = styled.div`
  max-width: 60vw;
  margin-top: 16px;
  line-height: 1.4;
  font-size: 20px;
  text-align: justify;
`;
