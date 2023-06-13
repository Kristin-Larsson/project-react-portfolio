import React from 'react-dom'
import { Line, Dot } from '../styles/Intro'
import { Section, Wrapper, MainText } from '../styles/Main'

const Intro = () => {
  return (
    <Section>
      <Wrapper>
        <MainText> <Line /><Dot />I am a creative team player with a passion for crafting user-friendly solutions and visually captivating designs. 
        Within my portfolio, I exhibit my past projects, demonstrating my coding prowess and the results i have achieved.
        </MainText>
      </Wrapper>
    </Section>
  );
}

export default Intro;