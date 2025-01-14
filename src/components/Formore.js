import React from 'react-dom'
import { Title, Section } from '../styles/Main'
import { IconsWrapper, Icon } from '../styles/ForMore'
import Github from '../icons/github.png'
import Linkedin from '../icons/linkedin.png'

const Formore = () => {
  return (
    <Section>
      <IconsWrapper>
        <a href="https://github.com/Kristin-Larsson"><Icon src={Github} alt="Github" /></a>
        <a href="https://www.linkedin.com/in/kristin-larsson/"><Icon src={Linkedin} alt="Linkedin" /></a>
      </IconsWrapper>
    </Section>
  );
}

export default Formore;