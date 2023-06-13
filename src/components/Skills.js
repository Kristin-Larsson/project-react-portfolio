import React from 'react-dom'
import { Title, Section, WrapperRow, SecondTitleLeft, MainText } from '../styles/Main'
import { List } from '../styles/Skills'

const Skills = () => {
  return (
    <Section>
      <Title>Skills</Title>
      <WrapperRow>
        <List>
          <SecondTitleLeft>Code</SecondTitleLeft>
          <MainText>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>HTML</li>
            <li>CSS</li>
          </MainText>
        </List>
        <List>
          <SecondTitleLeft>Code</SecondTitleLeft>
          <MainText>
            <li>Github</li>
            <li>MongoDB</li>
            <li>Node.js</li>
            <li>Postman</li>
            <li>Styled components</li>
          </MainText>
        </List>
        <List>
          <SecondTitleLeft>Other</SecondTitleLeft>
          <MainText>
            <li>Figma</li>
            <li>Slack</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
          </MainText>
        </List>
      </WrapperRow>
    </Section>
  );
}

export default Skills;