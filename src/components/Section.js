import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";

function Section({
  title,
  description,
  leftButtonText,
  rightButtonText,
  backgroundImage,
  showDownArrow,
}) {
  return (
    <Wrapper bg={backgroundImage}>
      <Fade bottom>
        <HeroText>
          <h1>{title}</h1>
          <p>{description}</p>
        </HeroText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftBtn>{leftButtonText}</LeftBtn>
            {rightButtonText && <RightBtn>{rightButtonText}</RightBtn>}
          </ButtonGroup>
        </Fade>
        {showDownArrow && (
          <DownArrow>
            <img src="/images/down-arrow.png" />
          </DownArrow>
        )}
      </Buttons>
    </Wrapper>
  );
}

export default Section;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-image: ${(props) => `url("/images/${props.bg}")`};
  background-size: cover;
  background-position: center;
  scroll-snap-align: start;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;
  overflow: hidden;
`;
const HeroText = styled.div`
  padding-top: 15vh;
  text-align: center;
  overflow: hidden;

  span {
    text-decoration: underline;
  }
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  /* @media (max-width:800px) {
    display: flex;
    flex-direction: column;
  } */

`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 40px;
  gap: 25px;

  @media (max-width:800px) {
    display: flex;
    flex-direction: column;
  }


`;

const LeftBtn = styled.div`
  cursor: pointer;
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  opacity: 0.85;
  font-size: 1rem;
  font-weight: bold;
`;
const RightBtn = styled(LeftBtn)`
  background-color: white;
  color: #000;
`;

const DownArrow = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  height: 30px;
  animation: bounce infinite 1.5s;
  text-align: center;
  align-items: center;
`;
