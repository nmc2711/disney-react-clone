import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Disney Interactive는 귀하에게 당사의 사이트, 소프트웨어, 애플리케이션,
          콘텐트, 제품 및 서비스(이하 “Disney 서비스”)를 제공하게 되어 기쁘게
          생각하며, 이러한 서비스는 Disney, ABC, ESPN, Marvel, Lucasfilm, Club
          Penguin, Playdom 브랜드 또는 The Walt Disney Company가 소유하거나
          라이선스를 받은 기타 브랜드로 표시될 수 있습니다.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
  height: calc(100vh - 70px);

  position: relative;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.6;
    z-index: -1;
  }
`;

const CTA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 650px;
  width: 60%;
  margin-top: 120px;
  padding: 80px 40px;
`;

const CTALogoOne = styled.img``;
const CTALogoTwo = styled.img`
  width: 90%;
`;
const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  font-size: 18px;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.div`
  margin-bottom: 20px;
  font-size: 11px;
  letter-spacing: 1.5px;
  line-height: 1.5;
  text-align: justify;
`;
