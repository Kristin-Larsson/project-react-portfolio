import React from 'react'
import HeaderImg from '../images/headerimg.jpg'
import ProfileImg from '../images/kristin.png'
import { Background, ProfileImage, HeaderText, Name, Frontend, Designer, IconsWrapper } from '../styles/Header'
import { LinkedinIcon, GithubIcon } from '../styles/Main'
import Github from '../icons/github.png'
import Linkedin from '../icons/linkedin.png'

const Header = () => {
  return (
    <Background>
      <img className="header-image" src={HeaderImg} alt="background with faded shapes" />
      <ProfileImage src={ProfileImg} alt="profile" />
      <IconsWrapper>
        <a href="https://github.com/Kristin-Larsson"><GithubIcon src={Github} alt="Github" /></a>
        <a href="https://www.linkedin.com/in/kristin-larsson/"><LinkedinIcon src={Linkedin} alt="Linkedin" /></a>
      </IconsWrapper>
      <HeaderText>
        <Name>PROTFOLIO:</Name>
        <Name>KRISTIN LARSSON</Name>
        <Frontend>UX-designer</Frontend>
        <Designer>+ codeing skills</Designer>
      </HeaderText>
    </Background>
  );
}

export default Header;